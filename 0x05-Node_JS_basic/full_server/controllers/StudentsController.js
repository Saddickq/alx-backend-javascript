import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        res
          .status(200)
          .send(
            `This is the list of our students\nNumber of students in CS: ${
              data.CS.length
            }. List: ${data.CS.join(', ')}\nNumber of students in SWE: ${
              data.SWE.length
            }. List: ${data.SWE.join(', ')}`,
          );
      })
      .catch((err) => {
        res.status(500).send(err.error);
      });
  }

  static getAllStudentsByMajor(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        if (data[req.params.major]) {
          res.status(200).send(`List: ${data[req.params.major].join(', ')}`);
        } else {
          res.status(500).send('Major parameter must be CS or SWE');
        }
      })
      .catch((err) => {
        res.status(500).send(err.error);
      });
  }
}

module.exports = StudentsController;
