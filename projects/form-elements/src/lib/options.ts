import { InjectionToken } from '@angular/core'
import flatpickr from 'flatpickr'

export interface ModuleOptions {
    datepicker: flatpickr.Options.Options | boolean
    email: {
        suggestions: string[] | boolean
    }
}

export const MODULE_OPTIONS = new InjectionToken<ModuleOptions>('module-options')
