class Card < ApplicationRecord
  validates :title, presence: true 
  # before_validation :ensure_ord

  belongs_to :list 
  has_many :comments

  # private
  # def ensure_ord
  #   debugger
  #   other_card_ords = self.list.cards.map do |card| 
  #      card[:ord]
  #   end.sort
  #   self.ord ||= other_card_ords.empty? ? 0 : other_card_ords.last + 1
  # end
end
