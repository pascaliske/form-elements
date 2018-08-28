import {
    Component,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
    HostBinding,
} from '@angular/core'
import { modifiers } from '@pascaliske/html-helpers'
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
    @HostBinding('attr.id')
    public id: string

    @Input()
    @HostBinding('attr.aria-label')
    public text: string

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
