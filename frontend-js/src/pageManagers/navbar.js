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
       /* return (`
        <nav class="navbar fixed-top2 navbar-expand-lg2 navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img id="brand-logo" src="assets/Outlandish_logo.png">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>        
        `)*/
        
        return (`
        <nav class="navbar fixed-top2 navbar-expand-lg navbar-light bg-light">
           <a class="navbar-brand" href="#">
                <img id="brand-logo" src="assets/Outlandish_logo.png">
            </a>
           
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                 
                    <li class="nav-item">
                        <a class="nav-link" href="#">NERDY</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">HOLIDAY</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">MUSIC</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FITNESS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">INSPIRATIONAL</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">SALE</a>
                    </li>
                </ul>
                <span class="navbar-text">
                
                    <a class="btn btn-primary nav-link" href="*">
                    CART <span class="badge badge-light">4</span>
                    </a>
               
                </span>
            </div>
        </nav>
        `)
        
    }
    
    render(){
        this.container.innerHTML = this.staticHTML
    }

}