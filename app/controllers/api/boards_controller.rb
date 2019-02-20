class Api::BoardsController < ApplicationController 
  def index
    @boards = current_user.boards
  end

  def create
    @board = Board.new(board_params)
    @board.user_id = current_user.id 
    if @board.save 
      BoardShare.create(user: current_user, board: @board)
      render :show 
    else 
      render json: @board.errors.full_messages, status: 422 
    end
  end

  def update 
    @board = Board.find(params[:id])
    if @board.update(board_params)
      render :show 
    else
      render json: @board.errors.full_messages, status: 422 
    end
  end

  def show 
    @board = Board.find(params[:id])
    render :show
  end

  def destroy 
    @board = Board.find(params[:id])
    @board.destroy 
    head :no_content
  end

  def board_params
    params.require(:board).permit(:title) 
  end

end