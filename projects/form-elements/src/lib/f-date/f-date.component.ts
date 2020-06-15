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
import { ModuleOptions, MODULE_OPTIONS } from '../options'

@Component({
    selector: 'cmp-f-date',
    templateUrl: './f-date.component.html',
    providers: [{ provide: FInputComponent, useExisting: forwardRef(() => FDateComponent) }],
})
export class FDateComponent extends FInputComponent implements AfterViewInit, OnDestroy {
    public static readonly cmpName: string = 'FDateComponent'

    @Input()
    public altFormat: string = 'd. F Y'

    @Input()
    public dateFormat: string = 'd. F Y'

    @Input()
    public minDate: string | Date

    @Input()
    public maxDate: string | Date

    @Input()
    public blacklist: (string | Date)[]

    @ViewChild('inputRef', { static: true })
    public inputRef: ElementRef

    private instance: flatpickr.Instance

    private readonly defaults: flatpickr.Options.Options = {
        allowInput: true,
        altInput: true,
        altFormat: 'd. F Y',
        dateFormat: 'd. F Y',
        defaultDate: null,
        weekNumbers: true,
    }

    public constructor(@Inject(MODULE_OPTIONS) private moduleOptions: ModuleOptions) {
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
        if (
            typeof this.moduleOptions.datepicker === 'boolean' &&
            this.moduleOptions.datepicker === false
        ) {
            return
        }

        this.instance = flatpickr(this.inputRef.nativeElement, this.merge())
        this.instance.config.onOpen.push(() => (this.focus = true))
        this.instance.config.onClose.push(() => (this.focus = false))
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
            ...(this.moduleOptions.datepicker ? (this.moduleOptions.datepicker as {}) : {}),
            ...(this.altFormat ? { altFormat: this.altFormat } : {}),
            ...(this.dateFormat ? { dateFormat: this.dateFormat } : {}),
            ...(this.minDate ? { minDate: this.minDate } : {}),
            ...(this.maxDate ? { maxDate: this.maxDate } : {}),
            ...(this.blacklist ? { disable: this.blacklist } : {}),
        }
    }
}
