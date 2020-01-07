
class PageManager{


    constructor(container){
        this.container = container
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

    render(){
        this.container.innerHTML = this.staticHTML
        this.initBindingsAndEventListeners()
        this.fetchAndRenderPageResources()
    }

}