class Api::CommentsController < ApplicationController 

  def create 
    @comment = Comment.new(comment_params)
    if @comment.save 
      render :show 
    else
      render json: @comment.errors.full_messages, status: 422  
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy 
    head :no_content
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id, :card_id)
  end

end