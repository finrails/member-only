class UsersController < ApplicationController
  def show
    @user = User.find_by(name: params[:name])

    if @user
      render :show
    else
      redirect_to root_path
    end

  end
end
