import { MiaBaseFieldComponent, MiaField } from '@agencycoda/mia-form';
import { Component, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { NgxGpAutocompleteDirective } from '@angular-magic/ngx-gp-autocomplete';

@Component({
  selector: 'mia-google-places-field',
  templateUrl: './google-places-field.component.html',
  styleUrls: ['./google-places-field.component.css']
})
export class GooglePlacesFieldComponent extends MiaBaseFieldComponent {

  @ViewChild('ngxPlaces') placesRef!: NgxGpAutocompleteDirective;

  inputMaps: UntypedFormControl = new UntypedFormControl();
  inputLatitude!: UntypedFormControl;
  inputLongitude!: UntypedFormControl;

  constructor() {
    super();
  }

  handleAddressChange(place: google.maps.places.PlaceResult) {
    this.input.setValue(place.name);

    if (place.geometry && place.geometry.location) {
        this.inputLatitude.setValue(place.geometry.location.lat());
        this.inputLongitude.setValue(place.geometry.location.lng());
    }
}

  createFormControl() {
    // Create Control
    this.input = new UntypedFormControl();
    // Config validators
    if(this.field.validators != undefined && this.field.validators.length > 0){
        this.input.setValidators(this.field.validators);
    }
    // If include default value
    if(this.field.extra && this.field.extra.default_value){
      this.input.setValue(this.field.extra.default_value);
    }
    // Add in Group
    this.group.addControl(this.field.key, this.input);

    this.inputLatitude = new UntypedFormControl({ value: '', disabled: true});
    this.group.addControl(this.field.extra.key_latitude, this.inputLatitude);

    this.inputLongitude = new UntypedFormControl({ value: '', disabled: true});
    this.group.addControl(this.field.extra.key_longitude, this.inputLongitude);
}

  static updateValuesByItem(group: UntypedFormGroup, item: any, field: MiaField) {
    group.get(field.key)?.setValue(item[field.key]);
    group.get(field.extra.key_latitude)?.setValue(item[field.extra.key_latitude]);
    group.get(field.extra.key_longitude)?.setValue(item[field.extra.key_longitude]);
  }

  static updateItemByFormField(group: UntypedFormGroup, item: any, field: MiaField) {
    item[field.key] = group.get(field.key)?.value;
    item[field.extra.key_latitude] = group.get(field.extra.key_latitude)?.value;
    item[field.extra.key_longitude] = group.get(field.extra.key_longitude)?.value;
  }
}
