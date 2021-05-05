const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: [true, "Please provide a Team name"]
  },
  sport:{
      type:String,
      required: [true, "please enter the sport that your team plays"]  
  },
  players: [
    {
      player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
  ],
  teamCreated: {
    type: Date,
    default: Date.now,
  },
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
