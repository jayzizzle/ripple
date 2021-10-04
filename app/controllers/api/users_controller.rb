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
    @user = User.find_by(id: params[:id])
    if @user
      # @playlists = Playlist.includes().find_by(user_id: params[:id])
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
