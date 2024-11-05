import React from 'react';

const Inicio = () => {

    const integrantes = ['1', '2', '3', '4', '5'];

  return (
    <div className="container mt-0 text-center">
      <h1 className="fw-light">Proyecto Semestral de Estadística y Probabilidad</h1>
      
      {/* Recuadro de integrantes */}
      <div className="card mt-3 mx-auto" style={{ maxWidth: '600px' }}>
        <div className="card-body">
          <h2 className="card-title">Integrantes del Grupo</h2>
          <ul className="list-group list-group-flush">
            {integrantes.map((nombre, index) => (
              <li className="list-group-item" key={index}>{nombre}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Información sobre el proyecto */}
      <div className="mt-4">


      </div>
    </div>
  );
};

export default Inicio;
