import React from "react";

let codeSkills = [
  "C#",
  ".NET",
  "EF Core",
  "JavaScript",
  "SQL",
  "OOP",
  "Typescript",
  "Figma",
  "Linux",
  "React",
];

let otherskills = [
  "Psykologi",
  "Skriving",
  "Veiledning",
  "Ledelse",
  "Forskning",
  "Sosialt arbeid",
  "Synge i kor    ",
];

otherskills.sort();
let otherSkillsString = otherskills.toString();
let otherOutput = otherSkillsString.replace(/,/g, " | ");

codeSkills.sort();
let codeSkillsString = codeSkills.toString();
let codeOutput = codeSkillsString.replace(/,/g, " | ");

otherOutput = "🤌 " + otherOutput;
codeOutput = "💻 " + codeOutput;

export default function SkillsArray() {
  return (
    <div className="pr-4 pl-4 text-gray-400">
      {codeOutput}
      <br></br><br></br>
      {otherOutput}
    </div>
  );
}
