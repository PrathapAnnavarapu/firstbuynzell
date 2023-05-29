import React, { useEffect, useRef, useState } from "react";
// import { Carousel } from 'react-carousel-minimal';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './carouselstyles.css'
export type ImageType = { id: number; url: string };

const ImageCarousel: React.FC<{ images?: ImageType[] }> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<ImageType>();
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);

  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        images.length
      );
      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleSelectedImageChange = (newIdx: number) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);
      window.scrollTo(0, 310)
      if (carouselItemsRef?.current[newIdx]) {
        carouselItemsRef?.current[newIdx]?.scrollIntoView({
          inline: "center",
          behavior: "smooth"
        });
        window.scrollTo(0, 310)
      }
    }
  };

  const handleRightClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex + 1;    
      if (newIdx >= images.length) {
        newIdx = 0;       
      }
      handleSelectedImageChange(newIdx);
    }
  };

  const handleLeftClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex - 1;      
      if (newIdx < 0) {
        newIdx = images.length - 1;        
      }
      handleSelectedImageChange(newIdx);
    }
  };

  return (
    <>
      <div
        className="selected-image"
        style={{ backgroundImage: `url(${selectedImage?.url})` }}        
        />
      <div className="carousel">
        <div className="carousel__images">
          {images &&
            images.map((image, idx) => (
              <div
                onClick={() => handleSelectedImageChange(idx)}
                style={{ backgroundImage: `url(${image.url})` }}
                key={image.id}
                className={`carousel__image ${
                  selectedImageIndex === idx && "carousel__image-selected"
                }`}
                ref={(el) => (carouselItemsRef.current[idx] = el)}
              />
            ))}
        </div>
        <button
          className="carousel__button carousel__button-left"
          onClick={handleLeftClick}
        >
          <IoIosArrowBack/>
        </button>
        <button
          className="carousel__button carousel__button-right"
          onClick={handleRightClick}
        >
          <IoIosArrowForward/>
        </button>
      </div>
      </>
  );
};

export default ImageCarousel;
