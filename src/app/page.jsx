"use client";
import './page.scss';
import tie from '../medias/tesing_tie.mp3'
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function App() {
  const starRef = useRef(null);
  const audioRef = useRef(null);
  const [Isdone, setIsdone] = useState(false);
  function random(min, max) {
    return min + Math.random() * (max + 1 - min);
  }
  useEffect(e => {
    if (starRef.current.querySelectorAll('div').length <= 0) {
      const canvasSize = starRef.current.offsetWidth * starRef.current.offsetHeight;
      const starsFraction = canvasSize / 2000;
      for (let i = 0; i < starsFraction; i++) {
        let xPos = random(0, 100);
        let yPos = random(0, 100);
        let alpha = random(0.5, 1);
        let size = random(1, 2);
        let colour = '#ffffff';
        const star = document.createElement('div');
        star.style.position = 'relative';
        star.style.left = xPos + '%';
        star.style.top = yPos + '%';
        star.style.opacity = alpha;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.backgroundColor = colour;
        starRef.current.appendChild(star);
      }
      audioRef.current.src = tie;
    }
    audioRef.current.onloadeddata = e => {
      audioRef.current.play()
    }
  }, []);
  return <div className='mainFrame'>
    <div className='stars' ref={starRef}></div>
    {!Isdone ?
      <div className='main'>
        <div className='text'>
          <h2>
            TEST THIS.
          </h2>
        </div>
        <audio ref={audioRef} controls src={''} />
        <br /><button onClick={e => setIsdone(true)}>Test Done</button>
      </div>
      : <div className='list'>
        <Link href={'/a-new-hope'} >
          Episode IV: A New Hope
        </Link>
      </div>}
  </div>
}