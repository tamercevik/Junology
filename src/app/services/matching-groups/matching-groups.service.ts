import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CONST_BaseServiceURL } from 'src/app/ServiceConstants';
@Injectable({
  providedIn: 'root'
})
export class MatchingGroupsService {


  constructor(public http: HttpClient) {
  
  }

getAll(){
  return this.http.get(CONST_BaseServiceURL+ "matchingGroups")
}

getMatchingRules(selectedGroupId:any){
  return this.http.get(CONST_BaseServiceURL+ "matchingRules/list/"+selectedGroupId)
}

getPlanets(){
  return this.http.get(CONST_BaseServiceURL+ "planets")
}

create(postdata:any){
  return this.http.post(CONST_BaseServiceURL+"matchingGroups",postdata);
}

addMatchingRule(postdata:any)
{
  return this.http.post(CONST_BaseServiceURL+"matchingRules",postdata);
}

}
