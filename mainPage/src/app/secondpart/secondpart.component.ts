import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondpart',
  templateUrl: './secondpart.component.html',
  styleUrls: ['./secondpart.component.scss']
})
export class SecondpartComponent implements OnInit {

  constructor() { }
  list = [
    {
      "image": "assets/images/GetPaidInstantly.png",
      "title": "Quick cash disbursement",
      "content": "Get terms loans that your business needs within 72 hrs"
    },
    {
      "image": "assets/images/Lowinterestrate.png",
      "title": "Low-interest rate",
      "content": "Achieve your financial goal with an amazing interesr rate starting at 13% per annum"
    },
    {
      "image": "assets/images/SecurePayments.png",
      "title": "Zero Paperwork",
      "content": "Get started instantly by submitting only your basic details & bank statements"
    },
    {
      "image": "assets/images/freelancer_feature_icon.png",
      "title": "Ace your business finances",
      "content": "Manage banking, accounting & everything in between, on one platform"
    },
    {
      "image": "assets/images/Covid.png",
      "title": "Loans to fight COVID-19",
      "content": "Zero EMI for first 3months on Back-to-Businedd loans of upto 1 lakh"
    }
  ]
  ngOnInit(): void {

  }

}
