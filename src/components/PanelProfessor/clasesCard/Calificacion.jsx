import { getFirestore, increment, doc, updateDoc } from 'firebase/firestore';
import  React,{useState} from 'react';

const Calificacion = ({student, teacher}) => {

  const options = [
    {id:1, label: 'Clase exitosa', value: 1 },
    {id:2, label: 'Estudiante Ausente', value: 2 },
    {id:3, label: 'Profesor Ausente', value: 3 },
  ];

  const [value, setValue] =useState('');
  
  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  const classCalification = async () => {
    if (value === '') {
      swal("CUIDADO!", `Debe seleccionar una opción`, "error")
    } else {
      console.log(student, teacher)
      const firestore = getFirestore();

      if (value === 1) {
        const studentCalification = doc(firestore, `Users/${student}`);
        await updateDoc(studentCalification, {
          actualClass: increment(1),
          completedClases: increment(1),
        });

        const teacherCalification = doc(firestore, `Users/${teacher}`);
        await updateDoc(teacherCalification, {
          totalClasses: increment(1),
          thisMonthClasses: increment(1),
        });
        console.log("OK")
      }
  
      if (value === 2) {
        const studentCalification = doc(firestore, `Users/${student}`);
        await updateDoc(studentCalification, {
          actualClass: increment(1),
          absentedClases: increment(1),
        });

        const teacherCalification = doc(firestore, `Users/${teacher}`);
        await updateDoc(teacherCalification, {
          totalClasses: increment(1),
          thisMonthClasses: increment(1),
        });
      }
  
      if (value === 3) {
        const studentCalification = doc(firestore, `Users/${student}`);
        await updateDoc(studentCalification, {
          actualClass: increment(1),
        });

        const teacherCalification = doc(firestore, `Users/${teacher}`);
        await updateDoc(teacherCalification, {
          absentedClasses: increment(1),
        });

      }
    }

  }

  return (
    <div>
      <label>
        Califica la clase
        <select value={value} onChange={handleChange}>
          {options.map((option) => (
            <option key={option.id} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
      <button onClick={classCalification}>ENVIAR</button>
    </div>
  );
};

export default Calificacion;