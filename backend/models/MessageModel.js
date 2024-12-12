import mongoose from "mongoose";

const Message = mongoose.Schema({
  senderName: {
    type: String,
    default: "Anonymous",
  },
  recipientName: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

Message.pre("save", function (next) {
  if (!this.senderName || this.senderName.trim() === "") {
    this.senderName = "Anonymous";
  }
  next();
});

export default mongoose.model("Message", Message);
