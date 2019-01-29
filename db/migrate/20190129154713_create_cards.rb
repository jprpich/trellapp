class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :title, null: false
      t.text :description
      t.integer :list_id, null: false
      t.integer :previous_id
      t.integer :next_id 
      t.datetime :due_date

      t.timestamps
    end
    add_index :cards, :list_id
  end
end
