import{a as s,j as n}from"./index.d087145b.js";const l=e=>{let a=0;e.actualClass!==0&&(a=e.completedClases/e.actualClass*100);let t=Math.round(a);return s("div",{className:"studentClassInfo__asistencia",children:[n("p",{className:"asistencia__title",children:"ASISTENCIA"}),s("p",{className:"asistencia__percent",children:[t,"%"]}),s("div",{className:"asistencia",children:[s("p",{children:[e.completedClases," Presentes"]}),s("p",{children:[e.absentedClases," Ausente"]})]})]})};export{l as default};
