import { text } from '@storybook/addon-knobs'
import { createStory } from '@pascaliske/storybook-helpers'

import { FRadiobuttonComponent } from './f-radiobutton.component'
import FRadiobuttonReadme from './f-radiobutton.readme.md'

export default {
    title: 'Basic/F-Radiobutton',
}

export const Basic = createStory({
    parameters: { notes: FRadiobuttonReadme },
    factory: () => ({
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
    }),
})

export const Disabled = createStory({
    parameters: { notes: FRadiobuttonReadme },
    factory: () => ({
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
    }),
})
