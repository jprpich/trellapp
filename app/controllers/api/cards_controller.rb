class Api::CardsController < ApplicationController 

  def index 
    @cards = Card.all.where(list_id: params[:list_id])
  end

  def create 
    @card = Card.new(card_params)
    if @card.save 
      render :show 
    else
      render json: @card.errors.full_messages, status: 422  
    end
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy 
    head :no_content
  end

  def show 
    @card = Card.find(params[:id])
    render :show 
  end

  def update 
    @card = Card.find(params[:id]) 
    @card.update(card_params)
    render :show 
  end

  def update_ords
    @card = Card.find(params[:id])
    @card.list.cards.each do |card| 
      if @card.ord < params[:card][:ord].to_i
        if @card.id == card.id 
          card.ord =  params[:card][:ord]
          card.save 
        elsif card.ord <= params[:card][:ord].to_i
          card.ord -= 1
          card.save 
        end
      else 
        if @card.id == card.id 
          card.ord = params[:card][:ord]
          card.save 
        elsif card.ord >= params[:card][:ord].to_i
          card.ord += 1
          card.save 
        end
      end
    end
  end




  private
  def card_params
    params.require(:card).permit(:title, :list_id, :description, :due_date, :ord)
  end

  


end