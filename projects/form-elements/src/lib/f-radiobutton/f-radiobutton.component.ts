import { Component, forwardRef, Input } from '@angular/core'
import { FInputComponent } from '../f-input/f-input.component'

/**
 *
 */
export interface FRadiobuttonOption {
    label: string
    value: string
    checked: boolean
}

/**
 * F-Radiobutton
 */
@Component({
    selector: 'cmp-f-radiobutton',
    templateUrl: './f-radiobutton.component.html',
    providers: [{ provide: FInputComponent, useExisting: forwardRef(() => FRadiobuttonComponent) }],
})
export class FRadiobuttonComponent extends FInputComponent {
    public static readonly cmpName: string = 'FRadiobuttonComponent'

    @Input()
    public options: FRadiobuttonOption[] = []

    public setValue(index: number): void {
        this.options.map(item => (item.checked = false))
        this.options[index].checked = true
        this.fc.setValue(this.options[index].value)
    }
}
