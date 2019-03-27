import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-addMatchingGroup",
  templateUrl: "./addMatchingGroup.component.html",
  styleUrls: ["./addMatchingGroup.component.css"]
})
export class AddMatchingGroupComponent implements OnInit {
  constructor() {}

  groupName: string;

  ngOnInit() {}

  addGroup() {

    alert("grup adı :  "+this.groupName);
  }
}
