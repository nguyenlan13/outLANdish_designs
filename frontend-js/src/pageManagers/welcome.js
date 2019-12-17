class WelcomePage{

    constructor(container){
        this.container = container
    }

    render(){
        this.container.innerHTML = '<div>hello</div>'
    }
}