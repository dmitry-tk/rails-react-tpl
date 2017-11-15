Rails.application.routes.draw do

  get 'home/index'
  get 'home/test'

  root to: 'home#index'

  scope '/api' do
    # todo
  end

end
