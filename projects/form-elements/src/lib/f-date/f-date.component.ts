import { Component, AfterViewInit, OnDestroy, Input, ViewChild, ElementRef } from '@angular/core'
import flatpickr from 'flatpickr'
import locale from 'flatpickr/dist/l10n'
import { FInputComponent } from '../f-input/f-input.component'
import { FDateOptions } from '../typings'

@Component({
    selector: 'cmp-f-date',
    templateUrl: './f-date.component.html',
})
export class FDateComponent extends FInputComponent implements AfterViewInit, OnDestroy {
    public static readonly cmpName: string = 'FDateComponent'

    @Input()
    public options: Partial<FDateOptions> = {}

    @ViewChild('inputRef')
    public inputRef: ElementRef

    private instance: flatpickr.Instance

    private selected: Date

    public ngAfterViewInit(): void {
        this.initFlatpickr()
    }

    public ngOnDestroy(): void {
        this.destroyFlatpickr()
    }

    private initFlatpickr(): void {
        const options = {
            allowInput: true,
            dateFormat: 'd. F Y',
            defaultDate: this.selected || null,
            locale: locale.de,
            weekNumbers: true,
            onChange: value => {
                console.log('==>', value)
                this.selected = value[0]
            },
        }

        this.destroyFlatpickr()

        this.instance = flatpickr(this.inputRef.nativeElement, options) as flatpickr.Instance
        console.log('==>', this.instance)
    }

    private destroyFlatpickr(): void {
        if (this.instance) {
            this.instance.destroy()
        }
    }
}
