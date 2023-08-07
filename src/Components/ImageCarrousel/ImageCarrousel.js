import React, {useEffect, useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import HyperX from "../../media/Banners/Banner HyperX.png"
import HyperXSmall from "../../media/Banners/Cloud alpha small.png"
import Astro from "../../media/Banners/Banner Astro.png"
import AstroSmall from "../../media/Banners/Banner Astro small.png"
import Corsair from "../../media/Banners/CorsairBanner.jpg"
import CorsairSmall from "../../media/Banners/CorsairBannerSmall.jpg"
import "./ImageCarrousel.css"

function ImageCarrousel({ handleCategory}) {
    const [hyperXImgSrc, setHyperXImgSrc] = useState(HyperX)
    const [asttroImgSrc, setAstroImgSrc] = useState(Astro)
    const [corsairImgSrc, setCorsairImgSrc] = useState(Corsair)
    // const [hyperXImgSrc, setHyperXImgSrc]
    const handleWindowResize = () => {
        if (window.innerWidth < 768) {
          setAstroImgSrc(AstroSmall);
          setHyperXImgSrc(HyperXSmall);
          setCorsairImgSrc(CorsairSmall);

        } else {
          setAstroImgSrc(Astro);
          setHyperXImgSrc(HyperX);
          setCorsairImgSrc(Corsair);
        }
      };
    
      useEffect(() => {
        handleWindowResize(); // Initialize image sources based on initial window size
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

    return (
        <div className='w-100% Carrousel-container'>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hyperXImgSrc}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={asttroImgSrc}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={corsairImgSrc}
          
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
        </div>
      );
    }

export default ImageCarrousel