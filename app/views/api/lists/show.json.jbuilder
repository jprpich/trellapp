json.extract! @list, :id, :title
json.cardIds @list.cards.order('ord').ids