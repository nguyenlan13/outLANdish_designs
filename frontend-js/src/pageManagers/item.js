class ItemPage extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new ItemAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        this.container.onclick = this.addItem.bind(this)
        // this.container.onclick = this.updateCart.bind(this)
        // this.container.addEventListener('submit', this.addItem.bind(this))
        // this.container.onSubmit = this.addItem.bind(this)
        // this.incCartItems = this.container.querySelector('.add-cart')
        // this.incCartItems.addEventListener('click', this.updateCart.bind(this))
        // this.container.onSubmit = this.addItem.bind(this)
    }

    get staticHTML(){
        return (`

        <div> Items Page </div>
        
        `)
    }

    async addItem(e){
        if(e.target.tagName === "A"){
            e.preventDefault()
            console.log(e.target)
            if(e.target.id.split('-')[0] = 'add' ){
                // e.preventDefault()
                console.log(e.target)
                let currentId = e.target.id.split('-')[1]
                console.log(currentId)
                // const itemToAdd = Array.from(e.target.querySelectorAll('input'))
                // const [email, password] = inputs.map(input => input.value)
                // const params = {
                //     account: {
                //         email, password
                //     }
                // }

                // try{
                //     await this.adapter.addToCart(currentId)
                //   }catch(error){
                // //     this.handleError(error)
                //   }


                this.itemToAdd = await this.adapter.addToCart(currentId)
                console.log(currentId)
                // let itemToAdd = await this.adapter.addToCart(currentId)      
                // console.log(itemToAdd)    
                // this.redirect("item", currentId);
                // return this.itemToAdd(currentId)
            }
        
            // this.itemToAdd(currentId) = await this.adapter.addToCart(currentId)
            // return itemToAdd
            // console.log(itemToAdd)
        }
    }

    updateCart(e){
        if(e.target.tagName === "A"){
            e.preventDefault()
            if(e.target.querySelector = '.add-cart'){
                let counter = document.querySelector('#inc-num')
                        
                this.incrementCart = (num) => {
                    let currentNumItems = parseInt(counter.innerText)
                    let newCart = currentNumItems += num
                    return newCart
                }
                document.querySelector('#inc-num').innerText = this.incrementCart(1)
            }
        }
    }


    async fetchAndRenderPageResources(currentId) {
        let output = '';

        let item = await this.adapter.getItem(currentId);
        console.log(currentId)

            output += (`
      
                <img class="card-img-top rounded float-left" style="width: 40rem; margin-right: 20px" src=${item.item_path} alt="Card image cap">
                <div class="card-body"><span style="padding-top: 10px">
                    <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text">${item.color}</p>
                        <p class="card-text">${item.size}</p>
                        <p class="card-text">$${item.price}</p>
                        <a href="#" class="btn btn-primary add-cart" id=add-${item.id}>Add to cart</a>
                        </span>
                </div>
        
            `)
            this.container.innerHTML = (`${output}`)
        // return output;
    }
}
