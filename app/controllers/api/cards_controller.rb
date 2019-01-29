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

  private
  def card_params
    params.require(:card).permit(:title, :list_id)
  end


end