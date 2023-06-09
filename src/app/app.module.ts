import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookCardComponent } from './components/book-card/book-card.component';
import { ReviewCreateComponent } from './components/review-create/review-create.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookSearchComponent } from './components/book-search/book-search.component';

import { MongodbApiService } from './service/mongodb-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DescriptionPipe } from './pipes/description.pipe';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewEditComponent } from './components/review-edit/review-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    ReviewCreateComponent,
    NavBarComponent,
    BookListComponent,
    BookSearchComponent,
    DescriptionPipe,
    ReviewListComponent,
    ReviewEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MongodbApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
