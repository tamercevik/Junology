import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planet } from 'src/app/models/planet';

@Component({
  selector: 'app-addMatchingRule',
  templateUrl: './addMatchingRule.component.html',
  styleUrls: ['./addMatchingRule.component.css']
})

export class AddMatchingRuleComponent implements OnInit {

  constructor(private http: HttpClient) { }

  planets:Planet[]=[];
  
  ngOnInit() {
    this.getPlanets().subscribe(data => {
      this.planets = data;
    });
  }

  getPlanets() {
    return this.http.get<Planet[]>(
      "https://localhost:44322/api/planets"
    );
  }
}
