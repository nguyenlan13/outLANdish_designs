# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

lan = Account.create(email: "lan@gmail.com", name: "Lan", password: "password", billing_street_1: "123 Fake Street", billing_city: "Irvine", billing_state: "CA", billing_zip: 92614, shipping_street_1: "321 fake street", shipping_city: "huntington beach", shipping_state: "CA", shipping_zip: 92649)

lan_cart = Cart.create(account: lan)

heapify = Item.create(name: "Heapify", description: 'Harry Potter inspired, Min Heap', color: "Heathered Maroon", size: "XS,S,M,L,XL", price: 24.99, item_path: "assets/Christmas_Maroon_Heapify.png", in_stock?: true)
christmas = Item.create(name: "Binary Tree", description: 'Binary Christmas Tree', color: "Red", size: "XS,S,M,L,XL", price: 19.99, item_path: "assets/binarytree_christmas_mockup.png", in_stock?: true)
christmas2 = Item.create(name: "JS Santa", description: 'JS Holiday', color: "Red", size: "XS,S,M,L,XL", price: 19.99, item_path: "assets/Santa_js_christmas_mockup.png", in_stock?: true)
halloween = Item.create(name: "Here For the Boos",  color: "Orange", size: "XS,S,M,L,XL", price: 19.99, item_path: "assets/Orange_Halloween.png", in_stock?: true)


shrug = Item.create(name: "Shrugs",  color: "Turquoise", size: "XS,S,M,L,XL", price: 19.99, item_path: "assets/BellaCanvas-26_Shrug.png", in_stock?: true)
bintree = Item.create(name: "Binary Tree",  color: "Deep Heather", size: "XS,S,M,L,XL", price: 19.99, item_path: "assets/DeepHeather3_Binary_Tree.png", in_stock?: true)
badass = Item.create(name: "#BADA55",  color: "Heather Mauve", size: "XS,S,M,L,XL", price: 19.99, item_path: "assets/HeatherMauve-2_Badass.png", in_stock?: true)
hiphip = Item.create(name: "Hip Hip Array!",  color: "Yellow", size: "XS,S,M,L,XL", price: 19.99, item_path: "assets/HeatherYellowGold-3_Hip_Hip.png", in_stock?: true)
lit1 = Item.create(name: "Let's Get Lit",  color: "Yellow", size: "XS,S,M,L,XL", price: 19.99, item_path: "assets/HeatherYellowGold-3_LitBrain.png", in_stock?: true)
beer = Item.create(name: "beer.now()",  color: "Maroon", size: "XS,S,M,L,XL", price: 19.99, item_path: "assets/Marooncopy_Beer.png", in_stock?: true)
trend = Item.create(name: "Trendsetter",  color: "Cream", size: "XS,S,M,L,XL", price: 19.99, item_path: "assets/SoftCream-5_Trend_Setter.png", in_stock?: true)

meditate = Item.create(name: "Meditated",  color: "Red", size: "XS,S,M,L,XL", price: 19.99, item_path: "assets/BellaCanvas-Meditated.png", in_stock?: true)
yoga1 = Item.create(name: "Yoga Poses - Heart",  color: "Heather Mauve", size: "XS,S,M,L,XL", price: 19.99, item_path: "assets/HeatherMauve-2-Yoga.png", in_stock?: true)
yoga2 = Item.create(name: "Yoga Poses - Heart",  color: "Heathered Pink", size: "XS,S,M,L,XL", price: 19.99, item_path: "assets/HeatherPrismSunset-5_Yoga.png", in_stock?: true)

dj = Item.create(name: "Dj",  color: "Deep Heather", size: "XS,S,M,L,XL", price: 19.99, item_path: "assets/DeepHeather3_DJ.png", in_stock?: true)
girlmusic = Item.create(name: "Anjunabeats",  color: "Turquoise", size: "XS,S,M,L,XL", price: 19.99, item_path: "assets/HeatherMint-7_Girl.png", in_stock?: true)


intent = Item.create(name: "Be Intentional",  color: "Heathered Pink", size: "XS,S,M,L,XL", price: 19.99, item_path: "assets/HeatherPrismSunset-5_Intent.png", in_stock?: true)


heapify_cart = CartItem.create(cart: lan_cart, item: heapify, quantity: 1)
christmas_cart = CartItem.create(cart: lan_cart, item: christmas, quantity: 1)
cart3 = CartItem.create(cart: lan_cart, item: yoga1, quantity: 1)
cart4 = CartItem.create(cart: lan_cart, item: girlmusic, quantity: 1)

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
catitem1 = ItemCategory.create(item: halloween, category: holiday)
catitem2 = ItemCategory.create(item: shrug, category: nerdy)
catitem3 = ItemCategory.create(item: bintree, category: nerdy)
catitem4 = ItemCategory.create(item: badass, category: nerdy)
catitem5 = ItemCategory.create(item: hiphip, category: nerdy)
catitem6 = ItemCategory.create(item: lit1, category: nerdy)
catitem7 = ItemCategory.create(item: beer, category: nerdy)
catitem8 = ItemCategory.create(item: trend, category: nerdy)
fitness1 = ItemCategory.create(item: meditate, category: fitness)
fitness2 = ItemCategory.create(item: yoga1, category: fitness)
fitness3 = ItemCategory.create(item: yoga2, category: fitness)
music1 = ItemCategory.create(item: dj, category: music)
music2 = ItemCategory.create(item: girlmusic, category: music)
inspo1 = ItemCategory.create(item: intent, category: inspirational)
sale1 = ItemCategory.create(item: christmas, category: sale)
sale2 = ItemCategory.create(item: christmas2, category: sale)
sale3 = ItemCategory.create(item: halloween, category: sale)



lan_order = Order.create(account:lan, order_date: "12/22/19", po_number: "LN122219", shipping_cost: 5.99, order_total: 25.99, billing_street_1: "123 Fake Street", billing_city: "Irvine", billing_state: "CA", billing_zip: 92614, shipping_street_1: "321 Fake Street", shipping_city: "Huntington Beach", shipping_state: "CA", shipping_zip: 92649)
lan_order_items = OrderItem.create(item: heapify, order: lan_order, item_name: "Heapify", item_description: 'Harry Potter inspired, min heap', item_color: "Heathered Maroon", item_size: "XS", item_price: 24.99, quantity: 1)