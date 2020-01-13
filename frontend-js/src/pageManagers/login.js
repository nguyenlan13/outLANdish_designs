class LoginPage extends PageManager{

    constructor(container, adapter){
       super(container)
       this.adapter = new LoginAdapter(adapter)
   }


    initBindingsAndEventListeners(){
        // if(this.form){
            this.form = this.container.querySelector('#login')
            this.form.addEventListener('submit', this.login.bind(this))
        // }
    }

    // fetchAndRenderPageResources(){
    //     if(this.form){
    //         this.form = this.container.querySelector('#login')
    //         this.form.addEventListener('submit', this.login.bind(this))
    //     }
    // }

    async login(e){
        e.preventDefault()
        const inputs = Array.from(e.target.querySelectorAll('input'))
        const [email, password] = inputs.map(input => input.value)
        const params = {
            account: {
                email, password
            }
        }
        console.log(params)
        try{
            await this.adapter.login(params)
            this.redirect('cart')
          }catch(error){
        //     this.handleError(error)
          }
    } 
   

    get staticHTML(){
        return(`
        <form id="login">
        <h2> Log In </h2>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
            </div>
            <button type="submit" class="btn btn-primary">Log In</button>
        </form>
        `)
    }
}