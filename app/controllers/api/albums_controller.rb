class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.all
    render '/api/albums/index'
  end

  def show
    @album.find_by(id: params[:id])
    if @album
      render :show
    else
      render json: @album.errors.full_messages, status: 404
    end
  end

end
