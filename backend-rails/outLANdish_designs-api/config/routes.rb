Rails.application.routes.draw do
  
namespace :api do
    namespace :v1 do
        resources :orders
        resources :accounts
        resources :wishlists
        resources :categories
        resources :reviews
        resources :items
        resources :carts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
        end
    end

    namespace :api do
        namespace :v1 do
            resources :items do
                resources :categories
            end
            resources :carts do
                resources :items
            end
            resources :items do
                resources :reviews
            end
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
    
    namespace :api do
        namespace :v1 do
            get "/signup" => "accounts#new", as: "signup"
            get "/login" => "sessions#new", as: "login"
            post "/login" => "sessions#create"
            delete "/logout" => "sessions#destroy"
        end
    end

end
