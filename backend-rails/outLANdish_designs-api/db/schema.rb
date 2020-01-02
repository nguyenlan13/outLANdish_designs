# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_22_065132) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string "email"
    t.string "name"
    t.string "password_digest"
    t.string "billing_street_1"
    t.string "billing_street_2"
    t.string "billing_city"
    t.string "billing_state"
    t.integer "billing_zip"
    t.string "shipping_street_1"
    t.string "shipping_street_2"
    t.string "shipping_city"
    t.string "shipping_state"
    t.integer "shipping_zip"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "cart_items", force: :cascade do |t|
    t.integer "cart_id"
    t.integer "item_id"
    t.integer "quantity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "carts", force: :cascade do |t|
    t.integer "account_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "item_categories", force: :cascade do |t|
    t.integer "item_id"
    t.integer "category_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "color"
    t.string "size"
    t.decimal "price"
    t.string "item_path"
    t.binary "item_img"
    t.boolean "in_stock?"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "order_items", force: :cascade do |t|
    t.integer "item_id"
    t.integer "order_id"
    t.string "item_name"
    t.text "item_description"
    t.string "item_color"
    t.string "item_size"
    t.decimal "item_price"
    t.integer "quantity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "orders", force: :cascade do |t|
    t.integer "account_id"
    t.string "order_date"
    t.string "po_number"
    t.decimal "shipping_cost"
    t.decimal "order_total"
    t.string "billing_street_1"
    t.string "billing_street_2"
    t.string "billing_city"
    t.string "billing_state"
    t.integer "billing_zip"
    t.string "shipping_street_1"
    t.string "shipping_street_2"
    t.string "shipping_city"
    t.string "shipping_state"
    t.integer "shipping_zip"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "account_id"
    t.integer "item_id"
    t.integer "rating"
    t.text "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "wishlist_items", force: :cascade do |t|
    t.integer "wishlist_id"
    t.integer "item_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "wishlists", force: :cascade do |t|
    t.integer "account_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
