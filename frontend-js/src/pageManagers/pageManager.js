
class PageManager{


    constructor(container, adapter){
        this.container = container
        // this.adapter = new SignupAdapter(adapter)
    }

    fetchAndRenderPageResources(){
        return null
    }

    // handleError(err){
    //     if(err.type === "Authorizaiton Error"){
    //         this.handleAlert(err.msg)
    //         this.redirect('welcome')
    //     }else{
    //         this.handleAlert(err)
    //     }
    // }

    render(){
        this.container.innerHTML = this.staticHTML
        this.initBindingsAndEventListeners()
        this.fetchAndRenderPageResources()
    }

}