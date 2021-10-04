class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.with_attached_photo.all
    render '/api/artists/index'
  end

  def show
    @artist = Artist.with_attached_photo.find_by(id: params[:id])
    if @artist
      render '/api/artists/show'
    else
      render json: ['Artist does not exist.'], status: 404
    end
  end

  def artist_params
    params.require(:artist).permit(:artist_name, :bio, :photo)
  end

end