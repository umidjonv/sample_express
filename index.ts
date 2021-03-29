import express from 'express';
import {EmployeeList} from './data/EmployeeList';

const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
  return res.send('Express + TypeScript Server');
});

let employeeList = new EmployeeList().Employees;

app.get('/users', (req,res) => {
  return res.send(employeeList);
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});