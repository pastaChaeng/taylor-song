import { useEffect, useRef, useState } from 'react' 
import { motion } from 'framer-motion' 
import styled from 'styled-components' 
import corneliaStreetAudio from './cornelia-street.mp3' 
import loverAlbumCover from './lover.jpg' 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(135deg, #f9c7c6, #f1d1ea, #f9c7c6, #f1d1ea, #f9c7c6);
`;

const Header = styled.header`
  text-align: center;
  font-family: 'Gochi Hand', cursive;
  color: #6c3a36;
`;

const MainContent = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #6c3a36;
  font-family: 'Montserrat', sans-serif;
`;

const Footer = styled.footer`
  text-align: center;
  font-family: 'Gochi Hand', cursive;
  color: #6c3a36;
`;

const Heart = styled(motion.img)`
  position: absolute;
  width: 25px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const AudioPlayer = styled.audio`
  appearance: none;
  width: 300px;
  background-color: transparent;
  border: #FFC0CB;
  outline: #FFC0CB;
  padding: 10px;
  margin-top: 20px;
  color: #6c3a99; 
  
  &::-webkit-media-controls-panel {
    background-color: rgba(255, 192, 203, 0.5); 
    border-radius: 20px; 
    box-shadow: 0 4px 4px rgba(1, 1, 1, 0.9); 
  }

 
  &::-webkit-media-controls-play-button {
    color: #FF69B4;
  }

  &::-webkit-media-controls-pause-button {
    color: #FFC0CB
  }

  &::-webkit-media-controls-volume-slider {
    background-color:#FFC0CB; 
  }

  &::-webkit-media-controls-volume-slider-container {
    padding: 0 10px; 
  }

  &::-webkit-media-controls-volume-slider-thumb {
    background-color: #6c3a90; 
    border: 6px solid #FFC0CB;
    border-radius: 50%; 
  }


  &::-webkit-media-controls-current-time-display,
  &::-webkit-media-controls-time-remaining-display {
    color: #6c3a36; 
    font-size: 16px; 
  }
`;


const AudioPlayerContainer = styled.div`
  display: flex;
  align-items: center;
`;
 

const LoadingText = styled.p`
  font-size: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  color: #6c3a36;
`;

const CorneliaStreet = () => {
  const audioRef = useRef(null) 
  const [lyrics, setLyrics] = useState('') 
  const [loading, setLoading] = useState(true) 

  useEffect(() => {
    const lyricsMap = {
      8: "We were in the backseat, drunk on something stronger than the drinks in the bar",
      16: "I rent a place on Cornelia Street, I sit casually in the car",
      24: "We were a fresh page on the desk, filling in the blanks as we go",
      35: "As if the street lights pointed in an arrowhead leading us home",
      45: "And I hope I never lose you, hope it never ends",
      50: "I'd never walk Cornelia Street again",
      54: "That's the kind of heartbreak time could never mend",
      60: "I'd never walk Cornelia Street again",
      64: "And baby, I get mystified by how this city screams your name",
      74: "And baby, I'm so terrified of if you ever walk away",
      82: "I'd never walk Cornelia Street again",
      87: "I'd never walk Cornelia Street again",
      90: "Windows flung right open, autumn air, jacket 'round my shoulders is yours",
      100: "We bless the rains on Cornelia Street, memorize the creaks in the floor",
      112: "Back when we were card sharks, playing games",
      115: "I thought you were leading me on, I packed my bags, left Cornelia Street",
      122: "Before you even knew I was gone",
      135: "But then you called, showed your hand",
      142: "I turned around before I hit the tunnel, sat on the roof, you and I",
      147: "And I hope I never lose you, hope it never ends",
      155: "I'd never walk Cornelia Street again",
      160: "That's the kind of heartbreak time could never mend",
      169: "I'd never walk Cornelia Street again",
      171: "And baby, I get mystified by how this city screams your name",
      180: "And baby, I'm so terrified of if you ever walk away",
      186: "'Cause I'd never walk Cornelia Street again",
      193: "And I'd never walk Cornelia Street again",
      205: "You hold my hand on the street",
      209: "Walk me back to that apartment",
      211: "Years ago, we were just inside",
      213: "Barefoot in the kitchen",
      215: "Sacred new beginnings",
      217: "That became my religion, listen",
      219: "I hope I never lose you, hope it never ends",
      254: "I'd never walk Cornelia Street again",
      262: "That's the kind of heartbreak time could never mend",
      269: "I'd never walk Cornelia Street again",
      276: "And baby, I get mystified by how this city screams your name",
      283: "And baby, I'm so terrified of if you ever walk away",
      290: "'Cause I'd never walk Cornelia Street again",
      298: "And I'd never walk Cornelia Street again"
    };

    const updateLyrics = () => {
      const currentTime = Math.floor(audioRef.current.currentTime) 
      if (lyricsMap[currentTime]) {
        setLyrics(lyricsMap[currentTime]) 
      }
    } 

    const interval = setInterval(updateLyrics, 1000) 

    setTimeout(() => {
      setLoading(false) 
    }, 2000) 

    return () => clearInterval(interval) 
  }, []);

  useEffect(() => {
    if (!loading) {
      audioRef.current.play() 
    }
  }, [loading]);

  return (
    <Container>
      <Header>
        <h1>Cornelia Street</h1>
      </Header>
      {loading ? (
        <LoadingText>Hi Rhea... ✨</LoadingText>
      ) : (
        <>
          <MainContent>
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1,
                duration: 1,
                type: 'spring',
                stiffness: 200,
              }}
            >
              {lyrics}
            </motion.p>
          </MainContent>
          <Footer>
            <p>With Love,</p>
            <p>Taylor</p>
          </Footer>

          <AudioPlayerContainer>
            <AudioPlayer ref={audioRef} src={corneliaStreetAudio} controls />
          </AudioPlayerContainer>

          <Heart
            src="https://cdn-icons-png.flaticon.com/128/8236/8236748.png"
            alt="Heart"
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: [1, 1.5, 1],
              rotate: [0, 20, 0],
              transition: {
                duration: 1.5,
                ease: 'easeInOut',
                repeat: Infinity,
              },
            }}
          />
          <Heart
            src="https://cdn-icons-png.flaticon.com/128/8236/8236748.png"
            alt="Heart"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: [1, 1.5, 1],
              rotate: [0, -20, 0],
              transition: {
                duration: 1.5,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: 0.5,
              },
            }}
          />

          <img
            src={loverAlbumCover}
            alt="Lover Album Cover"
            style={{
              width: '150px',
              position: 'absolute',
              top: '25px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: '30',
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
              filter: 'drop-shadow(0px 0px 10px #ff69b4)',
              borderRadius: '5px',
            }}
          />
        </>
      )}
    </Container>
  ) 
} 

export default CorneliaStreet 
