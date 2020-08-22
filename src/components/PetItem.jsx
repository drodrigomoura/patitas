import React from 'react'
import moment from 'moment'

const PetItem = ({pet}) =>{  
  moment.locale('es') 
  const date = moment(pet.date, 'YYYYMMDD').fromNow()
  return(
          
    <div className="Pets">
      <div 
        className="Pets-cover"
        style={{
          background: `url('${pet.photo}')`
        }}
      >
        <span>
          {pet.type === 'dog' && '🐶' }
          {pet.type === 'cat' && '🐱' }
        </span>
        {
          pet.adopt &&
          <div className="Pets-type">
          Adopcion
          </div>
        }

      </div>
      <div className="Pets-content">
        <div className="Pets-head">
          <h2>{pet.name}</h2>
          <i>
            {pet.gender === 'male' && '♂️'}
            {pet.gender === 'female' && '♀️'}
          </i>
        </div>
        <p>{pet.description}</p>
          <div className="Pets-date">
            <i className="fas fa-calendar-alt"/>
            <span>{date}</span>
          </div>
      </div>
    </div>
)};

export default PetItem;