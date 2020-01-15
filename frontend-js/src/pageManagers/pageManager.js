
class PageManager{


    constructor(container){
        this.container = container
        // this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners(){
        return null
    }

    fetchAndRenderPageResources(){
        return null
    }

    handleError(error){
        if(error.type === "Authorization Error"){
            this.handleAlert(error.msg)
            this.redirect('welcome')
        }else{
            this.handleAlert(error)
        }
    }

    async render(page, currentId){
        this.container.innerHTML = this.staticHTML
        this.fetchAndRenderPageResources(page, currentId)
        this.initBindingsAndEventListeners()
    }
}