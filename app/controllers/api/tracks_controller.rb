class Api::TracksController < ApplicationController

  def index
    @tracks = Track.all
    render '/api/tracks/index'
  end

  def show
    @track = Track.find_by(id: params[:id])
    if @track
      render '/api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 404
    end
  end

end
