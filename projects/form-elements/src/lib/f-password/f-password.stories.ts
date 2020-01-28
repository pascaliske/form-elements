import { storiesOf } from '@storybook/angular'
import { text, radios, boolean } from '@storybook/addon-knobs'

import { FPasswordComponent } from './f-password.component'
import FPasswordReadme from './f-password.readme.md'

storiesOf('Advanced/F-Password', module)
    .addParameters({ notes: FPasswordReadme })
    .add('Basic', () => ({
        component: FPasswordComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            autocomplete: radios(
                'autocomplete',
                {
                    off: 'off',
                    'current-password': 'current-password',
                    'new-password': 'new-password',
                },
                'new-password',
            ),
            autofocus: boolean('autofocus', false),
        },
    }))
    .add('Disabled', () => ({
        component: FPasswordComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            disabled: true,
        },
    }))
