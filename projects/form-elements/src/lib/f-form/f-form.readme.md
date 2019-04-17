# F-Form

## Usage

```html
<cmp-f-form [fg]="formGroup" (submit)="onSubmit">
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

| Name       | Type                  |
| ---------- | --------------------- |
| `[fg]`     | `FormGroup`           |
| `(submit)` | `EventEmitter<Event>` |
