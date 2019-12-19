class Api::V1::ItemsController < ApplicationController

    def index
        @items = Item.all
        render json: @items, include: [:carts, :cart_items, :categories, :item_categories], status: 200
    end

    def create
        @item = Item.create(item_params)

        render json: @item, status: 200
    end

    def show
        @item = Item.find(params[:id])

        # render json: {item: @item, categories: @item.categories}
        render json: @item.to_json(include: {categories: {only: :name}})
        # render json: @item, status: 200
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
        params.require(:item).permit(:name, :description, :color, :size, :price, :in_stock?)
    end
end

