import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.sass'],
})
export class ImageSliderComponent implements OnInit {
  @Input() slides: string[];
  @Input() autoPlay: boolean = true;

  currentSlide = 0;

  hidden = false;

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    let currentSlideIndex = (this.currentSlide + 1) % this.slides.length;
    this.selectSlide(currentSlideIndex);
  }

  previousSlide() {
    let currentSlideIndex =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.selectSlide(currentSlideIndex);
  }

  selectSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, 200);
  }
}
