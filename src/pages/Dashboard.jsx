import React from 'react';
import Form from '../components/Form';

const Dashboard = () => (
  <div className="Dashboard">
    <div className="Dashboard-container">
      <div className="Dashboard-content">
        <Form/>
      </div>
      <div className="Dashboard-profile">
        <h2>Perfil</h2>
        <div className="Dashboard-profile-info">
          <img src="/" alt="Nombre Usuario"/>
          <span>Nomber:</span>
          <h4>Rodrigo Moura</h4>
          <span>Correo:</span>
          <h4>rodri@gmailc.om</h4>
          <button>Cerrar Sesión</button>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;