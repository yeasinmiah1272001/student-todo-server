import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rollNumber: { type: Number, required: true },
    subjectName: { type: String, required: true },
    mark: { type: Number, required: true },
  },
  { minimize: false, timestamps: true }
);

const todomodel = mongoose.models.Todo || mongoose.model("Todo", todoSchema);

export default todomodel;
