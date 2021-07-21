import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  public isScrolled = false;
  @HostListener('window:scroll', ['$event'])
  public onWindowScroll(event: Event): void {
    if (window.scrollY > 0) {
      this.isScrolled = true;
      console.log('scrolled');
    }
    else {
      console.log('not scrolled');
      this.isScrolled = false;
    }

  }
}
