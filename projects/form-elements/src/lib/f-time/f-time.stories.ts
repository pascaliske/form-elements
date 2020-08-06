import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { createStory } from '@pascaliske/storybook-helpers'

import { FTimeComponent } from './f-time.component'
import FTimeReadme from './f-time.readme.md'

export default {
    title: '02-Advanced/F-Time',
}

export const Basic = createStory({
    parameters: { notes: FTimeReadme },
    factory: () => ({
        component: FTimeComponent,
        props: {
            name: text('name', 'time'),
            label: text('label', 'Time'),
            hour: boolean('hour', false),
            seconds: boolean('seconds', false),
            autocomplete: 'off',
            changed: action('changed'),
        },
    }),
})

export const Disabled = createStory({
    parameters: { notes: FTimeReadme },
    factory: () => ({
        component: FTimeComponent,
        props: {
            name: text('name', 'time'),
            label: text('label', 'Time'),
            disabled: true,
            changed: action('changed'),
        },
    }),
})
