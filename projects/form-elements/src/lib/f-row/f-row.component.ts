import { Component, ViewEncapsulation, Input } from '@angular/core'
import { modifiers } from '@pascaliske/html-helpers'
import { FRowLayouts } from '../typings'

@Component({
    selector: 'cmp-f-row',
    templateUrl: './f-row.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class FRowComponent {
    public static readonly cmpName: string = 'FRowComponent'

    @Input()
    public layout: FRowLayouts = '1'

    public constructor() {}

    public get classes(): string {
        return modifiers('cmp-f-row', {
            [`layout-${this.layout}`]: true,
        })
    }
}
