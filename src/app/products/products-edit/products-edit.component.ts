import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent implements OnInit {

	@Input() product:any = [];

  constructor(
  	private ApiService: ApiService,
  	private route: ActivatedRoute,
  	private router: Router
  ) { }

  ngOnInit() {

  	this.getProduct(this.route.snapshot.paramMap.get("id"));
  }

  getProduct(id) {
    this.product = [];
    this.ApiService.getProduct(id).subscribe((data: {}) => {
      console.log(data);
      this.product = data.data;
    });
  }

  sendUpdate(){
  	console.log(this.product)
  	this.ApiService.updateProduct(this.route.snapshot.paramMap.get("id"), this.product).subscribe((result) => {
      this.router.navigateByUrl('app/products');
    }, (err) => {
      console.log(err);
    });
  }

}
