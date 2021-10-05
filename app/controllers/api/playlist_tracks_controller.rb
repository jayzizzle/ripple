class Api::PlaylistTracksController < ApplicationController

  def create
    @playlist_track = PlaylistTrack.new(playlist_params)
    if @playlist_track.save
      render 'api/playlists/show'
    else
      render json: @playlist_track.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist_track = Playlist.find_by(id: params[:id])
    if @playlist_track.destroy
      render 'api/playlists/show'
    else
      render json: ['Track does not exist'], status: 404
    end
  end

  private
  def playlist_track_params
    params.require(:playlist_track).permit(:playlist_id, :user_id)
  end

end