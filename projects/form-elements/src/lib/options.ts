import { InjectionToken } from '@angular/core'
import { Options } from 'choices.js'
import flatpickr from 'flatpickr'

export interface ModuleOptions {
    select: Partial<Options>
    datepicker: flatpickr.Options.Options | boolean
    email: {
        suggestions: string[] | boolean
    }
}

export const MODULE_OPTIONS = new InjectionToken<ModuleOptions>('module-options')
