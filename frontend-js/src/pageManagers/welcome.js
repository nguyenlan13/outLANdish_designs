class WelcomePage extends PageManager{

    constructor(container){
        super(container)
    }

    get staticHTML(){
        return (`
       
                <h2> WELCOME PAGE </h2>
  
        `)
    }


    render(){
        this.container.innerHTML = this.staticHTML
    }
}