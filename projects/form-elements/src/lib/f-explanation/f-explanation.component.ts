import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { AbstractControl } from '@angular/forms'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'cmp-f-explanation',
    templateUrl: './f-explanation.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FExplanationComponent {
    @Input()
    public fc: AbstractControl

    @Input()
    public messages: string[]

    public icon: IconDefinition = faInfoCircle
}
