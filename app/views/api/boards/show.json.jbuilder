json.board do 
  json.extract! @board, :id, :title
end

json.lists do 
  @board.lists.each do |list|
    json.set! list.id do
      json.extract! list, :id, :title
      json.cardIds list.cards.order('ord').ids
    end
  end
end

json.cards do 
  @board.lists.each do |list|
    list.cards.each do |card|
       json.set! card.id do
          json.extract! card, :id, :title, :list_id
        end
    end
  end
end