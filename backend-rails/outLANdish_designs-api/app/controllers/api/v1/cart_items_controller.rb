class Api::V1::CartItemsController < ApplicationController



    def create
        cart = get_cart
        cart_item = CartItem.new(cart: cart, item: Item.find(params[:item_id]))
        if cart_item.save
            # render json: cart_item, status 200
            render json: { message: "Item successfully added to cart!", status: 200}
        else
            render json: { message: "Sorry, item could not be added to cart. Please try again.", error: true }
        end
    end

    def destroy
        cart = get_cart
        cart_item = CartItem.find_by(cart: cart, item: params[:item_id])
        if cart_item.delete
            render json: { message: "Item successfully deleted cart!", status: 200}
        else
            render json: { message: "Sorry, item was not removed from cart. Please try again.", error: true}
        end
    end


end
