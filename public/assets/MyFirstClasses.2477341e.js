import{d as y,r as N,j as e,F as U,a as o,c as g,x as u,I as p,T as v,k as w,C as _,u as T,B as I}from"./index.d087145b.js";import{T as P}from"./TimePicker.70bfcf16.js";const $=()=>{const{user:a}=y(),h=_();N.exports.useState(!1);const[t,d]=N.exports.useState([]),C=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"],m={modification:!1,condition:"pending",teacher:"unasigned",remainingClases:a.misClases.remainingClases,studentUid:a.uid,studentEmail:a.email,studentName:a.form.name,studentLastName:a.form.lastName,studentPhoneNumber:a.form.phoneNumber,durationClass:a.form.durationClass},f={textNotification:"Programaste tus clases, en breve se te asiganara un profesor",notificationType:"Notificacion",checked:!1},b=async()=>{const i=["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];let n=[];i.map((s,l)=>{let r=t.filter(c=>c.day===s);n.push(...r)});try{const s=g(),l=u(s,`Users/${a.uid}/myClasses/${a.uid}`);await p(l,{userWeek:n,...m});const r=u(s,`Classes/${a.uid}`);await p(r,{userWeek:n,...m});const c=u(s,`Users/${a.uid}/myNotifications/${a.uid}`);await p(c,{...f,timeStamp:h});const S=u(s,`Users/${a.uid}`);await v(S,{teacher:"pending",notifications:w(1),newbie:!1,myClassesId:a.uid}),swal("Muy Bien","Pronto se te asignara un profesor!","success")}catch(s){swal("UPS!",`${s.message}`,"error")}},D=()=>{let i=!1,n=0;t.length===0?swal("CUIDADO!","Debes seleccionar al menos un dia y un horario","error"):t.map(s=>{let l=s.time!==void 0,r=!1;if(s.timeDate){let c=s.timeDate;r=!isNaN(c.getTime())}(!l||!r)&&(swal("CUIDADO!","Debes eleccionar un horario","error"),n++)}),n===0&&t.length!=0&&(i=!0),i&&b()},k=i=>{let n=t.filter(l=>l.day===i.id),s=t.filter(l=>l.day!=i.id);n={day:i.id,time:i.timeString,timeDate:i.timeDate},s.push(n),d(s)};return e(U,{children:o("div",{className:"programar-clase-conteiner",children:[e("h5",{children:"Selecciona los dias y el horario en que quieres tomar tus clases"}),e("ul",{className:"day-list",children:C.map((i,n)=>{const[s,l]=N.exports.useState(!1);return o("div",{className:"day-time-button",children:[e("li",{className:s?"day-button clicked":"day-button",onClick:()=>{let r=t;s?r=r.filter(c=>c.day!=i):r.push({day:i,time:void 0}),l(!s),d(r)},children:i}),s&&e(P,{id:i,name:"time",onChange:k})]},n)})}),e("button",{className:"continue-button",onClick:D,children:"CONTINUAR"})]})})},q=()=>{const{user:a}=y(),h=T(),t=a.form,d=async C=>{try{const m=g(),f=u(m,`Users/${a.uid}`);await v(f,{durationClass:C}),h("/Panel")}catch(m){swal("UPS!",`${m.message}`,"error")}};return e("div",{className:"MyFirstClasses__container",children:t.remainingClases>0?e("div",{children:e($,{})}):e("div",{children:t.durationClass===0?o("div",{children:[o("div",{className:"MyfirstClasses__welcome",children:[e("h5",{children:"Bienvenido a NAVIS"}),e("p",{children:"Para empezar debes adquirir tu primer paquete de clases"}),e("p",{children:"Pero antes debes elegir entre clases de 30min o 50min"})]}),o("div",{className:"cards__container",children:[e("div",{className:"buy-card",children:o("ul",{children:[e("li",{className:"amount",children:"Clases de 30min "}),e("div",{children:e("button",{className:"button__Card",onClick:()=>d(30),children:"SELECCIONAR"})})]})}),e("div",{className:"buy-card",children:o("ul",{children:[e("li",{className:"amount",children:"Clases de 50min "}),e("div",{children:e("button",{className:"button__Card",onClick:()=>d(50),children:"SELECCIONAR"})})]})})]})]}):o("div",{children:[o("div",{className:"MyfirstClasses__welcome",children:[e("h5",{children:"Bienvenido a NAVIS"}),e("p",{children:"Adquiere tu primer paquete de clases"}),e("button",{className:"button__Card",onClick:()=>d(0),children:"ATRAS"})]}),e(I,{userDuration:t.durationClass})]})})})};export{q as default};
