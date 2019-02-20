# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_20_161644) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "board_shares", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "board_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_id"], name: "index_board_shares_on_board_id"
    t.index ["user_id"], name: "index_board_shares_on_user_id"
  end

  create_table "boards", force: :cascade do |t|
    t.string "title", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_boards_on_user_id"
  end

  create_table "cards", force: :cascade do |t|
    t.string "title", null: false
    t.text "description"
    t.integer "list_id", null: false
    t.integer "previous_id"
    t.integer "next_id"
    t.datetime "due_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "ord"
    t.index ["list_id"], name: "index_cards_on_list_id"
  end

  create_table "comments", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "card_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id"], name: "index_comments_on_card_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "lists", force: :cascade do |t|
    t.string "title", null: false
    t.integer "board_id", null: false
    t.integer "previous_id"
    t.integer "next_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_id"], name: "index_lists_on_board_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
