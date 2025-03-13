import React from 'react';
import './about.css';

export function About(props) {
  const [imageUrl, setImageUrl] = React.useState('https://via.placeholder.com/150');

  React.useEffect(() => {
    // Request random nature image from Lorem Picsum
    fetch('https://picsum.photos/800/600?random')
      .then((response) => {
        setImageUrl(response.url); // Use the URL of the image
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, []);

  return (
    <main className="container-fluid text-center">
      <div id="info" className="quote-box text-light">
        <div id='picture' className='picture-box'>
          <img src={imageUrl} alt='nature background' />
        </div>
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





