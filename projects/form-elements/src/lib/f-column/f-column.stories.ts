import { storiesOf } from '@storybook/angular'

import FColumnReadme from './f-column.readme.md'

storiesOf('Layout/F-Column', module)
    .addParameters({ notes: FColumnReadme })
    .add('Align Left', () => ({
        template: `
            <cmp-f-row>
                <cmp-f-column [flex]="true" [align]="'left'">
                    <cmp-f-button [label]="'Label'"></cmp-f-button>
                </cmp-f-column>
            </cmp-f-row>
        `,
    }))
    .add('Align Right', () => ({
        template: `
            <cmp-f-row>
                <cmp-f-column [flex]="true" [align]="'right'">
                    <cmp-f-button [label]="'Label'"></cmp-f-button>
                </cmp-f-column>
            </cmp-f-row>
        `,
    }))
