import { Component, AfterViewInit, OnDestroy, Inject, ViewChild, ElementRef } from '@angular/core'
import flatpickr from 'flatpickr'
import { FInputComponent } from '../f-input/f-input.component'
import { ModuleOptions, OPTIONS } from '../options'

@Component({
    selector: 'cmp-f-date',
    templateUrl: './f-date.component.html',
})
export class FDateComponent extends FInputComponent implements AfterViewInit, OnDestroy {
    public static readonly cmpName: string = 'FDateComponent'

    @ViewChild('inputRef')
    public inputRef: ElementRef

    private instance: flatpickr.Instance

    private readonly defaults: flatpickr.Options.Options = {
        allowInput: true,
        dateFormat: 'd. F Y',
        defaultDate: null,
        weekNumbers: true,
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
        if (this.options.datepicker && typeof this.options.datepicker === 'object') {
            return {
                ...(this.defaults as flatpickr.Options.Options),
                ...(this.options.datepicker as flatpickr.Options.Options),
            }
        }

        return this.defaults as flatpickr.Options.Options
    }
}
