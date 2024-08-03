# app/controllers/workouts_controller.rb
class WorkoutsController < ApplicationController
  def create
    workout = Workout.new(workout_params)
    workout.user_id = params[:user_id]
    if workout.save
      render json: { message: 'Workout logged successfully!' }, status: :created
    else
      render json: { errors: workout.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index
    workouts = Workout.where(user_id: params[:user_id])
    render json: workouts
  end

  private

  def workout_params
    params.require(:workout).permit(:workout_type, :exercise, :sets, :reps, :weight, :date)
  end
end
