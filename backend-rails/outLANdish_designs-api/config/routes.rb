Rails.application.routes.draw do
  resources :wishlists
  resources :categories
  resources :reviews
  resources :customers
  resources :items
  resources :carts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
