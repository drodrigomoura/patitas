import React from 'react';

const Form = () => (
  <div className="Form">
    <div className="Form-head">
      <h2>Dar en Adopción</h2>
    </div>
    <div className="Form-item">
      <form>
        <input name="name" type="text" placeholder="Nombre de tu mascota"/>
        <input name="descripcion" type="text" placeholder="Describe tu mascota"/>
        <select name="tipo">
          <option disabled selected>Seleccionar</option>
          <option value="cat">Gato</option>
          <option value="dog">Perro</option>
        </select>
        <select name="gender">
          <option disabled selected>Seleccionar</option>
          <option value="female">Femenino</option>
          <option value="male">Masculino</option>
        </select>
        <select name="adopt">
          <option disabled selected>Seleccionar</option>
          <option value="true">Dar en adopción</option>
          <option value="false">Cuidar</option>
        </select>
        <input type="file" name="photo"/>
        <button>Enviar</button>
      </form>
    </div>
  </div>
);

export default Form;