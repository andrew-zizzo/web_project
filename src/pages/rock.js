import { HashLink } from "react-router-hash-link";

export default function Rock() {
  return (
    <>
     
        <h1>Rock music profile</h1>
    
     
        <h2>rock playlists</h2>
        <p>here are my favorite rock playlists.</p>
        
        <div className="playlist">
          <h3>playlist 1: classic rock anthems</h3>
          <iframe 
            src="https://open.spotify.com/embed/playlist/4mLHsGUcBOYb7L0gWxTr4Y?
            utm-source-generator" 
            width="750" 
            height="380" 
            frameBorder="0" 
            allow="encrypted-media"
            title="classic rock anthems playlist"
          ></iframe>
        </div>
<p>Throughout 2021 and 2022, my appreciation for rock was increasing, but in 2023 the genre dominated my listening and The Smashing Pumpkins led the way. I also appreciated bands like Hole and Nirvana, but nothing compared to the Smashing Pumpkins.
</p>


        <div className="playlist">
          <h3>playlist 2: modern rock</h3>
          <iframe 
            src="https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID" 
            width="300" 
            height="380" 
            frameBorder="0" 
            allow="encrypted-media"
            title="modern rock playlist"
          ></iframe>
        </div>
      
    </>
  );
}