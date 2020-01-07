class ItemPage extends PageManager{

    constructor(container, adapter){
        super(container)
        // this.adapter = adapter
        this.adapter = new ItemAdapter(adapter)
    }

    initBindingsAndEventListeners(){

    }


    // get staticHTML(){
    //     return (`

    //     <div> Items Page </div>
        
    //     `)
    // }
    
    async buildHTML() {
        let output = '';

        let item = await this.adapter.getItem();
console.log(item)

            output += (`
      
                <img class="card-img-top rounded float-left" style="width: 40rem" src=${item.item_path} alt="Card image cap">
                <div class="card-body"><span style="padding-top: 6px">
                    <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description} </p>
                        <p class="card-text">${item.color}</p>
                        <p class="card-text">${item.size} </p>
                        <p class="card-text">${item.price} </p>
                        <a href="#" class="btn btn-primary">Add to cart</a>
                        </span>
                </div>
        
            `)


        return output;

    }

    async render(){
        this.container.innerHTML = await this.buildHTML()
        // this.container.innerHTML = this.staticHTML
    }

}

// output += (`
// <div class="card" style="width: 18rem;">
//     <img class="card-img-top" src="assets/binarytree_christmas_mockup.png" alt="Card image cap">
//     <div class="card-body">
//         <h5 class="card-title">${item.description}</h5>
//             <p class="card-text"> </p>
//             <a href="#" class="btn btn-primary">Add to cart</a>
//     </div>
// </div>
// `)