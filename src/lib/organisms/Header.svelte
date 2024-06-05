<script>

    import {Facebook, Instagram, Linkedin, Github} from '$lib/index.js';
  </script>
<section>
  <div>
      <img src="/images/tunis-pictuertje-header.jpg" alt="" width="100%" height="100%">
  </div>
  
  <article>
      <h1>Frontend developer designer</h1>
      <h2>Duneya Saleh</h2>
      <ul>
        <li>
          <a href="/">
           <Facebook/>
          </a>
        </li>
        <li>
          <a href="/">
           <Instagram />
          </a>
        </li>
        <li>
          <a href="/">
           <Linkedin />
          </a>
        </li>
        <li>
          <a href="/">
           <Github />
          </a>
        </li>
      </ul>
    </article>
  
</section>
    
    <style>

      section{
        display: flex;
        flex-direction: column;
      }  
      img{
        object-fit: cover;
      }
      article {
        background-color: rgba(255, 255, 255, 0.836);
        width: fit-content;
        padding: 1.5em;
        border-radius: 0 17em 17em 0;
        margin-top: -3em;
        box-shadow: inset 0px 0px 10px rgba(255, 192, 203, 0.918);
      }
    
      h1 {
    font-size: 3em;
    font-weight: 700;
    background-color: #cf3d77bf;
    color: transparent;
    text-shadow: 0px 2px 3px rgba(255, 255, 255, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(
      -225deg,
      #d96995bf 0%,
      #80AFDF 29%,
      #ff1361 67%,
      #cf3d77bf 100%
    );
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
  }
  
  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
    
    h2 {
      /* font-family: var(--Duneya-font); */
      font-size: 2em;
      background-color: black;
      color: transparent;
      text-shadow: 0px 2px 3px rgba(255, 255, 255, 0.5);
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
    }
  
    ul {
      display: flex;
      list-style: none;
      gap: 1em;
    }
  
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #cf3d77bf;
      border-radius: 50%;
      padding: 0.5em;
      width: 3em;
      height: 3em;
    }
  
    li a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    @media (min-width: 48rem){
        section{
            display: flex;
            flex-direction: row;
        }
      div{
      width: 50em;
      float: right;
     
       }
       img{
          border-radius: 17em 0 0 17em ;
       }
       article{
        margin-top: 0;
       }
       h1{
          font-size: 6em;
       }
       h2{
          font-size: 2em;
       }
      }
  
      @media (min-width: 64rem){
          /* div{
          width: 60em;
     
       } */
    }
  
  
    
  </style>