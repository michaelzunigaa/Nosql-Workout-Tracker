  
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Name Of the Workout?.']
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercises"
    }
  ]
});

const Workouts = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workouts;