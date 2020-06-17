import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { createStory } from '@pascaliske/storybook-helpers'

import { FSelectComponent } from './f-select.component'
import FSelectReadme from './f-select.readme.md'

export default {
    title: 'Basic/F-Select',
}

export const Basic = createStory({
    parameters: { notes: FSelectReadme },
    factory: () => ({
        component: FSelectComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            changed: action('changed'),
            options: [
                {
                    label: 'Option #1',
                    value: 'option-1',
                },
                {
                    label: 'Option #2',
                    value: 'option-2',
                },
                {
                    label: 'Option #3',
                    value: 'option-3',
                },
                {
                    label: 'Option #4',
                    value: 'option-4',
                },
            ],
        },
    }),
})

export const Placeholder = createStory({
    parameters: { notes: FSelectReadme },
    factory: () => ({
        component: FSelectComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            changed: action('changed'),
            placeholder: {
                label: 'Please select',
                value: null,
            },
            options: [
                {
                    label: 'Option #1',
                    value: 'option-1',
                },
                {
                    label: 'Option #2',
                    value: 'option-2',
                },
                {
                    label: 'Option #3',
                    value: 'option-3',
                },
                {
                    label: 'Option #4',
                    value: 'option-4',
                },
            ],
        },
    }),
})

export const Prefilled = createStory({
    parameters: { notes: FSelectReadme },
    factory: () => ({
        component: FSelectComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            changed: action('changed'),
            value: {
                label: 'Option #2',
                value: 'option-2',
            },
            options: [
                {
                    label: 'Option #1',
                    value: 'option-1',
                },
                {
                    label: 'Option #2',
                    value: 'option-2',
                },
                {
                    label: 'Option #3',
                    value: 'option-3',
                },
                {
                    label: 'Option #4',
                    value: 'option-4',
                },
            ],
        },
    }),
})

export const Searchable = createStory({
    parameters: { notes: FSelectReadme },
    factory: () => ({
        component: FSelectComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            changed: action('changed'),
            search: {
                label: 'Search options...',
                fields: ['label'],
            },
            options: [
                {
                    label: 'Option #1',
                    value: 'option-1',
                },
                {
                    label: 'Option #2',
                    value: 'option-2',
                },
                {
                    label: 'Option #3',
                    value: 'option-3',
                },
                {
                    label: 'Option #4',
                    value: 'option-4',
                },
            ],
        },
    }),
})

export const Required = createStory({
    parameters: { notes: FSelectReadme },
    factory: () => ({
        component: FSelectComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            changed: action('changed'),
            validation: [
                {
                    type: 'required',
                    message: 'This field is required!',
                },
            ],
            options: [
                {
                    label: 'Option #1',
                    value: 'option-1',
                },
                {
                    label: 'Option #2',
                    value: 'option-2',
                },
                {
                    label: 'Option #3',
                    value: 'option-3',
                },
                {
                    label: 'Option #4',
                    value: 'option-4',
                },
            ],
        },
    }),
})

export const Disabled = createStory({
    parameters: { notes: FSelectReadme },
    factory: () => ({
        component: FSelectComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Label'),
            disabled: true,
        },
    }),
})
