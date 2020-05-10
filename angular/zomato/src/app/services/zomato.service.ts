import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {ZomatoData} from '../../zomatodata'

@Injectable(
)
export class ZomatoService {
 
 
  constructor(private httpClient:HttpClient) { }


  getDatail():Observable<any>{
    return this.httpClient.get(`https://developers.zomato.com/api/v2.1/collections?city_id=4`, {
      headers : new HttpHeaders().set('user-key','9d7195c5b1202e0bb36b781fdb6a97ab')
    });

  }
  saveDetail(data):Observable<any>{
    console.log(data)
    return this.httpClient.post('http://localhost:9001/api/v1/model',data)
    
  }
}
