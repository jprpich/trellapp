class Api::ListsController < ApplicationController 

  def index 
    @lists = List.all.where(board_id: params[:board_id])
  end




end