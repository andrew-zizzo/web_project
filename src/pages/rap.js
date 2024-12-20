import React from "react";

export default function Rap() {
  return (
    <section id="rap">
      <header>
        <h1>rock music profile</h1>
      </header>
      <article>
        <h2>rock playlists</h2>
        <p>here are my favorite rock playlists.</p>
        
        <div className="playlist">
          <h3>playlist 1: classic rock anthems</h3>
          <iframe 
            src="https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID" 
            width="300" 
            height="380" 
            frameBorder="0" 
            allow="encrypted-media"
            title="classic rock anthems playlist"
          ></iframe>
        </div>

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
      </article>
    </section>
  );
}