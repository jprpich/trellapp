class Api::ListsController < ApplicationController 

  def index 
    @lists = List.all.where(board_id: params[:board_id])
  end

  # how do we implement this?
  def create 
    @list = List.new(list_params)
    if @list.save 
      render :show 
    else
      render json: @list.errors.full_messages, status: 422  
    end
  end

  # how should we receive params?
  private
  def list_params
    params.require(:list).permit(:title, :board_id)
  end


end