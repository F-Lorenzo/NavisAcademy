import{j as m,a as y,r as L,d as ae,u as re,L as ne,F as ie,c as V,x as F,e as oe,D as ce,g as le,T as W,k as X}from"./index.07d71d12.js";const de=({teacher:k,durationClass:A,newDate:u})=>{const $=[],_=k.disponibility;let D=0;switch(A){case 30:D=2;break;case 50:D=3;break}return k.teacherWeek.map((l,w)=>{let f=_[l.day];const v=l.timeStartDate,h=l.timeEndDate,d=v.toDate(),H=h.toDate(),j=d.getUTCHours(),R=d.getUTCMinutes(),p=j.toString().padStart(2,"0"),S=R.toString().padStart(2,"0"),M=`${p}:${S}`,e=H.getUTCHours(),T=H.getUTCMinutes(),a=e.toString().padStart(2,"0"),n=T.toString().padStart(2,"0"),U=`${a}:${n}`;function O(i,o,E){let g=!0;for(let C=0;C<o;C++){let[r,c]=i.split(":");if(c=Number(c)+15,c>=60&&(c=c-60,r=Number(r)+1,r<10&&(r="0"+r),c<10&&(c="0"+c),r===24&&(r="00")),i=`${r}:${c}`,g=E[i],!g)break}return g}let b=M;for(;b!==U;){if(f[b]&&O(b,D,f)){const[E,g]=b.split(":"),C=parseInt(E),r=parseInt(g),c=new Date(Date.UTC(2022,1,1,C,r)),N={day:l.day,time:c};$.push(N)}let[i,o]=b.split(":");o=Number(o)+15,o>=60&&(o=o-60,i=Number(i)+1,i<10&&(i="0"+i),o<10&&(o="0"+o),i===24&&(i="00")),b=`${i}:${o}`}}),m("div",{children:$.map((l,w)=>{const f=l.time,v=f.getHours(),h=f.getMinutes(),d=v.toString().padStart(2,"0"),H=h.toString().padStart(2,"0");return m("div",{className:"listaHorarios_container",children:y("div",{className:"listaHorarios_card",children:[y("div",{className:"listaHorarios_data",children:[y("p",{className:"listaHorarios_dia",children:[l.day,":"]}),y("p",{className:"listaHorarios_hora",children:[d,":",H," HS"]})]}),m("button",{className:"listaHorarios_button",onClick:()=>{u(l.day,l.time)},children:"Seleccionar"})]})},w)})})};const pe=()=>{const[k,A]=L.exports.useState(!1),{user:u}=ae(),[$,_]=L.exports.useState(),[D,l]=L.exports.useState(),w=u.misClases.actualClass,f=u.misClases.durationClass,v=u.misClases.teacherUid;let h=[];const d=[],H=re();async function j(p){const S=V(),M=F(S,`Users/${p}`),T=(await oe(M)).data(),a=ce(S,`Users/${u.uid}/mySchedule`);return le(a).then(n=>{l(n.docs.map(U=>({id:U.id,...U.data()})))}),T}L.exports.useEffect(()=>{j(v).then(p=>{const S={disponibility:p.disponibility,teacherWeek:p.weekDisponibility};_(S)})},[]);const R=async(p,S)=>{A(!0);const e=D[0][w];let a=e.date.toDate();const n=(t,s)=>{t.setDate(t.getDate()+s)};let U=0,O=1,b=2,i=3,o=4,E=5,g=6;const C=a.getDay();switch(C){case 0:n(a,0);break;case 1:n(a,-1);break;case 2:n(a,-2);break;case 3:n(a,-3);break;case 4:n(a,-4);break;case 5:n(a,-5);break;case 6:n(a,-6);break}const r=(t,s,I,se)=>{n(a,s);const G=t,Y=a.getDate(),z=a.getMonth(),J=a.getFullYear(),K=G.getHours(),Q=G.getMinutes();let q=new Date(J,z,Y,K,Q),x=new Date(J,z,Y,K,Q);x.setMinutes(x.getMinutes()+se),q.getDay()<=C&&n(q,7)&&n(x,7),h={date:q,dateEnd:x,time:t,condition:"pending",linkToClass:"",teacherCalification:"",studentCalification:"",studentAssist:!1,reprogramed:!1,durationClass:e.durationClass,classNumber:I,calificationOfClass:"",studentName:e.studentName,studentLastName:e.studentLastName,studentUid:e.studentUid,studentEmail:e.studentEmail,teacherName:e.teacherName,teacherLastName:e.teacherLastName,teacherUid:e.teacherUid},n(a,-s)},c=(t,s)=>{t==="domingo"&&r(s,U,e.classNumber,e.durationClass),t==="lunes"&&r(s,O,e.classNumber,e.durationClass),t==="martes"&&r(s,b,e.classNumber,e.durationClass),t==="miercoles"&&r(s,i,e.classNumber,e.durationClass),t==="jueves"&&r(s,o,e.classNumber,e.durationClass),t==="viernes"&&r(s,E,e.classNumber,e.durationClass),t==="sabado"&&r(s,g,e.classNumber,e.durationClass)};n(a,0),c(p,S);const N=[];D.forEach(t=>Object.keys(t).forEach(s=>N.push(t[s]))),N.pop(),N[e.classNumber].reprogramed=!0;let B=!1;for(let t=0;t<N.length;t++){const s=N[t],I=s.date.toDate();B?(s.classNumber=t,d.push(s)):I<h.date?d.push(s):(h.classNumber=t,d.push(h),s.classNumber=t,d.push(s),B=!0)}const P=V(),Z=F(P,`Users/${u.uid}`);await W(Z,{actualClass:X(1),reprogramedThisMonth:X(1)});const ee=F(P,`Users/${u.uid}/mySchedule/${D[0].id}`);await W(ee,{...d});const te=F(P,`Users/${e.teacherUid}/mySchedule/${u.uid}`);await W(te,{...d}),swal("Muy Bien","La clase fue reprogramada con exito","success"),H("/Panel")};if($)return m("div",{children:k?m(ne,{}):y(ie,{children:[y("div",{className:"reprogramar_title",children:[m("h5",{children:"REPROGRAMAR CLASE"}),m("p",{children:"Aqui veras una lista de los horarios disponibles para reprogramar tu clase, recuerda que solo puedes hacer esto 2 veces por mes"})]}),m("div",{children:m(de,{teacher:$,durationClass:f,newDate:R})})]})})};export{pe as default};