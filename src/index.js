import { select, arc } from "d3";
import "./style.css";

const svg = select("svg");
const height = +svg.attr("height");
const width = +svg.attr("width");

//attach group element to svg and with common x, y
//elements inside g will be positioned relatively

const g = svg
  .append("g")
  .attr("transform", `translate(${width / 2}, ${height / 2})`);

const circle = g
  .append("circle")
  .attr("r", height / 2)
  .attr("fill", "yellow")
  .attr("stroke", "black");

const eyeXspacing = 100;
const eyeYspacing = -70;
const eyeRadius = 30;
const eyeBrowWidth = 70;
const eyeBrowHeight = 15;
const eyeBrowYoffset = -70;

const eyesG = g.append("g").attr("transform", `translate(0, ${eyeYspacing})`);

const leftEye = eyesG
  .append("circle")
  .attr("r", eyeRadius)
  .attr("cx", -eyeXspacing);

const rightEye = eyesG
  .append("circle")
  .attr("r", eyeRadius)
  .attr("cx", eyeXspacing);

const eyeBrowsG = eyesG
  .append("g")
  .attr("transform", `translate(0, ${eyeBrowYoffset})`);

eyeBrowsG
  .transition()
  .duration(2000)
  .attr("transform", `translate(0, ${eyeBrowYoffset - 50})`)
  .transition()
  .duration(2000)
  .attr("transform", `translate(0, ${eyeBrowYoffset})`);

const leftEyebrow = eyeBrowsG
  .append("rect")
  .attr("x", -eyeXspacing - eyeBrowWidth / 2)
  .attr("width", eyeBrowWidth)
  .attr("height", eyeBrowHeight);

const rightEyebrow = eyeBrowsG
  .append("rect")
  .attr("x", eyeXspacing - eyeBrowWidth / 2)
  .attr("width", eyeBrowWidth)
  .attr("height", eyeBrowHeight);

const mouth = g.append("path").attr(
  "d",
  arc()({
    innerRadius: 150,
    outerRadius: 170,
    startAngle: Math.PI / 2,
    endAngle: (Math.PI * 3) / 2,
  })
);
