# F-Button

A simple button. Can be embedded in an `F-Form` or used directly.

## Usage

```html
<cmp-f-button
    [type]="'button'"
    [id]="'id'"
    [label]="'Label'"
    [icon]="faCheck"
    [theme]="'primary'"
    [disabled]="false"
    (clicked)="callback($event)"
></cmp-f-button>
```

## Inputs / Outputs

| Name         | Type                     |
| ------------ | ------------------------ |
| `[type]`     | `'button'` OR `'submit'` |
| `[id]`       | `string`                 |
| `[label]`    | `string`                 |
| `[icon]`     | `IconDefinition`         |
| `[theme]`    | `string`                 |
| `[disabled]` | `boolean`                |
| `(clicked)`  | `EventEmitter<Event>`    |
