class CartPage extends PageManager{
    
    constructor(container, adapter){
        super(container)
        this.adapter = new CartAdapter(adapter)
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
                this.redirect("cart", currentId);
            }else{
                if(e.target.id.split('-')[0] == 'order'){
                    this.redirect("login")
                }
            }
        }
    }


     async fetchAndRenderPageResources(currentId){
        this.fetchCartItems()
     }


    async fetchCartItems(){
        let output = '';
        output += `<h2 class="padd"> Your Cart: <h2> <div class="card-group">`
        let response = await this.adapter.showCartItems();
        let items = response['items']
        // console.log(items)
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
            <div class= "padd" style="width: 50%">
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
            <br>
            `)           
        }
        output +=`<div class="padd"> <a href="#" class="btn btn-primary" id="order-" style="margin-right: 20px">Checkout</a></div> </div>`
        this.container.innerHTML = (`${output}`)
    }
}