require 'sinatra'

class Thermostat < Sinatra::Base

  get "/" do
    File.read('public/index.html')
  end

  post "/temperature" do
    payload = params
    payload = JSON.parse(request.body.read).symbolize_keys unless params[:path]
    p payload
  end

  run! if app_file == $0

end
