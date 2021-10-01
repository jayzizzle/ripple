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
      render json: @playlist.errors.full_messages, status: 404
    end
  end

end
