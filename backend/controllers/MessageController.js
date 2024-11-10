import Message from "../models/MessageModel.js";

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    res.json(message);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveMessage = async (req, res) => {
  const message = new Message(req.body);
  try {
    const insertMessage = await message.save();
    res.status(201).json(insertMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateMessage = async (req, res) => {
  try {
    const updatemessage = await Message.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatemessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const deletemessage = await Message.deleteOne({ _id: req.params.id });
    res.status(200).json(deletemessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
