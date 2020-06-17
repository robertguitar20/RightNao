import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  @Input() stepAmount:number;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
    
  }

}