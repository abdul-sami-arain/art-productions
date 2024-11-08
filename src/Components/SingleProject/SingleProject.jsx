import React, { useState } from 'react'
import './SingleProject.css';
import ReactPlayer from 'react-player';

const SingleProject = ({ tag, vimeoId, projectImage, projectTitle, chanelName }) => {
  const [isHovered, setIsHovered] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [videoUrl, setVideoUrl] = useState('');
  const [playing, setPlaying] = useState(false);

  const handleVideoPlay = (vimeoId) => {
    setVideoUrl(`https://vimeo.com/${vimeoId}`);
    setIsModalOpen(true);
    setPlaying(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl('');
    setPlaying(false);
  };
  return (
    <>
      <div className='single-project' onClick={() => handleVideoPlay(vimeoId)}>
        <div className='single-project-image'>
          <span className='single-project-tag'><p>{tag}</p></span>
          <img src={projectImage} alt='project' />
          <div className='project_marquee'>
             <ul>
              <li>SEE PROJECT  ➝</li>
              <li>SEE PROJECT  ➝</li>
              <li>SEE PROJECT  ➝</li>
              <li>SEE PROJECT  ➝</li>
              <li>SEE PROJECT  ➝</li>
              <li>SEE PROJECT  ➝</li>
              <li>SEE PROJECT  ➝</li>
              <li>SEE PROJECT  ➝</li>
              <li>SEE PROJECT  ➝</li>
              <li>SEE PROJECT  ➝</li>
              <li>SEE PROJECT  ➝</li>
              <li>SEE PROJECT  ➝</li>
             </ul>
          </div>
        </div>
        <p className='chanel-name'>{chanelName}</p>
        <h3 className='project-title'>{projectTitle}</h3>
      </div>
      <div className={`videoModal ${isModalOpen ? 'show-vimeo-video' : ''}`}>
        <div className="videoContainer">
          <ReactPlayer
            url={videoUrl}
            playing={playing}
            controls={true}
            width="100%"
            height="100%"
          />
          <button className="closeButton" onClick={closeModal}>X</button>
        </div>
      </div>
    </>
  )
}

export default SingleProject
