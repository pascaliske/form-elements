import { Component, ChangeDetectionStrategy } from '@angular/core'
import { modifiers } from '@pascaliske/html-helpers'
import { FInputComponent } from '../f-input/f-input.component'

@Component({
    selector: 'cmp-f-password',
    templateUrl: './f-password.component.html',

    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FPasswordComponent extends FInputComponent {
    public static readonly cmpName: string = 'FPasswordComponent'

    public type: 'text' | 'password' = 'password'

    public visible = false

    public mouseup(): void {
        this.type = 'password'
        this.visible = false
    }

    public mousedown(): void {
        this.type = 'text'
        this.visible = true
    }

    public classes(namespace: string): string {
        const base = super.classes(namespace)
        const child = modifiers(namespace, {
            visible: this.visible,
        })

        return `${base} ${child}`
    }
}
