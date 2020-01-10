class ItemCategoryPage extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new ItemCategoryAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        this.container.addEventListener('click', this.handleClick.bind(this))

    }

    handleClick(e){
        if(e.target.tagName === "A"){
            e.preventDefault()
            
            if(e.target.id.split('-')[0] == 'item'){
                let currentId = e.target.id.split('-')[1]              
                this.redirect("item", currentId);
            // }else{
            //     if
            }
        }
    }

    updateCart(e){
        
    }

    // handleDetailsClick(e){
    //     if(e.target.tagName === "A"){
    //         // console.log(e.target)
    //         e.preventDefault()
            
    //         if(e.target.id.split('-')[0] == 'item'){
    //             let currentId = e.target.id.split('-')[1]  
    //             console.log(currentId)
    //             // let route = ('item', currentId)   
    //             // if(route !== this.currentPage()) { this.redirect(route) }   
    //             this.redirect("item", currentId);
    //         }
    //     // e.preventDefault()
    //     // console.log(e.target)
    
    //     // let currentId = e.target.className.split('-')[1]
    //     // this.redirect("item", currentId);
        
    //     // this.redirect('item')
    //     }
    // }

    // handleAddCartClick(e){
    //     e.preventDefault()
    //     this.redirect('cart')
    // }


    async fetchAndRenderPageResources(currentId) {
            let output = '';

            output += `<div class="card-group" style="width: 50rem;">`

            let items = await this.adapter.getCategoryItems(currentId);
            for (let i = 0; i < items.length; i++) {
                let itemId = items[i].id;
                let name = items[i].name;
                let imgPath = items[i].item_path;

                output += (`
               
                    <div class="card mr-4" style="width: 45rem;">
                        <img class="card-img-top" src="${imgPath}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                                <p class="card-text"> </p>
                                <a href="#" class="btn btn-primary details" id="item-${itemId}">Details</a>
                                <a href="#" class="btn btn-primary add-cart">Add to cart</a>
                        </div>
                    </div>
                `)
            }
            output += `</div>`

            this.container.innerHTML = (`${output}`);
        }

    get staticHTML(){
        return (`
            <div class="loader"></div>
        `)
    }
}