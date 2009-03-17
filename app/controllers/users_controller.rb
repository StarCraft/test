class UsersController < ApplicationController
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(params[:user])
    if @user.save
#      self.logged_in_user= @user
      flash[:notice] = "用户注册成功"
      redirect_to home_path(:user_id => @user.id)
    else
      render :action => 'new'
    end
  end


end
