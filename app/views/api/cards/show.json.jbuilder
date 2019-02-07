json.card do 
  json.extract! @card, :id, :title, :description, :due_date, :list_id
end

json.list do 
  json.extract! @card.list, :id, :title
  json.cardIds @card.list.cards.order('ord').ids
end
