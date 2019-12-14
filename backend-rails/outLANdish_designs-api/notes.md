home page with login on top right
page for diff categories
page for checking out
page to view cart



Account
-id
-email
-password
-name
-billing_address
-shipping_address
-credit_card

Cart
-id
-account_id

Item
-id
-name
-description
-color
-size
-price
-in_stock?


Order
-date
-po_number
-

Cart_Item
-id
-cart_id
-item_id
<!-- -order_id -->
-quantity




review
-id
-account_id
-item_id
-rating
-content


category
-name

item_category
-item_id
-category_id


wishlist
-id
-account_id


wishlist_item
-id
-wishlist_id
-item_id


account has_many :orders
account has_many :reviews
account has_one :cart 
account has_one :wishlist

cart has_many :cart_items
cart has_many :items, through: :cart_items
cart belongs_to :account

item has_many :cart_items
item has_many :carts, through: :cart_items
item has_many :reviews
item has_many :wishlist_items
item has_many :wishlists, through: :wishlist_items
item has_many :item_categories
item has_many :categories, through: :item_categories

cart_item belongs_to :cart
cart_item belongs_to :item
<!-- cart_item belongs_to :order -->

order belongs_to :account
<!-- order belongs_to :cart -->
order has_many :cart_items
order has_many :items, through: :cart_items


review belongs_to :item
review belongs_to :customer

item_category belongs_to :item
item_category belongs_to :category

category has_many :items_categories
category has_many :items, through: :item_categories

wishlist belongs_to :account
wishlist has_many :wishlist_items
wishlist has_many :items, through wishlist_items

wishlist_item belongs_to :wishlist
wishlist_item belongs_to :item

