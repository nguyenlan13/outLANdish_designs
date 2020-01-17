class Api::V1::ItemsController < ApplicationController

    def index
        if params[:category_id]
            items = Category.find(params[:category_id]).items
            puts "category"
        elsif params[:cart_id]
            items = Cart.find(params[:cart_id]).items
            puts "cart"
        elsif params[:order_id]
            items = Order.find(params[:order_id]).items
            puts "order"
        else
            
            items = Item.all
            puts "else"
        end
            render json: items, status: 200
        # render json: @items, include: [:carts, :cart_items, :categories, :item_categories], status: 200
    end

    def create
        item = Item.create(item_params)

        render json: item, status: 200
    end

    def show
        item = Item.find(params[:id])
        render json: item, include: [:categories, :reviews]

    end

    def edit

    end

    def update
        @item = Item.find(params[:id])
        @item.update(item_params)
        render json: @item, status: 200
    end

    def destroy
        @item = Item.find(params[:id])
        @item.delete
    
        render json: {itemId: @item.id}
    end

    private
    def item_params
        params.require(:item).permit(:name, :description, :color, :size, :price, :item_path, :item_img, :in_stock?)
    end
end

