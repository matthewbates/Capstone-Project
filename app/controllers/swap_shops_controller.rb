class SwapShopsController < ApplicationController
  def index
    render json: SwapShop.all
  end
end
