class Item < ApplicationRecord
    has_many :cart_items
    has_many :carts, through: :cart_items

    has_many :reviews
    has_many :wishlist_items
    item has_many :wishlists, through: :wishlist_items
    has_many :item_categories
    has_many :categories, through: :item_categories
end
