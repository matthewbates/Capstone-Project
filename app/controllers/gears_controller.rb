class GearsController < ApplicationController
  def index
    render json: Gear.all
  end

  def show
    gear = find_gear
    render json: gear, status: :ok
  end

  private

  def find_gear
    Gear.find(params[:id])
  end
end
