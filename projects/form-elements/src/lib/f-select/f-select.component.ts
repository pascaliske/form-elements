import {
    Component,
    forwardRef,
    AfterViewInit,
    OnChanges,
    OnDestroy,
    Input,
    ViewChild,
    Inject,
    SimpleChanges,
} from '@angular/core'
import type { ElementRef } from '@angular/core'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Observable, fromEvent, merge } from 'rxjs'
import { mapTo, distinctUntilChanged, takeWhile } from 'rxjs/operators'
import isEqual from 'lodash-es/isEqual'
import Choices, { Options, Choice } from 'choices.js'
import { FInputComponent } from '../f-input/f-input.component'
import { MODULE_OPTIONS } from '../options'
import type { ModuleOptions } from '../options'

/**
 *
 */
export interface FSelectOption<T = any> {
    label: string
    value: T
}

/**
 *
 */
export interface FSelectPlaceholder {
    label: string
    value: null
}

export interface FSelectSearch {
    label: string
    fields?: string[]
}

/**
 * F-Select
 */
@Component({
    selector: 'cmp-f-select',
    templateUrl: './f-select.component.html',
    providers: [{ provide: FInputComponent, useExisting: forwardRef(() => FSelectComponent) }],
})
export class FSelectComponent
    extends FInputComponent
    implements AfterViewInit, OnChanges, OnDestroy
{
    public static readonly cmpName: string = 'FSelectComponent'

    @Input()
    public placeholder: FSelectPlaceholder

    @Input()
    public options: FSelectOption[] = []

    @Input()
    public value: FSelectOption['value']

    @Input()
    public search: FSelectSearch

    @ViewChild('inputRef', { static: true })
    public inputRef: ElementRef

    public icon: IconDefinition = faChevronDown

    private instance: Choices

    private readonly defaults: Partial<Options> = {
        silent: false,
        addItems: true,
        removeItems: false,
        editItems: false,
        resetScrollPosition: false,
        shouldSort: false,
    }

    public constructor(@Inject(MODULE_OPTIONS) private moduleOptions: ModuleOptions) {
        super()
    }

    public ngAfterViewInit(): void {
        this.init()
    }

    public ngOnChanges({ options }: SimpleChanges = {}) {
        if (this.instance?.initialised && !isEqual(options?.currentValue, options?.previousValue)) {
            this.instance.setChoices(this.getOptions(), 'value', 'label', true)
        }
    }

    public ngOnDestroy(): void {
        super.ngOnDestroy()
        this.destroy()
    }

    public classes(namespace: string): string {
        return super.classes(namespace, {
            filled: (this.fc.value && this.fc.value !== '') || !!this.placeholder,
        })
    }

    public focusOut(): void {
        super.focusOut()

        this.inputRef?.nativeElement?.click()
    }

    private init(): void {
        if (this.instance?.initialised) {
            return
        }

        // prepare choices
        this.alive = true
        this.instance = new Choices(this.inputRef?.nativeElement, this.merge())
        this.instance.setChoices(this.getOptions(), 'value', 'label', true)

        const events: Observable<boolean>[] = [
            fromEvent(this.instance.passedElement.element, 'showDropdown').pipe(mapTo(true)),
            fromEvent(this.instance.passedElement.element, 'hideDropdown').pipe(mapTo(false)),
        ]

        merge(...events)
            .pipe(
                takeWhile(() => this.alive),
                distinctUntilChanged(),
            )
            .subscribe(visible => {
                if (!visible && !this.fc.touched) {
                    this.fc.markAsTouched()
                }

                this.focus = !!visible
            })

        // prefill choices and form control
        if (this.value) {
            this.fc.setValue(this.value, { onlySelf: true, emitEvent: false })
            this.instance.setChoiceByValue(this.value)
        }
    }

    private destroy(): void {
        if (!this.instance?.initialised) {
            return
        }

        this.instance.destroy()
    }

    private merge(): Options {
        return {
            ...(this.defaults as Options),
            ...(this.moduleOptions?.select ?? {}),
            ...this.getPlaceholderOptions(),
            ...this.getSearchOptions(),
        }
    }

    private getOptions(): Choice[] {
        return this.options?.map(option => ({ ...option, selected: false, active: false })) ?? []
    }

    private getPlaceholderOptions(): Partial<Options> {
        if (!this.placeholder) {
            return { placeholder: true, placeholderValue: '' }
        }

        return {
            ...(this.placeholder?.value ? { placeholderValue: this.placeholder?.value } : {}),
            placeholder: true,
        }
    }

    private getSearchOptions(): Partial<Options> {
        if (!this.search) {
            return { searchEnabled: false }
        }

        return {
            ...(this.search?.label ? { searchPlaceholderValue: this.search?.label } : {}),
            ...(this.search?.fields ? { searchFields: this.search?.fields } : {}),
            searchEnabled: true,
        }
    }
}
