import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DeleteModalComponent } from '../../delete-modal/delete-modal.component';

export interface DialogData {
  id: number;
  name: string;
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

	products:any = [];
	animal: string;
    name: string;

  constructor(
  	private ApiService: ApiService,
  	public dialog: MatDialog
  ) { }

  ngOnInit() {

  	this.getProducts();
  }

  getProducts() {
    this.products = [];
    this.ApiService.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.products = data.data;
    });
  }

  openDialog(id, name): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '250px',
      data: {name: name, id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
    	if(result != undefined){
           this.deleteProduct(result);
    	}
      console.log('The dialog was closed'+result);
    });
  }

  deleteProduct(id){

  	this.ApiService.deleteProduct(id)
      .subscribe(res => {
          this.getProducts();
        }, (err) => {
          console.log(err);
        }
      );

  }

}
