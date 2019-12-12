Rails.application.routes.draw do
  resources :orders
  resources :accounts
  resources :wishlists
  resources :categories
  resources :reviews
  resources :items
  resources :carts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
