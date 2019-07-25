import { configure, addDecorator, addParameters, moduleMetadata } from '@storybook/angular'
import { withKnobs } from '@storybook/addon-knobs'
import { ReactiveFormsModule } from '@angular/forms'
import { FormElementsModule } from '../projects/form-elements/src/lib/form-elements.module'
import { theme } from './theme'
import 'flatpickr/dist/flatpickr.min.css'

const context = require.context('../projects', true, /.stories.ts$/)

addParameters({
    options: {
        theme: theme,
        panelPosition: 'bottom',
        hierarchySeparator: /\//,
        sortStoriesByKind: true,
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

configure(() => context.keys().forEach(context), module)
