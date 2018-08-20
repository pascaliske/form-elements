# `@pascaliske/form-elements`

[![Build Status](https://travis-ci.com/pascaliske/form-elements.svg?branch=master)](https://travis-ci.com/pascaliske/form-elements)

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

Now you can use the components in your template:

```html
<cmp-f-row>
    <cmp-f-column>
        <cmp-f-input label="My text input"></cmp-f-input>
    </cmp-f-column>
</cmp-f-row>
```

## License

MIT © [Pascal Iske](https://pascal-iske.de)
