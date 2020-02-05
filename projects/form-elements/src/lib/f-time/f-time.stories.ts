import { storiesOf } from '@storybook/angular'
import { text, boolean } from '@storybook/addon-knobs'

import { FTimeComponent } from './f-time.component'
import FTimeReadme from './f-time.readme.md'

storiesOf('Advanced/F-Time', module)
    .addParameters({ notes: FTimeReadme })
    .add('Basic', () => ({
        component: FTimeComponent,
        props: {
            name: text('name', 'time'),
            label: text('label', 'Time'),
            hour: boolean('hour', false),
            seconds: boolean('seconds', false),
            autocomplete: 'off',
        },
    }))
