import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-firstpart',
  templateUrl: './firstpart.component.html',
  styleUrls: ['./firstpart.component.scss'],
})
export class FirstpartComponent implements OnInit {
  sortOrders: string[] = ["6 Months", "9 Months", "12 Months"];
  selectedSortOrder: any = this.sortOrders[0];
  constructor() { }

  ngOnInit(): void {
  }


  ChangeSortOrder(newSortOrder: string) {
    this.selectedSortOrder = newSortOrder;
  }

}
