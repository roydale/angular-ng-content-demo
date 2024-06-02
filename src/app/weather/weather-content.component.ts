import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-weather-content',
  standalone: true,
  templateUrl: './weather-content.component.html'
})
export class WeatherContentComponent {
  lastUpdateAt: Date = new Date();

  protected temperature = 22;

  #polling = interval(5000).pipe(takeUntilDestroyed())

  ngOnInit() {
    this.#polling.subscribe(() =>
      this.lastUpdateAt = new Date()
    )
    console.log('Weather Content is created...');
  }

  ngOnDestroy() {
    console.log('Weather Content is destroyed...');
  }

}
