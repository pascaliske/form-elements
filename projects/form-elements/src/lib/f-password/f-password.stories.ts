import { text, radios, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { createStory } from '@pascaliske/storybook-helpers'

import { FPasswordComponent } from './f-password.component'
import FPasswordReadme from './f-password.readme.md'

export default {
    title: 'Advanced/F-Password',
}

export const Basic = createStory({
    parameters: { notes: FPasswordReadme },
    factory: () => ({
        component: FPasswordComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            autocomplete: radios(
                'autocomplete',
                {
                    off: 'off',
                    'current-password': 'current-password',
                    'new-password': 'new-password',
                },
                'new-password',
            ),
            autofocus: boolean('autofocus', false),
            changed: action('changed'),
            focused: action('focused'),
            blurred: action('blurred'),
        },
    }),
})

export const Disabled = createStory({
    parameters: { notes: FPasswordReadme },
    factory: () => ({
        component: FPasswordComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            disabled: true,
        },
    }),
})
