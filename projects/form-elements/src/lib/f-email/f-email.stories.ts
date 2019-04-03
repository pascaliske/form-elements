import { storiesOf } from '@storybook/angular'
import { text, radios, boolean } from '@storybook/addon-knobs'

import { FEmailComponent } from './f-email.component'
import FEmailReadme from './f-email.readme.md'
import '../main.scss'

storiesOf('Advanced|F-Email', module)
    .addParameters({ notes: FEmailReadme })
    .add('Basic', () => ({
        component: FEmailComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            validation: [
                {
                    type: 'required',
                    message: 'This field is required!',
                },
                {
                    type: 'email',
                    message: 'Please check your input!',
                },
            ],
            autocomplete: radios(
                'autocomplete',
                {
                    off: 'off',
                    email: 'email',
                },
                'off',
            ),
            autofocus: boolean('autofocus', false),
        },
    }))
    .add('Suggestions', () => ({
        component: FEmailComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            autocomplete: 'off',
        },
    }))
    .add('Disabled', () => ({
        component: FEmailComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            disabled: true,
        },
    }))
