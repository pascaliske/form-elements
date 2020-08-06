import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { createStory } from '@pascaliske/storybook-helpers'
import { FormControl, Validators } from '@angular/forms'

import { FCheckboxComponent } from './f-checkbox.component'
import FCheckboxReadme from './f-checkbox.readme.md'

export default {
    title: '01-Basic/F-Checkbox',
}

export const Basic = createStory({
    parameters: { notes: FCheckboxReadme },
    factory: () => ({
        component: FCheckboxComponent,
        props: {
            name: text('name', 'checkbox'),
            label: text('label', 'Checkbox'),
            changed: action('changed'),
        },
    }),
})

export const LongLabel = createStory({
    parameters: { notes: FCheckboxReadme },
    factory: () => ({
        component: FCheckboxComponent,
        props: {
            name: text('name', 'checkbox'),
            label: text(
                'label',
                'Ich bin damit einverstanden, dass die von mir angegebenen Daten für die Bearbeitung meiner Kontaktanfrage verarbeitet werden. Mir ist bekannt, dass ich meine Einwilligung jederzeit per E-Mail widerrufen kann.',
            ),
            changed: action('changed'),
        },
    }),
})

export const Error = createStory({
    parameters: { notes: FCheckboxReadme },
    factory: () => ({
        component: FCheckboxComponent,
        props: {
            name: text('name', 'checkbox'),
            label: text('label', 'Checkbox'),
            fc: (() => {
                const fc = new FormControl(false, Validators.requiredTrue)
                fc.markAsTouched()
                return fc
            })(),
            validation: [
                {
                    type: 'requiredTrue',
                    message: 'Required',
                },
            ],
            changed: action('changed'),
        },
    }),
})

export const Disabled = createStory({
    parameters: { notes: FCheckboxReadme },
    factory: () => ({
        component: FCheckboxComponent,
        props: {
            name: text('name', 'checkbox'),
            label: text('label', 'Checkbox'),
            disabled: true,
            changed: action('changed'),
        },
    }),
})
