ActionController::Routing::Routes.draw do |map|
  map.home '', :controller => 'home'
  map.signup '/signup', :controller => 'users', :action => 'new'
  map.login '/login', :controller => 'account', :action => 'login'
  map.logout '/logout', :controller => 'account', :action => 'logout'
  map.search '/search', :controller => 'search', :action => 'new'
  map.resources :users
  map.resources :forums
  map.resources :ads
  map.resources :votes
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
