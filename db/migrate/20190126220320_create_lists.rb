class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :title, null: false
      t.integer :board_id, null: false
      t.integer :previous_id
      t.integer :next_id 

      t.timestamps
    end
    add_index :lists, :board_id
  end
end
