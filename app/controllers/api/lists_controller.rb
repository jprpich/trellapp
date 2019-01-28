class Api::ListsController < ApplicationController 

  def index 
    @lists = List.all.where(board_id: params[:board_id])
  end

  def create 
    @list = List.new(list_params)
    if @list.save 
      render :show 
    else
      render json: @list.errors.full_messages, status: 422  
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy 
    head :no_content
  end

  private
  def list_params
    params.require(:list).permit(:title, :board_id)
  end


end