import { Component } from '@angular/core'
import { FSelectOption, FValidationConfig, FExplanationConfig } from '@pascaliske/form-elements'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    public options: Array<FSelectOption> = [
        {
            label: 'Option #1',
            value: 'option-1',
        },
        {
            label: 'Option #2',
            value: 'option-2',
        },
        {
            label: 'Option #3',
            value: 'option-3',
        },
        {
            label: 'Option #4',
            value: 'option-4',
        },
    ]

    public validation: FValidationConfig = {
        email: [
            {
                type: 'required',
                message: 'This field is required!',
            },
            {
                type: 'email',
                message: 'Please check your input!',
            },
        ],
    }

    public explanation: FExplanationConfig = {
        email: ['Hello World!'],
    }

    public icons = { faPaperPlane }
}
