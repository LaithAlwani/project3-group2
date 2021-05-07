const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: [true, "Please provide a Team name"]
  },
  image:{
    type:String,
    default:"https://image.shutterstock.com/image-vector/furious-eagle-head-athletic-club-260nw-693912817.jpg"
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
