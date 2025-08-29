const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let students = [
  { id: 1, name: 'Rahul', age: 40 },
  { id: 2, name: 'Rohith', age: 36 }
];

app.get('/students', (req, res) => res.json(students));

app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  if (!student) return res.status(404).json({ error: 'Student not found' });
  res.json(student);
});

app.post('/students', (req, res) => {
  const { name, age } = req.body;
  const newStudent = { id: students.length + 1, name, age };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.put('/students/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  if (!student) return res.status(404).json({ error: 'Student not found' });

  student.name = req.body.name || student.name;
  student.age = req.body.age || student.age;
  res.json(student);
});

app.delete('/students/:id', (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.json({ message: 'Student deleted' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
