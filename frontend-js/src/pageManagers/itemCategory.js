class ItemCategoryPage extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new ItemCategoryAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        this.container.onclick = this.handleClick.bind(this)
    }

    handleClick(e){
        if(e.target.tagName === "A"){
            e.preventDefault()
            
            if(e.target.id.split('-')[0] == 'item'){
                let currentId = e.target.id.split('-')[1]              
                this.redirect("item", currentId);
            }
            // else{
            //     if(e.target.querySelectorAll = '.add-cart'){
            //         let counter = document.querySelector('#inc-num')
                            
            //         this.incrementCart = (num) => {
            //             let currentNumItems = parseInt(counter.innerText)
            //             let newCart = currentNumItems += num
            //             return newCart
            //         }
            //         document.querySelector('#inc-num').innerText = this.incrementCart(1)
            //     }
            // }
        }
    }


    async fetchAndRenderPageResources(currentId) {
        let output = '';

        
        let items = await this.adapter.getCategoryItems(currentId);
            for (let i = 0; i < items.length; i++) {
                let itemId = items[i].id;
                let name = items[i].name;
                let imgPath = items[i].item_path;
                
                output += (`<div class="row">

               
                <div class="col mb-4">
                    <div class="card h-100>
                        <img class="card-img-top" src="${imgPath}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                                <p class="card-text"> </p>
                                <a href="#" class="btn btn-primary details" id="item-${itemId}">Details</a>
                            
                        </div>
                    </div>
                    </div>
                    </div>
                `)
            }
            // remove button?
                // <a href="#" class="btn btn-primary add-cart">Add to cart</a>/
        output += `</div>`
        this.container.innerHTML = (`${output}`);
    }

    // get staticHTML(){
    //     return (`
    //         <div class="loader"></div>
    //     `)
    // }




    // async fetchAndRenderPageResources(currentId) {
    //     let output = '';

    //     output += `<div class="card-group" style="width: 50rem;">`

    //     let items = await this.adapter.getCategoryItems(currentId);
    //         for (let i = 0; i < items.length; i++) {
    //             let itemId = items[i].id;
    //             let name = items[i].name;
    //             let imgPath = items[i].item_path;

    //             output += (`
                
    //                 <div class="card mr-4" style="width: 45rem;">
    //                     <img class="card-img-top" src="${imgPath}" alt="Card image cap">
    //                     <div class="card-body">
    //                         <h5 class="card-title">${name}</h5>
    //                             <p class="card-text"> </p>
    //                             <a href="#" class="btn btn-primary details" id="item-${itemId}">Details</a>
                            
    //                     </div>
    //                 </div>
    //             `)
    //         }
    //         // remove button?
    //             // <a href="#" class="btn btn-primary add-cart">Add to cart</a>/
    //     output += `</div>`
    //     this.container.innerHTML = (`${output}`);
    // }

    get staticHTML(){
        return (`
            <div class="loader"></div>
        `)
    }
}