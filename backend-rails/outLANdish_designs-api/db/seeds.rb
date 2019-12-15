# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

lan = Account.create(email: "lan@gmail.com", name: "Lan", password: "password", billing_address: "123 fake street irvine, ca 92614", shipping_address: "321 fake street irvine, ca 92614", credit_card: "1234567890")

lan_cart = Cart.create(account_id: lan)

heapify = Item.create(name: "heapify", description: 'harry potter inspired, min heap', color: "maroon", size: "xs", price: "24.99", in_stock?: true)
christmas = Item.create(name: "js santa", description: 'javascript santa claus', color: "red", size: "xs", price: "19.99", in_stock?: true)

heapify_cart = CartItem.create(cart_id: lan_cart, item_id: heapify, quantity: 2)
christmas_cart = CartItem.create(cart_id: lan_cart, item_id: christmas, quantity: 1)

nerdy = Category.create(name: "Nerdy")
holiday = Category.create(name: "Holiday")
music = Category.create(name: "Music")
fitness = Category.create(name: "Fitness")
inspiration = Category.create(name: "Inspiration")

nerdy_item = ItemCategory.create(item_id: heapify, category_id: nerdy)
holiday_item = ItemCategory.create(item_id: christmas, category_id: holiday)