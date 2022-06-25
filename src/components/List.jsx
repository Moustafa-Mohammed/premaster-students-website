import React from "react";
import students from "../data";
import Card from "./Card";

function List() {
  return (
    <div>
      {students.map((student) => {
        return <Card key={student.id} student={student} />;
      })}
    </div>
  );
}

export default List;
