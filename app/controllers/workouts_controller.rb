# backend/app/controllers/workouts_controller.rb
class WorkoutsController < ApplicationController
  def create
    workout = Workout.new(workout_params)
    # Temporarily assign a default user_id
    workout.user_id = 1 # Replace 1 with an actual user ID from your users table

    if workout.save
      render json: { message: 'Workout logged successfully!' }, status: :created
    else
      render json: { errors: workout.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index
    workouts = Workout.all
    render json: workouts
  end

  private

  def workout_params
    params.require(:workout).permit(:workout_type, :exercise, :sets, :reps, :weight, :date)
  end
end
