import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatchingRule } from 'src/app/models/matching-Rule';

@Component({
  selector: 'app-matchingRules',
  templateUrl: './matchingRules.component.html',
  styleUrls: ['./matchingRules.component.css']
})

export class MatchingRulesComponent implements OnInit {
  
  constructor(private http: HttpClient) {}

  matchingRules: MatchingRule[] = [];

  ngOnInit() {
    this.getMatchingRules().subscribe(data => {
      this.matchingRules = data;
    });
  }

  getMatchingRules() {
    return this.http.get<MatchingRule[]>(
      "https://localhost:44322/api/matchingrules"
    );
  }

}
