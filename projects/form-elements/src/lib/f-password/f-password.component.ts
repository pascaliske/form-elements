import { Component, forwardRef } from '@angular/core'
import { modifiers } from '@pascaliske/html-helpers'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { FInputComponent } from '../f-input/f-input.component'

@Component({
    selector: 'cmp-f-password',
    templateUrl: './f-password.component.html',
    providers: [{ provide: FInputComponent, useExisting: forwardRef(() => FPasswordComponent) }],
})
export class FPasswordComponent extends FInputComponent {
    public static readonly cmpName: string = 'FPasswordComponent'

    public type: 'text' | 'password' = 'password'

    public icon: IconDefinition = faEye

    public visible = false

    public toggle(): void {
        if (this.visible) {
            this.type = 'password'
            this.icon = faEye
            this.visible = false
        } else {
            this.type = 'text'
            this.icon = faEyeSlash
            this.visible = true
        }
    }

    public classes(namespace: string): string {
        const base = super.classes(namespace)
        const child = modifiers(namespace, {
            visible: this.visible,
        })

        return `${base} ${child}`
    }
}
