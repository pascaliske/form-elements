import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

@Component({
    selector: 'cmp-f-icon',
    templateUrl: './f-icon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FIconComponent {
    public static readonly cmpName: string = 'FIconComponent'

    @Input()
    public icon: IconDefinition

    @Input()
    public animate: 'spin' | 'pulse'

    public get spin(): boolean {
        return this.animate && this.animate === 'spin'
    }

    public get pulse(): boolean {
        return this.animate && this.animate === 'pulse'
    }
}
