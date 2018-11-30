import { InjectionToken } from '@angular/core'
import flatpickr from 'flatpickr'

export interface ModuleOptions {
    datepicker: flatpickr.Options.Options | boolean
    email: {
        suggestions: Array<string> | boolean
    }
}

export const OPTIONS = new InjectionToken<ModuleOptions>('options')
