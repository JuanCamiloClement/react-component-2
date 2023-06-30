import './FormCard.scss';
import { useState } from 'react';

function FormCard(props) {

  const { numbers, onCaptureRating } = props;

  const [value,setValue] = useState(0);

  //const [selected,setSelected] = useState(false);

  const handleClick = (event) => {
    const selectedNumber = event.target.textContent;
    setValue(selectedNumber);
    //setSelected(!selected);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onCaptureRating(value);
  }

  return (
    <>
        <form onSubmit = { handleSubmit } className='mainContainer'>

          <div className='starContainer'>
              <span className="fa fa-star"></span>
          </div>
          <section className='textSection'>
            <h1 className='textSection__title'>How did we do?</h1>
            <p className='textSection__paragraph'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          </section>
          <div className='numbersContainer'>
            { numbers.map((element) => {
              return (
              <p className='numbersContainer__number' key={ element } onClick={ handleClick }>{ element }</p>
              )}
            )}
          </div>
          <div className='buttonContainer'>
            <button type="submit" className='button'>
              SUBMIT
            </button>
          </div>

        </form>
    </>
  )
}

export default FormCard;