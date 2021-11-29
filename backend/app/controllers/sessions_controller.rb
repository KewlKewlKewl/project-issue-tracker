class SessionsController < ApplicationController
include UserConcern

  def create
    # Check if user is authenticated
    if @user = User.authenticate_with_credentials(params[:email], params[:password])
      # save the user id inside the browser cookie. This is how we keep the user 
      # logged in when they navigate around our website.
      session[:user_id] = @user.id
      render json: {
        status: :created,
        logged_in: true,
        user: @user
      }
    else
      # if user's login doesn't work, send them back to the login form
      render json: { status: 401}
    end
  end

  def logout
    reset_session
    render json: { status: 200, logged_out: true }
  end

  def logged_in 
    if @current_user
      render json: {
        user: @current_user,
        logged_in: true
      }
    end
  end
  # def googleAuth
  #   # Get access tokens from the google server
  #   access_token = request.env["omniauth.auth"]
  #   user = User.create_from_omniauth(access_token)
  #   log_in(user)
  #   # Access_token is used to authenticate request made from the rails application to the google server
  #   user.google_token = access_token.credentials.token
  #   # Refresh_token to request new access_token
  #   # Note: Refresh_token is only sent once during the first request
  #   refresh_token = access_token.credentials.refresh_token
  #   user.google_refresh_token = refresh_token if refresh_token.present?
  #   user.save!

  #   #create cookie after user is made
  #   cookies.encrypted[:current_user_id] = { value: user.id, expires: Time.now + 2.days}


  #   redirect_to root_path
  # end




end