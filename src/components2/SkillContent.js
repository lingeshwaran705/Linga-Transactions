const Frontobj = [
  {
    id: 1,
    lang: "HTML",
    per: 100,
  },
  {
    id: 2,
    lang: "CSS",
    per: 100,
  },
  {
    id: 3,
    lang: "JS",
    per: 100,
  },
  {
    id: 4,
    lang: "Next JS",
    per: 20,
  },
  {
    id: 5,
    lang: "React JS",
    per: 90,
  },
  {
    id: 6,
    lang: "Formik",
    per: 100,
  },
  {
    id: 7,
    lang: "Tailwind CSS",
    per: 100,
  },
  {
    id: 8,
    lang: "Git",
    per: 30,
  },
  {
    id: 9,
    lang: "Git hub",
    per: 60,
  },
];

const Backobj = [
  {
    id: 1,
    lang: "Node JS",
    per: 40,
  },
  {
    id: 2,
    lang: "Django",
    per: 35,
  },
  {
    id: 3,
    lang: "Express JS",
    per: 15,
  },
];

const Dataobj = [
  {
    id: 1,
    lang: "Firebase",
    per: 40,
  },
];

const Otherobj = [
  {
    id: 1,
    lang: "JAVA",
    per: 65,
  },
];

function ObjSort(obj) {
  return obj.sort((i1, i2) => {
    return i2.per - i1.per;
  });
}

export const FrontEnd = ObjSort(Frontobj);
export const BackEnd = ObjSort(Backobj);
export const DataBase = ObjSort(Dataobj);
export const Others = ObjSort(Otherobj);
