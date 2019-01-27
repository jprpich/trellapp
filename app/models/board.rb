class Board < ApplicationRecord
  validates :title, presence: true 
  belongs_to :user 
  has_many :lists   
end
