import { Component, AfterViewInit, OnDestroy, Inject, ViewChild, ElementRef } from '@angular/core'
import flatpickr from 'flatpickr'
import locale from 'flatpickr/dist/l10n'
import { FInputComponent } from '../f-input/f-input.component'
import { ModuleOptions } from '../typings'

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

    public constructor(@Inject('options') private options: ModuleOptions) {
        super()
    }

    public ngAfterViewInit(): void {
        if (typeof this.options.date.picker === 'boolean' && this.options.date.picker === false) {
            return
        }

        this.initFlatpickr()
    }

    public ngOnDestroy(): void {
        this.destroyFlatpickr()
    }

    private initFlatpickr(): void {
        const options = this.mergeOptions({
            allowInput: true,
            dateFormat: 'd. F Y',
            defaultDate: this.selected || null,
            locale: locale.de,
            weekNumbers: true,
            onChange: value => {
                this.selected = value[0]
            },
        })

        this.destroyFlatpickr()

        this.instance = flatpickr(this.inputRef.nativeElement, options) as flatpickr.Instance
    }

    private destroyFlatpickr(): void {
        if (this.instance) {
            this.instance.destroy()
        }
    }

    private mergeOptions(defaults: flatpickr.Options.Options): flatpickr.Options.Options {
        const picker = this.options.date.picker || {}
        const options = picker && typeof picker === 'object' ? picker : {}

        return {
            ...defaults,
            ...options,
        }
    }
}
