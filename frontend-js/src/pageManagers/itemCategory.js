class ItemCategoryPage extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new ItemCategoryAdapter(adapter)
        // this.categoryId = ""
    }

    initBindingsAndEventListeners(){
        this.detailsButton = this.container.querySelector('.details')
        this.addToCart = this.container.querySelector('.add-cart')

        this.detailsButton.addEventListener('click', this.handleDetailsClick.bind(this))
        this.addToCart.addEventListener('submit', this.handleAddCartClick.bind(this))
    }

    handleDetailsClick(e){
        e.preventDefault()
        this.redirect('item')
    }

    handleAddCartClick(e){
        e.preventDefault()
        this.redirect('cart')
    }

    // async fetchAndRenderPageResources(){
    //     // try{
    //         const itemsCategory = await this.adapter.getCategoryItems()
    //         console.log(itemsCategory)
    //
    //     return itemsCategory
    //     // }catch(error){
    //     //     
    //     // }
        
    // }

    async buildHTML() {
            let output = '';
            output += `<div class="card-group" style="width: 35rem;">`
            let items = await this.adapter.getCategoryItems();
            for (let i = 0; i < items.length; i++) {
                let name = items[i].name;
                let imgPath = items[i].item_path;

                output += (`
               
                    <div class="card mr-4" style="width: 15rem;">
                        <img class="card-img-top" src="${imgPath}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                                <p class="card-text"> </p>
                                <a href="#" class="btn btn-primary details">Details</a>
                                <a href="#" class="btn btn-primary add-cart">Add to cart</a>
                        </div>
                    </div>
                
                `)
            }

            output += `</div>`

            return output;
        }
    
    async render(){
    console.log("PLZ WORK", arguments);

        this.container.innerHTML = await this.buildHTML()
        this.initBindingsAndEventListeners()
        // this.fetchAndRenderPageResources()
        // this.container.innerHTML = this.staticHTML
    }

    get staticHTML(){
        return (`
        <div class="loader"></div>
       
        `)
    }

}