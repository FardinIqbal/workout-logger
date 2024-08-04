# app/models/workout.rb
class Workout < ApplicationRecord
  validates :workout_type, presence: true
  validates :exercise, presence: true
  validates :sets, presence: true
  validates :reps, presence: true
  validates :weight, presence: true
  validates :date, presence: true
end
