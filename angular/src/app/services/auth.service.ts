import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User} from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:any;
  headers = new HttpHeaders();
  constructor(private http:HttpClient) {
  	this.url = environment.api;
  	this.headers.append('Content-type','application/json');
   }

   login(user){
   	console.log(user);
   	const headers = new HttpHeaders({"Content-type":"application/json"})
   	return this.http.post(this.url+"api/auth/login",user,{headers:headers});
   }

}
