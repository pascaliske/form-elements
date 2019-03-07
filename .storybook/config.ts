import { configure, addDecorator, addParameters, moduleMetadata } from '@storybook/angular'
import { withKnobs } from '@storybook/addon-knobs'
import { create } from '@storybook/theming'
import { ReactiveFormsModule } from '@angular/forms'
import { FormElementsModule } from '../projects/form-elements/src/lib/form-elements.module'
import { name, repository } from '../package.json'

const load = require.context('../projects', true, /.stories.ts$/)

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
addParameters({
    options: {
        theme: create({
            base: 'light',
            brandTitle: name || 'Form Elements',
            brandUrl: repository.url.replace(/.git$/, ''),
        }),
        panelPosition: 'bottom',
        hierarchySeparator: /\//,
        sortStoriesByKind: true,
    },
})

configure(() => load.keys().forEach(file => load(file)), module)
