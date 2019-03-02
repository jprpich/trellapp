Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do 
    patch '/update_ords/:id', to: "cards#update_ords"
    patch '/update_between_lists/:id', to: "cards#update_between_lists"
    post '/share', to: "board_shares#share"

    resources :users, only: [:index, :create]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:index, :create, :show, :destroy, :update] do
      resources :lists, only: [:create, :index]
    end

    resources :lists, only: [:destroy] do 
      resources :cards, only: [:create]
    end

    resources :cards, only: [:destroy, :show, :update] do 
      resources :comments, only: [:create, :index]
    end

    resources :comments, only: [:destroy]

  end
end
