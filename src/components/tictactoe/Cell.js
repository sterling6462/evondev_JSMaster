import React from "react";

// object destructuring
// const student = {
//   name: "Student",
//   age: 28,
// };

// const name = student.name;
// const age = student.age;

// Tương tự với
// const { name, age } = student;

const Cell = ({ value, onClick, className }) => {
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
