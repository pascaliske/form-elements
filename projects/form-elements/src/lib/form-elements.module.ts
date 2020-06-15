import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FButtonComponent } from './f-button/f-button.component'
import { FCheckboxComponent } from './f-checkbox/f-checkbox.component'
import { FColumnComponent } from './f-column/f-column.component'
import { FDateComponent } from './f-date/f-date.component'
import { FTimeComponent } from './f-time/f-time.component'
import { FEmailComponent } from './f-email/f-email.component'
import { FFormComponent } from './f-form/f-form.component'
import { FInputComponent } from './f-input/f-input.component'
import { FPasswordComponent } from './f-password/f-password.component'
import { FPhoneComponent } from './f-phone/f-phone.component'
import { FRadiobuttonComponent } from './f-radiobutton/f-radiobutton.component'
import { FRowComponent } from './f-row/f-row.component'
import { FSelectComponent } from './f-select/f-select.component'
import { FTextAreaComponent } from './f-text-area/f-text-area.component'
import { FErrorComponent } from './f-error/f-error.component'
import { FExplanationComponent } from './f-explanation/f-explanation.component'
import { ModuleOptions, MODULE_OPTIONS } from './options'

export const components = [
    FButtonComponent,
    FCheckboxComponent,
    FColumnComponent,
    FDateComponent,
    FTimeComponent,
    FEmailComponent,
    FFormComponent,
    FInputComponent,
    FPasswordComponent,
    FPhoneComponent,
    FRadiobuttonComponent,
    FRowComponent,
    FSelectComponent,
    FTextAreaComponent,
]

@NgModule({
    imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FontAwesomeModule],
    declarations: [...components, FErrorComponent, FExplanationComponent],
    entryComponents: [...components],
    exports: [...components],
})
export class FormElementsModule {
    public constructor(@Optional() @SkipSelf() parent?: FormElementsModule) {
        if (parent) {
            throw new Error(
                'FormElementsModule is already loaded. Import it in the AppModule only.',
            )
        }
    }

    public static forRoot(
        moduleOptions?: Partial<ModuleOptions>,
    ): ModuleWithProviders<FormElementsModule> {
        return {
            ngModule: FormElementsModule,
            providers: [
                {
                    provide: MODULE_OPTIONS,
                    useValue: moduleOptions,
                },
            ],
        }
    }
}
