class Card < ApplicationRecord
  validates :title, presence: true 
  before_validation :ensure_ord

  belongs_to :list 
  has_many :comments

  private
  def ensure_ord
    other_card_ords = self.list.cards.map() {|card| card[:ord]}.sort
    self.ord ||= other_card_ords.empty? ? 0 : other_card_ords.last + 1
  end
end
