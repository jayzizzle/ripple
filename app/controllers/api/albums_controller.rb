class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.with_attached_cover.select('*').joins(:artist)
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
