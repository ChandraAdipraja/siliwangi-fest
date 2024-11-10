import mongoose from "mongoose";

const Message = mongoose.Schema({
  senderName: {
    type: String,
    required: true,
  },
  recipientName: {
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

export default mongoose.model("Message", Message);
