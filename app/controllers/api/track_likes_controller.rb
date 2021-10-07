class Api::TrackLikesController < ApplicationController

  before_action :underscore_params!

  def index
    @track_likes = current_user.track_likes
    render '/api/track_likes/index'
  end

  def show
    @track_like = TrackLike.find_by(id: params[:id])
    if @track_like
      render '/api/track_likes/show'
    else
      render json: ['Like does not exist'], status: 404
    end
  end

  def create
    @track_like = TrackLike.new(track_likes_params)
    if @track_like.save
      render '/api/track_likes/show'
    else
      render json: @track_like.errors.full_messages, status: 422
    end
  end

  def destroy
    @track_like = TrackLike.find_by(id: params[:id])
    if @track_like.destroy
      render '/api/track_likes/show'
    else
      render json: ['Like does not exist'], status: 404
    end
  end

  private
  def track_likes_params
    params.require(:track_like).permit(:user_id, :track_id)
  end

end
