import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { modifiers } from '@pascaliske/html-helpers'
import { FInputComponent } from '../f-input/f-input.component'
import { FSelectPlaceholder, FSelectOption } from '../typings'

@Component({
    selector: 'cmp-f-select',
    templateUrl: './f-select.component.html',

    changeDetection: ChangeDetectionStrategy.OnPush,
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
