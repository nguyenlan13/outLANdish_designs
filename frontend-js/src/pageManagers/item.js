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
            <div class="loader"></div>
        `)
    }

    async addItem(e){
        if(e.target.tagName === "A"){
            e.preventDefault()
            if(e.target.id.split('-')[0] === 'add' ){
                // let counter = document.querySelector('#inc-num')
                let itemId = e.target.id.split('-')[1]
                this.itemToAdd = await this.adapter.addToCart(itemId)
                console.log(this.itemToAdd)
                // let currentId = this.itemToAdd.cart.id
                // console.log(currentId)
                // this.redirect('cart', currentId)
            }
        }
    }

              
                // if(e.target.querySelector === '.add-cart'){
                    
                            
                //     this.incrementCart = (num) => {
                //         let currentNumItems = parseInt(counter.innerText)
                //         let newCart = currentNumItems += num
                //         return newCart
                //     }
                
                // let counter = document.querySelector('#inc-num').innerText
                // console.log(counter)
                //  incrementCart = () => {


                // let cartItemCount = await this.adapter.getNumOfItems()
                // let currentCart = cartItemCount.length
                // console.log(currentCart)
                        // counter.innerText = currentCart
                            // let currentCart = document.querySelector('#inc-num').innerText
                            // let newCart = currentCart += num
                            // let newCart = currentCart++
                            // return newCart
                            // counter = 
                            
                //  }
                // let counter = currentCart++
                // console.log(counter)
            // }
        //  document.querySelector('#inc-num').innerText = `${currentCart}`
         
            // }
    //     }

    // }

    // updateCart(e){
    //     if(e.target.tagName === "A"){
    //         e.preventDefault()
    //         if(e.target.querySelector === '.add-cart'){
    //             let counter = document.querySelector('#inc-num')
                        
    //             this.incrementCart = (num) => {
    //                 let currentNumItems = parseInt(counter.innerText)
    //                 let newCart = currentNumItems += num
    //                 return newCart
    //             }
    //             document.querySelector('#inc-num').innerText = this.incrementCart(1)
    //         }
    //     }
    // }


    async fetchAndRenderPageResources(currentId) {
        let output1 = '';

        let item = await this.adapter.getItem(currentId);
        console.log(currentId)

            output1 += (`
      
                <img class="card-img-top rounded float-left padd" style="width: 40rem; margin-right: 20px" src=${item.item_path} alt="Card image cap">
                <div class="card-body"><span style="padding-top: 10px">
                    <h5 class="card-title padd">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text">${item.color}</p>
                        <p class="card-text">${item.size}</p>
                        <p class="card-text">$${item.price}</p>
                        <a href="#" class="btn btn-primary add-cart" id=add-${item.id}>Add to cart</a>
                        </span>
                </div>
            `)
        let output2 = ''
            if (item.reviews != null){
                for (let i = 0; i < item.reviews.length; i++){
                let reviewRating = item.review.rating
                let reviewContent = item.review.content
                let reviewUser = item.review.account.name

            output2 +=(`
                <div> 
                    <p>${reviewContent}reviews</p> <p>${reviewRating}5</p>/5 <p>${reviewUser}</p>
                <div>
           `)
            }
        }else{
            output2 +=(`<p> NO REVIEWS YET </p>`)
        }
            this.container.innerHTML = (`${output1}` + `${output2}`)
    }
}
