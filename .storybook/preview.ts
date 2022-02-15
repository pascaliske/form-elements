import { addDecorator, addParameters, moduleMetadata } from '@storybook/angular'
import { setCompodocJson } from '@storybook/addon-docs/angular'
import { withKnobs } from '@storybook/addon-knobs'
import { ReactiveFormsModule } from '@angular/forms'
import docJson from '../documentation.json'
import { FormElementsModule } from '../projects/form-elements/src/lib/form-elements.module'

setCompodocJson(docJson)

addParameters({
    options: {
        showRoots: true,
        storySort: {
            method: 'alphabetical',
            order: ['Basic', 'Advanced', 'Layout'],
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
