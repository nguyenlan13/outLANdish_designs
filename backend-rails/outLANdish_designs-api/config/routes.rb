Rails.application.routes.draw do
  
# namespace :api do
#     namespace :v1 do
#         # resources :orders
#         # resources :accounts
#         # resources :wishlists
#         resources :categories
#         # resources :reviews
#         resources :items
#         # resources :carts
#   # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
#         end
#     end

    namespace :api do
        namespace :v1 do
           
            resources :items do
                resources :categories
                resources :reviews
            end

            resources :categories do
                resources :items
            end

            resources :accounts do
                resources :orders
                resources :reviews
                resources :wishlists, only: [:show]
            end

            resources :carts do
                resources :items, only: [:index]
            end

            # resources :carts
            # resources :categories
            # resources :items
            resources :cart_items, only: [:create, :destroy]
           

            get "/auth" => 'sessions#auth'
            get "/signup" => "accounts#new", as: "signup"
            post "/signup" => "accounts#create"
            get "/login" => "sessions#new", as: "login"
            post "/login" => "sessions#create"
            delete "/logout" => "sessions#destroy"
        end
    end

    # namespace :api do
    #     namespace :v1 do
    #         resources :carts do
    #             resources :items
    #         end
    #     end
    # end

    # namespace :api do
    #     namespace :v1 do
    #         resources :items do
    #             resources :reviews
    #         end
    #     end
    # end
    
    # namespace :api do
    #     namespace :v1 do
    #         get "/signup" => "accounts#new", as: "signup"
    #         get "/login" => "sessions#new", as: "login"
    #         post "/login" => "sessions#create"
    #         delete "/logout" => "sessions#destroy"
    #     end
    # end

end
