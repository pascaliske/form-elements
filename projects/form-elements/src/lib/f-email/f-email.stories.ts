import { text, radios, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { createStory } from '@pascaliske/storybook-helpers'

import { FEmailComponent } from './f-email.component'
import FEmailReadme from './f-email.readme.md'

export default {
    title: 'Advanced/F-Email',
}

export const Basic = createStory({
    parameters: { notes: FEmailReadme },
    factory: () => ({
        component: FEmailComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            validation: [
                {
                    type: 'required',
                    message: 'This field is required!',
                },
                {
                    type: 'email',
                    message: 'Please check your input!',
                },
            ],
            autocomplete: radios(
                'autocomplete',
                {
                    off: 'off',
                    email: 'email',
                },
                'off',
            ),
            autofocus: boolean('autofocus', false),
            changed: action('changed'),
        },
    }),
})

export const Suggestions = createStory({
    parameters: { notes: FEmailReadme },
    factory: () => ({
        component: FEmailComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            autocomplete: 'off',
            changed: action('changed'),
        },
    }),
})

export const Disabled = createStory({
    parameters: { notes: FEmailReadme },
    factory: () => ({
        component: FEmailComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            disabled: true,
            changed: action('changed'),
        },
    }),
})
