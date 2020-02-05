import {
    Component,
    forwardRef,
    AfterViewInit,
    OnDestroy,
    Input,
    ViewChild,
    ElementRef,
    Inject,
} from '@angular/core'
import flatpickr from 'flatpickr'
import { FInputComponent } from '../f-input/f-input.component'
import { ModuleOptions, OPTIONS } from '../options'

@Component({
    selector: 'cmp-f-time',
    templateUrl: './f-time.component.html',
    providers: [{ provide: FInputComponent, useExisting: forwardRef(() => FTimeComponent) }],
})
export class FTimeComponent extends FInputComponent implements AfterViewInit, OnDestroy {
    public static readonly cmpName: string = 'FTimeComponent'

    @Input()
    public hour: boolean = false

    @Input()
    public seconds: boolean = false

    @ViewChild('inputRef', { static: true })
    public inputRef: ElementRef

    private instance: flatpickr.Instance

    private readonly defaults: flatpickr.Options.Options = {
        allowInput: true,
        enableTime: true,
        noCalendar: true,
    }

    public constructor(@Inject(OPTIONS) private options: ModuleOptions) {
        super()
    }

    public ngAfterViewInit(): void {
        this.destroy()
        this.init()
    }

    public ngOnDestroy(): void {
        this.destroy()
    }

    private init() {
        if (typeof this.options.datepicker === 'boolean' && this.options.datepicker === false) {
            return
        }

        this.instance = flatpickr(this.inputRef.nativeElement, this.merge())
    }

    private destroy(): void {
        if (!this.instance) {
            return
        }

        this.instance.destroy()
    }

    private merge(): flatpickr.Options.Options {
        return {
            ...(this.defaults as flatpickr.Options.Options),
            ...(this.options.datepicker ? (this.options.datepicker as {}) : {}),
            ...(this.hour ? { time_24hr: this.hour } : {}),
            ...(this.seconds ? { enableSeconds: this.seconds } : {}),
        }
    }
}
