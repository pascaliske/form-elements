import flatpickr from 'flatpickr'

/**
 * GENERAL
 */
export interface ModuleOptions {
    email: {
        suggestions: Array<string> | boolean
    }
    date: {
        picker: flatpickr.Options.Options | boolean
    }
}

export interface FValidationConfig {
    [key: string]: Array<FValidation>
}

export interface FExplanationConfig {
    [key: string]: Array<string>
}

/**
 * F-Row
 */
export type FRowLayouts = '1' | '1-1' | '1-1-1' | '1-2' | '2-1'

/**
 * F-Column
 */
export type FColumnAlignments = 'left' | 'right'

/**
 * F-Select
 */
export interface FSelectOption {
    label: string
    value: any
}

export interface FSelectPlaceholder {
    label: string
    value: any
    selectable: boolean
}

/**
 * F-Radiobutton
 */
export interface FRadiobuttonOption {
    label: string
    value: string
    checked: boolean
}

/**
 * F-Button
 */
export type FButtonType = 'button' | 'submit'

/**
 * PRIVATE
 */
export const FORM_ELEMENTS = 'form-elements'

export interface FValidation {
    type:
        | 'min'
        | 'max'
        | 'required'
        | 'requiredTrue'
        | 'email'
        | 'minLength'
        | 'maxLength'
        | 'pattern'
    value?: string | number
    message: string
}
