import { Component } from '@angular/core'
import { FInputComponent } from '../f-input/f-input.component'

@Component({
    selector: 'cmp-f-text-area',
    templateUrl: './f-text-area.component.html',
})
export class FTextAreaComponent extends FInputComponent {
    public static readonly cmpName: string = 'FTextAreaComponent'
}
