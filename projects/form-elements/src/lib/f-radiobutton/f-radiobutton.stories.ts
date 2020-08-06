import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { createStory } from '@pascaliske/storybook-helpers'

import { FRadiobuttonComponent } from './f-radiobutton.component'
import FRadiobuttonReadme from './f-radiobutton.readme.md'

export default {
    title: '01-Basic/F-Radiobutton',
}

export const Basic = createStory({
    parameters: { notes: FRadiobuttonReadme },
    factory: () => ({
        component: FRadiobuttonComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            inline: boolean('inline', false),
            options: [
                {
                    label: 'Foo',
                    value: 'foo',
                },
                {
                    label: 'Bar',
                    value: 'bar',
                },
            ],
            changed: action('changed'),
        },
    }),
})

export const Prefilled = createStory({
    parameters: { notes: FRadiobuttonReadme },
    factory: () => ({
        component: FRadiobuttonComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            inline: boolean('inline', false),
            options: [
                {
                    label: 'Foo',
                    value: 'foo',
                },
                {
                    label: 'Bar',
                    value: 'bar',
                    checked: true,
                },
            ],
            changed: action('changed'),
        },
    }),
})

export const Required = createStory({
    parameters: { notes: FRadiobuttonReadme },
    factory: () => ({
        component: FRadiobuttonComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            inline: boolean('inline', false),
            validation: [
                {
                    type: 'required',
                    message: 'This field is required!',
                },
            ],
            options: [
                {
                    label: 'Foo',
                    value: 'foo',
                },
                {
                    label: 'Bar',
                    value: 'bar',
                },
            ],
            changed: action('changed'),
        },
    }),
})

export const Disabled = createStory({
    parameters: { notes: FRadiobuttonReadme },
    factory: () => ({
        component: FRadiobuttonComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            inline: boolean('inline', false),
            disabled: true,
            options: [
                {
                    label: 'Foo',
                    value: 'foo',
                },
                {
                    label: 'Bar',
                    value: 'bar',
                },
            ],
            changed: action('changed'),
        },
    }),
})
