import { Component } from '@angular/core';
import { ReviewsApiService } from 'src/app/service/reviews-api.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent{
  reviews:any = [];
  reviewsChanged: string;

  constructor(private _reviewsApiService: ReviewsApiService) {
    this._reviewsApiService.reviewsChanged.subscribe(value => {
      this.reviewsChanged = value;
      this.readReviews();
    });
  }

  readReviews() {
    this.reviews = this._reviewsApiService.getReviews();
    console.log(this.reviews);
  }
}
