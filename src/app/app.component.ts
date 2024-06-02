import { Component } from '@angular/core';
import { WidgetComponent } from './widget/widget.component';
import { WeatherContentComponent } from './weather/weather-content.component';
import { WidgetContentDirective } from './widget-content.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WidgetComponent, WeatherContentComponent, WidgetContentDirective],
  templateUrl: './app.component.html'
})
export class AppComponent {

}
