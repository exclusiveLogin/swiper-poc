import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, {Pagination, SwiperOptions, Autoplay} from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'lib-gallery',
  template: `
      <swiper #swiper [config]="config" (touchStart)="stopAnimation()" (slideChange)="onSlideChange($event)"
              (touchEnd)="resumeAnimation()"class="mySwiper">
          <ng-template swiperSlide>Slide 1</ng-template
          ><ng-template swiperSlide>Slide 2</ng-template
      ><ng-template swiperSlide>Slide 3</ng-template
      ><ng-template swiperSlide>Slide 4</ng-template
      ><ng-template swiperSlide>Slide 5</ng-template>
      </swiper>
  `,
  styleUrls: ['./styles.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class GalleryComponent implements OnInit, AfterViewInit {
    @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

    bulletAnimation: Animation | undefined;
    animationKeyframes = [
        // { transform: 'scaleX(0)' },
        // { transform: 'scaleX(1)' },
        { width: '0%' },
        { width: '100%' }
    ];

    animationTiming = {
        duration: 3000,
    };

    el: Element | undefined;
    currentBullet: Element | null = null;



    config: SwiperOptions = {
        // slidesPerView: 1,
        // autoHeight: true,
        autoplay: {
            delay: 3000,//animation과 시간 맞춰줘야함,
            disableOnInteraction: false,
        },
        // effect: 'slide',
        pagination: {
            clickable: true,
            // renderBullet: function (index, className) {
            //     console.log('renderBullet', index, className);
            //     return '<div class="' + className + '"><div class="progress"></div>'  + '</div>';
            // }
        }
    }
    onSwiperPause(ev: any){
        console.log('onSwiperPause:', ev, this.swiper );

    }
    onSwiper(swiper: any) {
        console.log(swiper);
    }
    onSlideChange(ev: any) {
        console.log('slide change', ev);
        this.renderBulletAnimation();

    }
  constructor() { }

    stopAnimation(){
        console.log('tick', this.bulletAnimation)
        this?.bulletAnimation?.pause();
    }

    resumeAnimation(){
        this?.bulletAnimation?.cancel();
        this?.bulletAnimation?.play();
    }

    renderBulletAnimation(){
        this.bulletAnimation?.cancel();
        this.currentBullet = this.el!.querySelector('.swiper-pagination-bullet-active');
        this.bulletAnimation = this.currentBullet?.animate(this.animationKeyframes, {
            pseudoElement: '::after',
            duration: 3000,
            fill: 'forwards',
        });
        console.log('play')
    }

    ngAfterViewInit() {

        this.el = this.swiper?.swiperRef.el;
        this.renderBulletAnimation();
    }

    ngOnInit(): void {

  }

}
