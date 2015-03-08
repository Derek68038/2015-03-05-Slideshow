require "sinatra"
require "json"
require "sqlite3"

DATABASE = SQLite3::Database.new("slides.db")
DATABASE.results_as_hash = true

require_relative "slide"

get "/" do
  erb :homepage
end

post "/slides/find/:id" do
  slide = Slide.find(params[:id])
  slide_hash = slide.to_hash
  slide_hash.to_json
end