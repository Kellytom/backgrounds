// TwoDVisualization.jsx - D3.js visualization component
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { createGoldenRatioVisualization, createPrimeSpiralVisualization, createWordFrequencyChart, createLiteratureTimeline } from '../scripts/d3Setup.js';

export default function TwoDVisualization({ type = 'golden-ratio', data }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !data) return;

    // Clear previous visualization
    d3.select(containerRef.current).selectAll('*').remove();

    const containerId = `viz-${Date.now()}`;
    containerRef.current.id = containerId;

    let visualization;
    
    try {
      switch (type) {
        case 'golden-ratio':
          visualization = createGoldenRatioVisualization(containerId, data);
          break;
        case 'prime-spiral':
          visualization = createPrimeSpiralVisualization(containerId, data);
          break;
        case 'word-frequency':
          visualization = createWordFrequencyChart(containerId, data);
          break;
        case 'literature-timeline':
          visualization = createLiteratureTimeline(containerId, data);
          break;
        default:
          // Default simple scatter plot
          const svg = d3.select(`#${containerId}`)
            .append('svg')
            .attr('width', 400)
            .attr('height', 300);

          svg.selectAll('circle')
            .data(data.data || [])
            .enter()
            .append('circle')
            .attr('cx', d => d.x || Math.random() * 400)
            .attr('cy', d => d.y || Math.random() * 300)
            .attr('r', 5)
            .attr('fill', '#D4AF37')
            .attr('opacity', 0.8);
      }
    } catch (error) {
      console.error('Error creating visualization:', error);
      
      // Fallback simple visualization
      const svg = d3.select(`#${containerId}`)
        .append('svg')
        .attr('width', 400)
        .attr('height', 300);
      
      svg.append('text')
        .attr('x', 200)
        .attr('y', 150)
        .attr('text-anchor', 'middle')
        .attr('fill', '#E0E0E0')
        .text('Visualization Error - Check Console');
    }

    return () => {
      if (containerRef.current) {
        d3.select(containerRef.current).selectAll('*').remove();
      }
    };
  }, [type, data]);

  const getTitle = () => {
    switch (type) {
      case 'golden-ratio':
        return 'Golden Ratio Rectangles';
      case 'prime-spiral':
        return 'Prime Number Spiral';
      case 'word-frequency':
        return 'Scripture Word Frequency';
      case 'literature-timeline':
        return 'Classical Literature Timeline';
      default:
        return 'Data Visualization';
    }
  };

  const getDescription = () => {
    switch (type) {
      case 'golden-ratio':
        return 'Visual representation of the golden ratio (φ ≈ 1.618) through nested rectangles, demonstrating divine proportion found throughout nature and art.';
      case 'prime-spiral':
        return 'Prime numbers arranged in a spiral pattern, revealing the mysterious distribution of these fundamental building blocks of mathematics.';
      case 'word-frequency':
        return 'Analysis of key theological terms across biblical texts, showing the emphasis on divine attributes and human virtues.';
      case 'literature-timeline':
        return 'Timeline of major works in classical literature, from ancient epics to modern masterpieces.';
      default:
        return 'Interactive data visualization using D3.js';
    }
  };

  return (
    <div className="two-d-visualization">
      <div className="visualization-header">
        <h3>{getTitle()}</h3>
        <p>{getDescription()}</p>
      </div>
      <div 
        ref={containerRef}
        className="visualization-container"
        style={{
          border: '2px solid #444',
          borderRadius: '8px',
          background: 'rgba(0, 0, 0, 0.3)',
          padding: '20px',
          margin: '10px 0'
        }}
      />
      <div className="visualization-footer">
        <p><em>"The book of nature is written in the language of mathematics." - Galileo Galilei</em></p>
      </div>
    </div>
  );
}
