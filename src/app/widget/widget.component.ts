import { Component, TemplateRef, contentChild, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgTemplateOutlet } from '@angular/common';
import { WidgetContentDirective } from '../widget-content.directive';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [ButtonComponent, NgTemplateOutlet],
  templateUrl: './widget.component.html'
})
export class WidgetComponent {
  hidden = signal(false);
  //content = contentChild<TemplateRef<unknown>>('widgetContent');
  content = contentChild(WidgetContentDirective);
}
