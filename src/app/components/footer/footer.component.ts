import {
  AfterContentChecked,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements AfterContentChecked {
  readonly freepikLink =
    'https://img.freepik.com/darmowe-zdjecie/martwa-natura-z-ksiazek-kontra-technologia_23-2150062913.jpg?t=st=1719410723~exp=1719414323~hmac=1c4223722520b12a1ed181ac01a34213c8b56ef25fc10fac6cb46b83074099f2&w=1380';
  isBlured = false;

  @Input() content: HTMLElement;

  ngAfterContentChecked(): void {
    this.checkFooterPosition();
  }

  @HostListener('window:scroll', [])
  @HostListener('window:resize', [])
  onWindowScrollOrResize(): void {
    this.checkFooterPosition();
  }

  private checkFooterPosition(): void {
    const contentRect = this.content.getBoundingClientRect();

    contentRect.bottom > window.innerHeight
      ? (this.isBlured = true)
      : (this.isBlured = false);
  }
}
