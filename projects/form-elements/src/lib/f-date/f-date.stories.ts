import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { createStory } from '@pascaliske/storybook-helpers'

import { FDateComponent } from './f-date.component'
import FDateReadme from './f-date.readme.md'

export default {
    title: '02-Advanced/F-Date',
}

export const Basic = createStory({
    parameters: { notes: FDateReadme },
    factory: () => ({
        component: FDateComponent,
        props: {
            name: text('name', 'date'),
            label: text('label', 'Date'),
            autocomplete: 'off',
            changed: action('changed'),
            focused: action('focused'),
            blurred: action('blurred'),
        },
    }),
})

export const Disabled = createStory({
    parameters: { notes: FDateReadme },
    factory: () => ({
        component: FDateComponent,
        props: {
            name: text('name', 'date'),
            label: text('label', 'Date'),
            disabled: true,
        },
    }),
})
