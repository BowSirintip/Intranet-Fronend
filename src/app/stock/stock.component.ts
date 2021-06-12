import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../models/product.model';
import { NetworkService } from '../services/network.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['image', 'name', 'price', 'stock', 'action']

  dataSoure = new MatTableDataSource<Product>();

  textSearch = '';
  user;
  value = false;
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private networkService: NetworkService,private route: ActivatedRoute , private router: Router) {
    this.dataSoure.sort = this.sort;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.user = localStorage.getItem("Username");
    console.log(this.user);
    if(this.user == null){
      this.router.navigate(['/']);
    }
  }

  

  ngAfterViewInit(): void {
    this.dataSoure.sort = this.sort;
    this.dataSoure.paginator = this.paginator;

  }
  
  search(event: Event) {
    let filterValue = ''
    if (event) {
      filterValue = (event.target as HTMLInputElement).value
    }

    this.dataSoure.filter = filterValue.trim().toLowerCase()
  }

  clearsearch() {
    this.textSearch = '';
    this.search(null);
  }

  onClickEdit(productId: number) {
    this.router.navigate(["/stock/form/"+productId])
  }

  onClickDelete(productId: number, name: string) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.networkService.deleteProduct(productId.toString()).subscribe(
          //success
          result => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            // this.feedNetwork();
          },
          //error
          error => {
            alert(error)
          }
        )

      }
    })


  }

  //Customite Sort Data
  sortData(sort: Sort) {
    // not using the MatTableDataSource.
    // listen to the sort's (matSortChange)
    // (matSortChange)="sortData($event)"
    const data = this.dataSoure.data.slice()
    if (!sort.active || sort.direction === '') {
      this.dataSoure.data = data
      return
    }

    this.dataSoure.data = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc'
      switch (sort.active) {
        case 'product_id': return compare(a.productId, b.productId, isAsc)
        default: return 0
      }

    })
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1)
}

const DATA = [
  { id: 1, productID: '', name: 'Modi dignissimos qui aut dolor quia et incidunt assumenda itaque.', price: 877.00, stock: 224, image: '' },
  { id: 2, productID: '', name: 'At quaerat autem tempore totam tempora.', price: 639.00, stock: 115, image: '' },
  { id: 3, productID: '', name: 'Sunt enim voluptate nisi. Dolorum porro eos quasi. Temporibus voluptas consequuntur vel recusandae eligendi id officiis.', price: 467.00, stock: 25, image: '' },
  { id: 4, productID: '', name: 'Dolores doloribus labore sint ut. Eaque architecto omnis inventore accusamus tempore.', price: 474.00, stock: 25, image: '' },
  { id: 5, productID: '', name: 'Practical Rubber Salad', price: 335.00, stock: 63, image: '' },
  { id: 6, productID: '', name: 'Placeat omnis odio sed libero omnis repudiandae inventore.', price: 356.00, stock: 42, image: '' },
  { id: 8, productID: '', name: 'Sit et deleniti repellendus aliquid eos cumque.', price: 273.00, stock: 53, image: '' },
  { id: 9, productID: '', name: 'Refined Cotton Bike', price: 741.00, stock: 88, image: '' },
  { id: 11, productID: '', name: 'molestias et molestiae', price: 1256.00, stock: 55, image: '' },
  { id: 12, productID: '', name: 'Dolores doloribus labore sint ut. Eaque architecto omnis', price: 555.00, stock: 86, image: '' },
  { id: 13, productID: '', name: 'Dolorum porro eos quasi.', price: 516.00, stock: 245, image: '' },
  { id: 14, productID: '', name: 'Temporibus voluptas consequuntur vel recusandae eligendi id officiis.', price: 316.00, stock: 98, image: '' },
  { id: 15, productID: '', name: 'Eaque architecto omnis', price: 1256.00, stock: 24, image: '' },
  { id: 16, productID: '', name: 'molestias Sunt enim voluptate nisi.', price: 646.00, stock: 67, image: '' },
  { id: 17, productID: '', name: 'Placeat omnis odio molestias et molestiae', price: 543.00, stock: 24, image: '' },
  { id: 18, productID: '', name: 'dolor quia et incidunt assumenda', price: 335.00, stock: 12, image: '' },
]

