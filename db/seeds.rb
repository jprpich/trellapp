# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Board.destroy_all
Card.destroy_all
Comment.destroy_all 
List.destroy_all 
User.destroy_all 
BoardShare.destroy_all 

user = User.create(email: "email@domain.com", password: "123456")

10.times do 
  board = Board.create(user_id: user.id, title: Faker::Job.key_skill) 
  BoardShare.create(user_id: user.id, board_id: board.id)
end

user.boards.each do |board| 
  7.times do 
    list = List.create(title: Faker::Job.title, board_id: board.id)
    (7 + (rand * 4).floor).times do 
      card = Card.create(title: Faker::Company.catch_phrase, list_id: list.id, description: Faker::Company.catch_phrase)
      3.times do 
        Comment.create(body: Faker::Company.bs, user_id: user.id, card_id: card.id) 
      end
    end
  end
end

