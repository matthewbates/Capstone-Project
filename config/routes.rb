Rails.application.routes.draw do
  resources :gears, only: %i[index show destroy]
  resources :gear_types, only: %i[index show]
  resources :swap_shops, only: %i[index show]
  resources :hikes, only: [:index]
  resources :users

  # current user
  get '/me', to: 'users#show'

  # log in
  post '/login', to: 'sessions#create'

  # log out
  delete '/logout', to: 'sessions#destroy'

  # sign up
  post '/signup', to: 'users#create'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
