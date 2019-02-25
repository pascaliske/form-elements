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
    public validation: Array<FValidation> = []

    @Input()
    public explanation: Array<string> = []

    @Input()
    public autocomplete: string

    @Input()
    public autofocus: boolean

    @Input()
    public disabled: boolean = false

    public focus: boolean = false

    public constructor() {}

    public ngOnInit(): void {
        this.setValidators()
    }

    public classes(namespace: string): string {
        if (!this.fc) {
            return namespace
        }

        return modifiers(namespace, {
            disabled: this.disabled,
            focus: this.focus,
            filled: this.fc.value && this.fc.value !== '',
            invalid: this.fc.touched && !this.fc.valid,
            required: this.isRequired(),
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
        const validators: Array<ValidatorFn> = []

        this.validation.forEach(({ type, value }) => {
            if (Validators[type] && typeof Validators[type] === 'function') {
                validators.push(value ? (Validators[type] as any)(value) : Validators[type])
            }
        })

        this.fc.setValidators(validators)
    }
}
