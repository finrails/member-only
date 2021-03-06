class PostsController < ApplicationController
  before_action :authenticate_user!, only: %i[ new create ]

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(body: post_params[:body], user_id: current_user[:id])

    if @post.save
      flash[:success] = 'Your post have been submited!'
      redirect_to root_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(:body)
  end
end
