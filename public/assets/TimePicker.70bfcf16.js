import{r as m,a as D,j as t}from"./index.d087145b.js";const g=[{hs:"--"},{hs:"00"},{hs:"01"},{hs:"02"},{hs:"03"},{hs:"04"},{hs:"05"},{hs:"06"},{hs:"07"},{hs:"08"},{hs:"09"},{hs:"10"},{hs:"11"},{hs:"12"},{hs:"13"},{hs:"14"},{hs:"15"},{hs:"16"},{hs:"17"},{hs:"18"},{hs:"19"},{hs:"20"},{hs:"21"},{hs:"22"},{hs:"23"}],v=[{min:"--"},{min:"00"},{min:"15"},{min:"30"},{min:"45"}];const $=({id:c,name:o,onChange:l})=>{const[n,u]=m.exports.useState(),[r,p]=m.exports.useState();function _(s){let e=parseInt(s),a=parseInt(r),h=new Date(2022,1,1,e,a);u(s);const i={id:c,name:o,hour:s,min:r,timeString:`${s}:${r}`,timeDate:h};l(i)}const d=s=>{let e=parseInt(n),a=parseInt(s),h=new Date(2022,1,1,e,a);p(s);const i={id:c,name:o,hour:n,min:s,timeString:`${n}:${s}`,timeDate:h};l(i)};return D("div",{className:"time-picker",children:[t("select",{id:"time-picker__hours",className:"time-picker__select",onChange:s=>_(s.target.value),children:g.map((s,e)=>t("option",{value:s.hs,children:s.hs},e))}),":",t("select",{id:"time-picker__minutes",className:"time-picker__select",onChange:s=>d(s.target.value),children:v.map((s,e)=>t("option",{value:s.min,children:s.min},e))})]})};export{$ as T};
