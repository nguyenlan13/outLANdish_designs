class CartPage extends PageManager{
    
    constructor(container, adapter){
        super(container)
        this.adapter = new CartAdapter(adapter)
        // this.showItemsInCart()
    }

    initBindingsAndEventListeners(){
        this.container.onclick = this.handleClick.bind(this)
        // this.container.addEventListener('submit', this.handleClick.bind(this))
    }
    
    get staticHTML(){
        return (`
            <div> Carts Page </div>
        `)
    }


    async handleClick(e){
        if(e.target.tagName === "A"){
            e.preventDefault()
            console.log(e.target)
            if(e.target.id.split('-')[0] == 'remove'){
                let currentId = e.target.id.split('-')[1]
                console.log(currentId)
                const deleteItem = await this.adapter.removeFromCart(currentId)        
                // this.redirect("cart", itemtId);
            }else{
                if(e.target.id.split('-')[0] == 'order'){
                    this.redirect("login")
                }
            }
        }
    }


    // async showItemsInCart(){
    //     let thing = document.getElementById('testing').addEventListener('click', e =>{
    //         console.log("hello")
    //         let items = this.adapter.showCartItems()
    //         console.log(items.item)
        
    //         // let items = this.adapter.showCartItems()
    //         // console.log(items)
    //     })
    
    //  }

     async fetchAndRenderPageResources(page, currentId){
        this.cartHtml(currentId)
        // this.showItemsInCart()
     }

//     async fetchAndRenderPageResources(page, currentId){
    async cartHtml(currentId){
        let output = '';
        output += `<div class="card-group">`
        let items = await this.adapter.showCartItems(currentId);
console.log(currentId)
console.log(items)
        for (let i = 0; i < items.length; i++) {
            let itemId = items[i].id;
            let name = items[i].name;
            let imgPath = items[i].item_path;
            let description = items[i].description
            let color = items[i].color
            let size = items[i].size
            let price = items[i].price
            console.log(price)
            output += (`
            <div style="width: 50%">
                <img class="card-img-top rounded float-left" style="width: 70%; margin-right: 20px" src=${imgPath} alt="Card image cap">
                <div class="card-body" style="width: 50%">    
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
        output +=`<div> <a href="#" class="btn btn-primary" id="order-" style="margin-right: 20px">Checkout</a></div> </div>`
        this.container.innerHTML = (`${output}`)
    }
}