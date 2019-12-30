class WelcomePage{

    constructor(container){
        this.container = container
    }

    get staticHTML(){
        return (`
       
                <img id="brand-logo" src="assets/Outlandish_logo.png">
  
        `)
    }


    render(){
        this.container.innerHTML = this.staticHTML
    }
}