import { Component, Input } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { modifiers } from '@pascaliske/html-helpers'

@Component({
    selector: 'cmp-f-form',
    templateUrl: './f-form.component.html',
})
export class FFormComponent {
    public static readonly cmpName: string = 'FFormComponent'

    @Input()
    public fg: FormGroup

    public constructor() {}

    public get classes(): string {
        return modifiers('cmp-f-form', {})
    }
}
