import styles from "./filtering.module.css";
import React, { useState } from "react";
import {useContext} from "react";

interface Student {
  name: string;
  age: number;
  year: number;
}
const Filtering = () => {
  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("name");
  const students: Student[] = [
    {name: "Dimitri", age: 18, year: 2},
    {name: "Dedue", age: 19, year: 3},
    {name: "Felix", age: 18, year: 2},
    {name: "Ingrid", age: 18, year: 2},
    {name: "Sylvain", age: 20, year: 3},
    {name: "Annette", age: 17, year: 1},
    {name: "Mercedes", age: 22, year: 4},
    {name: "Ashe", age: 17, year: 1}
  ]
  students.sort((a: any, b: any) => {
    if(sort === "name") {
      return a.name.localeCompare(b.name);
    }
    else if(sort === "age") {
      return b.age - a.age;
    }
    else if(sort === "year") {
      return b.year - a.year;
    }
  });
  
  return (
    <div>
      <div>
        <label>
          <input type="text" className={styles.ClassSearch} value={searchText} onChange={(event) => setSearchText(event.target.value)}/>
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{fontWeight: sort=="name" ? "bold" : "normal"}} onClick={() => setSort("name")}>Name</th>
            <th style={{fontWeight: sort=="age" ? "bold" : "normal"}} onClick={() => setSort("age")}>Age</th>
            <th style={{fontWeight: sort=="year" ? "bold" : "normal"}} onClick={() => setSort("year")}>Year</th>
          </tr>
        </thead>
        <tbody>
          {
            students.filter(student => student.name.startsWith(searchText)).map(student => (
              <tr>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.year}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

const Index = () => {
  return (
    <div className={styles.App}>
      <Filtering/>
    </div>
  );
}


export default Index;

