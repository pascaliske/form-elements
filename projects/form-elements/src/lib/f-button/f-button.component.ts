import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { modifiers } from '@pascaliske/html-helpers'

/**
 *
 */
export type FButtonType = 'button' | 'submit'

/**
 * F-Button
 */
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
    public icon: string

    @Input()
    public theme = ''

    @Input()
    public disabled = false

    @Output()
    public clicked: EventEmitter<Event> = new EventEmitter()

    public constructor() {}

    public get classes(): string {
        return modifiers('cmp-f-button', this.theme, {
            disabled: this.disabled,
        })
    }
}
