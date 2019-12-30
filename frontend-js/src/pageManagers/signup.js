class SignupPage extends PageManager{

    constructor(container, adapter){
        super(container)
        // this.adapter = adapter
        this.adapter = new SignupAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        this.form = this.container.querySelector('#signup')
        this.form.addEventListener('submit', this.newAccount.bind(this))
    }

    async newAccount(e){
        e.preventDefault()
        const inputs = Array.from(e.target.querySelectorAll('input'))
        const [email, name, password, billing_street_1, billing_street_2, billing_city, billing_state, billing_zip, shipping_street_1, shipping_street_2, shipping_city, shipping_state, shipping_zip] = inputs.map(input => input.value)
        // console.log(email, name, password, billing_street_1, billing_street_2, billing_city, billing_state, billing_zip, shipping_street_1, shipping_street_2, shipping_city, shipping_state, shipping_zip)
        const params = {
            account: {
                email, name, password, billing_street_1, billing_street_2, billing_city, billing_state, billing_zip, shipping_street_1, shipping_street_2, shipping_city, shipping_state, shipping_zip
            }
        }
        // try{
            await this.adapter.signup(params)
            // this.redirect('profile')
        //   }catch(err){
        //     this.handleError(err)
        //   }
    }

    get staticHTML(){
        return(`
        <h2> Sign Up for an Account </h2>
         <form id="signup">
         <p>
           <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Email" required>
                </div>
                <div class="form-group col-md-6">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Name" required>
                </div>
                <div class="form-group col-md-6">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password" required>
                </div>
            </div>
            </p>
            <p>
            <div class="form-group">
                <label for="billAddress1">Billing Address 1 </label>
                <input type="text" class="form-control" id="billAddress1" placeholder="1234 Main St" required>
            </div>
            <div class="form-group">
                <label for="billAddress2">Billing Address 2 </label>
                <input type="text" class="form-control" id="billAddress2">
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="billCity">City</label>
                    <input type="text" class="form-control" id="billCity" required>
                </div>
                    <div class="form-group col-md-4">
                    <label for="billState">State</label>
                <select id="billState" class="form-control">
                        <option value="" selected="selected">Select a State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>                        
                    </select>             
                </div>
                <div class="form-group col-md-2">
                    <label for="billZip">Zip</label>
                    <input type="text" class="form-control" id="billZip" required>
                </div>
            </div>
            </p>
            <p>
            <div class="form-group">
                <label for="shipAddress1">Shipping Address 1 </label>
                <input type="text" class="form-control" id="shipAddress1" placeholder="1234 Main St" required>
            </div>
            <div class="form-group">
                <label for="shipAddress2">Shipping Address 2 </label>
                <input type="text" class="form-control" id="shipAddress2">
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="shipCity">City</label>
                    <input type="text" class="form-control" id="shipCity" required>
                </div>
                    <div class="form-group col-md-4">
                    <label for="shipState">State</label>
                <select id="shipState" class="form-control">
                        <option value="" selected="selected">Select a State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>                        
                    </select>             
                </div>
                <div class="form-group col-md-2">
                    <label for="shipZip">Zip</label>
                    <input type="text" class="form-control" id="shipZip" required>
                </div>
            </div>
            </p>
            <button type="submit" class="btn btn-primary">Create Account</button>
            </form>
        `)
    }


    // render(){
    //     this.container.innerHTML = this.staticHTML
    // }



}