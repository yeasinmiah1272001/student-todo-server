const addTodo = async (req, res) => {
  try {
    res.json({ success: true, message: "todo added succes" });
  } catch (error) {
    console.log("add todo error", error);
    res.json({ success: false, message: "add todo error" });
  }
};

export { addTodo };
