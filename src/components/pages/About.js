import React from 'react';

import headshot from '../../images/headshot.jpg'

export default function About() {
  return (
    <main className='about d-flex justify-content-between'>
      <div className='about-body me-5'>
      <h2>About</h2>
      <p>
      Reed is a registered dietitian turned web-developer living in the Bay Area. She will be completing the U.C. Berkeley Extensions coding boot camp in mid-March. I need to write a more complete bio but for the sake of turning this in, here's some filler text. 
      Etsy cray biodiesel mustache, vibecession DSA artisan marxism copper mug neutral milk hotel squid normcore cardigan glossier. Next level deep v 8-bit neutral milk hotel mumblecore cupping umami. Vegan aesthetic cardigan, DSA listicle letterpress coloring book fashion axe semiotics vaporware godard mustache pabst.
      </p>
      </div>
      <div className='headshot'>
        <img 
        src={headshot} alt="headshot" 
        style={{width: "250px", height: "250px", objectFit: "cover", borderRadius: "50%", border: "solid 3px var(--accent)"}}/>
      </div>
    </main>
  );
}