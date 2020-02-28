import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id:'1',
    image: 'https://colosseum.id/wp-content/uploads/2017/09/2017-10-04-High-Heels_LFD-1024x576.jpg',
    name: 'Music Festival Concert',
    tanggal: '27 September 2019',
    time: '18.30 - 22.00 WIB',
    lokasi: 'Dupan Convention Hall'
  },
  {
    id:'2',
    image: 'https://colosseum.id/wp-content/uploads/2017/09/2017-10-04-High-Heels_LFD-1024x576.jpg',
    name: 'Music Festival Concert',
    tanggal: '27 September 2019',
    time: '18.30 - 22.00 WIB',
    lokasi: 'Dupan Convention Hall'
  },
  {
    id:'3',
    image: 'https://colosseum.id/wp-content/uploads/2017/09/2017-10-04-High-Heels_LFD-1024x576.jpg',
    name: 'Music Festival Concert',
    tanggal: '27 September 2019',
    time: '18.30 - 22.00 WIB',
    lokasi: 'Dupan Convention Hall'
  }
];

const Event = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img style={{ width:'100%', height: '100%'}} src={item.image} alt={item.lokasi} />
        <CarouselCaption className="text-secondary" captionText={item.tanggal} captionHeader={item.name} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 350px;
              background: #47E2E8;
              margin-bottom: 25px;
              

            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}


      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Event;
