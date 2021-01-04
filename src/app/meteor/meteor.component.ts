import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-meteor',
  templateUrl: './meteor.component.html',
  styleUrls: ['./meteor.component.scss']
})
export class MeteorComponent implements OnInit {
  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
