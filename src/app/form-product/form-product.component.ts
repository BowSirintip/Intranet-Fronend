import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { NetworkService } from '../services/network.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  editMode = false;
  imageSrc: string | ArrayBuffer;
  file: File;

  @ViewChild("productForm") productForm: NgForm;

  constructor(
    private networkService: NetworkService,
    private router: Router,
    private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      if (params.id) {
        this.editMode = true;
        this.feedNetwork(params.id);
      }
    });
  }

  feedNetwork(id: any) {
    this.networkService.getProductById(id).subscribe(
      result => {
        let { productId, name, price, stock, image } = { ...result }
        this.imageSrc = this.networkService.getImageNetwork(image);
        this.productForm.setValue({ productId, name, price, stock });
      },
      error => {
        this.router.navigate(["/stock"])
      }
    );
  }

  async onSubmitForm(productForm: NgForm) {
    if (productForm.invalid) {
      return;
    }
    let product: Product = {
      ...productForm.value,
      image: this.file
    }
    try {
      if(this.editMode){
        await this.networkService.editProduct(product).toPromise();
      }
      else{
        await this.networkService.addProduct(product).toPromise();
      }
      this.router.navigate(["/stock"])
    } catch (error) {
      this.router.navigate(["/stock"])
    }



  }

  onUploadImage(event) {
    const metaImage = event.target.files[0]
    if (metaImage) {
      this.file = metaImage;

      const reader = new FileReader()
      reader.readAsDataURL(metaImage)
      reader.onload = () => {
        this.imageSrc = reader.result
      }
    }
  }

}