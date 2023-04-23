import React, { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import "./about.scss";
import imageSelf from "../../assets/images/personal_image.jpg";

export const About = () => {
  const image = new Image();
  image.src = imageSelf;

  image.addEventListener("load", function() {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = 300;
    canvas.height = 450;

    let particlesArray = [];
    const numberOfParticles = 12000;
    const detail = 1;

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let grid = [];
    for (let y = 0; y < canvas.height; y += detail) {
      let row = [];
      for (let x = 0; x < canvas.width; x += detail) {
        const red = pixels.data[y * 4 * pixels.width + x * 4];
        const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
        const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
        const color = "rgb(" + red + "," + green + "," + blue + ")";
        const brightness = calculateBrightness(red, green, blue) / 100;

        row.push(brightness);
      }
      grid.push(row);
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speed = 0;
        this.velocity = Math.random() * 0.7;
        this.size = Math.random() * 2 + 0.1;
      }
      update() {
        this.speed = grid[Math.floor(this.y / detail)]
          ? grid[Math.floor(this.y / detail)][Math.floor(this.x / detail)]
          : 0.2;
        let movement = 2.5 - this.speed + this.velocity;
        this.y += movement;
        if (this.y >= canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }
      draw() {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }
    init();

    function animate() {
      ctx.globalAlpha = 0.05;
      ctx.fillStyle = "#3d3547"; //'rgb(139, 111, 216)' //rgb(0, 0,0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.2;
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        ctx.globalAlpha = particlesArray[i].speed * 0.3;
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    }
    animate();

    function calculateBrightness(red, green, blue) {
      return Math.sqrt(
        red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114
      );
    }
  });

  return (
    <div className="root">
      <div className="containerAbout">
        <Parallax className="circle">
          <div className="parallaxInner">
            <div className="circleInner">
              <div className="aboutText">
                <span> Hi! </span>
                <span>
                  I am a creative front-end developer offering 10 years of
                  experience in designing and delivering high-impact web
                  solutions for Fortune 500 organizations. Skilled in
                  requirement analysis, solution designing, development, testing
                  and support of business-critical web applications
                  incorporating range of technologies.
                </span>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax  className="ring">
          <canvas id="canvas1"></canvas>
        </Parallax>
      </div>
    </div>
  );
};
