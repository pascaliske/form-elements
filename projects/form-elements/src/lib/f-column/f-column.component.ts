import { Component, ViewEncapsulation, Input } from '@angular/core'
import { modifiers } from '@pascaliske/html-helpers'
import { FColumnAlignments } from '../typings'

@Component({
    selector: 'cmp-f-column',
    templateUrl: './f-column.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class FColumnComponent {
    public static readonly cmpName: string = 'FColumnComponent'

    @Input()
    public flex = false

    @Input()
    public align: FColumnAlignments = 'left'

    public constructor() {}

    public get classes(): string {
        return modifiers('cmp-f-column', {
            [`align-${this.align}`]: true,
            flex: this.flex,
        })
    }
}
