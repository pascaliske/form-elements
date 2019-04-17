import { storiesOf } from '@storybook/angular'
import { action } from '@storybook/addon-actions'
import { FormGroup } from '@angular/forms'

import FFormReadme from './f-form.readme.md'
import '../main.scss'

storiesOf('Layout|F-Form', module)
    .addParameters({ notes: FFormReadme })
    .add('Basic', () => ({
        props: {
            formGroup: new FormGroup({}),
            submitted: action('submit'),
        },
        template: `
            <cmp-f-form [fg]="formGroup" (submit)="submitted($event)">
                <cmp-f-row>
                    <cmp-f-column [flex]="true" [align]="'left'">
                        <cmp-f-button [type]="'submit'" [label]="'Submit'"></cmp-f-button>
                    </cmp-f-column>
                </cmp-f-row>
            </cmp-f-form>
        `,
    }))
