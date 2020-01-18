class ItemPage extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new ItemAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        this.container.onclick = this.addItem.bind(this)
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
                let itemId = e.target.id.split('-')[1]
                this.itemToAdd = await this.adapter.addToCart(itemId)
                console.log(this.itemToAdd)
            }
        }
    }

    async fetchAndRenderPageResources(currentId) {
        let output1 = '';

        let item = await this.adapter.getItem(currentId);
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
          
            let output2 = (`
            <h5>Reviews:</h5>
            `)
            let itemReview = item.reviews
            if (itemReview != ''){
                for (let i = 0; i < itemReview.length; i++){
                let reviewRating = itemReview[i].rating
                let reviewContent = itemReview[i].content

            output2 += (`
                <div> 
                    <p>${reviewContent} - ${reviewRating}/5</p>
                <div>
           `)
                }
            }else{
                output2 +=(`
                <h5>NO REVIEWS YET</h5>
                `)
            }
        this.container.innerHTML = (`${output1}`+`${output2}`)
    }
}
