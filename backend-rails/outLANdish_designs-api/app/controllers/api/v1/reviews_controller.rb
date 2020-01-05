class Api::V1::ReviewsController < ApplicationController
    
    def index
        if params[:item_id]
            @reviews = Item.find(params[:item_id]).reviews
        # elsif params[:account_id]
        #     @reviews = Account.find(params[:account_id]).reviews
        else
            @reviews = Account.find(params[:account_id]).reviews
        # else
        #     @reviews = Review.all
        end
        render json: @reviews, status: 200
    end

    def create
        @review = Review.create(review_params)

        render json: @review, status: 200
    end

    # def show
    #     @item = Item.find(params[:id])

    #     render json: {item: @item, categories: @item.categories}
    #     # render json: @item, status: 200
    # end

    # def edit

    # end

    # def update
    #     @item = Item.find(params[:id])
    #     @item.update(item_params)
    #     render json: @item, status: 200
    # end

    # def destroy
    #     @item = Item.find(params[:id])
    #     @item.delete
    
    #     render json: {itemId: @item.id}
    # end

    private
    def review_params
        params.require(:review).permit(:account_id, :item_id, :rating, :content)
    end
end
