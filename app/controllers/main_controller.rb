class MainController < ApplicationController
  def index
  end

  def people
    render partial: 'people', layout: false
  end
end