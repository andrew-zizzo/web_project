import { HashLink } from "react-router-hash-link";
import basspic from "../assets/bassimage.jpg"

export default function Home() {
  return (
    <>
     
      <h1>Welcome to My Music Profile</h1>

       <div id="homebio">
      <p>This is my home page where I talk about my love for music and the art it brings to my life. I've always had a love for music, which I can attribute to my father, who played the piano in his youth and has a CD collection spanning across any genre that you can think of, and I pretty much grew up on that. A number of albums from this collection steer away from the stereotypical "dad" music that one would expect, including deep cuts from the 90's alternative rock scene, classic EDM from the genre's beginnings in the late 90's/early 2000's, 70's disco hits, and more. Some do reflect the stereotype though, specifically albums from bands like Led Zeppelin, Pink Floyd, Guns N Roses, Creed, Nirvana, etc. His collection and appreciation for virtually every genre of music served as a gateway for my passion of music. </p>
      
<p>When I began playing the guitar at the age of 14 in the beginning of 2021, my passion for music intensified significantly. I began playing along to simple but textbook powerchord songs from blink-182, and soon after made the transition to the bass guitar. It was when I made this transition that I knew I had found my calling, and I felt as though the bass reflected my personality. Playing the bass is not about being in the spotlight but, instead supporting and complementing those around you. Additionally, there are many instances in which the bass outshines all other instruments in a song or performance, but it still remains buried in the mix and understated. Despite this fact, music is empty without the bass holding up that foundation and I take pride in knowing that without that presence, even if it goes unnoticed, music is incomplete and lost.</p>

<p>If I didn't come from enough of a musical background, my grandfather was a drummer in a band, playing primarily covers of Italian songs in the 70s and 80s at weddings, parties, and other social events. It was my grandfather who forced my dad to learn the piano at a young age, and even to this day, he lives and breathes music. After handing me down his drum kit, which I play often, his passion for singing began, and whenever visiting him, it's necessary that he performs a few old Italian songs before we leave.</p>

<p></p>




<p>Click on the links above to explore my music journey this year, my evolution, and my passion for different genres.</p>
    </div>

<img id= "bassimg"
  src={basspic}
  alt="Me with Bass"
 
  
  
/>



</>


  );
}
