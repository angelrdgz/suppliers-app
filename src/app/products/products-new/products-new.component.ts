import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.scss']
})
export class ProductsNewComponent implements OnInit {

	@Input() product:any = {name:'', price:0.00, discount:0.00, description:'', sku:''};

  constructor(
  	private ApiService: ApiService,
  	private route: ActivatedRoute,
  	private router: Router) { }

  ngOnInit() {
  }

  sendStore(){
  	console.log(this.product)
  	this.ApiService.storeProduct(this.product).subscribe((result) => {
      this.router.navigateByUrl('app/products');
    }, (err) => {
      console.log(err);
    });
  }

}
