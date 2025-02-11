import React from 'react';

export function About() {
  return (
    <main className="container-fluid text-center">
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
      
      <p className= "quote"> “The mole is an animal that digs passages searching for the sun. Sometimes he reaches the
        surface. When he looks at the sun he goes blind.”</p>
      <p className="author"> Alejandro Jodorowsky</p>
    </div>
  </main>
  );
}