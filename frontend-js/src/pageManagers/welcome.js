class WelcomePage extends PageManager{

    constructor(container){
        super(container)
    }

    get staticHTML(){
        return (`
                <p><img class="card-img-top rounded float-left" style="width: 40rem; margin-right: 20px" src="Assets/OH_SALE_YES!.png"> ALL SALE ITEMS UNDER $20! </p>
        `)
    }

}