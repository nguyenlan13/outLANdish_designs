# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

lan = Account.create(email: "lan@gmail.com", name: "Lan", password: "password", billing_street_1: "123 fake street", billing_city: "irvine", billing_state: "CA", billing_zip: 92614, shipping_street_1: "321 fake street", shipping_city: "huntington beach", shipping_state: "CA", shipping_zip: 92649)

lan_cart = Cart.create(account: lan)

heapify = Item.create(name: "Heapify", description: 'harry potter inspired, min heap', color: "maroon", size: "xs", price: 24.99, item_path: "assets/Christmas_Maroon_Heapify.png", in_stock?: true)
christmas = Item.create(name: "Binary", description: 'Binary Christmas Tree', color: "red", size: "xs", price: 19.99, item_path: "assets/binarytree_christmas_mockup.png", in_stock?: true)
christmas2 = Item.create(name: "Santa", description: 'JS Santa', color: "red", size: "xs", price: 19.99, item_path: "assets/Santa_js_christmas_mockup.png", in_stock?: true)

heapify_cart = CartItem.create(cart: lan_cart, item: heapify, quantity: 2)
christmas_cart = CartItem.create(cart: lan_cart, item: christmas, quantity: 1)

nerdy = Category.create(name: "Nerdy")
holiday = Category.create(name: "Holiday")
music = Category.create(name: "Music")
fitness = Category.create(name: "Fitness")
inspirational = Category.create(name: "Inspirational")
sale = Category.create(name: "Sale")

nerdy_item = ItemCategory.create(item: heapify, category: nerdy)
holiday_item = ItemCategory.create(item: christmas, category: holiday)
holiday_item2 = ItemCategory.create(item: christmas2, category: holiday)

lan_order = Order.create(account:lan, order_date: "12/22/19", po_number: "LN122219", shipping_cost: 5.99, order_total: 25.99, billing_street_1: "123 fake street", billing_city: "irvine", billing_state: "CA", billing_zip: 92614, shipping_street_1: "321 fake street", shipping_city: "huntington beach", shipping_state: "CA", shipping_zip: 92649)
lan_order_items = OrderItem.create(item: heapify, order: lan_order, item_name: "heapify", item_description: 'harry potter inspired, min heap', item_color: "maroon", item_size: "xs", item_price: 24.99, quantity: 1)