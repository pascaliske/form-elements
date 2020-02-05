import { createStory } from '@pascaliske/storybook-helpers'

import FColumnReadme from './f-column.readme.md'

export default {
    title: 'Layout/F-Column',
}

export const AlignLeft = createStory({
    parameters: { notes: FColumnReadme },
    factory: () => ({
        template: `
            <cmp-f-row>
                <cmp-f-column [flex]="true" [align]="'left'">
                    <cmp-f-button [label]="'Label'"></cmp-f-button>
                </cmp-f-column>
            </cmp-f-row>
        `,
    }),
})

export const AlignRight = createStory({
    parameters: { notes: FColumnReadme },
    factory: () => ({
        template: `
            <cmp-f-row>
                <cmp-f-column [flex]="true" [align]="'right'">
                    <cmp-f-button [label]="'Label'"></cmp-f-button>
                </cmp-f-column>
            </cmp-f-row>
        `,
    }),
})
