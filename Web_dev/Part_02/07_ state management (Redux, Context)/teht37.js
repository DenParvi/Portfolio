import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

// Slice для управления студентами
const studentsSlice = createSlice({
    name: "students",
    initialState: [],
    reducers: {
      addStudent: (state, action) => {
        const { id, nimi, aloitusvuosi } = action.payload;
  
        // Убедитесь, что ID уникален
        if (state.some((student) => student.id === id)) {
          alert(`Студент с ID ${id} уже существует!`);
          return;
        }
  
        state.push({ id, nimi, aloitusvuosi });
      },
      removeStudent: (state, action) => {
        return state.filter((student) => student.id !== action.payload);
      },
    },
  });

// Slice для управления курсами
const coursesSlice = createSlice({
  name: "courses",
  initialState: [],
  reducers: {
    addCourse: (state, action) => {
      const { id, nimi, laajuus } = action.payload;
      if (!state.some((course) => course.id === id)) {
        state.push({ id, nimi, laajuus });
      }
    },
  },
});

// Создание Redux store
export const store = configureStore({
  reducer: {
    students: studentsSlice.reducer,
    courses: coursesSlice.reducer,
  },
});

// Экспорт действий
export const { addStudent, removeStudent } = studentsSlice.actions;
export const { addCourse } = coursesSlice.actions;

// Главный компонент Teht37
export function Teht37() {
  return (
    <Provider store={store}>
      <h1>Student Management with Redux</h1>
      <StudentForm />
      <StudentList />
      <CourseForm />
    </Provider>
  );
}

// Форма для добавления студентов
function StudentForm() {
    const dispatch = useDispatch();
    const [id, setId] = React.useState("");
    const [nimi, setNimi] = React.useState("");
    const [aloitusvuosi, setAloitusvuosi] = React.useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Проверка на уникальность ID
      if (!id.trim()) {
        alert("Id не может быть пустым!");
        return;
      }
  
      dispatch(addStudent({ id: id.trim(), nimi, aloitusvuosi }));
      setId("");
      setNimi("");
      setAloitusvuosi("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Lisää opiskelija</h2>
        <label htmlFor="id">Id</label>
        <input id="id" value={id} onChange={(e) => setId(e.target.value)} />
        <label htmlFor="nimi">Nimi</label>
        <input id="nimi" value={nimi} onChange={(e) => setNimi(e.target.value)} />
        <label htmlFor="aloitusvuosi">Aloitusvuosi</label>
        <input
          id="aloitusvuosi"
          value={aloitusvuosi}
          onChange={(e) => setAloitusvuosi(e.target.value)}
        />
        <button type="submit">Lisää</button>
      </form>
    );
  }

// Список студентов
function StudentList() {
    const students = useSelector((state) => state.students);
    const dispatch = useDispatch();
  
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
          {students.map((student, index) => (
            <tr key={student.id} role="row">
              <td role="cell">{index}</td>
              <td role="cell">{student.nimi}</td>
              <td role="cell">{student.aloitusvuosi}</td>
              <td role="cell">
                <button
                  data-testid={`poista-button-${student.id}`}
                  onClick={() => dispatch(removeStudent(student.id))}
                >
                  Poista {student.id}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

// Форма для добавления курсов
function CourseForm() {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses); // Получаем список курсов из Redux
    const [id, setId] = React.useState("");
    const [nimi, setNimi] = React.useState("");
    const [laajuus, setLaajuus] = React.useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addCourse({ id, nimi, laajuus }));
      setId("");
      setNimi("");
      setLaajuus("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Lisää uusi jakso</h2>
        <label htmlFor="courseId">Oid</label>
        <input id="courseId" value={id} onChange={(e) => setId(e.target.value)} />
        <label htmlFor="courseName">Onimi</label>
        <input
          id="courseName"
          value={nimi}
          onChange={(e) => setNimi(e.target.value)}
        />
        <label htmlFor="courseScope">Olaajuus</label>
        <input
          id="courseScope"
          value={laajuus}
          onChange={(e) => setLaajuus(e.target.value)}
        />
        <button type="submit">Lisää jakso</button>
  
        <h3>Opintojaksot</h3>
        <select>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.nimi},{course.laajuus}
            </option>
          ))}
        </select>
      </form>
    );
  }