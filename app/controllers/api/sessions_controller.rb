class Api::SessionsController < ApplicationController 
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login(@user)
      render :show
    else
      render json: ["invalid information"], status: 422
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: ["no current user"], status: 404
    end
  end
end