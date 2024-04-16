import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-numcount',
  templateUrl: './numcount.component.html',
  styleUrls: ['./numcount.component.css']
})
export class NumcountComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.counter('.counter1', 2); // Adjust the duration for faster animation
    this.counter('.counter2', 3);
    this.counter('.counter3', 4);
    this.counter('.counter4', 2);
  }

  private counter(className: string, duration: number): void {
    const target = this.el.nativeElement.querySelector(className);
    const end = parseInt(target.getAttribute('data-target') || '0', 10);
    let current = 0;

    const interval = setInterval(() => {
      if (current < end) {
        current += Math.ceil((end - current) / (duration * 10)); // Adjust increment for faster animation
        target.innerText = this.formatNumberWithCommas(current); // Format with commas
      }
      if (current >= end) {
        clearInterval(interval);
        target.innerText = this.formatNumberWithCommas(end); // Ensure final value is displayed accurately with commas
      }
    }, 50); // Decreased interval time for faster animation
  }

  private formatNumberWithCommas(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
