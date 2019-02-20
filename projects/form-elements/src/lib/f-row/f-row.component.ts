import { Component, ViewEncapsulation, Input } from '@angular/core'
import { modifiers } from '@pascaliske/html-helpers'

/**
 * F-Row
 */
@Component({
    selector: 'cmp-f-row',
    templateUrl: './f-row.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class FRowComponent {
    public static readonly cmpName: string = 'FRowComponent'

    @Input()
    public layout: '1' | '1-1' | '1-1-1' | '1-2' | '2-1' = '1'

    public constructor() {}

    public get classes(): string {
        return modifiers('cmp-f-row', {
            [`layout-${this.layout}`]: true,
        })
    }
}
