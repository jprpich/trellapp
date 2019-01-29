class List < ApplicationRecord
  validates :title, presence: true 

  belongs_to :board 
  has_many :cards 


end