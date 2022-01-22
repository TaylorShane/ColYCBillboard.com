import { AfterContentInit, Component, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
})
export class EventsComponent implements AfterContentInit, OnDestroy {
  refreshSource = interval(6 * 3600000); // 6 * 3600000 = 6 hours
  refreshSubscription: Subscription = this.refreshSource.subscribe(() =>
    this.refreshIframes()
  );
  slideDelaySource = interval(5000); // 5 seconds
  slideDelaySubscription: Subscription = this.slideDelaySource.subscribe(() =>
    this.startSlides()
  );
  slideStartCounter = 1;
  iframes: HTMLIFrameElement[] = [];

  constructor(public sanitizer: DomSanitizer) {}

  ngAfterContentInit() {
    this.iframes = [
      document.getElementById('event1') as HTMLIFrameElement,
      document.getElementById('event2') as HTMLIFrameElement,
      document.getElementById('event3') as HTMLIFrameElement,
      document.getElementById('event4') as HTMLIFrameElement,
    ];
  }

  ngOnDestroy() {
    this.refreshSubscription.unsubscribe();
  }

  /**
   *  Goes through each iframe with a single pass and updates
   *  the source every 5 seconds. The causes an offset start time
   *  for each iframe. This combined with each iframe advancing
   *  every 20 seconds causes a slide to advances on the subsequent
   *  iframe every 5 seconds.
   */
  startSlides() {
    switch (this.slideStartCounter) {
      case 1:
        this.iframes[0].src += '';
        this.slideStartCounter++;
        return;
      case 2:
        this.iframes[1].src += '';
        this.slideStartCounter++;
        return;
      case 3:
        this.iframes[2].src += '';
        this.slideStartCounter++;
        return;
      default:
        this.iframes[3].src += '';
        this.slideDelaySubscription.unsubscribe();
        return;
    }
  }

  /**
   * Function to update all iframes so new content can be pulled
   */
  refreshIframes() {
    this.iframes.forEach((iframe: HTMLIFrameElement) => {
      iframe.src += '';
    });
  }
}
