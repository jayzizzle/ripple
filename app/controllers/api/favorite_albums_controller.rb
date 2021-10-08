class Api::FavoriteAlbumsController < ApplicationController

  def index
    @favorite_albums = Album.with_attached_cover.select('*').joins(:artist)
    if @favorite_albums
      render '/api/favorite_albums/index'
    else
      render json: ['You have no liked albums yet.']
    end
  end

end