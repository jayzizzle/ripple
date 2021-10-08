Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :artists, only: [:index, :show]
    
    resources :albums, only: [:index, :show]

    resources :tracks, only: [:index, :show]
    
    resources :playlists, only: [:index, :create, :show, :update, :destroy]
    resources :playlist_tracks

    resources :genre, only: [:index, :show]

    resources :album_likes, only: [:create, :destroy, :show, :index]
    # delete '/album_likes', to: 'album_likes#destroy'
    resources :track_likes, only: [:create, :destroy, :show, :index]
    # delete '/album_likes', to: 'track_likes#destroy'

    resources :follows, only: [:create, :destroy]

    resources :favorite_albums, only: [:index]

  end

end
