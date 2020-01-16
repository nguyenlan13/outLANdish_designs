class Navbar extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new ReviewAdapter(adapter)
    }

    
}