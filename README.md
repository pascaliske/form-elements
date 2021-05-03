# [`@pascaliske/form-elements`](https://pascaliske.github.io/form-elements)

[![Build Status](https://img.shields.io/github/workflow/status/pascaliske/form-elements/Build%20package/master?label=build&style=flat-square)](https://github.com/pascaliske/form-elements/actions) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=pascaliske/form-elements)](https://dependabot.com)

## Installation

To install the module use the following command:

```bash
$ yarn add @pascaliske/form-elements
```

## Usage

Import the module in your Angular app:

```typescript
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { FormElementsModule } from '@pascaliske/form-elements'
import { AppComponent } from './app.component'

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [CommonModule, BrowserModule, FormElementsModule],
})
export class AppModule {}
```

Then import the styles in your global scss styles:

```scss
@import '~@pascaliske/form-elements/styles';
```

> **Note:** If you want to use the `cmp-f-select`, `cmp-f-date` od `cmp-f-time` components you also need to add their 3rd-party library styles:
>
> ```scss
> @import '~choices.js/public/assets/styles/choices.min.css'; // cmp-f-select
> @import '~flatpickr/dist/flatpickr.min.css'; // cmp-f-date, cmp-f-time
> ```

Now you can use the components in your template:

```html
<cmp-f-form>
    <cmp-f-row>
        <cmp-f-column>
            <cmp-f-input [label]="'My text input'"></cmp-f-input>
        </cmp-f-column>
    </cmp-f-row>
</cmp-f-form>
```

## License

MIT © [Pascal Iske](https://pascaliske.dev)
