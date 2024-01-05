import { Component } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-rating-decimal',
	standalone: true,
	imports: [NgbRatingModule],
	templateUrl: './rating-decimal.html',

})
export class NgbdRatingDecimal {
	rating = 3.14;

	ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
	}
}
