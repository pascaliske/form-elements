import { text, object, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { createStory } from '@pascaliske/storybook-helpers'

import { FTextAreaComponent } from './f-text-area.component'
import FTextAreaReadme from './f-text-area.readme.md'

export default {
    title: '01-Basic/F-TextArea',
}

export const Basic = createStory({
    parameters: { notes: FTextAreaReadme },
    factory: () => ({
        component: FTextAreaComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            validation: [
                object('validation', {
                    type: 'minLength',
                    value: 2,
                    message: 'The value should be at least 2 characters long!',
                }),
            ],
            autofocus: boolean('autofocus', false),
            changed: action('changed'),
        },
    }),
})

export const Disabled = createStory({
    parameters: { notes: FTextAreaReadme },
    factory: () => ({
        component: FTextAreaComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            disabled: true,
            changed: action('changed'),
        },
    }),
})
