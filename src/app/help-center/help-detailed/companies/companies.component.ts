import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  toggle = {
    view: {
      selected: "",
      active: []
    }
  }
  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // routing
    this.activatedroute.paramMap.subscribe((change:any) => {
      let id = change.params.id;
      this.myToggle(id);
    });
  }

  myToggle( index ){
    this.toggle.view.active[index] = !this.toggle.view.active[index];

    if ( this.toggle.view.selected != index  ){
      this.toggle.view.active[this.toggle.view.selected] = false;
    }
    this.toggle.view.selected = index;
  }

}
