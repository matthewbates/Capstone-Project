class HikesController < ApplicationController
  skip_before_action :authorized, only: %i[index show]
  def index
    render json: Hike.all
  end

  def show
    hike = Hike.find(params[:id])
    render json: hike, status: :ok
  end
end
