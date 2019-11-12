import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import css from './PetPage.module.css';

class PetPage extends Component {
  handleBack = e => {
    const { history } = this.props;
    const { state } = this.props.location;
    if (state) history.goBack();
    history.push({ pathname: '/pets' });
  };

  render() {
    const { pets } = this.props;
    const { id } = this.props.match.params;
    const pet = pets.find(elem => elem.id === id);
    const { age, breed, color, description, gender, image, name } = pet;

    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          className={css.button}
          onClick={this.handleBack}
        >
          Return
        </Button>
        <p>All about {name}</p>
        <img src={image} alt={name} className={css.image} width="600"></img>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Color: {color}</p>
        <p>Breed: {breed}</p>
        <p>{description}</p>
      </div>
    );
  }
}

export default PetPage;
