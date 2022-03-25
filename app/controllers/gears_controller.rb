class GearsController < ApplicationController
  def index
    render json: Gear.all
  end

  def show
    gear = find_gear
    render json: gear, status: :ok
  end

  def destroy
    gear = find_gear
    gear.destroy
    head :no_content
  end

  private

  def find_gear
    Gear.find(params[:id])
  end
end
