import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FButtonComponent } from './f-button/f-button.component'
import { FCheckboxComponent } from './f-checkbox/f-checkbox.component'
import { FColumnComponent } from './f-column/f-column.component'
import { FDateComponent } from './f-date/f-date.component'
import { FEmailComponent } from './f-email/f-email.component'
import { FInputComponent } from './f-input/f-input.component'
import { FPasswordComponent } from './f-password/f-password.component'
import { FPhoneComponent } from './f-phone/f-phone.component'
import { FRadiobuttonComponent } from './f-radiobutton/f-radiobutton.component'
import { FRowComponent } from './f-row/f-row.component'
import { FSelectComponent } from './f-select/f-select.component'
import { FTextAreaComponent } from './f-text-area/f-text-area.component'
import { FErrorComponent } from './f-error/f-error.component'
import { FExplanationComponent } from './f-explanation/f-explanation.component'
import { ModuleOptions, OPTIONS } from './options'

export const components = [
    FButtonComponent,
    FCheckboxComponent,
    FColumnComponent,
    FDateComponent,
    FEmailComponent,
    FInputComponent,
    FPasswordComponent,
    FPhoneComponent,
    FRadiobuttonComponent,
    FRowComponent,
    FSelectComponent,
    FTextAreaComponent,
]

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
    declarations: [...components, FErrorComponent, FExplanationComponent],
    entryComponents: [...components],
    exports: [...components],
})
export class FormElementsModule {
    public static forRoot(options?: Partial<ModuleOptions>): ModuleWithProviders {
        return {
            ngModule: FormElementsModule,
            providers: [
                {
                    provide: OPTIONS,
                    useValue: options,
                },
            ],
        }
    }
}
