class Api::BoardsController < ApplicationController 
  def index
    @boards = Board.all 
  end

  def create
    @board = current_user.boards.new(board_params) 
    if @board.save 
      render :show 
    else 
      render json: @board.errors.full_messages, status: 422 
    end
  end

  def board_params
    params.require(:board).permit(:title) 
  end

end