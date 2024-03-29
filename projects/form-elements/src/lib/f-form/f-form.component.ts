import {
    Component,
    AfterContentInit,
    Input,
    Output,
    EventEmitter,
    ContentChildren,
    HostListener,
    HostBinding,
} from '@angular/core'
import type { QueryList } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { FormGroup } from '@angular/forms'
import type { AbstractControl } from '@angular/forms'
import { modifiers, join } from '@pascaliske/html-helpers'
import { FInputComponent } from '../f-input/f-input.component'

@Component({
    selector: 'form',
    templateUrl: './f-form.component.html',
})
export class FFormComponent implements AfterContentInit {
    public static readonly cmpName: string = 'FFormComponent'

    @Input()
    public class: string

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

    @HostListener('submit', ['$event'])
    public onSubmit(event: Event): void {
        event.preventDefault()

        if (this.url && this.url.length > 0) {
            this.http.post(this.url, this.formGroup.value).subscribe()
        }

        this.submitted.next(this.formGroup.value)
        this.submitted.complete()
    }

    @HostBinding('class')
    public get classes(): string {
        return join(modifiers('cmp-f-form'), this.class)
    }

    private collect(): Record<string, AbstractControl> {
        const result: Record<string, AbstractControl> = {}

        for (const field of this.fields.toArray()) {
            result[field.name] = field.fc
        }

        return result
    }
}
