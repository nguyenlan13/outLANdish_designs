
class PageManager{


    constructor(container){
        this.container = container
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners(){
        return null
    }

    fetchAndRenderPageResources(){
        return null
    }

    // handleError(error){
    //     if(error.type === "Authorizaiton Error"){
    //         this.handleAlert(error.msg)
    //         this.redirect('welcome')
    //     }else{
    //         this.handleAlert(error)
    //     }
    // }

    async render(currentId){
        this.container.innerHTML = this.staticHTML
        this.fetchAndRenderPageResources(currentId)
        // this.initBindingsAndEventListeners()
        
    }

}