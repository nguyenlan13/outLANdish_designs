# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

lan = Account.create(email: "lan@gmail.com", name: "Lan", password: "password", billing_street_1: "123 Fake Street", billing_city: "Irvine", billing_state: "CA", billing_zip: 92614, shipping_street_1: "321 fake street", shipping_city: "huntington beach", shipping_state: "CA", shipping_zip: 92649)

lan_cart = Cart.create(account: lan)

heapify = Item.create(name: "Heapify", description: 'Harry Potter inspired, min heap', color: "Heathered Maroon", size: "XS,S,M,L,XL", price: 24.99, item_path: "assets/Christmas_Maroon_Heapify.png", in_stock?: true)
christmas = Item.create(name: "Binary Tree", description: 'Binary Christmas Tree', color: "Red", size: "XS,S,M,L,XL", price: 19.99, item_path: "assets/binarytree_christmas_mockup.png", in_stock?: true)
christmas2 = Item.create(name: "JS Santa", description: 'JS Holiday', color: "Red", size: "XS,S,M,L,XL", price: 19.99, item_path: "assets/Santa_js_christmas_mockup.png", in_stock?: true)
coming_soon1 = Item.create(item_path: "assets/Coming_soon_green.png")
coming_soon2 = Item.create(item_path: "assets/Coming_soon_pink.png")
coming_soon3 = Item.create(item_path: "assets/Coming_soon_purple.png")


heapify_cart = CartItem.create(cart: lan_cart, item: heapify, quantity: 2)
christmas_cart = CartItem.create(cart: lan_cart, item: christmas, quantity: 1)

nerdy = Category.create(name: "NERDY")
holiday = Category.create(name: "HOLIDAY")
music = Category.create(name: "MUSIC")
fitness = Category.create(name: "FITNESS")
inspirational = Category.create(name: "INSPIRATIONAL")
sale = Category.create(name: "SALE")

nerdy_item = ItemCategory.create(item: heapify, category: nerdy)
nerdy_item2 = ItemCategory.create(item: christmas, category: nerdy)
nerdy_item3 = ItemCategory.create(item: christmas2, category: nerdy)
holiday_item = ItemCategory.create(item: christmas, category: holiday)
holiday_item2 = ItemCategory.create(item: christmas2, category: holiday)
coming1 = ItemCategory.create(item: coming_soon1, category: fitness)
coming2 = ItemCategory.create(item: coming_soon2, category: inspirational)
coming3 = ItemCategory.create(item: coming_soon3, category: sale)

lan_order = Order.create(account:lan, order_date: "12/22/19", po_number: "LN122219", shipping_cost: 5.99, order_total: 25.99, billing_street_1: "123 Fake Street", billing_city: "Irvine", billing_state: "CA", billing_zip: 92614, shipping_street_1: "321 Fake Street", shipping_city: "Huntington Beach", shipping_state: "CA", shipping_zip: 92649)
lan_order_items = OrderItem.create(item: heapify, order: lan_order, item_name: "Heapify", item_description: 'Harry Potter inspired, min heap', item_color: "Heathered Maroon", item_size: "XS", item_price: 24.99, quantity: 1)