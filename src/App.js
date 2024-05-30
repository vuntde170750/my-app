// import logo from './logo.svg';
// import './App.css';
// import React, { useState } from 'react';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// const App = () => {
//   // Thiết lập trạng thái ban đầu
//   const [items, setItems] = useState([]);
//   const [newItem, setNewItem] = useState('');
//   const [editItem, setEditItem] = useState(null);
//   const [editText, setEditText] = useState('');

//   // Xử lý việc thêm mới mục (Create)
//   const handleAddItem = () => {
//     if (newItem.trim()) {
//       setItems([...items, newItem]);
//       setNewItem('');
//     }
//   };

//   // Xử lý việc chỉnh sửa mục (Update)
//   const handleEditItem = (index) => {
//     const updatedItems = items.map((item, idx) => (idx === index ? editText : item));
//     setItems(updatedItems);
//     setEditItem(null);
//     setEditText('');
//   };

//   // Xử lý việc xóa mục (Delete)
//   const handleDeleteItem = (index) => {
//     const filteredItems = items.filter((_, idx) => idx !== index);
//     setItems(filteredItems);
//   };

//   return (
//     <div className="App">
//       <h1>CRUD Example</h1>

//       <div>
//         <input
//           type="text"
//           value={newItem}
//           onChange={(e) => setNewItem(e.target.value)}
//           placeholder="Add new item"
//         />
//         <button onClick={handleAddItem}>Add</button>
// </div>


//   <ul>
//     {items.map((item, index) => (
//       <li key={index}>
//         {editItem === index ? (
//           <>
//             <input
//               type="text"
//               value={editText}
//               onChange={(e) => setEditText(e.target.value)}
//             />
//             <button onClick={() => handleEditItem(index)}>Save</button>
//             <button onClick={() => setEditItem(null)}>Cancel</button>
//           </>
//         ) : (
//           <>
//             {item}
//             <button onClick={() => {
//               setEditItem(index);
//               setEditText(item);
//             }}>
//               Edit
//             </button>
//             <button onClick={() => handleDeleteItem(index)}>Delete</button>
//           </>
//         )}
//       </li>
//     ))}
//   </ul>
// </div>
// );
// };

// export default App

import React, { useState } from 'react';

const STUDENTS = [
  {
    id: 'DE160182',
    name: 'Nguyễn Hữu Quốc Khánh',
    image: '/images/khanh.png',
    address: 'DaNang',
    featured: false,     
  },
  {
    id: 'DE160377',
    name: 'Choy Vĩnh Thiện',
    image: '/images/thien.png',
    address: 'QuangNam',
    featured: false
  },
  {
    id: 'DE160547',
    name: 'Đỗ Nguyên Phúc',
    image: '/images/phuc.png',
    address: 'QuangNam',
    featured: false
  },
  {
    id: 'DE170049',
    name: 'Lê Hoàng Minh',
    image: '/images/minh.png',     
    address: 'DaNang',
    featured: true,
  }
];

function StudentList() {
  const [students, setStudents] = useState(STUDENTS);

  // Create
  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  // Read
  const renderStudents = () => {
    return students.map(student => (
      <div key={student.id}>
        <img src={student.image} alt={student.name} />
        <p>{student.name}</p>
        <p>{student.address}</p>
        <button onClick={() => deleteStudent(student.id)}>Delete</button>
      </div>
    ));
  };

  // Update (not implemented here, but you can add a function similar to addStudent to update student information)

  // Delete
  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div>
      {renderStudents()}
    </div>
  );
}

export default StudentList;