class Board < ApplicationRecord
  validates :title, presence: true 
  has_many :board_shares  
  has_many :users, through: :board_shares 
  has_many :lists   
end
