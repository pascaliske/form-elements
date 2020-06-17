import { Component, OnInit, Input } from '@angular/core'
import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms'
import { modifiers } from '@pascaliske/html-helpers'

type FValidator = typeof Validators
export type FType = keyof Omit<FValidator, 'prototype' | 'compose' | 'composeAsync'>
export type FValidation<T extends FType = FType> = ReturnType<FValidator[T]> extends ValidatorFn
    ? { type: T; message: string }
    : { type: T; message: string; value?: Exclude<Parameters<FValidator[T]>[0], AbstractControl> }

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

    protected focus: boolean = false

    public ngOnInit(): void {
        if (!this.fc) {
            console.warn(`Missing FormControl for input "${this.name}".`)
            this.disabled = true
            return
        }

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
            invalid: this.fc.touched && this.fc.invalid,
            required: this.isRequired(),
            ...(overrides ?? {}),
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

        for (const { type, value } of this.validation) {
            if (typeof Validators?.[type] === 'function') {
                validators.push(value ? (Validators[type] as any)(value) : Validators[type])
            }
        }

        this.fc.setValidators(validators)
    }
}
