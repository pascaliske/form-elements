import { storiesOf } from '@storybook/angular'
import { text } from '@storybook/addon-knobs'

import { FRadiobuttonComponent } from './f-radiobutton.component'
import FRadiobuttonReadme from './f-radiobutton.readme.md'

storiesOf('Basic/F-Radiobutton', module)
    .addParameters({ notes: FRadiobuttonReadme })
    .add('Basic', () => ({
        component: FRadiobuttonComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            options: [
                {
                    label: 'Foo',
                    value: 'foo',
                    checked: true,
                },
                {
                    label: 'Bar',
                    value: 'bar',
                    checked: false,
                },
            ],
        },
    }))
    .add('Disabled', () => ({
        component: FRadiobuttonComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            options: [
                {
                    label: 'Foo',
                    value: 'foo',
                    checked: true,
                },
                {
                    label: 'Bar',
                    value: 'bar',
                    checked: false,
                },
            ],
            disabled: true,
        },
    }))
