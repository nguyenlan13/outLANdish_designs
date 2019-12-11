
Cart
-id
-customer_id


Customer
-id
-username
-password
-name


Item
-id
-name
-description
-color
-size


Cart_Item
-id
-cart_id
-item_id
-quantity


review
-id
-customer_id
-item_id
-rating


category/collection
-


wishlist
-id
-customer_id


wishlist_item
-id
-wishlist_id
-item_id


category/collection
-


cart has_many: cart_items
cart has_many: items through cart_items
cart belongs_to: customer

item has_many: cart_items
item has_many: carts,  through: cart_items
item has_many: reviews
item has_many: wishlist_items
item has_many: wishlists, through: wishlist_items
item belongs_to: category

cart_item belongs_to: cart
cart_item belongs_to: item

customer has_many: reviews
customer has_one: cart 
customer has_one: wishlist

review belongs_to: item
review belongs_to: customer

category has_many: items

wishlist belongs_to: customer
wishlist has_many: wishlist_items
wishlist has_many: items, through wishlist_items

wishlist_item belongs_to: wishlist
wishlist_item belongs_to: item

