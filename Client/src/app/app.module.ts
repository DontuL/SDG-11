import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { GraficoSlumsComponent } from './grafico-slums/grafico-slums.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficoSlumsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GraficoSlumsComponent,
    GoogleChartsModule,
    NgModule,
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
