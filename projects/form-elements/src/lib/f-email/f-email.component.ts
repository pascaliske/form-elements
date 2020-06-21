import { Component, Inject, forwardRef } from '@angular/core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
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

    public icons = { faTimes }

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

        const [, user, domain] = this.fc?.value?.match(/(.+)@(.+)/) ?? []

        this.suggestions$.next(
            user?.length > 0 && domain?.length > 0 ? this.fetchSuggestions(domain) : [],
        )
    }

    public use(suggestion: string): void {
        if (!this.moduleOptions.email.suggestions) {
            return
        }

        const parts: string[] = this.fc?.value?.split('@') ?? []
        const input: string = parts.slice(0, parts?.length - 1).join('@')

        this.fc.setValue([input, suggestion].join('@'))
        this.close()
    }

    public close(): void {
        this.suggestions$.next([])
    }

    private fetchSuggestions(search: string = ''): string[] {
        const suggestions = this.moduleOptions?.email?.suggestions ?? false
        const filter = (items: string[]) => items?.filter(item => fuzzysearch(search, item))

        if (Array.isArray(suggestions) && suggestions.length > 0) {
            return filter(suggestions)
        }

        return filter(this.providers)
    }
}
