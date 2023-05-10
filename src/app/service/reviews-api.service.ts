import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { Review } from '../model/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsApiService {
  public reviewsChanged: BehaviorSubject<string> = new BehaviorSubject<string>("None");

  baseUri: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  // Using index as id for db
  allReviews: Review[] = [];

  // Create Review
  createReview(data:any): void {
    let reviewID = this.allReviews.length+1;
    let review = data;
    review.reviewId = reviewID
    this.allReviews.push(review);
  }

  // Get all Reviews
  getReviews() {
    return this.allReviews;
  }

  // Get Review
  getReview(id:number): any {
    return this.allReviews[id-1];
  }

  // Update Review
  updateReview(id:number, data:any){
    this.allReviews[id-1] = data;
  }

  // Delete Review
  deleteReview(id:number): void {
    delete this.allReviews[id-1];
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
