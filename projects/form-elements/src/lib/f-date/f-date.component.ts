import { Component, AfterViewInit, OnDestroy, Inject, ViewChild, ElementRef } from '@angular/core'
import flatpickr from 'flatpickr/dist/flatpickr.min'
import { German } from 'flatpickr/dist/l10n/de'
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

    private selected: Date

    private defaults: flatpickr.Options.Options = {
        allowInput: true,
        dateFormat: 'd. F Y',
        defaultDate: this.selected || null,
        locale: German,
        weekNumbers: true,
        onChange: value => {
            this.selected = value[0]
        },
    }

    public constructor(@Inject(OPTIONS) private options: ModuleOptions) {
        super()
    }

    public ngAfterViewInit(): void {
        if (typeof this.options.datepicker === 'boolean' && this.options.datepicker === false) {
            return
        }

        this.initFlatpickr()
    }

    public ngOnDestroy(): void {
        this.destroyFlatpickr()
    }

    private initFlatpickr(): void {
        const options = this.mergeOptions()

        this.destroyFlatpickr()

        this.instance = flatpickr(this.inputRef.nativeElement, options) as flatpickr.Instance
    }

    private destroyFlatpickr(): void {
        if (this.instance) {
            this.instance.destroy()
        }
    }

    private mergeOptions(): flatpickr.Options.Options {
        if (this.options.datepicker && typeof this.options.datepicker === 'object') {
            return {
                ...this.defaults,
                ...this.options.datepicker,
            }
        }

        return this.defaults
    }
}
