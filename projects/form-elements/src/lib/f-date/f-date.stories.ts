import { text } from '@storybook/addon-knobs'
import { createStory } from '@pascaliske/storybook-helpers'

import { FDateComponent } from './f-date.component'
import FDateReadme from './f-date.readme.md'

export default {
    title: 'Advanced/F-Date',
}

export const Basic = createStory({
    parameters: { notes: FDateReadme },
    factory: () => ({
        component: FDateComponent,
        props: {
            name: text('name', 'date'),
            label: text('label', 'Date'),
            autocomplete: 'off',
        },
    }),
})
