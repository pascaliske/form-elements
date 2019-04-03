import { InjectionToken } from '@angular/core'
import flatpickr from 'flatpickr'

export interface ModuleOptions {
    datepicker: flatpickr.Options.Options | boolean
    email: {
        suggestions: string[] | boolean
    }
}

export const OPTIONS = new InjectionToken<ModuleOptions>('options')
