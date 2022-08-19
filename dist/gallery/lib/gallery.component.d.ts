import { AfterViewInit, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import { SwiperOptions } from "swiper";
import * as i0 from "@angular/core";
export declare class GalleryComponent implements OnInit, AfterViewInit {
    swiper?: SwiperComponent;
    bulletAnimation: Animation | undefined;
    animationKeyframes: {
        width: string;
    }[];
    animationTiming: {
        duration: number;
    };
    el: Element | undefined;
    currentBullet: Element | null;
    config: SwiperOptions;
    onSwiperPause(ev: any): void;
    onSwiper(swiper: any): void;
    onSlideChange(ev: any): void;
    constructor();
    stopAnimation(): void;
    resumeAnimation(): void;
    renderBulletAnimation(): void;
    ngAfterViewInit(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GalleryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GalleryComponent, "lib-gallery", never, {}, {}, never, never, false>;
}
