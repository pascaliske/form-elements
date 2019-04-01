import { storiesOf } from '@storybook/angular'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { FSelectComponent } from './f-select.component'
import FSelectReadme from './f-select.readme.md'
import '../main.scss'

storiesOf('Basic|F-Select', module)
    .addParameters({ notes: FSelectReadme })
    .add('Basic', () => ({
        component: FSelectComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            changed: action('changed'),
            options: [
                {
                    label: 'Option #1',
                    value: 'option-1',
                },
                {
                    label: 'Option #2',
                    value: 'option-2',
                },
                {
                    label: 'Option #3',
                    value: 'option-3',
                },
                {
                    label: 'Option #4',
                    value: 'option-4',
                },
            ],
        },
    }))
    .add('Placeholder', () => ({
        component: FSelectComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            changed: action('changed'),
            placeholder: {
                label: 'Please select',
                value: null,
                selectable: boolean('placeholder selectable', false),
            },
            options: [
                {
                    label: 'Option #1',
                    value: 'option-1',
                },
                {
                    label: 'Option #2',
                    value: 'option-2',
                },
                {
                    label: 'Option #3',
                    value: 'option-3',
                },
                {
                    label: 'Option #4',
                    value: 'option-4',
                },
            ],
        },
    }))
    .add('Disabled', () => ({
        component: FSelectComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            disabled: true,
        },
    }))
