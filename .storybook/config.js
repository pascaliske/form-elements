import { configure, addDecorator, moduleMetadata } from '@storybook/angular'
import { themes } from '@storybook/components'
import { withNotes } from '@storybook/addon-notes'
import { withOptions } from '@storybook/addon-options'
import { ReactiveFormsModule } from '@angular/forms'
import { FormElementsModule } from '../projects/form-elements/src/lib/form-elements.module'
import { name, repository } from '../package.json'

const load = require.context('../projects', true, /.stories.ts$/)

addDecorator(withNotes)
addDecorator(
    withOptions({
        name: name,
        url: repository.url.replace(/.git$/, ''),
        theme: themes.normal,
        hierarchySeparator: /\//,
    }),
)
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
