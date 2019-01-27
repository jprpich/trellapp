class List < ApplicationRecord
  validates :title, presence: true 

  belongs_to :board 



end