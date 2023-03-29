import React  from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);

  const vidRef = React.useRef();
  
  const handleVideo = () => { 
  //lorsqu'on veut changer  l'état précédent en un autre
  // on doit lui passer un callback 
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    playVideo ? vidRef.current.pause() : vidRef.current.play();
    
  } 
return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}  /* il est nécessaire d'avoir une réf pour une video lorsqu'on utilise react */
        type="video/mp4"
        loop
        controls={false} /* le user a la permission de contrôler la vidéo, il peut la mettre en lecture/pause  */
        muted
      />
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center"
        onClick={handleVideo}
        >
        {playVideo ? (
          <BsPauseFill color="#fff" fontSize={50} />) : (
          <BsFillPlayFill color="#fff" fontSize={50}/>
          )}
        </div>
      </div>
    </div>
    
  )
};



export default Intro;
