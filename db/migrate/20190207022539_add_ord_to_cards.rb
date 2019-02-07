class AddOrdToCards < ActiveRecord::Migration[5.2]
  def change
    add_column :cards, :ord, :integer 
  end
end
