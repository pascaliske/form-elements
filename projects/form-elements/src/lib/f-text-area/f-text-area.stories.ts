import { storiesOf } from '@storybook/angular'
import { text, object, boolean } from '@storybook/addon-knobs'

import { FTextAreaComponent } from './f-text-area.component'
import FTextAreaReadme from './f-text-area.readme.md'
import '../main.scss'

storiesOf('Basic|F-TextArea', module)
    .addParameters({ notes: FTextAreaReadme })
    .add('Basic', () => ({
        component: FTextAreaComponent,
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
            autofocus: boolean('autofocus', false),
        },
    }))
    .add('Disabled', () => ({
        component: FTextAreaComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            disabled: true,
        },
    }))
