import {
    Component,
    AfterContentInit,
    Input,
    Output,
    EventEmitter,
    ContentChildren,
    QueryList,
    HostListener,
    HostBinding,
} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { FormGroup, AbstractControl } from '@angular/forms'
import { modifiers } from '@pascaliske/html-helpers'
import { FInputComponent } from '../f-input/f-input.component'

@Component({
    selector: 'form',
    templateUrl: './f-form.component.html',
})
export class FFormComponent implements AfterContentInit {
    public static readonly cmpName: string = 'FFormComponent'

    @Input()
    public formGroup: FormGroup

    @Input()
    public url: string

    @Output()
    public submitted: EventEmitter<Record<string, any>> = new EventEmitter()

    @ContentChildren(FInputComponent, { descendants: true })
    public fields: QueryList<FInputComponent>

    public constructor(private http: HttpClient) {}

    public ngAfterContentInit(): void {
        this.formGroup = this.formGroup || new FormGroup(this.collect())
    }

    @HostListener('submit')
    public onSubmit(): void {
        if (this.url && this.url.length > 0) {
            this.http.post(this.url, this.formGroup.value).subscribe()
        }

        this.submitted.next(this.formGroup.value)
        this.submitted.complete()
    }

    @HostBinding('class')
    public get classes(): string {
        return modifiers('cmp-f-form', {})
    }

    private collect(): Record<string, AbstractControl> {
        const result: Record<string, AbstractControl> = {}

        for (const field of this.fields.toArray()) {
            result[field.name] = field.fc
        }

        return result
    }
}
