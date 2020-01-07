class CartPage extends PageManager{
    
    constructor(container, adapter){
        super(container)
        this.adapter = new CartAdapter(adapter)
    }

    initBindingsAndEventListeners(){

    }
    

     get staticHTML(){
        return (`

        <div> Carts Page </div>
        
        `)
    }
}