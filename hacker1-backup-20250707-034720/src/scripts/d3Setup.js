// D3.js setup and utilities for Hacker1

import * as d3 from 'd3';

export function loadTwoDData() {
  // Mock data for demonstration - in production this would fetch from the JSON file
  return [
    {x: 50, y: 50, value: 10},
    {x: 150, y: 100, value: 20},
    {x: 250, y: 75, value: 15},
    {x: 350, y: 125, value: 25}
  ];
}

export function createGoldenRatioVisualization(containerId, data) {
  const container = d3.select(`#${containerId}`);
  const width = 400;
  const height = 300;
  
  const svg = container.append('svg')
    .attr('width', width)
    .attr('height', height);
  
  // Create golden ratio rectangles
  data.data.forEach((rect, index) => {
    svg.append('rect')
      .attr('x', rect.x)
      .attr('y', rect.y)
      .attr('width', rect.width)
      .attr('height', rect.height)
      .attr('fill', 'none')
      .attr('stroke', '#D4AF37')
      .attr('stroke-width', 2)
      .attr('opacity', 0.8);
    
    // Add ratio labels
    svg.append('text')
      .attr('x', rect.x + rect.width / 2)
      .attr('y', rect.y + rect.height / 2)
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .attr('fill', '#E0E0E0')
      .attr('font-size', '12px')
      .text(rect.ratio.toFixed(3));
  });
  
  return svg;
}

export function createPrimeSpiralVisualization(containerId, data) {
  const container = d3.select(`#${containerId}`);
  const width = 400;
  const height = 400;
  const centerX = width / 2;
  const centerY = height / 2;
  
  const svg = container.append('svg')
    .attr('width', width)
    .attr('height', height);
  
  // Create spiral of prime numbers
  data.data.forEach((point, index) => {
    const angleRad = (point.angle * Math.PI) / 180;
    const x = centerX + Math.cos(angleRad) * point.radius * 3;
    const y = centerY + Math.sin(angleRad) * point.radius * 3;
    
    svg.append('circle')
      .attr('cx', x)
      .attr('cy', y)
      .attr('r', 4)
      .attr('fill', '#8A5A5A')
      .attr('opacity', 0.8);
    
    svg.append('text')
      .attr('x', x)
      .attr('y', y - 8)
      .attr('text-anchor', 'middle')
      .attr('fill', '#E0E0E0')
      .attr('font-size', '10px')
      .text(point.value);
  });
  
  return svg;
}

export function createWordFrequencyChart(containerId, data) {
  const container = d3.select(`#${containerId}`);
  const margin = {top: 20, right: 30, bottom: 40, left: 40};
  const width = 500 - margin.left - margin.right;
  const height = 300 - margin.bottom - margin.top;
  
  const svg = container.append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom);
  
  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);
  
  // Scales
  const xScale = d3.scaleBand()
    .domain(data.data.map(d => d.word))
    .range([0, width])
    .padding(0.1);
  
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data.data, d => d.count)])
    .range([height, 0]);
  
  // Bars
  g.selectAll('.bar')
    .data(data.data)
    .enter().append('rect')
    .attr('class', 'bar')
    .attr('x', d => xScale(d.word))
    .attr('y', d => yScale(d.count))
    .attr('width', xScale.bandwidth())
    .attr('height', d => height - yScale(d.count))
    .attr('fill', '#5A7A5A')
    .attr('opacity', 0.8);
  
  // X axis
  g.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(xScale))
    .selectAll('text')
    .attr('fill', '#E0E0E0');
  
  // Y axis
  g.append('g')
    .call(d3.axisLeft(yScale))
    .selectAll('text')
    .attr('fill', '#E0E0E0');
  
  return svg;
}

export function createLiteratureTimeline(containerId, data) {
  const container = d3.select(`#${containerId}`);
  const margin = {top: 20, right: 30, bottom: 60, left: 60};
  const width = 600 - margin.left - margin.right;
  const height = 200 - margin.top - margin.bottom;
  
  const svg = container.append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom);
  
  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);
  
  // Scale
  const xScale = d3.scaleLinear()
    .domain(d3.extent(data.data, d => d.year))
    .range([0, width]);
  
  // Timeline line
  g.append('line')
    .attr('x1', 0)
    .attr('y1', height / 2)
    .attr('x2', width)
    .attr('y2', height / 2)
    .attr('stroke', '#7A5A7A')
    .attr('stroke-width', 2);
  
  // Data points
  g.selectAll('.timeline-point')
    .data(data.data)
    .enter().append('circle')
    .attr('class', 'timeline-point')
    .attr('cx', d => xScale(d.year))
    .attr('cy', height / 2)
    .attr('r', 5)
    .attr('fill', '#D4AF37')
    .attr('opacity', 0.8);
  
  // Labels
  g.selectAll('.timeline-label')
    .data(data.data)
    .enter().append('text')
    .attr('class', 'timeline-label')
    .attr('x', d => xScale(d.year))
    .attr('y', height / 2 - 15)
    .attr('text-anchor', 'middle')
    .attr('fill', '#E0E0E0')
    .attr('font-size', '10px')
    .text(d => `${d.author} (${d.year})`);
  
  return svg;
}
