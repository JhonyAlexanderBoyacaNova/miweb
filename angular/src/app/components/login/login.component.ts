import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	user:any = {email:'',password:''};
  constructor(private auth:AuthService, private route:Router) { }

  ngOnInit() {

  }

  onSubmit(user: NgForm){
  	this.user = user.value;
  	console.log(this.user);
  	this.auth.login(this.user).subscribe((data)=>{
  		this.route.navigate(["/app/panel"]);
  	},(error)=>{
  		console.log(error);
  	})
  }

}
