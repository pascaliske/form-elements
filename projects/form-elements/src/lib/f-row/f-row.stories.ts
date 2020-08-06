import { createStory } from '@pascaliske/storybook-helpers'

import FRowReadme from './f-row.readme.md'

export default {
    title: '03-Layout/F-Row',
}

export const Layout1 = createStory({
    parameters: { notes: FRowReadme },
    factory: () => ({
        template: `
            <cmp-f-row [layout]="'1'">
                <cmp-f-column>
                    <cmp-f-input [label]="'Label'"></cmp-f-input>
                </cmp-f-column>
            </cmp-f-row>
        `,
    }),
})

export const Layout1_1 = createStory({
    parameters: { notes: FRowReadme },
    factory: () => ({
        template: `
            <cmp-f-row [layout]="'1-1'">
                <cmp-f-column>
                    <cmp-f-input [label]="'Label'"></cmp-f-input>
                </cmp-f-column>
                <cmp-f-column>
                    <cmp-f-input [label]="'Label'"></cmp-f-input>
                </cmp-f-column>
            </cmp-f-row>
        `,
    }),
})

export const Layout1_1_1 = createStory({
    parameters: { notes: FRowReadme },
    factory: () => ({
        template: `
            <cmp-f-row [layout]="'1-1-1'">
                <cmp-f-column>
                    <cmp-f-input [label]="'Label'"></cmp-f-input>
                </cmp-f-column>
                <cmp-f-column>
                    <cmp-f-input [label]="'Label'"></cmp-f-input>
                </cmp-f-column>
                <cmp-f-column>
                    <cmp-f-input [label]="'Label'"></cmp-f-input>
                </cmp-f-column>
            </cmp-f-row>
        `,
    }),
})

export const Layout1_2 = createStory({
    parameters: { notes: FRowReadme },
    factory: () => ({
        template: `
            <cmp-f-row [layout]="'1-2'">
                <cmp-f-column>
                    <cmp-f-input [label]="'Label'"></cmp-f-input>
                </cmp-f-column>
                <cmp-f-column>
                    <cmp-f-input [label]="'Label'"></cmp-f-input>
                </cmp-f-column>
            </cmp-f-row>
        `,
    }),
})

export const Layout2_1 = createStory({
    parameters: { notes: FRowReadme },
    factory: () => ({
        template: `
            <cmp-f-row [layout]="'2-1'">
                <cmp-f-column>
                    <cmp-f-input [label]="'Label'"></cmp-f-input>
                </cmp-f-column>
                <cmp-f-column>
                    <cmp-f-input [label]="'Label'"></cmp-f-input>
                </cmp-f-column>
            </cmp-f-row>
        `,
    }),
})
