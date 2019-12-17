class Navbar extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = adapter
    }

    initBindingsAndEventListeners(){

        this.container.addEventListener('click', this.handleClick.bind(this))

    }

    handleClick(e){
        if(e.target.tagName === "A"){
            e.preventDefault()
            if(e.target.id !== 'logout-link'){
              const route = e.target.id.split('-')[0]
              if(route !== this.currentPage()) { this.redirect(route) } 
            }else{
              this.adapter.token = null
              this.redirect('welcome')
            }
        }
    }


    get staticHTML(){
        return (`
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Navbar w/ text</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/api/v1/categories/1/items">Nerdy</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/api/v1/categories/2/items">Holiday</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/api/v1/categories/3/items">Music</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/api/v1/categories/4/items">Fitness</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/api/v1/categories/5/items">Inspiration</a>
                    </li>
                </ul>
                <span class="navbar-text">
                <li class="nav-item">
                <a class="nav-link" href="http://localhost:3000/api/v1/accounts/:id/cart">CART</a>
                </li>
                </span>
            </div>
        </nav>
        `)
    }
    
    render(){
        this.container.innerHTML = this.staticHTML
    }

}