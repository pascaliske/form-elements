import { storiesOf } from '@storybook/angular'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, text, object, radios, boolean } from '@storybook/addon-knobs'

import { FInputComponent } from './f-input.component'
import FInputReadme from './f-input.readme.md'
import '../main.scss'
import './f-input.component.scss'

storiesOf('01 Basic/F-Input', module)
    .addDecorator(withMarkdownNotes(FInputReadme))
    .addDecorator(withKnobs())
    .add('Basic', () => ({
        component: FInputComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            validation: [
                object('validation', {
                    type: 'minLength',
                    value: 2,
                    message: 'The value should be at least 2 characters long!',
                }),
            ],
            autocomplete: radios('autocomplete', {
                off: 'off',
                on: 'on',
                name: 'name',
                email: 'email',
                username: 'username',
            }),
            autofocus: boolean('autofocus', false),
        },
    }))
    .add('Disabled', () => ({
        component: FInputComponent,
        props: {
            name: 'name',
            label: 'Label',
            disabled: true,
        },
    }))
