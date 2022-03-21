class GearTypesController < ApplicationController
  def index
    render json: GearType.all
  end

  def show
    gear_type = find_gear_type
    render json: gear_type, serializer: GearTypeWithGearsSerializer
  end

  private

  def find_gear_type
    GearType.find(params[:id])
  end
end
