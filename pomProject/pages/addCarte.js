import {test, except} from '@playwright/test'

class addCarte {
    constructor(page){
        this.page = page;
        this.addCartBtn = '#add-to-cart-sauce-labs-backpack';
        
    }

    async add () {
        await this.page.click(this.addCartBtn);
    }
}
export {addCarte};