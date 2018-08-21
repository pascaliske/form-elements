import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

@Component({
    selector: 'cmp-f-icon',
    templateUrl: './f-icon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FIconComponent {
    public static readonly cmpName: string = 'FIconComponent'

    @Input()
    public name: string

    @Input()
    public animate: boolean = false

    public constructor() {}
}
