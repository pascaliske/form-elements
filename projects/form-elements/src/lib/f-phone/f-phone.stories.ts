import { text, radios, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { createStory } from '@pascaliske/storybook-helpers'

import { FPhoneComponent } from './f-phone.component'
import FPhoneReadme from './f-phone.readme.md'

export default {
    title: '02-Advanced/F-Phone',
}

export const Basic = createStory({
    parameters: { notes: FPhoneReadme },
    factory: () => ({
        component: FPhoneComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            autocomplete: radios(
                'autocomplete',
                {
                    off: 'off',
                    tel: 'tel',
                },
                'off',
            ),
            autofocus: boolean('autofocus', false),
            changed: action('changed'),
        },
    }),
})

export const Disabled = createStory({
    parameters: { notes: FPhoneReadme },
    factory: () => ({
        component: FPhoneComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            disabled: true,
            changed: action('changed'),
        },
    }),
})
