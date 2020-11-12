Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      mount_devise_token_auth_for "User", at: "auth", controllers: {
        omniauth_callbacks: "api/v1/auth/omniauth_callbacks",
      }

      resources :posts, only: [:index, :show, :create, :update, :destroy]
      get "users/currentuser"
      get :health_check, to: "health_check#index"
    end
  end
end
