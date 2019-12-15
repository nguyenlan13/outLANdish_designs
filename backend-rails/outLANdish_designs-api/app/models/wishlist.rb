class Wishlist < ApplicationRecord
    belongs_to :account
    has_many :wishlist_items
    item has_many :items, through: :wishlist_items
end
