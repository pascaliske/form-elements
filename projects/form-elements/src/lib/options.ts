import { InjectionToken } from '@angular/core'
import { Choices } from 'choices.js'
import flatpickr from 'flatpickr'

export interface ModuleOptions {
    select: Partial<Choices.Options>
    datepicker: flatpickr.Options.Options | boolean
    email: {
        suggestions: string[] | boolean
    }
}

export const MODULE_OPTIONS = new InjectionToken<ModuleOptions>('module-options')
