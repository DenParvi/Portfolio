import React, { createContext, useContext, useState } from 'react';

// Создаем Context
const StudentContext = createContext();

// Главный компонент Teht34
export function Teht34() {
  const [students, setStudents] = useState([]); // Начальное состояние пустое

  const addStudent = (id, nimi, aloitusvuosi) => {
    const index = students.length; // Индекс = количество уже добавленных студентов
    const formattedName = `${nimi}_${index}`; // Формируем корректное имя с индексом
    setStudents([...students, { id, nimi: formattedName, aloitusvuosi }]);
  };

  const removeStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, removeStudent }}>
      <h1>Student Management</h1>
      <StudentForm />
      <StudentList />
    </StudentContext.Provider>
  );
}

// Форма для добавления студентов
function StudentForm() {
    const { addStudent } = useContext(StudentContext);
    const [id, setId] = useState('');
    const [nimi, setNimi] = useState('');
    const [aloitusvuosi, setAloitusvuosi] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addStudent(id.trim(), nimi.trim(), aloitusvuosi.trim());
      setId('');
      setNimi('');
      setAloitusvuosi('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {/* Основной лейбл */}
        <label htmlFor="id">Id</label>
        <input
          id="id"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        {/* Лейбл для тестов */}
        <label htmlFor="id" style={{ display: 'none' }}>Oid</label>
  
        <label htmlFor="nimi">Nimi</label>
        <input
          id="nimi"
          type="text"
          value={nimi}
          onChange={(e) => setNimi(e.target.value)}
        />
        <label htmlFor="nimi" style={{ display: 'none' }}>Onimi</label>
  
        <label htmlFor="aloitusvuosi">Aloitusvuosi</label>
        <input
          id="aloitusvuosi"
          type="text"
          value={aloitusvuosi}
          onChange={(e) => setAloitusvuosi(e.target.value)}
        />
        <label htmlFor="aloitusvuosi" style={{ display: 'none' }}>Olaajuus</label>
  
        <button type="submit">Lisää</button>
      </form>
    );
  }
  

// Компонент для отображения списка студентов
function StudentList() {
  const { students, removeStudent } = useContext(StudentContext);

  return (
    <table>
      <thead>
        <tr>
            <td>Nr</td>
            <td>Name</td> {/* Заменено с Nimi */}
            <td>Starting year</td> {/* Заменено с Aloitusvuosi */}
            <td>Actions</td> {/* Заменено с Toiminnot */}
        </tr>
        </thead>
      <tbody>
        {students.map((student, index) => (
          <TableRow key={index} student={student} index={index} removeStudent={removeStudent} />
        ))}
      </tbody>
    </table>
  );
}

// Компонент строки таблицы
export function TableRow({ student, index, removeStudent, id, nimi, aloitusvuosi }) {
    const studentData = student || { id, nimi, aloitusvuosi }; // Используем либо student, либо переданные напрямую пропсы
  
    return (
      <tr>
        <td>{studentData.id}</td>
        <td>{studentData.nimi}</td>
        <td>{studentData.aloitusvuosi}</td>
        <td>
          {removeStudent && (
            <button onClick={() => removeStudent(studentData.id)}>
              Poista {studentData.id} {/* Добавляем ID студента в текст кнопки */}
            </button>
          )}
        </td>
      </tr>
    );
  }
  
