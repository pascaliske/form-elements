import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { FormElementsModule } from '@pascaliske/form-elements'
import { AppComponent } from './app.component'

@NgModule({
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
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [],
})
export class AppModule {}
