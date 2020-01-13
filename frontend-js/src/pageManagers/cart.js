class CartPage extends PageManager{
    
    constructor(container, adapter){
        super(container)
        this.adapter = new CartAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        this.container.addEventListener('submit', this.handleClick.bind(this))
        console.log("what")
    }
    
    get staticHTML(){
        return (`
            <div> Carts Page </div>
        `)
    }


    handleClick(e){
        if(e.target.tagName === "A"){
            e.preventDefault()
            console.log(e.target)
            if(e.target.id.split('-')[0] == 'remove'){
                let itemId = e.target.id.split('-')[1]
                console.log(ItemId)
                const deleteItem = this.adapter.removeFromCart(itemId)        
                this.redirect("cart", itemtId);
            // }else{
            //     if
            }
        }
    }




    async fetchAndRenderPageResources(currentId){
        let output = '';
        output += `<div class="card-group">`
        let items = await this.adapter.showCartItems(currentId);
console.log(currentId)
        for (let i = 0; i < items.length; i++) {
            let itemId = items[i].id;
            let name = items[i].name;
            let imgPath = items[i].item_path;
            let description = items[i].description
            let color = items[i].color
            let size = items[i].size
            let price = items[i].price
            console.log(price)
        // let params = 
            output += (`
            <div class="card" style="width: 18rem">
                <img class="card-img-top rounded float-left" style="width: 100%; margin-right: 20px" src=${imgPath} alt="Card image cap">
                <div class="card-body">    
                    <h5 class="card-title">${name}</h5>
                        <p class="card-text">${description}</p>
                        <p class="card-text">${color}</p>
                        <p class="card-text">${size}</p>
                        <p class="card-text">$${price}</p>
                        <a href="#" class="btn btn-primary remove-item" id="remove-${itemId}">Remove</a>
                </div>
            </div>
            `)           
        }
        output +=`</div>`
        this.container.innerHTML = (`${output}`)
    }
}