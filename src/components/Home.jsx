import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div>
        <div className='snow'>
      <nav>
        <img src="Screenshot2023.png" id="Fld2415" className="logo"/>
        <ul>
            <motion.button
            className='hglkn'
            whileTap={{scale: 0.9}}
            ><a 
            className='gfch'
            href='https://mymusic001.000webhostapp.com'  
            onClick={"google.com"}
            >
            listen music Online</a></motion.button>
            <motion.button
            className='hgvh'
            whileTap={{scale: 0.9}}
            ><a 
            className='hgvj'
            href='https://6449859eadb2805be3ba5909--kaleidoscopic-horse-c229d9.netlify.app' 
              >Project</a></motion.button>
         </ul>
      </nav>
    <div className="detail">
        <h1 
        className='srg'>
            Hi,
        </h1>
        <motion.h2 
        className='srg'>
            I am Amar Kumar Prajapati
        </motion.h2>
            <motion.p
            className='fthgbj'
            >
                This is my offical portfolio website to show all
                Details and work exiprins web development
            </motion.p>

            <motion.button
            className='ager'
            whileTap={{scale: 0.8}}
            ><a href='google.com'></a>
                Download CV</motion.button>
    </div>
    <div className="image">
        <img src="pngwing.com.png" className="shape"/>
        <img src="IMG_3395-removebg-preview.png" className="boy"/>
    </div>
</div>
</div>
)}

export default Home