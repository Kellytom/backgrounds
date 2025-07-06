// Data utility functions for Hacker1

export async function getWrittenData() {
  try {
    const response = await fetch('/src/data/written.json');
    return await response.json();
  } catch (error) {
    console.error('Error loading written data:', error);
    return [];
  }
}

export async function getGraphicsData() {
  try {
    const response = await fetch('/src/data/graphics.json');
    return await response.json();
  } catch (error) {
    console.error('Error loading graphics data:', error);
    return [];
  }
}

export async function getTwoDData() {
  try {
    const response = await fetch('/src/data/twoDData.json');
    return await response.json();
  } catch (error) {
    console.error('Error loading 2D data:', error);
    return [];
  }
}

export async function getThreeDData() {
  try {
    const response = await fetch('/src/data/threeDData.json');
    return await response.json();
  } catch (error) {
    console.error('Error loading 3D data:', error);
    return [];
  }
}

// Filter written content by category
export function filterWrittenByCategory(data, category) {
  return data.filter(item => item.category === category);
}

// Filter written content by tags
export function filterWrittenByTag(data, tag) {
  return data.filter(item => item.tags && item.tags.includes(tag));
}

// Get random items from an array
export function getRandomItems(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Format content for display
export function truncateContent(content, maxLength = 150) {
  if (content.length <= maxLength) return content;
  return content.substring(0, maxLength) + '...';
}
