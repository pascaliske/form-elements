import { Component, Inject, forwardRef } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import fuzzysearch from 'fuzzysearch'
import { FInputComponent } from '../f-input/f-input.component'
import { MODULE_OPTIONS } from '../options'
import type { ModuleOptions } from '../options'

@Component({
    selector: 'cmp-f-email',
    templateUrl: './f-email.component.html',
    providers: [{ provide: FInputComponent, useExisting: forwardRef(() => FEmailComponent) }],
})
export class FEmailComponent extends FInputComponent {
    public static readonly cmpName: string = 'FEmailComponent'

    public suggestions$: BehaviorSubject<string[]> = new BehaviorSubject([])

    private providers: string[] = [
        'aol.com',
        'arcor.de',
        'freenet.de',
        'gmail.com',
        'gmx.at',
        'gmx.com',
        'gmx.de',
        'gmx.net',
        'googlemail.com',
        'hotmail.com',
        'hotmail.de',
        'icloud.com',
        'live.com',
        'live.de',
        'mac.com',
        'me.com',
        'msn.com',
        'online.de',
        'outlook.com',
        't-online.de',
        'web.de',
        'yahoo.com',
        'yahoo.de',
    ]

    public constructor(@Inject(MODULE_OPTIONS) private moduleOptions: ModuleOptions) {
        super()
    }

    public suggest(): void {
        if (!this.moduleOptions.email || !this.moduleOptions.email.suggestions) {
            return
        }

        const value = this.fc.value.match(/(.*)@(.*)/)
        if (!value || value.length <= 2 || value[1].length === 0 || value[2].length === 0) {
            this.suggestions$.next([])
            return
        }

        this.suggestions$.next(this.fetchSuggestions().filter(item => fuzzysearch(value[2], item)))
    }

    public use(suggestion: string): void {
        if (!this.moduleOptions.email.suggestions) {
            return
        }

        const parts = this.fc.value.split('@')
        const input = parts.slice(0, parts.length - 1).join('@')

        this.fc.setValue(`${input}@${suggestion}`)
        this.suggestions$.next([])
    }

    public close(): void {
        this.suggestions$.next([])
    }

    private fetchSuggestions(): string[] {
        const suggestions = this.moduleOptions.email.suggestions
        if (Array.isArray(suggestions) && suggestions.length > 0) {
            return suggestions
        }

        return this.providers
    }
}
