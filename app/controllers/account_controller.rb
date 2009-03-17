class AccountController < ApplicationController
  def login
    if request.post?
      reset_session
      if @user = User.authenticate(params[:username],params[:password])
        self.logged_in_user = @user
        redirect_to home_path
      else
        flash[:error] = '用户名/密码错误!'
      end
    end
  end

  def logout
    reset_session
    flash[:notice] = '您已退出登录'
    redirect_to login_path
  end
end
