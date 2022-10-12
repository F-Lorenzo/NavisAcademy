import  React,{useState} from 'react';

const Calificacion = () => {
  const options = [
    {id:1, label: 'Bien', value: 'Bien' },
    {id:2, label: 'Normal', value: 'Normal' },
    {id:3, label: 'Mal', value: 'Mal' },
  ];

  const [value, setValue] =useState('');
  console.log("🚀 ~ file: calificacion.jsx ~ line 11 ~ Calificacion ~ value", value)

  
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label>
        Como estuvo la clase?
        <select value={value} onChange={handleChange}>
          {options.map((option) => (
            <option key={option.id} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Calificacion;