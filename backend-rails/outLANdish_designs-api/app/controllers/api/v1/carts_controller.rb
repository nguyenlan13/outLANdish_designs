class Api::V1::CartsController < ApplicationController

    # def index
    #     cart = Cart.all

    #     render json: {cart: cart, items: cart.items}
    # end

    # def create
    #     if params[:account_id]
    #         @account = Account.find(params[:account_id])
    #         @cart = @account.cart.build
    #     else
    #         @cart = Cart.create
    #         if @cart.save
    #             render json: @cart, status: 200
    #         else
    #             render json: { message: "There was an error" }
    #         end
    #     end
    # end

    
    def mycart
        current_cart = get_cart

        
        # cart = Cart.find_by(id: session[:cart_id])
        # numitems = @cart.items.length
        render json: {cart: current_cart, items: current_cart.items}
    end


    # def show
    #     # cart = get_cart
    #     # @cart = current_cart
       
    #     cart = Cart.find_by(id: session[:cart_id])
    #     # @item = @cart.items.build

    #     render json: {cart: cart, items: cart.items}
    # end
end
