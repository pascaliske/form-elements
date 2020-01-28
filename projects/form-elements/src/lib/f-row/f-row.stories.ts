import { storiesOf } from '@storybook/angular'

import FRowReadme from './f-row.readme.md'

storiesOf('Layout/F-Row', module)
    .addParameters({ notes: FRowReadme })
    .add('Layout 1', () => ({
        template: `
            <cmp-f-row [layout]="'1'">
                <cmp-f-column>
                    <cmp-f-input [label]="'Label'"></cmp-f-input>
                </cmp-f-column>
            </cmp-f-row>
        `,
    }))
    .add('Layout 1-1', () => ({
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
    }))
    .add('Layout 1-1-1', () => ({
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
    }))
    .add('Layout 1-2', () => ({
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
    }))
    .add('Layout 2-1', () => ({
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
    }))
