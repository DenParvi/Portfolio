import React, { createContext, useContext, useState } from 'react';

// Контекст для студентов
const StudentContext = createContext();

// Контекст для курсов
const CourseContext = createContext();

// Главный компонент Teht34
export function Teht34() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  const addStudent = (id, nimi, aloitusvuosi) => {
    const index = students.length;
    const formattedName = `${nimi}_${index}`;
    setStudents([...students, { id, nimi: formattedName, aloitusvuosi }]);
  };

  const removeStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const addCourse = (id, nimi, laajuus) => {
    setCourses((prevCourses) => {
      if (prevCourses.some((course) => course.id === id)) {
        return prevCourses; // Если курс уже есть, возвращаем текущий список
      }
      return [...prevCourses, { id, nimi, laajuus }];
    });
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, removeStudent }}>
      <CourseContext.Provider value={{ courses, addCourse }}>
        <h1>Student Management</h1>
        <StudentForm />
        <StudentList />
      </CourseContext.Provider>
    </StudentContext.Provider>
  );
}

// Форма для добавления студентов и курсов
function StudentForm() {
  const { addStudent } = useContext(StudentContext);
  const { addCourse } = useContext(CourseContext);
  const [id, setId] = useState('');
  const [nimi, setNimi] = useState('');
  const [aloitusvuosi, setAloitusvuosi] = useState('');
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseScope, setCourseScope] = useState('');

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    addStudent(id.trim(), nimi.trim(), aloitusvuosi.trim());
    setId('');
    setNimi('');
    setAloitusvuosi('');
  };

  const handleCourseSubmit = (e) => {
    e.preventDefault();
    addCourse(courseId.trim(), courseName.trim(), courseScope.trim());
    setCourseId('');
    setCourseName('');
    setCourseScope('');
  };

  return (
    <form>
      <h2>Lisää opiskelija</h2>
      <label htmlFor="id">Id</label>
      <input id="id" type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <label htmlFor="nimi">Nimi</label>
      <input id="nimi" type="text" value={nimi} onChange={(e) => setNimi(e.target.value)} />
      <label htmlFor="aloitusvuosi">Aloitusvuosi</label>
      <input
        id="aloitusvuosi"
        type="text"
        value={aloitusvuosi}
        onChange={(e) => setAloitusvuosi(e.target.value)}
      />
      <button type="submit" onClick={handleStudentSubmit}>
        Lisää
      </button>

      <h2>Lisää uusi jakso</h2>
      <label htmlFor="Oid">Oid</label>
      <input
        id="Oid"
        type="text"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      />
      <label htmlFor="Onimi">Onimi</label>
      <input
        id="Onimi"
        type="text"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <label htmlFor="Olaajuus">Olaajuus</label>
      <input
        id="Olaajuus"
        type="text"
        value={courseScope}
        onChange={(e) => setCourseScope(e.target.value)}
      />
      <button data-testid="add-course-button" type="button" onClick={handleCourseSubmit}>
        Lisää jakso
      </button>
      <Opintojakso />
    </form>
  );
}

// Компонент для отображения списка студентов
function StudentList() {
  const { students, removeStudent } = useContext(StudentContext);

  return (
    <table>
      <thead>
        <tr role="row">
          <td role="cell">Nr</td>
          <td role="cell">Name</td>
          <td role="cell">Starting year</td>
          <td role="cell">Actions</td>
        </tr>
      </thead>
      <tbody>
        {students && students.length > 0 ? (
          students.map((student, index) => (
            <TableRow
              key={student.id}
              student={student}
              index={index}
              removeStudent={removeStudent}
            />
          ))
        ) : (
          <tr role="row">
            <td role="cell" colSpan="4">No students available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

  
  

// Компонент строки таблицы
export function TableRow({ id, nimi, aloitusvuosi, student, index, removeStudent }) {
  // Поддержка как пропсов, так и объекта student
  const studentData = student || { id, nimi, aloitusvuosi };

  if (!studentData) return null;

  return (
    <tr role="row">
      <td role="cell">{index !== undefined ? index : studentData.id}</td>
      <td role="cell">{studentData.nimi}</td>
      <td role="cell">{studentData.aloitusvuosi}</td>
      <td role="cell">
        {removeStudent && (
          <button onClick={() => removeStudent(studentData.id)}>Poista {studentData.id}</button>
        )}
      </td>
    </tr>
  );
}

// Компонент для отображения курсов
function Opintojakso() {
  const { courses } = useContext(CourseContext);

  return (
    <div>
      <h3>Opintojaksot</h3>
      <select>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.nimi},{course.laajuus}
          </option>
        ))}
      </select>
    </div>
  );
}
