import { configure, addDecorator, addParameters, moduleMetadata } from '@storybook/angular'
import { withNotes } from '@storybook/addon-notes'
import { withKnobs } from '@storybook/addon-knobs'
import { themes } from '@storybook/theming'
import { ReactiveFormsModule } from '@angular/forms'
import { FormElementsModule } from '../projects/form-elements/src/lib/form-elements.module'
import { name, repository } from '../package.json'

const load = require.context('../projects', true, /.stories.ts$/)

addDecorator(withNotes)
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
        brandTitle: name,
        brandUrl: repository.url.replace(/.git$/, ''),
        theme: themes.normal,
        panelPosition: 'bottom',
        hierarchySeparator: /\//,
        sortStoriesByKind: true,
    },
})

configure(() => load.keys().forEach(file => load(file)), module)
