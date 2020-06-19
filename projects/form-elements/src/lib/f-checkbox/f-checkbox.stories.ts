import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { createStory } from '@pascaliske/storybook-helpers'

import { FCheckboxComponent } from './f-checkbox.component'
import FCheckboxReadme from './f-checkbox.readme.md'

export default {
    title: 'Basic/F-Checkbox',
}

export const Basic = createStory({
    parameters: { notes: FCheckboxReadme },
    factory: () => ({
        component: FCheckboxComponent,
        props: {
            name: text('name', 'checkbox'),
            label: text('label', 'Checkbox'),
            changed: action('changed'),
        },
    }),
})

export const Disabled = createStory({
    parameters: { notes: FCheckboxReadme },
    factory: () => ({
        component: FCheckboxComponent,
        props: {
            name: text('name', 'checkbox'),
            label: text('label', 'Checkbox'),
            disabled: true,
            changed: action('changed'),
        },
    }),
})
