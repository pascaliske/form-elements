import { storiesOf } from '@storybook/angular'
import { radios, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { faCheck, faAngleDown, faPaperPlane, faSave } from '@fortawesome/free-solid-svg-icons'

import { FButtonComponent } from './f-button.component'
import FButtonReadme from './f-button.readme.md'
import '../main.scss'

const defs = { faCheck, faAngleDown, faPaperPlane, faSave }
const buttons = { button: 'button', submit: 'submit' }
const icons = {
    faCheck: 'faCheck',
    faAngleDown: 'faAngleDown',
    faPaperPlane: 'faPaperPlane',
    faSave: 'faSave',
}

storiesOf('Basic|F-Button', module)
    .addParameters({ notes: FButtonReadme })
    .add('Primary', () => ({
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
    }))
    .add('Secondary', () => ({
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
    }))
