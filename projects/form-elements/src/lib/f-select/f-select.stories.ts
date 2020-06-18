import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { createStory } from '@pascaliske/storybook-helpers'
import { address } from 'faker'

import { FSelectComponent, FSelectOption } from './f-select.component'
import FSelectReadme from './f-select.readme.md'

const countries: FSelectOption[] = [...new Set(new Array(25).fill('').map(() => address.country()))]
    .sort()
    .map(country => ({
        label: country,
        value: country.toLowerCase().replace(/\s/g, '-').replace(/'/g, ''),
    }))

export default {
    title: 'Basic/F-Select',
}

export const Basic = createStory({
    parameters: { notes: FSelectReadme },
    factory: () => ({
        component: FSelectComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Country'),
            changed: action('changed'),
            options: countries,
        },
    }),
})

export const Placeholder = createStory({
    parameters: { notes: FSelectReadme },
    factory: () => ({
        component: FSelectComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Country'),
            changed: action('changed'),
            placeholder: {
                label: 'Please select a country',
                value: null,
            },
            options: countries,
        },
    }),
})

export const Prefilled = createStory({
    parameters: { notes: FSelectReadme },
    factory: () => ({
        component: FSelectComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Country'),
            changed: action('changed'),
            value: countries[4],
            options: countries,
        },
    }),
})

export const Searchable = createStory({
    parameters: { notes: FSelectReadme },
    factory: () => ({
        component: FSelectComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Country'),
            changed: action('changed'),
            search: {
                label: 'Search options...',
                fields: ['label'],
            },
            options: countries,
        },
    }),
})

export const Required = createStory({
    parameters: { notes: FSelectReadme },
    factory: () => ({
        component: FSelectComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Country'),
            changed: action('changed'),
            validation: [
                {
                    type: 'required',
                    message: 'This field is required!',
                },
            ],
            options: countries,
        },
    }),
})

export const Disabled = createStory({
    parameters: { notes: FSelectReadme },
    factory: () => ({
        component: FSelectComponent,
        props: {
            name: text('name', 'name'),
            label: text('label', 'Country'),
            disabled: true,
        },
    }),
})
