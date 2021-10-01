class Api::AlbumsController < ApplicationController

  def index
    # @albums = Album.all

    @albums = Album.select('
      albums.id,
      title,
      artist_id,
      artists.artist_name,
      category,
      year,
      is_explicit
    ').joins(:artist)

    render '/api/albums/index'
  end

  def show
    @album = Album.find_by(id: params[:id])
    if @album
      render '/api/albums/show'
    else
      render json: @album.errors.full_messages, status: 404
    end
  end

end
