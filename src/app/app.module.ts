import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { FormElementsModule } from '@pascaliske/form-elements'
import { AppComponent } from './app.component'

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        FormElementsModule.forRoot({
            select: {
                searchEnabled: false,
            },
            datepicker: true,
            email: {
                suggestions: true,
            },
        }),
    ],
    providers: [],
})
export class AppModule {}
