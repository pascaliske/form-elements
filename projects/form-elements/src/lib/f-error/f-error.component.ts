import { Component, Input } from '@angular/core'
import { AbstractControl } from '@angular/forms'
import { FValidation } from '../f-input/f-input.component'

@Component({
    selector: 'cmp-f-error',
    templateUrl: './f-error.component.html',
})
export class FErrorComponent {
    @Input()
    public fc: AbstractControl

    @Input()
    public messages: Array<FValidation>

    public constructor() {}
}
