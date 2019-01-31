Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do 
    resource :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:index, :create, :show, :destroy, :update] do
      resources :lists, only: [:create, :index]
    end

    resources :lists, only: [:destroy] do 
      resources :cards, only: [:create]
    end

    resources :cards, only: [:destroy, :show] 

  end
end
