import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core'
import { FormControl, ValidatorFn, Validators } from '@angular/forms'
import type { AbstractControl } from '@angular/forms'
import { modifiers } from '@pascaliske/html-helpers'
import { takeWhile, distinctUntilChanged } from 'rxjs/operators'

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
export class FInputComponent implements OnInit, OnDestroy {
    public static readonly cmpName: string = 'FInputComponent'

    @Input()
    public name: string

    @Input()
    public label: string

    @Input()
    public fc: FormControl = new FormControl()

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

    @Output()
    public changed: EventEmitter<any> = new EventEmitter()

    @Output()
    public focused: EventEmitter<void> = new EventEmitter()

    @Output()
    public blurred: EventEmitter<void> = new EventEmitter()

    protected focus: boolean = false

    protected alive: boolean = true

    public ngOnInit(): void {
        if (!this.fc) {
            console.warn(`Missing FormControl for input "${this.name}".`)
            this.disabled = true
            return
        }

        this.fc.setValidators(this.getValidators())
        this.fc.valueChanges
            .pipe(
                takeWhile(() => this.alive),
                distinctUntilChanged(),
            )
            .subscribe(value => {
                this.changed.next(value)
            })
    }

    public ngOnDestroy(): void {
        this.alive = false
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
        return !!this.validation.find(({ type }) => type.includes('required'))
    }

    public focusIn(): void {
        this.focused.next()
        this.focus = true
    }

    public focusOut(): void {
        this.blurred.next()
        this.focus = false
    }

    private getValidators(): ValidatorFn[] {
        const validators: ValidatorFn[] = []

        for (const { type, value } of this.validation) {
            if (typeof Validators?.[type] === 'function') {
                validators.push(value ? (Validators[type] as any)(value) : Validators[type])
            }
        }

        return validators
    }
}
