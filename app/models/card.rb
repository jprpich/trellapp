class Card < ApplicationRecord
  validates :title, presence: true 

  belongs_to :list 
  has_many :comments

end
