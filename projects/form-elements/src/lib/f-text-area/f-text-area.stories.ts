import { text, object, boolean } from '@storybook/addon-knobs'
import { createStory } from '@pascaliske/storybook-helpers'

import { FTextAreaComponent } from './f-text-area.component'
import FTextAreaReadme from './f-text-area.readme.md'

export default {
    title: 'Basic/F-TextArea',
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
        },
    }),
})
