import React, { useState } from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import Modal from './Modal';

interface Props {
  cocktail: {
    name: string;
    directions: string[];
    ingredients: string[];
    liquor: string[];
    garnish: string;
    id: string;
  };
}

const Card: React.FC<Props> = ({ cocktail }) => {
  const { name, directions, ingredients, liquor, garnish } = cocktail;
  const [showModal, setShowModal] = useState(false);
  const ingredientList: React.ReactNode[] = [];
  const directionsList: React.ReactNode[] = [];
  const liquorList: React.ReactNode[] = [];
  const liquorData: string[] = [];

  const getImage = () => {
    const snakeName = name.toLowerCase().replaceAll(' ', '-');

    return snakeName;
  };

  ingredients.forEach((ingredient: string, i: number) =>
    ingredientList.push(
      <li key={i} className="ingredient">
        {ingredient}
      </li>
    )
  );

  directions.forEach((step: string, i: number) =>
    directionsList.push(
      <li key={i} className="directions">
        {step}
      </li>
    )
  );

  liquor.forEach((liquor: string, i: number) =>
    liquorList.push(
      <span key={i} className="liquor">
        {liquor.toUpperCase() + ' '}
      </span>
    )
  );

  liquor.forEach((liquor: string) => {
    if (liquor !== ' | ') {
      liquorData.push(liquor.toLocaleLowerCase());
    }
  });

  return (
    <div className="card-box">
      <img src={`../src/assets/${getImage()}.jpg`} alt={name} />
      <div className="card-info" data-liquor={liquorData}>
        <h2 className="cocktail-name">{name}</h2>
        <div className="liquor-list">{liquorList}</div>
        <button className="showModal" onClick={() => setShowModal(true)}>
          View Recipe <IoArrowForwardOutline />
        </button>
      </div>
      {showModal ? (
        <Modal className="modal-active">
          <div className="card-box">
            <button className="hideModal" onClick={() => setShowModal(false)}>
              X
            </button>
            <img src={`../src/assets/${getImage()}.jpg`} alt={name} />
            <div className="card-info">
              <button className="hideModal" onClick={() => setShowModal(false)}>
                X
              </button>
              <h2 className="cocktail-name">{name}</h2>
              <div className="liquor-list">{liquorList}</div>
              <h3>Ingredients</h3>
              <ul className="ingredient-list">{ingredientList}</ul>
              <span className="garnish">{garnish}</span>
              <h3>Directions</h3>
              <ul className="directions-list">{directionsList}</ul>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Card;
