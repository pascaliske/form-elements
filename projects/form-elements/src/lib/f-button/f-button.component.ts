import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { modifiers } from '@pascaliske/html-helpers'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FButtonType } from '../typings'

@Component({
    selector: 'cmp-f-button',
    templateUrl: './f-button.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FButtonComponent {
    public static readonly cmpName: string = 'FButtonComponent'

    @Input()
    public type: FButtonType = 'button'

    @Input()
    public id: string

    @Input()
    public label: string

    @Input()
    public icon: IconDefinition

    @Input()
    public theme: string = ''

    @Input()
    public disabled: boolean = false

    @Output()
    public clicked: EventEmitter<Event> = new EventEmitter()

    public constructor() {}

    public get classes(): string {
        return modifiers('cmp-f-button', this.theme, {
            disabled: this.disabled,
        })
    }
}
