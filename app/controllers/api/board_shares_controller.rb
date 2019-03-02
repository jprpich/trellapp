class Api::BoardSharesController < ApplicationController 

  def share
    BoardShare.create(board_share_params)
  end

  private
  def board_share_params
    params.require(:data).permit(:board_id, :user_id)
  end

end