# backend/config/routes.rb
Rails.application.routes.draw do
  resources :workouts, only: [:create, :index]
  resources :users, only: [:create]

  post '/register', to: 'users#create'
  post '/login', to: 'users#login'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "up" => "rails/health#show", as: :rails_health_check
end
