class Board < ApplicationRecord
  validates :title, presence: true 
  belongs_to :user 
end
