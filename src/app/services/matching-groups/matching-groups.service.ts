import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CONST_BaseServiceURL } from 'src/app/ServiceConstants';
import { stringify } from '@angular/core/src/util';
import { Observable } from 'rxjs';
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

getUsers(){
  return this.http.get(CONST_BaseServiceURL+ "users")
}

create(postdata:any){
  return this.http.post(CONST_BaseServiceURL+"matchingGroups",postdata);
}

addMatchingRule(postdata:any)
{
  return this.http.post(CONST_BaseServiceURL+"matchingRules",postdata);
}

addUser(postdata:any)
{
  return this.http.post(CONST_BaseServiceURL+"users",postdata);
}

removeMatchingGroup(matchingGroupId:any):Observable<void>
{
  console.log("Siliniyor.." + matchingGroupId)
  console.log(CONST_BaseServiceURL+"matchingGroups/"+matchingGroupId)
  return this.http.delete<void>(CONST_BaseServiceURL+"matchingGroups/"+matchingGroupId)
}

removeMatchingRule(matchingRuleId:any):Observable<void>
{
  console.log("Siliniyor.." + matchingRuleId)
  console.log(CONST_BaseServiceURL+"matchingRules/"+matchingRuleId)
  return this.http.delete<void>(CONST_BaseServiceURL+"matchingRules/"+matchingRuleId)
}

removeUser(id: any): any {
  return this.http.delete<void>(CONST_BaseServiceURL+"users/"+id)
}

}
