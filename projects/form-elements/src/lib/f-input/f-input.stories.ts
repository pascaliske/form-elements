import { storiesOf } from '@storybook/angular'
import { text, object, radios, boolean } from '@storybook/addon-knobs'

import { FInputComponent } from './f-input.component'
import FInputReadme from './f-input.readme.md'

storiesOf('Basic/F-Input', module)
    .addParameters({ notes: FInputReadme })
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
            autocomplete: radios(
                'autocomplete',
                {
                    off: 'off',
                    on: 'on',
                    name: 'name',
                    email: 'email',
                    username: 'username',
                },
                'off',
            ),
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
