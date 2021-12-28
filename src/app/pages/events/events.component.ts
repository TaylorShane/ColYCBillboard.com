import { AfterContentInit, Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements AfterContentInit, OnDestroy {
  msPerHour = 3600000;
  hours = 12 * this.msPerHour;
  source = interval(this.hours);
  subscription: Subscription = this.source.subscribe((val) =>
    this.updateIframes()
  );
  iframes: HTMLIFrameElement[] = [];

  ngAfterContentInit(): void {
    this.iframes = [
      document.getElementById('event1') as HTMLIFrameElement,
      document.getElementById('event2') as HTMLIFrameElement,
      document.getElementById('event3') as HTMLIFrameElement,
      document.getElementById('event4') as HTMLIFrameElement,
    ];
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateIframes() {
    this.iframes.forEach((iframe: HTMLIFrameElement) => {
      iframe.src += '';
    });
  }
}
