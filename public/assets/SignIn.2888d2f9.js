import{u as p,U as v,r as n,j as e,L as f,F as x,a as s,b as N}from"./index.07d71d12.js";import{c as _}from"./SignIn.8b7ecd1c.js";const F=()=>{const c=p(),{user:b,signIn:m}=v(),[t,d]=n.exports.useState(""),[r,u]=n.exports.useState(""),[w,o]=n.exports.useState(""),[g,l]=n.exports.useState(!1),h=async a=>{a.preventDefault(),o(""),l(!0);try{await m(t,r),swal("Bienvenido",`sesion iniciada como ${t}`,"success"),c("/Panel")}catch(i){o(i.message),console.log(i.message),swal("UPS!",`${i.message}`,"error"),l(!1)}};return g?e(f,{}):e(x,{children:e("div",{className:"signIn__main-container",children:s("div",{className:"signIn__container",children:[s("div",{children:[s("div",{className:"signIn__tittleColumn",children:[s("p",{className:"signIn-logo",children:[e("img",{className:"cohete-navis",src:_,alt:"cohete.svg"}),e("i",{className:"fa-solid fa-user"})]}),e("p",{className:"signIn-tittle",children:"Login"})]}),s("p",{className:"subTittle",children:["\xBFTodavia no tenes una cuenta?",e(N,{to:"/signUp",children:"Registrate."})]})]}),s("form",{className:"signIn__form",onSubmit:h,children:[e("label",{htmlFor:"email",children:"Correo electr\xF3nico"}),e("input",{type:"email",id:"email",name:"email",value:t,onChange:a=>d(a.target.value)}),e("label",{htmlFor:"password",children:"Clave"}),e("input",{type:"password",id:"password",name:"password",value:r,onChange:a=>u(a.target.value)}),e("button",{type:"submit",id:"btn__iniciar-sesion",children:"Iniciar Sesi\xF3n"})]})]})})})};export{F as default};
