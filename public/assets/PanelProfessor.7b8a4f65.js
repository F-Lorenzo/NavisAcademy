import{r as E,j as t,L as R,F as B,a as e,c as D,x as v,T as A,k as b,e as O,D as I,A as j,C as V,d as q,u as z,g as K}from"./index.07d71d12.js";const X=({studentId:i,teacherId:l,classNumber:h})=>{const[C,n]=E.exports.useState("1"),[o,c]=E.exports.useState(!1),[N,r]=E.exports.useState(!1),d=[{id:1,label:"Clase Exitosa",value:1},{id:2,label:"Estudiante Ausente",value:2},{id:3,label:"Profesor Ausente",value:3}];let m=0,S=0,p=0,f="",s=0,a=0,g=0;const x=u=>{n(u.target.value)},$=async()=>{c(!0);const u=D(),_=v(u,`Users/${i}`);await A(_,{completedClases:b(m),absentedClases:b(S),remainingClases:b(p)});const F=v(u,`Users/${l}`);await A(F,{totalClasses:b(s),thisMonthClasses:b(a),absentedClasses:b(g)});const M=v(u,`Users/${l}/myStudents/${i}`);await A(M,{remainingClases:b(p)});const w=v(u,`Classes/${i}`);await A(w,{remainingClases:b(p)});const T=v(u,`Users/${l}/mySchedule/${i}`),U=(await O(T)).data();U[h].condition="success",U[h].teacherCalification=f,await A(T,{...U});const k=v(u,`Users/${i}/mySchedule/${i}`),y=(await O(k)).data();y[h].condition="success",y[h].teacherCalification=f,await A(k,{...y}),c(!1),swal("OK","Se calific\xF3 la clase con \xE9xito","success")},L=()=>{if(r(!0),C==="")swal("CUIDADO!","Debe seleccionar una opci\xF3n","error");else{switch(C){case"1":m=1,S=0,p=-1,s=1,a=1,g=0,f="success";break;case"2":m=0,S=1,p=-1,s=1,a=1,g=0,f="absentedStudent";break;case"3":m=0,S=0,s=0,a=0,g=1,f="absentedTeacher";break}$()}};return o?t(R,{}):t(B,{children:N===!0?t("div",{children:t("span",{className:"calificationPending",children:"Calificaci\xF3n Enviada"})}):e("div",{className:"calification-container",children:[e("label",{htmlFor:"calificationClass",children:["Califica La Clase:",t("select",{name:"calificationClass",id:"calificationClass",value:C,onChange:x,children:d.map(u=>t("option",{value:u.value,defaultValue:u.value[1],children:u.label},u.id))})]}),t("button",{onClick:L,children:"ENVIAR"})]})})},H=({classDate:i,studentId:l})=>{const[h,C]=E.exports.useState(""),n=i.condition,o=i.teacherCalification,c=i.date.toDate(),N=i.dateEnd.toDate(),r=new Date;let d="",m=c-r,S=N-r,p=60*1e3,f=60*p,s=24*f,a=Math.floor(m/s),g=Math.floor(m%s/f),x=Math.floor(m%f/p),$=Math.floor(S%f/p),L=0;switch(o){case"success":d="Clase Exitosa";break;case"absentedStudent":d="Estudiante Ausente";break;case"absentedTeacher":d="Profesor Ausente";break;default:d="No hay calificaci\xF3n";break}a<L&&(L=Math.abs(a));const u=w=>{C(w.target.value)},_=V(),F={textNotification:`Tu profesor ah enviado el link de tu clase ${h}`,notificationType:"Notificacion",checked:!1},M=async w=>{w.preventDefault();try{const T=D(),P=v(T,`Users/${l}`);await A(P,{linkToClass:h,notifications:b(1)});const U=I(T,`Users/${l}/myNotifications`);await j(U,{...F,timeStamp:_}),swal("OK","Se envio el link de la clase","success")}catch(T){swal("UPS!",`${T.message}`,"error")}};return t("div",{children:n==="pending"?L>1?t("div",{children:t("span",{children:"LA CLASE YA EXPIRO"})}):a>0?e("div",{children:[e("p",{children:["Faltan ",a," d\xEDas"]}),e("p",{children:["y ",g," horas"]})]}):g>0?e("div",{children:[e("p",{children:["Faltan ",g," horas"]}),e("p",{children:["y ",x," minutos"]})]}):x>30?t("div",{children:e("p",{children:["Faltan ",x," minutos"]})}):$>0?e("form",{onSubmit:M,children:[e("div",{className:"linkToClass-container",children:[t("label",{htmlFor:"url",children:"Ingrese aqui el Link de la clase:"}),t("input",{type:"url",id:"url",name:"url",placeholder:"https://Ingrese_el_link_de_la_clase.com",pattern:"https://.*",size:"40",value:h||"",onChange:u,required:!0})]}),t("button",{type:"submit",children:"ENVIAR"})]}):t("div",{children:t(X,{studentId:l,teacherId:i.teacherUid,classNumber:i.classNumber})}):t("div",{children:t("span",{className:o==="success"?"calificationGreen":"calificationRed",children:d})})})},G=({myClass:i})=>{const[l,h]=E.exports.useState("all"),C=n=>{h(n)};return e("div",{className:"myClasses-container",children:[e("div",{className:"control_buttons",children:[t("button",{onClick:()=>C("success"),children:"CLASES ANTERIORES"}),t("button",{onClick:()=>C("all"),children:"TODAS LAS CLASES"}),t("button",{onClick:()=>C("pending"),children:"PROXIMAS CLASES"})]}),i.map((n,o)=>{if(n.reprogramed===!1){if(l==="all"){const c=n.date.toDate(),r=c.getHours().toString().padStart(2,"0"),m=c.getMinutes().toString().padStart(2,"0"),S=c.toLocaleDateString();return e("div",{className:"myClasses-card",children:[t("p",{className:"myClasses-card_date",children:S}),e("ul",{className:"myClasses-card_info",children:[e("li",{className:"myClasses-card_student",children:["Alumno: ",n.studentName," ",n.studentLastName]}),e("li",{className:"myClasses-card_time",children:[r,":",m," HS"]})]}),e("ul",{className:"myClasses-card_info",children:[e("li",{children:["Clase N\xBA: ",n.classNumber+1]}),e("li",{children:["Duraci\xF3n: ",n.durationClass,"min"]})]}),t(H,{classDate:n,studentId:n.studentUid})]},o)}else if(n.condition===l){const c=n.date.toDate(),r=c.getHours().toString().padStart(2,"0"),m=c.getMinutes().toString().padStart(2,"0"),S=c.toLocaleDateString();return e("div",{className:"myClasses-card",children:[t("p",{className:"myClasses-card_date",children:S}),e("ul",{className:"myClasses-card_info",children:[e("li",{className:"myClasses-card_student",children:["Alumno: ",n.studentName," ",n.studentLastName]}),e("li",{className:"myClasses-card_time",children:[r,":",m," HS"]})]}),e("ul",{className:"myClasses-card_info",children:[e("li",{children:["Clase N\xBA: ",n.classNumber+1]}),e("li",{children:["Duraci\xF3n: ",n.durationClass,"min"]})]}),t(H,{classDate:n,studentId:n.studentUid})]},o)}}})]})};const Y=async(i,l)=>{const h=(r,d)=>{r.setDate(r.getDate()+d)},C=async()=>{const r=D(),d=v(r,`Users/${i}`);await A(d,{lastMonthClasses:l,thisMonthClasses:0})},n=new Date,o=new Date;h(o,-1);const c=n.getMonth(),N=o.getMonth();c!==N&&C(),console.log({toDay:n,yesterDay:o,thisMonth:c,lastMonth:N,thisMonthClasses:l})};function W(){const{user:i}=q(),[l,h]=E.exports.useState([]),[C,n]=E.exports.useState(!0),o=z();E.exports.useEffect(()=>{const d=D(),m=I(d,`Users/${i.uid}/mySchedule`);K(m).then(S=>{const p=S.docs.map(s=>({...s.data()})),f=[];p.forEach(s=>Object.keys(s).forEach(a=>f.push({classNumber:s[a].classNumber,condition:s[a].condition,date:s[a].date,dateEnd:s[a].dateEnd,durationClass:s[a].durationClass,linkToClass:s[a].linkToClass,reprogramed:s[a].reprogramed,studentAssist:s[a].studentAssist,studentCalification:s[a].studentCalification,studentEmail:s[a].studentEmail,studentLastName:s[a].studentLastName,studentName:s[a].studentName,studentUid:s[a].studentUid,teacherCalification:s[a].teacherCalification,teacherLastName:s[a].teacherLastName,teacherName:s[a].teacherName,teacherUid:s[a].teacherUid,time:s[a].time}))),f.sort((s,a)=>s.date<a.date?-1:s.date>a.date?1:0),h(f),n(!1)}),Y(i.uid,i.form.thisMonthClasses)},[i]);const c=()=>{o("/Account/Teacher/MyStudents"),swal("BIENVENIDO","Aqu\xED podras ver una lista de tus alumnos","success")},N=()=>{o("/Account")},r=()=>{o("/MiCalendario")};return C?t(R,{}):t(B,{children:e("div",{children:[e("div",{className:"encabezado",children:[t("button",{onClick:N,children:"Mi Perfil"}),t("button",{onClick:c,children:"Mis Alumnos"}),t("button",{onClick:r,children:"Mi Calendario"}),e("ul",{className:"infoEncabezado",children:[t("li",{className:"infoTittle",children:"Mis Clases Impartidas"}),e("li",{children:["Totales: ",i.form.totalClasses]}),e("li",{children:["Este mes: ",i.form.thisMonthClasses," "]}),e("li",{children:["Mes Anterior: ",i.form.lastMonthClasses]})]})]}),t("div",{children:t(G,{myClass:l})})]})})}export{W as default};
