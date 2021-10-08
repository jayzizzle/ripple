class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.all.with_attached_cover.joins(:artist)
    render '/api/albums/index'
  end

  def show
    @album = Album.with_attached_cover.includes(:tracks, :artist).find_by(id: params[:id])
    if @album
      render '/api/albums/show'
    else
      render json: ['Album does not exist.'], status: 404
    end
  end

  def album_params
    params.require(:album).permit(:title, :artist_id, :category, :year, :is_explicit, :photo)
  end

end
