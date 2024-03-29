import { Component, OnInit } from '@angular/core'
import { AbstractControl, FormGroup, FormControl } from '@angular/forms'
import { FSelectOption, FValidation } from '@pascaliske/form-elements'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    public fg: FormGroup = new FormGroup({})

    public fc: AbstractControl = new FormControl()

    public options: FSelectOption[] = [
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

    public validation: FValidation[] = [
        {
            type: 'required',
            message: 'This field is required!',
        },
        {
            type: 'email',
            message: 'Please check your input!',
        },
    ]

    public explanation: string[] = ['Hello World!']

    public icons = { faPaperPlane }

    public ngOnInit(): void {
        this.fc.valueChanges.subscribe(value => {
            console.log(value)
        })
    }

    public submit(event: Event): void {
        console.log(event)
    }
}
