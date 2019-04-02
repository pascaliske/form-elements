import { storiesOf } from '@storybook/angular'
import { text, radios, boolean } from '@storybook/addon-knobs'

import { FPhoneComponent } from './f-phone.component'
import FPhoneReadme from './f-phone.readme.md'
import '../main.scss'

storiesOf('Advanced|F-Phone', module)
    .addParameters({ notes: FPhoneReadme })
    .add('Basic', () => ({
        component: FPhoneComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            autocomplete: radios(
                'autocomplete',
                {
                    off: 'off',
                    tel: 'tel',
                },
                'off',
            ),
            autofocus: boolean('autofocus', false),
        },
    }))
    .add('Disabled', () => ({
        component: FPhoneComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            disabled: true,
        },
    }))
