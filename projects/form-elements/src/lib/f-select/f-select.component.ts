import { Component, Input } from '@angular/core'
import { modifiers } from '@pascaliske/html-helpers'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FInputComponent } from '../f-input/f-input.component'
import { FSelectPlaceholder, FSelectOption } from '../typings'

@Component({
    selector: 'cmp-f-select',
    templateUrl: './f-select.component.html',
})
export class FSelectComponent extends FInputComponent {
    public static readonly cmpName: string = 'FSelectComponent'

    @Input()
    public placeholder: FSelectPlaceholder

    @Input()
    public options: FSelectOption[] = []

    public icon: IconDefinition = faChevronDown

    public classes(namespace: string): string {
        const base = super.classes(namespace)
        const child = modifiers(namespace, {
            filled: (this.fc.value && this.fc.value !== '') || !!this.placeholder,
        })

        return `${base} ${child}`
    }
}
