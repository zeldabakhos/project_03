const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const students = [];

app.get("/", (req, res) => {
  res.json(students);
});

app.post("/", (req, res) => {
  const { firstName, lastName } = req.body;

  const newStudent = {
    id: students.length + 1,
    firstName,
    lastName,
  };

  students.push(newStudent);

  res.status(201).json({
    msg: "New student added",
    student: newStudent,
  });
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;

  const student = students.find((s) => s.id === parseInt(id));

  if (!student) {
    return res.status(404).json({ msg: "Student not found" });
  }

  student.firstName = firstName || student.firstName;
  student.lastName = lastName || student.lastName;

  res.json({
    msg: "Student updated successfully",
    student,
  });
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  const studentIndex = students.findIndex((s) => s.id === parseInt(id));

  if (studentIndex === -1) {
    return res.status(404).json({ msg: "Student not found" });
  }

  students.splice(studentIndex, 1);

  res.json({
    msg: "Student deleted successfully",
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
