class ItemPage extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = adapter
    }




    get staticHTML(){
        return (`

        <div> Items Page </div>
        
        `)
    }
    
    // get buildHTML() {
    //     let output = '';

    //     let items = this.adapter.getItems();

    //     for (let i = 0; i < items.length; i++) {
    //         let title = item[i].title;
    //         output += (`
    //         <div class="card" style="width: 18rem;">
    //             <img class="card-img-top" src="assets/binarytree_christmas_mockup.png" alt="Card image cap">
    //             <div class="card-body">
    //                 <h5 class="card-title">${title}</h5>
    //                     <p class="card-text"> </p>
    //                     <a href="#" class="btn btn-primary">Add to cart</a>
    //             </div>
    //         </div>
    //         `)
    //         /*
    //         output += '<div class="card" style="width: 18rem;">';
    //         output += '<img class="card-img-top" src="assets/binarytree_christmas_mockup.png" alt="Card image cap">';
    //         output += '<div class="card-body">';
    //         output += ' <h5 class="card-title">' + items[i].title + '</h5>';
    //         output += '    <p class="card-text"> </p>';
    //         output += '    <a onclick="addItemToCart(' + items.id + ')" class="btn btn-primary">Add to cart</a>';
    //         output += '</div>';
    //         output += '</div>';
    //         //*/
    //     }

    //     return output;


    // }

    // render(){
    //     //this.buildHTML()
    //     this.container.innerHTML = this.staticHTML
    // }

}