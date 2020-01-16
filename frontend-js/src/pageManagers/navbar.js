class Navbar extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new CategoryAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        // this.container.addEventListener('click', this.handleClick.bind(this))
        this.container.onclick = this.handleClick.bind(this)
    }

    get loggedIn(){

    }

    handleClick(e){
        if(e.target.tagName === "A"){
            console.log(e.target)
            e.preventDefault()
            
            if(e.target.id.split('-')[0] == 'itemCategory'){
                let currentId = e.target.id.split('-')[1]                
                this.redirect("itemCategory", currentId);
                // return;
            }
            const route = e.target.id.split('-')[0]
            if(route !== this.currentPage()) { this.redirect(route) } 
            console.log(route)
        } 
        // else {
        //     this.redirect('welcome')
        // }
    }

    async fetchAndRenderPageResources() {
       this.renderNav()
       this.getCurrentItemCount()
    }

    async renderNav(){
        const navPart1 = (`
            <nav class="navbar fixed-top2 navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" id='welcome-link' href="#">
                <img id="brand-logo" src="assets/Outlandish_Designs_Neon_Lights_White.png">
            </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
        `)

        const navPart3 = (`
                </ul>
                    <span class="navbar-text">
                        <div class="navbar-nav"> 
                        <a class="nav-link" id="signup-link" href="#" >SIGN UP</a> <span style="padding-top: 6px">|</span> <a class="nav-link" id="login-link" href="#" >LOG IN</a> </div>
                                <a class="btn btn-primary nav-link" style="width: 150px" id="cart-link" href="#" >
                                <img class="cart-icon" src="assets/Shopping_cart_icon.png">
                                    <span class="badge badge-light" id="inc-num">0</span>
                                </a>
                    </span>
                </div>
            </nav>
        `)

        let output = '';

        let categories = await this.adapter.getCategories();
        for (let i = 0; i < categories.length; i++) {
            let categoryId = categories[i].id
            let name = categories[i].name;
            
            output += (`                
                    <li class="nav-item">
                        <a class="nav-text nav-link nav-font" id="itemCategory-${categoryId}-${name}" href="#" >${name}</a>
                    </li>
            `)
        }
        this.container.innerHTML = (`${navPart1}`) + (`${output}`) + (`${navPart3}`);
    }


    async getCurrentItemCount(){
        let cartItemCount = await this.adapter.getNumOfItems()
        let currentCart = cartItemCount.items.length
    
        if (currentCart != null){
            document.querySelector('#inc-num').innerText = `${currentCart}`
        }else
            document.querySelector('#inc-num').innerText = '0'
    }

    get staticHTML(){    
        return (`
        <div class="loader"></div>
        `)
    }
}