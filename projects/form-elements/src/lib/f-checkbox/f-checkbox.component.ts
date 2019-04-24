import { Component, forwardRef } from '@angular/core'
import { FInputComponent } from '../f-input/f-input.component'

@Component({
    selector: 'cmp-f-checkbox',
    templateUrl: './f-checkbox.component.html',
    providers: [{ provide: FInputComponent, useExisting: forwardRef(() => FCheckboxComponent) }],
})
export class FCheckboxComponent extends FInputComponent {
    public static readonly cmpName: string = 'FCheckboxComponent'
}
