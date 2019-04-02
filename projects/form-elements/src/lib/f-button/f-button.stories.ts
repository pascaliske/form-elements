import { storiesOf } from '@storybook/angular'
import { radios, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import * as faIcons from '@fortawesome/free-solid-svg-icons'

import { FButtonComponent } from './f-button.component'
import FButtonReadme from './f-button.readme.md'
import '../main.scss'

const icons = ['faCheck', 'faAngleDown', 'faPaperPlane', 'faSave']

storiesOf('Basic|F-Button', module)
    .addParameters({ notes: FButtonReadme })
    .add('Primary', () => ({
        component: FButtonComponent,
        props: {
            type: radios('type', { button: 'button', submit: 'submit' }, 'button'),
            id: text('id', 'primary'),
            label: text('label', 'Primary Button'),
            icon: faIcons[radios('icon', icons, icons[0])],
            theme: 'primary',
            disabled: boolean('disabled', false),
            clicked: action('click'),
        },
    }))
    .add('Secondary', () => ({
        component: FButtonComponent,
        props: {
            type: radios('type', { button: 'button', submit: 'submit' }, 'button'),
            id: text('id', 'secondary'),
            label: text('label', 'Secondary Button'),
            icon: faIcons[radios('icon', icons, icons[0])],
            theme: 'secondary',
            disabled: boolean('disabled', false),
            clicked: action('click'),
        },
    }))
