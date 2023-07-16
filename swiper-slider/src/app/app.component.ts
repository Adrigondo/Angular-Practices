import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle'
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swiper-test';
  items = [
    {
      title: "Hi,",
      number: 1,
    },
    {
      title: "how",
      number: 2,
    },
    {
      title: "are you?",
      number: 3,
    },
  ]
  constructor() {
    register()
  }
  @ViewChild('swiperRef', { static: true })
  protected _swiperRef!: ElementRef;
  swiper!: Swiper;
  ngOnInit() {
    this._initSwiper()
  }

  percentage: number = 0;
  currentIndex: number=0;
  private _initSwiper() {
    const options: SwiperOptions = {
      pagination: { clickable: true },
      slidesPerView: 1,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    }

    const swiperEl = this._swiperRef.nativeElement
    Object.assign(swiperEl, options)

    swiperEl.initialize()

    if (this.swiper) this.swiper.currentBreakpoint = false // Breakpoint fixes
    this.swiper = this._swiperRef.nativeElement.swiper

    this.swiper.on('autoplayTimeLeft', (swiper: Swiper, timeLeft: number, percentage: number) => {
      // console.log(swiper, timeLeft, percentage);
      this.percentage = percentage;
    });
    this.swiper.on("slideChange", (swiper: Swiper) => {
      console.log(swiper.activeIndex);
      this.currentIndex=swiper.activeIndex;
    });
  }
  getPercentage(value:number){
    return 100*Math.min(Math.max(value, 0), 1);
  }
}
