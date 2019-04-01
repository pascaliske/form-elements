import { configure, addDecorator, addParameters, moduleMetadata } from '@storybook/angular'
import { withKnobs } from '@storybook/addon-knobs'
import { ReactiveFormsModule } from '@angular/forms'
import { theme } from './theme'
import { FormElementsModule } from '../projects/form-elements/src/lib/form-elements.module'

const load = require.context('../projects', true, /.stories.ts$/)

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

configure(() => load.keys().forEach(file => load(file)), module)
