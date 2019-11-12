import React from 'react';
import { Link } from 'react-router-dom';
import css from './PetsPage.module.css';

const PetsPage = props => {
  const { pets } = props;

  return (
    <div>
      <h2 className={css.title}>Available pets</h2>
      <ul className={css.list}>
        {pets.map(elem => (
          <li key={elem.id} className={css.item}>
            <Link
              to={{
                pathname: `/pets/${elem.id}`,
                state: { from: '/pets' },
              }}
            >
              <img className={css.image} src={elem.image} alt={elem.name}></img>
              <span className={css.nameTitle}>Name:&nbsp;</span>
              <span className={css.name}>{elem.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetsPage;
