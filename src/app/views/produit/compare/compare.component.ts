import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrapperService } from '../../../controller/services/parametres/scrapping/scrapper.service';
import { Scrapper } from '../../../controller/entities/parametres/scrapping/Scrapper';
import { ScrapperRequest } from '../../../controller/entities/parametres/scrapping/ScrapperRequest';
import { NgIf } from "@angular/common";

@Component({
    selector: 'app-compare',
    standalone: true,
    imports: [FormsModule, NgIf],
    templateUrl: './compare.component.html',
    styleUrls: ['./compare.component.scss']
})
export class CompareComponent {

    private scrapperService = inject(ScrapperService);

    public scrapperList?: Scrapper[];
    category: string = '';
    productName: string = '';
    max_price: number = 0;
    min_price: number = 0;
    sources: string = '';
    product: string = '';
    isLoading: boolean = false;
    noResults: boolean = false;
    timeoutMessage: boolean = false;


    onSubmit() {
        console.log('Category:', this.category);
        console.log('Product Name:', this.productName);

        const request: ScrapperRequest = {
            productName: this.productName,
            categorie: this.category
        };

        this.isLoading = true;
        this.noResults = false;
        this.timeoutMessage = false;

        const timeout = setTimeout(() => {
            this.isLoading = false;
            this.timeoutMessage = true;
        }, 120000); // 60 seconds timeout

        this.scrapperService.getPrices(request).subscribe({
            next: data => {
                clearTimeout(timeout);
                this.scrapperList = data;
                console.log("Scrapper List :", data);

                if (data.length > 0) {
                    this.product = this.productName;
                    this.max_price = Math.max(...data.map(item => item.prix ?? 0));
                    this.min_price = Math.min(...data.map(item => item.prix ?? Infinity));
                    this.sources = data[0].source;
                } else {
                    this.noResults = true;
                }

                this.isLoading = false;
            },
            error: err => {
                clearTimeout(timeout);
                console.log(err);
                this.isLoading = false;
            }
        });
    }
}
