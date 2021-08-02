/** ANGULAR */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** AGENCY CODA */
import { MiaCoreModule } from '@agencycoda/mia-core';

/** ANGULAR MATERIAL */
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';

/** EXTERNAL LIBRARIES */
import { QuillModule } from 'ngx-quill';

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
import { ListServiceFieldComponent } from './fields/list-service-field/list-service-field.component';
import { AutocompleteServiceFieldComponent } from './fields/autocomplete-service-field/autocomplete-service-field.component';
import { AutocompleteFieldComponent } from './fields/autocomplete-field/autocomplete-field.component';
import { SelectServiceFieldComponent } from './fields/select-service-field/select-service-field.component';
import { PhotoFieldComponent } from './fields/photo-field/photo-field.component';
import { AvatarListServiceFieldComponent } from './fields/avatar-list-service-field/avatar-list-service-field.component';
import { ChipsAndSelectFieldComponent } from './fields/chips-and-select-field/chips-and-select-field.component';
import { StringWithColorFieldComponent } from './fields/string-with-color-field/string-with-color-field.component';
import { RowFieldComponent } from './fields/row-field/row-field.component';
import { LabelFieldComponent } from './fields/label-field/label-field.component';
import { BoxFieldComponent } from './fields/box-field/box-field.component';
import { CityFieldComponent } from './fields/city-field/city-field.component';
import { TagsFieldComponent } from './fields/tags-field/tags-field.component';


/** COMPONENTS */
import { MiaFormComponent } from './components/mia-form/mia-form.component';
import { MiaPrintFieldsComponent } from './components/mia-print-fields/mia-print-fields.component';
import { MiaFormModalComponent } from './modals/mia-form-modal/mia-form-modal.component';
import { ChipsAndSelectServiceFieldComponent } from './fields/chips-and-select-service-field/chips-and-select-service-field.component';
import { StringTitleFieldComponent } from './fields/string-title-field/string-title-field.component';
import { PhotoHeaderFieldComponent } from './fields/photo-header-field/photo-header-field.component';
import { DividerFieldComponent } from './fields/divider-field/divider-field.component';
import { EventFieldComponent } from './fields/event-field/event-field.component';
import { CustomFieldComponent } from './fields/custom-field/custom-field.component';
import { DateFilterRangeButtonComponent } from './elements/date-filter-range-button/date-filter-range-button.component';
import { MiaFilterBoxComponent } from './components/mia-filter-box/mia-filter-box.component';

@NgModule({
  declarations: [
    /** COMPONENTS */
    MiaFormComponent,
    MiaFilterBoxComponent,

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
    SelectServiceFieldComponent,
    PhotoFieldComponent,
    AvatarListServiceFieldComponent,
    ChipsAndSelectFieldComponent,
    StringWithColorFieldComponent,
    RowFieldComponent,
    LabelFieldComponent,
    BoxFieldComponent,
    CityFieldComponent,
    TagsFieldComponent,
    ChipsAndSelectServiceFieldComponent,
    StringTitleFieldComponent,
    PhotoHeaderFieldComponent,
    DividerFieldComponent,
    EventFieldComponent,
    CustomFieldComponent,
    DateFilterRangeButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MiaCoreModule,

    /** MATERIAL */
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatChipsModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
    MatDividerModule,

    // External Libraries
    QuillModule
  ],
  exports: [
    MiaFormComponent,
    MiaFormModalComponent,
    MatMomentDateModule,

    /** COMPONENTS */
    MiaFilterBoxComponent,

    // External Libraries
    QuillModule,

    /** FIELDS */
    SelectServiceFieldComponent,
    AutocompleteServiceFieldComponent,
    ListServiceFieldComponent,
    AvatarListServiceFieldComponent,
    ChipsAndSelectFieldComponent,
    ChipsAndSelectServiceFieldComponent,
    TagsFieldComponent,
    EventFieldComponent,

    /** ELEMENTS */
    DateFilterRangeButtonComponent
  ],
  entryComponents: [
    MiaFormModalComponent
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
    { provide: MAT_DATE_LOCALE, useValue: 'en-Us' },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true, strict: true} },
  ]
})
export class MiaFormModule { }
