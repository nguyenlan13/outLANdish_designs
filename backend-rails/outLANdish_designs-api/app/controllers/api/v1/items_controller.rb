class Api::V1::ItemsController < ApplicationController

    def index
        @items = Item.all
        render json: @items, status: 200
    end

    def create
        @item = Item.create(item_params)

        render json: @item, status: 200
    end

    def show
        @item = Item.find(params[:id])

        render json: @item, status: 200
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
        params.require(:item).permit()
    end
end

