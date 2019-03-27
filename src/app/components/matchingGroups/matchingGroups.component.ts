import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatchingGroup } from "src/app/models/matching-Group";

@Component({
  selector: "app-matchingGroups",
  templateUrl: "./matchingGroups.component.html",
  styleUrls: ["./matchingGroups.component.css"]
})
export class MatchingGroupsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  matchingGroups: MatchingGroup[] = [];

  ngOnInit() {
    this.getMatchingGroups().subscribe(data => {
      this.matchingGroups = data;
      if (this.matchingGroups && this.matchingGroups.length > 0) {
        this.matchingGroups[0].selected = true;
      }
    });
  }

  getMatchingGroups() {
    return this.http.get<MatchingGroup[]>(
      "https://localhost:44322/api/matchingGroups"
    );
  }

  selectItem(id: any) {
    console.log("selected matching groupId: "+id  );
    this.matchingGroups.forEach(element => {
      if (element.matchingGroupId == id) {
        element.selected = true;
      } else {
        element.selected = false;
      }
    });
  }
}
