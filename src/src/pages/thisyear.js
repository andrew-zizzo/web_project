import { HashLink } from "react-router-hash-link";

export default function ThisYear() {
  return (
    <>
      
      
      <h2>Listening: 2024</h2>
        <p>Here's a look at my top songs this year.</p>
        
        <div id="newplaylist">
          <iframe 
            src="https://open.spotify.com/embed/playlist/37i9dQZF1FoyQGyinuuvRu?" 
            width="1000" 
            height="2500" 
            frameBorder="0" 
            allow="encrypted-media"
            
          ></iframe>
        </div>


      
      
    </>
  );
}