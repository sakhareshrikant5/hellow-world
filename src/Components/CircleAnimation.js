import React from 'react';
import '../CircleAnimation.css'; // Assuming styles are in an external CSS file

function CircleAnimation({ radius = 120, dotCount = 24, speed = 20 }) {
  const center = radius;
  const containerSize = radius * 2;
  /*<CircleWithDots radius={150} dotCount={36} />*/
  const dots = Array.from({ length: dotCount }, (_, index) => {
    const angle = (360 / dotCount) * index;
    return (
      <div
        key={index}
        className="animated-dot"
        style={{
          transform: `rotate(${angle}deg) translate(${radius}px)`,
          animationDelay: `${(speed / dotCount) * index}s`,
        }}
      />
    );
  });

  return (
    <div
      className="circle-container"
      style={{
        width: containerSize,
        height: containerSize,
      }}
    >
      {dots}
    </div>
  );
}

export default CircleAnimation;
