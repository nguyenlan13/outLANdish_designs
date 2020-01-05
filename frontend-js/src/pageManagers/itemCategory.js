class ItemCategoryPage extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new ItemCategoryAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        this.form = this.container.querySelector('#details')
        // this.form = this.container.querySelector('#add-cart')

        this.form.addEventListener('submit', this.handleDetailsClick.bind(this))
        // this.form.addEventListener('submit', this.handleAddCartClick.bind(this))
    }

    handleDetailsClick(e){
        e.preventDefault()
        this.redirect('item')
    }

    // handleAddCartClick(e){
    //     e.preventDefault()
    //     this.redirect('cart')
    // }

    async fetchAndRenderPageResources(){
        // try{
            const itemsCategory = await this.adapter.getItems()
            // this.owner = new Owner(ownerObj)
        //     this.renderOwner()
        // }catch(err){
        //     this.handleError(err)
        // }
        
    }

    buildHTML() {
            let output = '';
    
            let items = this.adapter.getItems();
    
            for (let i = 0; i < items.length; i++) {
                let name = item[i].name;
                let imgPath = item[i].img_path;

                output += (`
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${imgPath}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                            <p class="card-text"> </p>
                            <a href="#" class="btn btn-primary">Add to cart</a>
                    </div>
                </div>
                `)
                /*
                output += '<div class="card" style="width: 18rem;">';
                output += '<img class="card-img-top" src="assets/binarytree_christmas_mockup.png" alt="Card image cap">';
                output += '<div class="card-body">';
                output += ' <h5 class="card-title">' + items[i].title + '</h5>';
                output += '    <p class="card-text"> </p>';
                output += '    <a onclick="addItemToCart(' + items.id + ')" class="btn btn-primary">Add to cart</a>';
                output += '</div>';
                output += '</div>';
                //*/
            }
    
            return output;
    
    
        }
    
        render(){
            this.container.innerHTML = this.buildHTML()
            // this.container.innerHTML = this.staticHTML
        }

    get staticHTML(){
        return (`
        <div class="card-group" style="width: 35rem;">
            <div class="card text-right" style="width: 15rem;">
                <img class="card-img-top" src="assets/binarytree_christmas_mockup.png" alt="Card image cap" >
                <div class="card-body">
                    <h5 class="card-title text-center">Binary Christmas Tree</h5>
                        <p class="card-text"> </p>
                        <a href="#" class="btn btn-primary" id="details">Details</a>
                        <a href="#" class="btn btn-primary">Add to cart</a>
                </div>
            </div>
            <br>
            <div class="card text-right" style="width: 15rem;">
                <img class="card-img-top" src="assets/Christmas_Maroon_Heapify.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title text-center">Heapify</h5>
                        <p class="card-text"> </p>
                        <a href="#" class="btn btn-primary">Details</a>
                        <a href="#" class="btn btn-primary">Add to cart</a>
                </div>
            </div>
         </div>
        `)
    }

}