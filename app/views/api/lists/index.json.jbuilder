@lists.each do |list|
  json.set! list.id do
    json.extract! list, :id, :title
    json.cardIds list.cards.order('ord').ids
  end
end
