import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  productForm!: FormGroup;
  index!:number

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.setForm();

  }
  setForm() {
    this.productForm = this.fb.group({
      productId: new FormControl(''),
      productName: new FormControl(''),
      productPrice: new FormControl(''),
      productQnty: new FormControl(''),

    })
  }
  productList: any = [];
  submit() {
    this.productList.push(this.productForm.value);
    console.log(this.productList);
    // this.closeModal('addProductModal');

    // console.log(this.productForm.value);


  }

  //modal open method

  openModal(modalId: any,index:any) {

    if(modalId  == 'updateProductModal')
    {
      this.productForm = this.fb.group({
        productId: new FormControl(this.productList[index].productId),
        productName: new FormControl(this.productList[index].productName),
        productPrice: new FormControl(this.productList[index].productPrice),
        productQnty: new FormControl(this.productList[index].productQnty),
  
      })
       
    }

    this.index=index;
    const modalElement: any = document.getElementById(modalId);
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  closeModal(modalId: any) {
    const modalElement: any = document.getElementById(modalId);
    const modal = bootstrap.Modal.getInstance(modalElement);

    if (modal) {
      modal.hide();
    }



  }
  // THis MEthod is used to update the form
  update() {
    // console.log(this.productForm.value);
    this.productList[this.index].productId=this.productForm.value.productId;
    this.productList[this.index].productName=this.productForm.value.productName;
    this.productList[this.index].productRate=this.productForm.value.productRate;
    this.productList[this.index].productQnty=this.productForm.value.productQnty;
    
  }
  delete(){
    this.productList.splice(this.index,1);
    this.closeModal('deleteModal');
    
    
    
  }

}
