import React from "react";
import students from "../data";
import Card from "./Card";

function List() {
  return (
    <div className="container mx-auto p-8 md:p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-8 mt-14 ">
      {students.map((student) => {
        return <Card key={student.id} student={student} />;
      })}
    </div>
  );
}

export default List;
