import { storiesOf } from '@storybook/angular'
import { action } from '@storybook/addon-actions'

import FFormReadme from './f-form.readme.md'
import '../main.scss'

storiesOf('Layout|F-Form', module)
    .addParameters({ notes: FFormReadme })
    .add('Basic', () => ({
        props: {
            submitted: action('submitted'),
        },
        template: `
            <form (submitted)="submitted($event)">
                <cmp-f-row>
                    <cmp-f-column [flex]="true" [align]="'left'">
                        <cmp-f-email [label]="'E-Mail'" [name]="'email'"></cmp-f-email>
                    </cmp-f-column>
                </cmp-f-row>
                <cmp-f-row>
                    <cmp-f-column [flex]="true" [align]="'left'">
                        <cmp-f-input [label]="'Input'" [name]="'input'"></cmp-f-input>
                    </cmp-f-column>
                </cmp-f-row>
                <cmp-f-row>
                    <cmp-f-column [flex]="true" [align]="'left'">
                        <cmp-f-button [type]="'submit'" [label]="'Submit'"></cmp-f-button>
                    </cmp-f-column>
                </cmp-f-row>
            </form>
        `,
    }))
    .add('Submit URL', () => ({
        props: {
            url: '/',
            submitted: action('submitted'),
        },
        template: `
            <form [url]="url" (submitted)="submitted($event)">
                <cmp-f-row>
                    <cmp-f-column [flex]="true" [align]="'left'">
                        <cmp-f-email [label]="'E-Mail'" [name]="'email'"></cmp-f-email>
                    </cmp-f-column>
                </cmp-f-row>
                <cmp-f-row>
                    <cmp-f-column [flex]="true" [align]="'left'">
                        <cmp-f-input [label]="'Input'" [name]="'input'"></cmp-f-input>
                    </cmp-f-column>
                </cmp-f-row>
                <cmp-f-row>
                    <cmp-f-column [flex]="true" [align]="'left'">
                        <cmp-f-button [type]="'submit'" [label]="'Submit'"></cmp-f-button>
                    </cmp-f-column>
                </cmp-f-row>
            </form>
        `,
    }))
