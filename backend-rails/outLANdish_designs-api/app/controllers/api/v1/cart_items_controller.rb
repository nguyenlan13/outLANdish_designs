class Api::V1::CartItemsController < ApplicationController



    def create
        cart_item = CartItem.new(cart: Cart.find(params[:cart_id]), item: Item.find(params[:item_id]))
        if cart_item.save
            render json: cart_item, status 200
        else
            render json: { message: "Sorry, item could not be added to cart. Please try again."}, status: 400 
        end
    end

    def destroy
        cart_item = CartItem.find_by(cart: params[:cart_id], item: params[:item_id])
        if cart_item.delete
            render json: status 200
        else
            render json: { message: "Sorry, item was not removed from cart. Please try again."}, status: 400 
        end
    end


end
