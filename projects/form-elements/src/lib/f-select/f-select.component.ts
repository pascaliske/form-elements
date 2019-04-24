import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core'
import { modifiers } from '@pascaliske/html-helpers'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FInputComponent } from '../f-input/f-input.component'

/**
 *
 */
export interface FSelectOption {
    label: string
    value: any
}

/**
 *
 */
export interface FSelectPlaceholder {
    label: string
    value: any
    selectable: boolean
}

/**
 * F-Select
 */
@Component({
    selector: 'cmp-f-select',
    templateUrl: './f-select.component.html',
    providers: [{ provide: FInputComponent, useExisting: forwardRef(() => FSelectComponent) }],
})
export class FSelectComponent extends FInputComponent {
    public static readonly cmpName: string = 'FSelectComponent'

    @Input()
    public placeholder: FSelectPlaceholder

    @Input()
    public options: FSelectOption[] = []

    @Output()
    public changed: EventEmitter<void> = new EventEmitter()

    public icon: IconDefinition = faChevronDown

    public classes(namespace: string): string {
        const base = super.classes(namespace)
        const child = modifiers(namespace, {
            filled: (this.fc.value && this.fc.value !== '') || !!this.placeholder,
        })

        return `${base} ${child}`
    }
}
