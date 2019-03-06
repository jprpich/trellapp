class BoardShare < ApplicationRecord 
  belongs_to :user
  belongs_to :board
  
  validates :user, uniqueness: { scope: :board }
end