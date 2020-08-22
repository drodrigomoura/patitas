import React from 'react';
import useGetPets from '../hooks/';
import PetItem from '../components/PetItem';

const API = 'https://us-central1-patitas-eb35f.cloudfunctions.net/api'
// const API = 'https://us-central1-patitas-1fc32.cloudfunctions.net/api'

const Home = () => {
  const pets = useGetPets(API)
  
  return(
  <div className="Home">
    <div className="Home-container">
      <div className="Home-items">
        {pets.map((pet, index) =>
          <PetItem
            key={`pet-${index}`}
            pet={pet}
          />
        )}
      </div>
    </div>
  </div>
)};

export default Home;