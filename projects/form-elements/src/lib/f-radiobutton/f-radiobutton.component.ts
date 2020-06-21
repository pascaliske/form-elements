import { Component, forwardRef, OnInit, Input } from '@angular/core'
import { FInputComponent } from '../f-input/f-input.component'

/**
 *
 */
export interface FRadiobuttonOption {
    label: string
    value: string
    checked?: boolean
}

/**
 * F-Radiobutton
 */
@Component({
    selector: 'cmp-f-radiobutton',
    templateUrl: './f-radiobutton.component.html',
    providers: [{ provide: FInputComponent, useExisting: forwardRef(() => FRadiobuttonComponent) }],
})
export class FRadiobuttonComponent extends FInputComponent implements OnInit {
    public static readonly cmpName: string = 'FRadiobuttonComponent'

    @Input()
    public inline: boolean = false

    @Input()
    public options: FRadiobuttonOption[] = []

    public ngOnInit(): void {
        super.ngOnInit()

        const checked = this.options.find(option => option.checked)
        if (checked) {
            this.fc.setValue(checked?.value)
        }
    }

    public classes(namespace: string): string {
        return super.classes(namespace, {
            inline: this.inline,
            filled: false,
        })
    }

    /**
     * Sets the currently selected value to the form control.
     *
     * @param index - Index of currently selected value.
     */
    public setValue(option: FRadiobuttonOption): void {
        if (this.disabled || option?.checked) {
            return
        }

        this.options?.forEach(item => (item.checked = item?.value === option?.value))
        this.fc.setValue(option?.value)
    }
}
