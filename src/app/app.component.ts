import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  grade = 0;
  maxRating = 15;
  showRatingCounter = true;
  myRating: number;
  lists = ['item1','item2','item3','item4'];


  selectedRating(rate: number) {
    console.log('your rating is');
    console.log(rate);
    this.myRating = rate;
  }
}