// import React from 'react';
// import TouchCarousel from 'react-touch-carousel';
// import NonPassiveTouchTarget from "./non-passive-touch-target";
// import cx from 'classnames';
// import data from './utils/data';
// import Image from './image';
// function clamp (n, min, max) {
//     if (n < min) {
//         return min
//     }
//     if (n > max) {
//         return max
//     }
//     return n
// }
//
// const query = window.location.search.slice(1)
// const enableLoop = /\bloop\b/.test(query)
//
// const cardSize = 300;
// const cardPadCount = enableLoop ? 3 : 0
// const carouselWidth = clamp(window.innerWidth, 0, 960)
// function CarouselContainer (props) {
//     const {cursor, carouselState: {active, dragging}, ...rest} = props
//     let current = -Math.round(cursor) % data.length
//     while (current < 0) {
//         current += data.length
//     }
//     // Put current card at center
//     const translateX = (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2;
//     return (
//         <NonPassiveTouchTarget
//             className={cx(
//                 'carousel-container',
//                 {
//                     'is-active': active,
//                     'is-dragging': dragging
//                 }
//             )}
//         >
//             <NonPassiveTouchTarget
//                 className='carousel-track'
//                 style={{transform: `translate3d(${translateX}px, 0, 0)`}}
//                 {...rest}
//             />
//         </NonPassiveTouchTarget>
//     )
// }
//
// const MobileCarousel = () => {
//     const renderCard =  (index, modIndex) => {
//         const item = data[modIndex];
//         return (
//             <div
//                 key={index}
//                 className='carousel-card'
//                 onClick={() => console.log(`clicked card ${1 + modIndex}`)}
//             >
//                 <Image img={item.img}>
//
//                 </Image>
//                 <div className='carousel-title'>{item.title}</div>
//                 <div className='carousel-text'>{item.text}</div>
//             </div>
//         )
//     }
//     return (
//         <section className="how-it-works">
//             <div className="arrow-left">
//             </div>
//             <TouchCarousel
//                 component={CarouselContainer}
//                 cardCount={data.length}
//                 cardSize={375}
//                 renderCard={renderCard}
//                 loop
//                 autoplay={0}
//             />
//         </section>
//     );
// };
//
// export default MobileCarousel;
