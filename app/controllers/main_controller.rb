class MainController < ApplicationController
  def index
  end

  def people
    render partial: 'people', layout: false
  end

  def person
    render partial: 'person', layout: false
  end
end