import { Component, Input } from '@angular/core'
import { modifiers } from '@pascaliske/html-helpers'
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
})
export class FSelectComponent extends FInputComponent {
    public static readonly cmpName: string = 'FSelectComponent'

    @Input()
    public placeholder: FSelectPlaceholder

    @Input()
    public options: Array<FSelectOption> = []

    public classes(namespace: string): string {
        const base = super.classes(namespace)
        const child = modifiers(namespace, {
            filled: (this.fc.value && this.fc.value !== '') || !!this.placeholder,
        })

        return `${base} ${child}`
    }
}
