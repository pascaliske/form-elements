import {
    Component,
    forwardRef,
    AfterViewInit,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    Inject,
} from '@angular/core'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Observable, fromEvent, merge } from 'rxjs'
import { mapTo, distinctUntilChanged, takeWhile } from 'rxjs/operators'
import Choices, { Choices as ChoicesType } from 'choices.js'
import { FInputComponent } from '../f-input/f-input.component'
import { ModuleOptions, MODULE_OPTIONS } from '../options'

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
export class FSelectComponent extends FInputComponent implements AfterViewInit, OnDestroy {
    public static readonly cmpName: string = 'FSelectComponent'

    @Input()
    public placeholder: FSelectPlaceholder

    @Input()
    public options: FSelectOption[] = []

    @Input()
    public value: FSelectOption

    @Input()
    public search: FSelectSearch

    @Output()
    public changed: EventEmitter<void> = new EventEmitter()

    @ViewChild('inputRef', { static: true })
    public inputRef: ElementRef

    public icon: IconDefinition = faChevronDown

    private instance: Choices

    private alive: boolean = true

    private readonly defaults: Partial<ChoicesType.Options> = {
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

    public ngOnDestroy(): void {
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
                this.focus = !!visible
            })

        // prefill choices and form control
        if (this.value?.value) {
            this.fc.setValue(this.value?.value)
            this.instance.setChoiceByValue(this.value.value)
        }
    }

    private destroy(): void {
        if (!this.instance?.initialised) {
            return
        }

        this.alive = false
        this.instance.destroy()
    }

    private merge(): ChoicesType.Options {
        return {
            ...(this.defaults as ChoicesType.Options),
            ...(this.moduleOptions?.select ?? {}),
            ...this.getPlaceholderOptions(),
            ...this.getSearchOptions(),
        }
    }

    private getOptions(): ChoicesType.Choice[] {
        return this.options?.map(option => ({ ...option, selected: false, active: false })) ?? []
    }

    private getPlaceholderOptions(): Partial<ChoicesType.Options> {
        if (!this.placeholder) {
            return { placeholder: true, placeholderValue: '' }
        }

        return {
            ...(this.placeholder?.value ? { placeholderValue: this.placeholder?.value } : {}),
            placeholder: true,
        }
    }

    private getSearchOptions(): Partial<ChoicesType.Options> {
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
