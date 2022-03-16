class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_params

  def show
    current_user = User.find(session[:user_id])
    render json: current_user, status: :ok
  end

  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

    def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(
      :first_name,
      :last_name,
      :username,
      :password,
      :password_confirmation,
    )
  end

  def invalid_params(invalid)
    render json: {
             errors: invalid.record.errors.full_messages,
           },
          status: :unprocessable_entity
  end
end


