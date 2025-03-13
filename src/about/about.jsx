import React from 'react';
import './about.css';

export function About(props) {
  const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://purr.woody.cat?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');

        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
        const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?`;
        setImageUrl(apiUrl);
      })
      .catch();

  }, []);

  return (
    <main className="container-fluid text-center">

      <div id='picture' className='picture-box'>
        <img src={imageUrl} alt='stock background' />
      </div>
      <div id="info" className="quote-box text-light">
        <p>
          Whack-a-Mole is a fast paced game where the goal is to whack as many moles as you can before you make too many
          mistakes and the game ends.
          BE WARNED: The moles will increase their speed as the game goes on.
        </p>

        <p>
          The name Whack-a-Mole is a registered trademark of Mattel. Our use of the name and the game is for non-profit
          educational use only. No part of this code or program should be used outside of that definition.
        </p>

        <p className="quote"> “The mole is an animal that digs passages searching for the sun. Sometimes he reaches the
          surface. When he looks at the sun he goes blind.”</p>
        <p className="author"> Alejandro Jodorowsky</p>
      </div>
    </main>
  );
}



