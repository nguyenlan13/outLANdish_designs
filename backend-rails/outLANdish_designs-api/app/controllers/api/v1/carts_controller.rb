class Api::V1::CartsController < ApplicationController
    
    def mycart
        current_cart = get_cart
        render json: {cart: current_cart, items: current_cart.items, id: current_cart.id}
        # render json: {cart: cart, items: cart.items, id: cart.id}
    end
end
