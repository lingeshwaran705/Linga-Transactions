import React from "react";
import Contact from "./Contact";
import Range from "./Range";
import { FrontEnd, BackEnd, DataBase, Others } from "./SkillContent";

function Skills() {
  return (
    <div className="text-left p-4 sm:p-0">
      <header className="flex items-center">
        <span class="material-icons text-3xl text-yellow-500">star_rate</span>
        <span className="text-3xl pl-2 font-bold text-gray-600">Skills</span>
      </header>
      <main>
        <Title title="Front End" />
        {FrontEnd.map((val) => {
          return <Range title={val.lang} key={val.id} percent={val.per} />;
        })}
        <Title title="Back End" />
        {BackEnd.map((item) => {
          return <Range title={item.lang} key={item.id} percent={item.per} />;
        })}
        <Title title="Data Base" />
        {DataBase.map((item) => {
          return <Range title={item.lang} key={item.id} percent={item.per} />;
        })}
        <Contact />
      </main>
    </div>
  );
}

function Title(props) {
  return <h1 className="mb-2 mt-6 font-bold text-2xl">{props.title}</h1>;
}

export default Skills;
