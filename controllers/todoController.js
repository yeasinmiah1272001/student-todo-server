import todomodel from "../models/todoModels.js";

const addTodo = async (req, res) => {
  try {
    const { mark, subjectName, rollNumber, name } = req.body;
    if (!name) {
      return res.json({ success: false, message: "name is required" });
    }
    if (!rollNumber) {
      return res.json({ success: false, message: "rollNumber is required" });
    }
    if (!subjectName) {
      return res.json({ success: false, message: "subject  is required" });
    }
    if (!mark) {
      return res.json({ success: false, message: "mark is required" });
    }

    const newTodo = new todomodel({ name, subjectName, rollNumber, mark });
    await newTodo.save();
    return res.json({ success: true, message: "todo added succes" });
  } catch (error) {
    console.log("add todo error", error);
    res.json({ success: false, message: "add todo error" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: id };
    const result = await todomodel.deleteOne(query);
    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }
    res.json({ success: true, message: "Todo deleted successfully" });
  } catch (error) {
    console.log("delete todo error", error);
    res.json({ success: false, message: "delete todo error" });
  }
};

const getTodo = async (req, res) => {
  try {
    const total = await todomodel.countDocuments({});
    const todo = await todomodel.find({});
    return res.json({
      success: true,
      message: "get all todo succes",
      total,
      todo,
    });
  } catch (error) {
    console.log("get todo error", error);
    res.json({ success: false, message: "get todo error" });
  }
};

export { addTodo, getTodo, deleteTodo };
