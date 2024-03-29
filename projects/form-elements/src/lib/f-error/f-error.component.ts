import { Component, Input } from '@angular/core'
import type { AbstractControl } from '@angular/forms'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FValidation } from '../f-input/f-input.component'

@Component({
    selector: 'cmp-f-error',
    templateUrl: './f-error.component.html',
})
export class FErrorComponent {
    @Input()
    public fc: AbstractControl

    @Input()
    public messages: FValidation[] = []

    public icon: IconDefinition = faExclamationCircle

    public hasErrorFor(validation: FValidation): boolean {
        return this.fc.hasError(validation.type.toLowerCase()) && (this.fc.dirty || this.fc.touched)
    }
}
