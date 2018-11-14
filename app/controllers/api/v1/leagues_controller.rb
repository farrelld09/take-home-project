require 'pry'

class Api::V1::LeaguesController < ApplicationController
  skip_before_action :verify_authenticity_token

    def index
      @lat = params[:lat].to_f
      @long = params[:long].to_f
      @budget = params[:budget].to_f
      @radius = params[:radius].to_f
      @leagues = League.all
      @eligibleleagues = []
      
      @leagues.each do |league|
        distance = Math.sqrt((league.latitude - @lat) ** 2 + (league.longitude - @long) ** 2)        
        if distance < @radius
          @eligibleleagues << league
        end
      end
      
      @eligibleleagues.sort_by(&:price)
      total_cost = 0
      @affordableleagues = []
      
      @eligibleleagues.each do |league|
        if total_cost + league.price < @budget
          total_cost += league.price
          @affordableleagues << league
        end
      end
    
      render json: @affordableleagues
    end
  
    def create
      league = League.create(league_params)
      render json: league
    end
  
    private
  
    def league_params
      params.require(:league).permit(
        :name, 
        :latitude, 
        :longitude, 
        :price
      )
    end
  end