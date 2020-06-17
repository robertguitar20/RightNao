import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GeneralSettingsComponent implements OnInit {

  constructor(

    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
  
  }


}
