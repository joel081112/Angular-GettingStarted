import { AUTO_STYLE } from "@angular/animations";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import { Subscription } from 'rxjs';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {
    pageTitle = 'Product List';
    pageText = 'Yeet';
    imageHeight = 40;
    imageMargin = 2;
    errorMessage: string = '';
    //we will handle the assignment of this prooperty some time later
    sub!: Subscription;

    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In Set: ', value);
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] = [];

    showImage: boolean = false;
    //use lifecycle hooks
    products: IProduct[] = [];

    constructor(private productService: ProductService) { }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();

        //arrow function based method type as it uses and returns a method in a return type
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().includes(filterBy));
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        //this.sub can call the observer subscription and cancel it if needed by destorying it
        //it receives notifcations from the observable
        this. sub = this.productService.getProducts().subscribe({
            //processses next function
            //pass observer functions
            next: products => {
                //sets local products to return products
                this.products = products;
                this.filteredProducts = this.products;
            },
            //error handler executes if there is an error
            error: err => this.errorMessage = err
            //complete is not called here and is rarely called
        });
        
        this.listFilter = '';
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }//end Rating Clicked

}//end class