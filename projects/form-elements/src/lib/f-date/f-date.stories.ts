import { storiesOf } from '@storybook/angular'
import { text } from '@storybook/addon-knobs'

import { FDateComponent } from './f-date.component'
import FDateReadme from './f-date.readme.md'

storiesOf('Advanced/F-Date', module)
    .addParameters({ notes: FDateReadme })
    .add('Basic', () => ({
        component: FDateComponent,
        props: {
            name: text('name', 'date'),
            label: text('label', 'Date'),
            autocomplete: 'off',
        },
    }))
