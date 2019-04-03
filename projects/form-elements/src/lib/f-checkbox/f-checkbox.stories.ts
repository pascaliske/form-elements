import { storiesOf } from '@storybook/angular'
import { text } from '@storybook/addon-knobs'

import { FCheckboxComponent } from './f-checkbox.component'
import FCheckboxReadme from './f-checkbox.readme.md'
import '../main.scss'

storiesOf('Basic|F-Checkbox', module)
    .addParameters({ notes: FCheckboxReadme })
    .add('Basic', () => ({
        component: FCheckboxComponent,
        props: {
            name: text('name', 'checkbox'),
            label: text('label', 'Checkbox'),
        },
    }))
    .add('Disabled', () => ({
        component: FCheckboxComponent,
        props: {
            name: text('name', 'checkbox'),
            label: text('label', 'Checkbox'),
            disabled: true,
        },
    }))
