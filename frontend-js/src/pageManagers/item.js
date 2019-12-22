class ItemPage extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = adapter
    }




    get staticHTML(){
        return (`
        <div class="card-group" style="width: 35rem;">
            <div class="card text-right" style="width: 15rem;">
                <img class="card-img-top" src="assets/binarytree_christmas_mockup.png" alt="Card image cap" >
                <div class="card-body">
                    <h5 class="card-title text-center">Binary Christmas Tree</h5>
                        <p class="card-text"> </p>
                        <a href="#" class="btn btn-primary">Details</a>
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
    
    // get buildHTML() {
    //     var output = '';

    //     var items = this.adapter.getItems();

    //     for (var i = 0; i < items.length; i++) {
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

    render(){
        //this.buildHTML()
        this.container.innerHTML = this.staticHTML
    }

}