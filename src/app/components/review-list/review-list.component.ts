import { Component } from '@angular/core';
import { Review } from 'src/app/model/review';
import { ReviewsApiService } from 'src/app/service/reviews-api.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent{
  reviews: Review[] = [];
  reviewsChanged: string;

  constructor(private _reviewsApiService: ReviewsApiService) {
    this._reviewsApiService.reviewsChanged.subscribe(value => {
      this.reviewsChanged = value;
      this.readReviews();
    });
  }

  readReviews(): void {
    this.reviews = this._reviewsApiService.getReviews();
  }
}
