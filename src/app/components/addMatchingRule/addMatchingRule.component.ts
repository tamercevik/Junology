import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planet } from 'src/app/models/planet';
import { CONST_BaseServiceURL } from 'src/app/ServiceConstants';

@Component({
  selector: 'app-addMatchingRule',
  templateUrl: './addMatchingRule.component.html',
  styleUrls: ['./addMatchingRule.component.css']
})


export class AddMatchingRuleComponent implements OnInit {


  apiUrl: string = CONST_BaseServiceURL;
  constructor(private http: HttpClient) { }

  planets: Planet[] = [];

  ngOnInit() {
    this.getPlanets().subscribe(data => {
      this.planets = data;
    });
  }

  getPlanets() {
    return this.http.get<Planet[]>(
      this.apiUrl + "planets"
    );
  }
}
