class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.includes(:tracks_liked, :albums_liked).find_by(id: params[:id])
    if @user
      render '/api/users/show'
    else
      render json: ['This user does not exist.'], status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
