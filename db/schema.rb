# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_03_17_005622) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "gear_for_hikes", force: :cascade do |t|
    t.bigint "gear_id"
    t.bigint "hike_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["gear_id"], name: "index_gear_for_hikes_on_gear_id"
    t.index ["hike_id"], name: "index_gear_for_hikes_on_hike_id"
  end

  create_table "gear_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "gears", force: :cascade do |t|
    t.string "name"
    t.bigint "gear_type_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["gear_type_id"], name: "index_gears_on_gear_type_id"
  end

  create_table "hikes", force: :cascade do |t|
    t.string "trail_name"
    t.string "image"
    t.string "out_and_back"
    t.string "loop"
    t.float "total_length"
    t.string "difficulty"
    t.string "elevation_profile"
    t.string "allows_dogs"
    t.string "allows_bikes"
    t.string "lat"
    t.string "lng"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "swap_shops", force: :cascade do |t|
    t.string "item"
    t.string "image_one"
    t.string "image_two"
    t.string "image_three"
    t.integer "price"
    t.string "description"
    t.string "catagory"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_swap_shops_on_user_id"
  end

  create_table "user_gears", force: :cascade do |t|
    t.bigint "gear_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["gear_id"], name: "index_user_gears_on_gear_id"
    t.index ["user_id"], name: "index_user_gears_on_user_id"
  end

  create_table "user_hikes", force: :cascade do |t|
    t.string "reviews"
    t.bigint "hike_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hike_id"], name: "index_user_hikes_on_hike_id"
    t.index ["user_id"], name: "index_user_hikes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
