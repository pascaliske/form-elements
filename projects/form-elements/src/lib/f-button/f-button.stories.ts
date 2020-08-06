import { radios, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { createStory } from '@pascaliske/storybook-helpers'
import { faCheck, faAngleDown, faPaperPlane, faSave } from '@fortawesome/free-solid-svg-icons'

import { FButtonComponent } from './f-button.component'
import FButtonReadme from './f-button.readme.md'

const defs = { faCheck, faAngleDown, faPaperPlane, faSave }
const buttons = { button: 'button', submit: 'submit' }
const icons = {
    faCheck: 'faCheck',
    faAngleDown: 'faAngleDown',
    faPaperPlane: 'faPaperPlane',
    faSave: 'faSave',
}

export default {
    title: '01-Basic/F-Button',
}

export const Primary = createStory({
    parameters: { notes: FButtonReadme },
    factory: () => ({
        component: FButtonComponent,
        props: {
            type: radios('type', buttons, 'button'),
            id: text('id', 'primary'),
            label: text('label', 'Primary Button'),
            icon: defs[radios('icon', icons, icons['faCheck'])],
            theme: 'primary',
            disabled: boolean('disabled', false),
            clicked: action('click'),
        },
    }),
})

export const Secondary = createStory({
    parameters: { notes: FButtonReadme },
    factory: () => ({
        component: FButtonComponent,
        props: {
            type: radios('type', buttons, 'button'),
            id: text('id', 'secondary'),
            label: text('label', 'Secondary Button'),
            icon: defs[radios('icon', icons, icons['faCheck'])],
            theme: 'secondary',
            disabled: boolean('disabled', false),
            clicked: action('click'),
        },
    }),
})
