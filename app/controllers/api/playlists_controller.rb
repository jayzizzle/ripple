class Api::PlaylistsController < ApplicationController

  def index
    @playlists = Playlist.all
    render '/api/playlists/index'
  end

  def show
    @playlist = Playlist.find_by(id: params[:id])
    if @playlist
      render '/api/playlists/show'
    else
      render json: ['Playlist does not exist'], status: 404
    end
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @report.save
      render 'api/playlists/show'
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def update
    @playlist = Playlist.find_by(id: params[:id])
    if @playlist && @playlist.update(playlist_params)
      render 'api/playlists/show'
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def delete
    @playlist = Playlist.find_by(id: params[:id])
    if @playlist && @playlist.destroy
      render 'api/playlists/index'
    else
      render json: ['Playlist does not exist'], status: 404
    end
  end

  private
  def playlist_params
    params.require(:report).permit(:title, :user_id)
  end

end
