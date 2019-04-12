import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() user:any = {email:'',password:''};

  constructor(
  	private ApiService: ApiService,
  	private route: ActivatedRoute,
  	private router: Router
  ) { }

  ngOnInit() {
  }

  login(){
  	this.ApiService.login(this.user).subscribe((result) => {
  		console.log(result);
      //this.router.navigateByUrl('app/products');
    }, (err) => {
      console.log(err);
    });
  }

}
