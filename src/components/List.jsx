import React from "react";
import Card from "./Card";

function List({ items }) {
  return (
    <div className="container mx-auto p-8 md:p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-8 mt-14 ">
      {items.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
}

export default List;
