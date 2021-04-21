/** ANGULAR */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** ANGULAR MATERIAL */
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';

/** FIELDS */
import { MiaBaseFieldComponent } from './fields/base-field.component';
import { StringFieldComponent } from './fields/string-field/string-field.component';
import { DateFieldComponent } from './fields/date-field/date-field.component';
import { DateRangeFieldComponent } from './fields/date-range-field/date-range-field.component';
import { CheckboxFieldComponent } from './fields/checkbox-field/checkbox-field.component';
import { SelectFieldComponent } from './fields/select-field/select-field.component';
import { TextFieldComponent } from './fields/text-field/text-field.component';
import { HtmlFieldComponent } from './fields/html-field/html-field.component';
import { FilesFieldComponent } from './fields/files-field/files-field.component';
import { ImagesFieldComponent } from './fields/images-field/images-field.component';
import { ListStringFieldComponent } from './fields/list-string-field/list-string-field.component';

/** COMPONENTS */
import { MiaFormComponent } from './components/mia-form/mia-form.component';
import { MiaPrintFieldsComponent } from './components/mia-print-fields/mia-print-fields.component';
import { MiaFormModalComponent } from './modals/mia-form-modal/mia-form-modal.component';
import { ListServiceFieldComponent } from './fields/list-service-field/list-service-field.component';
import { AutocompleteServiceFieldComponent } from './fields/autocomplete-service-field/autocomplete-service-field.component';
import { AutocompleteFieldComponent } from './fields/autocomplete-field/autocomplete-field.component';
import { SelectServiceFieldComponent } from './fields/select-service-field/select-service-field.component';



@NgModule({
  declarations: [
    MiaFormComponent,
    /** FIELDS */
    MiaBaseFieldComponent,
    StringFieldComponent,
    DateFieldComponent,
    DateRangeFieldComponent,
    CheckboxFieldComponent,
    SelectFieldComponent,
    TextFieldComponent,
    HtmlFieldComponent,
    FilesFieldComponent,
    ImagesFieldComponent,
    ListStringFieldComponent,
    MiaPrintFieldsComponent,
    MiaFormModalComponent,
    ListServiceFieldComponent,
    AutocompleteServiceFieldComponent,
    AutocompleteFieldComponent,
    SelectServiceFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    /** MATERIAL */
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDatepickerModule
  ],
  exports: [
    MiaFormComponent,
    MiaFormModalComponent
  ],
  entryComponents: [
    MiaFormModalComponent
  ]
})
export class MiaFormModule { }
