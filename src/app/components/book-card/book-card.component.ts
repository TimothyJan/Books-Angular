import { Component, Input, OnInit } from '@angular/core';
import { ReviewCreateComponent } from '../review-create/review-create.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ReviewEditComponent } from '../review-edit/review-edit.component';
import { ReviewsApiService } from 'src/app/service/reviews-api.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  modalRef: MdbModalRef<ReviewCreateComponent> | null = null;

  @Input() googleId: string;
  @Input() reviewId?: number;
  @Input() rating?: string;
  @Input() review?: string;

  authors = "";
  description = "";
  googleLink = "";
  imageLink = "";
  title = "";

  constructor(
    private modalService: MdbModalService,
    private _reviewsApiService: ReviewsApiService
    ) {}

  ngOnInit() {
    this.getBookDetails();
  }

  async getBookDetails() {
    let thumbnailLink = "";

    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${this.googleId}`
    );
    const data = await response.json();
    this.authors = data.volumeInfo.authors;
    this.description = data.volumeInfo.description;
    this.googleLink = data.volumeInfo.canonicalVolumeLink;
    this.title = data.volumeInfo.title;

    thumbnailLink = data.volumeInfo.imageLinks;
    if(thumbnailLink) {
      this.imageLink = data.volumeInfo.imageLinks.smallThumbnail;
    } else {
      this.imageLink = "https://books.google.com/googlebooks/images/no_cover_thumb.gif";
    }
  }

  public setStyle(): any {
    //linear-gradient( #78e7b540, rgba(0, 0, 0, 0 ));
    let styles = {
      'background': `linear-gradient( ${this.generateRandomColor()}, rgba(0, 0, 0, 0 ))`
    };
    return styles;
  }

  generateRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}40`;
  }

  openReviewCreateModal() {
    this.modalRef = this.modalService.open(ReviewCreateComponent, {
      data: {
        googleId: this.googleId,
      }
    });
  }

  openReviewEditModal() {
    this.modalRef = this.modalService.open(ReviewEditComponent, {
      data: {
        googleId: this.googleId,
        reviewId: this.reviewId
      }
    });
  }

  onDelete() {
    this._reviewsApiService.deleteReview(this.reviewId);
    // this._reviewsApiService.reviewsChanged.next(this.googleId);
  }
}
