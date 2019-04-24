# F-Form

## Usage

```html
<cmp-f-form [formGroup]="formGroup" (submitted)="onSubmit">
    <cmp-f-row>
        <cmp-f-column><!-- [...] --></cmp-f-column>
    </cmp-f-row>
    <cmp-f-row>
        <cmp-f-column><!-- [...] --></cmp-f-column>
    </cmp-f-row>
    <!-- [...] -->
</cmp-f-form>
```

## Inputs / Outputs

| Name          | Type                  |
| ------------- | --------------------- |
| `[formGroup]` | `FormGroup`           |
| `[url]`       | `string`              |
| `(submitted)` | `EventEmitter<Event>` |
