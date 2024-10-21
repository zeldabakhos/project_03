const express = require("express")
const router = express.Router()

const students = 
[
  {
    "ID": 1,
    "firstName": "John",
    "lastName": "Doe"
  },
  {
    "ID": 2,
    "firstName": "Jane",
    "lastName": "Smith"
    },
    {
      "ID": 3,
      "firstName": "Michael",
      "lastName": "Johnson"
    },
    {
      "ID": 4,
      "firstName": "Emily",
      "lastName": "Davis"
    },
    {
      "ID": 5,
      "firstName": "Chris",
      "lastName": "Brown"
    }
    
  ];

router.get("/users", (req, res) => {
	res.json(students)
})

router.post("/", (req, res) => {
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

  router.put("/:id", (req, res) => {
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


  router.delete("/:id", (req, res) => {
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
  
module.exports = router