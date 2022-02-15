import { text, object, radios, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { createStory } from '@pascaliske/storybook-helpers'

import { FInputComponent } from './f-input.component'
import FInputReadme from './f-input.readme.md'

export default {
    title: 'Basic/F-Input',
}

export const Basic = createStory({
    parameters: { notes: FInputReadme },
    factory: () => ({
        component: FInputComponent,
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
            autocomplete: radios(
                'autocomplete',
                {
                    off: 'off',
                    on: 'on',
                    name: 'name',
                    email: 'email',
                    username: 'username',
                },
                'off',
            ),
            autofocus: boolean('autofocus', false),
            changed: action('changed'),
            focused: action('focused'),
            blurred: action('blurred'),
        },
    }),
})

export const Disabled = createStory({
    parameters: { notes: FInputReadme },
    factory: () => ({
        component: FInputComponent,
        props: {
            name: 'name',
            label: 'Label',
            disabled: true,
        },
    }),
})
