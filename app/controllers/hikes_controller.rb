class HikesController < ApplicationController
  def index
    render json: Hike.all
  end

  def show
    hike = Hike.find(params[:id])
    render json: hike, status: :ok
  end
end
