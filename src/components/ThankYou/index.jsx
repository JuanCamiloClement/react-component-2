import './ThankYou.scss';

function ThankYou({ rating }) {

  return (
    <main className='mainThankYou'>
        <section className='firstContainer'>
            <img src="https://raw.githubusercontent.com/makeitrealcamp/top-v30/f13122e703f81da5e00ccb6dd0271c4dda9b6669/challenges/interactive-rating/images/illustration-thank-you.svg" alt="" />
            <p className='under-image'>You selected { rating } out of 5</p>
        </section>
        <section className='text'>
            <h1 className='text__title'>Thank you!</h1>
            <p className='text__paragraph'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </section>
    </main>

  )
}

export default ThankYou;