function randomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  function createStars(width, height, spacing) {
    const stars = [];
  
    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        const star = {
          x: x + randomInt(spacing),
          y: y + randomInt(spacing),
          r: Math.random() * maxStarRadius
        };
        stars.push(star);
      }
    }
    return stars;
  }
  
  function fillCircle(ctxSky, x, y, r, fillStyle) {
    ctxSky.beginPath();
    ctxSky.fillStyle = fillStyle;
    ctxSky.arc(x, y, r, 0, Math.PI * 2);
    ctxSky.fill();
  }
  
  function getOpacity(factor) {
    const opacityIncrement =
      (maxStarOpacity - minStarOpacity) * Math.abs(Math.sin(factor));
    const opacity = minStarOpacity + opacityIncrement;
    return opacity;
  }
  
  function render() {
    ctxSky.fillStyle = backgroundColor;
    ctxSky.fillRect(0, 0, width, height);
    stars.forEach(function(star, i) {
      const factor = counter * i;
      const x = star.x;
      const y = star.y;
      const opacity = getOpacity(factor);
      fillCircle(ctxSky, x, y, star.r, `rgba(255, 255, 255, ${opacity}`);
    });
  
    counter++;
    requestAnimationFrame(render);
  }
  
  const backgroundColor = "black";
  const width = window.innerWidth;
  const height = window.innerHeight;
  const maxStarRadius = 1.5;
  const minStarOpacity = 0.1;
  const maxStarOpacity = 0.7;
  const stars = createStars(width, height, 30);
  const moon = {
    color: "#fea",
    x: height / 3,
    y: width / 3,
    r: 40
  };
  
  const sky = document.getElementById("sky");
  const ctxSky = sky.getContext("2d");
  sky.width = width;
  sky.height = height;
  
  let counter = 0;
  
  render();