import { addDecorator, addParameters, moduleMetadata } from '@storybook/angular'
import { withKnobs } from '@storybook/addon-knobs'
import { ReactiveFormsModule } from '@angular/forms'
import { FormElementsModule } from '../projects/form-elements/src/lib/form-elements.module'
import 'flatpickr/dist/flatpickr.min.css'
import 'choices.js/public/assets/styles/choices.min.css'
import '../projects/form-elements/src/lib/main.scss'

addParameters({
    options: {
        showRoots: true,
        storySort: (a: any, b: any): number => {
            return a[1].kind !== b[1].kind
                ? a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
                : 0
        },
    },
})

addDecorator(withKnobs)
addDecorator(
    moduleMetadata({
        imports: [
            ReactiveFormsModule,
            FormElementsModule.forRoot({
                datepicker: true,
            }),
        ],
    }),
)
