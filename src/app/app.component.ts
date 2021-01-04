import { Component } from '@angular/core';
import { from, of, concat } from 'rxjs';
import { delay, concatMap, tap } from 'rxjs/operators';
import {default as love} from '../data/book.css';
import { anniversaries } from '../data/anniversary';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  date = '';

  currentStyle = '';

  showMeteor = false;
  meteorMessage = '';

  constructor() {
    const date = new Date();
    for (let d of anniversaries) {
      if (d.date.getMonth() === date.getMonth() && d.date.getDate() == date.getDate()) {
        this.showMeteor = true;
        this.meteorMessage = d.desc;
        break;
      }
    }

    setInterval(() => {
      this.showMeteor = false;
    }, 6000);
  }

  ngOnInit() {
    var together = new Date();
    together.setFullYear(2016, 11, 16);
    together.setHours(22);
    together.setMinutes(45);
    together.setSeconds(2);
    together.setMilliseconds(0);

    setInterval(() => {
      this.timeElapse(together);
    }, 600);
  }

  ngAfterViewInit(): void {
    const styleSection1$ = from(love)
      .pipe(
        concatMap(char => of(char).pipe(delay(40))),
        tap(char => this.currentStyle += char || ' ')
      );

    concat(styleSection1$,).subscribe();
  }

  timeElapse(c): void {
    let e = Date();
    let secondC = (Date.parse(e) - Date.parse(c)) / 1000;
    let dayC = Math.floor(secondC / (3600 * 24));
    secondC = secondC % (3600 * 24);

    let hourC = Math.floor(secondC / 3600);
    secondC = secondC % 3600;
    let minuteC = Math.floor(secondC / 60);
    secondC = secondC % 60;

    let h = '' + hourC;
    if (hourC < 10) {
      h = ('0' + hourC).slice(-2)
    }

    let m = '' + minuteC;
    if (minuteC < 10) {
      m = ('0' + minuteC)
    }

    let s = '' + secondC;

    if (secondC < 10) {
      s = ('0' + secondC).slice(-2)
    }

    this.date = '<span class="digit">' + dayC + '</span> days ' +
      '<span class="digit">' + h + '</span> hours ' +
      '<span class="digit">' + m + '</span> minutes ' +
      '<span class="digit">' + s + "</span> seconds";
  }
}
