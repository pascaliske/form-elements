import { Component } from '@angular/core'
import { FInputComponent } from '../f-input/f-input.component'

@Component({
    selector: 'cmp-f-phone',
    templateUrl: './f-phone.component.html',
})
export class FPhoneComponent extends FInputComponent {
    public static readonly cmpName: string = 'FPhoneComponent'
}
