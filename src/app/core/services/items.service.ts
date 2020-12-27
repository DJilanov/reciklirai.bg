import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class ItemsService {

    categories = [];
    
    constructor(
        private apiService: ApiService
    ) { }

    public getByCategory(category) {
        return this.apiService.get('products/product/' + category);
    }

    public getByUrl(url) {
        return this.apiService.get('products/product?url=' + url);
    }

    public getByFilter() {
        return this.apiService.get('products');
    }

    public getByListOfIds(list) {
        return this.apiService.get('products?ids=' + JSON.stringify(list));
    }
}
