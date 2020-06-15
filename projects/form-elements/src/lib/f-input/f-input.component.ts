import { Component, OnInit, Input } from '@angular/core'
import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms'
import { modifiers } from '@pascaliske/html-helpers'

/**
 *
 */
export interface FValidation {
    type:
        | 'min'
        | 'max'
        | 'required'
        | 'requiredTrue'
        | 'email'
        | 'minLength'
        | 'maxLength'
        | 'pattern'
    value?: string | number
    message: string
}

/**
 * F-Input
 */
@Component({
    selector: 'cmp-f-input',
    templateUrl: './f-input.component.html',
})
export class FInputComponent implements OnInit {
    public static readonly cmpName: string = 'FInputComponent'

    @Input()
    public name: string

    @Input()
    public label: string

    @Input()
    public fc: AbstractControl = new FormControl()

    @Input()
    public validation: FValidation[] = []

    @Input()
    public explanation: string[] = []

    @Input()
    public autocomplete: string

    @Input()
    public autofocus: boolean

    @Input()
    public disabled: boolean = false

    public focus: boolean = false

    public ngOnInit(): void {
        this.setValidators()
    }

    public classes(namespace: string, overrides?: Record<string, boolean>): string {
        if (!this.fc) {
            return modifiers(namespace, {
                disabled: this.disabled,
            })
        }

        return modifiers(namespace, {
            disabled: this.disabled,
            focus: this.focus,
            filled: this.fc.value && this.fc.value !== '',
            invalid: this.fc.touched && !this.fc.valid,
            required: this.isRequired(),
            ...(overrides ? overrides : {}),
        })
    }

    public isRequired(): boolean {
        return !!this.validation.find(({ type }) => type === 'required' || type === 'requiredTrue')
    }

    public focusIn(): void {
        this.focus = true
    }

    public focusOut(): void {
        this.focus = false
    }

    private setValidators(): void {
        const validators: ValidatorFn[] = []

        this.validation.forEach(({ type, value }) => {
            if (Validators[type] && typeof Validators[type] === 'function') {
                validators.push(value ? (Validators[type] as any)(value) : Validators[type])
            }
        })

        this.fc.setValidators(validators)
    }
}
