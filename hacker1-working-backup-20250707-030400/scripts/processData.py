# Python Data Processing Script for Hacker1
# Generates mathematical and spiritual data for visualizations

import numpy as np
import json
import math
from pathlib import Path

def create_directories():
    """Create necessary directories if they don't exist"""
    Path("src/data").mkdir(parents=True, exist_ok=True)
    Path("public/assets/svgs").mkdir(parents=True, exist_ok=True)

def generate_golden_ratio_data():
    """Generate golden ratio rectangle data"""
    phi = (1 + math.sqrt(5)) / 2  # Golden ratio
    
    rectangles = []
    width = 89  # Starting Fibonacci number
    height = 55  # Previous Fibonacci number
    x, y = 0, 0
    
    for i in range(8):
        ratio = width / height if height > 0 else 1
        rectangles.append({
            "x": x,
            "y": y, 
            "width": width,
            "height": height,
            "ratio": round(ratio, 3)
        })
        
        # Calculate next rectangle (golden ratio spiral)
        if i % 4 == 0:  # Right
            x += width
            new_width = height
            new_height = width - height
        elif i % 4 == 1:  # Down
            y += height
            new_width = width - height
            new_height = height
        elif i % 4 == 2:  # Left
            x -= new_width
            new_width = height
            new_height = width - height
        else:  # Up
            y -= new_height
            new_width = width - height
            new_height = height
            
        width, height = new_width, new_height
        if width <= 0 or height <= 0:
            break
    
    return {
        "id": "golden_ratio_visualization",
        "title": "Golden Ratio Rectangles", 
        "data": rectangles,
        "description": "Visual representation of the golden ratio through nested rectangles",
        "category": "mathematical",
        "type": "rectangles"
    }

def generate_prime_spiral_data():
    """Generate prime number spiral data"""
    def is_prime(n):
        if n < 2:
            return False
        for i in range(2, int(math.sqrt(n)) + 1):
            if n % i == 0:
                return False
        return True
    
    primes = [n for n in range(2, 100) if is_prime(n)]
    spiral_data = []
    
    for i, prime in enumerate(primes[:20]):  # First 20 primes
        angle = i * 137.5  # Golden angle in degrees
        radius = math.sqrt(prime) * 2  # Spiral outward based on prime value
        
        spiral_data.append({
            "angle": angle,
            "radius": radius,
            "value": prime,
            "isPrime": True,
            "index": i
        })
    
    return {
        "id": "prime_number_spiral",
        "title": "Prime Number Spiral",
        "data": spiral_data,
        "description": "Prime numbers arranged in a spiral pattern using the golden angle",
        "category": "mathematical", 
        "type": "spiral"
    }

def generate_fibonacci_sphere_data():
    """Generate points on sphere using Fibonacci sequence"""
    num_points = 200
    points = []
    golden_angle = math.pi * (3 - math.sqrt(5))  # Golden angle in radians
    
    for i in range(num_points):
        # y goes from 1 to -1
        y = 1 - (i / (num_points - 1)) * 2
        
        # radius at y
        radius = math.sqrt(1 - y * y)
        
        # golden angle increment
        theta = golden_angle * i
        
        x = math.cos(theta) * radius
        z = math.sin(theta) * radius
        
        points.append({
            "x": round(x, 4),
            "y": round(y, 4), 
            "z": round(z, 4),
            "index": i,
            "theta": round(theta, 4)
        })
    
    return {
        "id": "fibonacci_sphere",
        "title": "Fibonacci Sphere",
        "points": points[:50],  # Limit for performance
        "description": "Points distributed on sphere using Fibonacci sequence and golden angle",
        "category": "mathematical",
        "material": "bronze"
    }

def generate_dna_helix_data():
    """Generate DNA double helix structure data"""
    num_base_pairs = 20
    helix_radius = 1.0
    helix_pitch = 0.34  # nm per base pair
    
    backbone1 = []
    backbone2 = []
    base_pairs = []
    
    for i in range(num_base_pairs):
        # Calculate position along helix
        z = i * helix_pitch
        angle = (i / 10) * 2 * math.pi  # Complete turn every 10 base pairs
        
        # First backbone
        x1 = math.cos(angle) * helix_radius
        y1 = math.sin(angle) * helix_radius
        backbone1.append({
            "x": round(x1, 3),
            "y": round(y1, 3),
            "z": round(z, 3),
            "angle": round(angle * 180 / math.pi, 1)
        })
        
        # Second backbone (opposite side)
        x2 = math.cos(angle + math.pi) * helix_radius
        y2 = math.sin(angle + math.pi) * helix_radius
        backbone2.append({
            "x": round(x2, 3),
            "y": round(y2, 3),
            "z": round(z, 3),
            "angle": round((angle + math.pi) * 180 / math.pi, 1)
        })
        
        # Base pair connection
        base_pairs.append({
            "from": {"x": x1, "y": y1, "z": z},
            "to": {"x": x2, "y": y2, "z": z},
            "type": ["A-T", "G-C", "C-G", "T-A"][i % 4]
        })
    
    return {
        "id": "dna_helix",
        "title": "DNA Double Helix",
        "backbone1": backbone1,
        "backbone2": backbone2,
        "base_pairs": base_pairs,
        "description": "Double helix structure of DNA with base pairs",
        "category": "biological",
        "material": "crystal"
    }

def generate_sacred_geometry_data():
    """Generate data for sacred geometry shapes"""
    # Platonic solids vertices (normalized)
    tetrahedron_vertices = [
        [1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]
    ]
    
    cube_vertices = [
        [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
        [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
    ]
    
    return [
        {
            "id": "sacred_geometry_cube",
            "title": "Sacred Cube",
            "vertices": [{"x": v[0], "y": v[1], "z": v[2]} for v in cube_vertices],
            "faces": [[0,1,2,3], [4,7,6,5], [0,4,5,1], [2,6,7,3], [0,3,7,4], [1,5,6,2]],
            "description": "Perfect cube representing earth element in sacred geometry",
            "category": "sacred-geometry",
            "material": "gold"
        },
        {
            "id": "platonic_tetrahedron",
            "title": "Tetrahedron (Fire)",
            "vertices": [{"x": v[0], "y": v[1], "z": v[2]} for v in tetrahedron_vertices],
            "faces": [[0,1,2], [1,3,2], [0,2,3], [0,3,1]],
            "description": "Tetrahedron representing fire element",
            "category": "sacred-geometry", 
            "material": "ruby"
        }
    ]

def update_two_d_data():
    """Update 2D visualization data file"""
    data = [
        generate_golden_ratio_data(),
        generate_prime_spiral_data(),
        {
            "id": "scripture_word_frequency",
            "title": "Scripture Word Frequency",
            "data": [
                {"word": "Lord", "count": 150, "book": "Psalms"},
                {"word": "God", "count": 120, "book": "Psalms"},
                {"word": "love", "count": 85, "book": "1 John"},
                {"word": "faith", "count": 70, "book": "Hebrews"},
                {"word": "wisdom", "count": 60, "book": "Proverbs"},
                {"word": "peace", "count": 55, "book": "Isaiah"},
                {"word": "joy", "count": 45, "book": "Philippians"},
                {"word": "hope", "count": 40, "book": "Romans"},
                {"word": "truth", "count": 35, "book": "John"},
                {"word": "light", "count": 30, "book": "1 John"}
            ],
            "description": "Word frequency analysis of key terms in scripture",
            "category": "text-analysis",
            "type": "bar-chart"
        },
        {
            "id": "classical_literature_timeline",
            "title": "Classical Literature Timeline",
            "data": [
                {"year": -800, "author": "Homer", "work": "The Iliad", "era": "Ancient"},
                {"year": -400, "author": "Sophocles", "work": "Oedipus Rex", "era": "Classical"},
                {"year": 1300, "author": "Dante", "work": "Divine Comedy", "era": "Medieval"},
                {"year": 1600, "author": "Shakespeare", "work": "Hamlet", "era": "Renaissance"},
                {"year": 1667, "author": "Milton", "work": "Paradise Lost", "era": "Baroque"},
                {"year": 1813, "author": "Austen", "work": "Pride and Prejudice", "era": "Romantic"},
                {"year": 1859, "author": "Dickens", "work": "A Tale of Two Cities", "era": "Victorian"},
                {"year": 1925, "author": "Fitzgerald", "work": "The Great Gatsby", "era": "Modern"}
            ],
            "description": "Timeline of major works in classical literature",
            "category": "literature",
            "type": "timeline"
        }
    ]
    
    with open("src/data/twoDData.json", "w") as f:
        json.dump(data, f, indent=2)
    print("✓ Updated src/data/twoDData.json")

def update_three_d_data():
    """Update 3D visualization data file"""
    data = generate_sacred_geometry_data()
    data.extend([
        generate_fibonacci_sphere_data(),
        generate_dna_helix_data(),
        {
            "id": "molecular_structure",
            "title": "Water Molecule (H2O)",
            "atoms": [
                {"element": "O", "x": 0, "y": 0, "z": 0, "radius": 0.66, "color": "red"},
                {"element": "H", "x": 0.757, "y": 0.587, "z": 0, "radius": 0.31, "color": "white"},
                {"element": "H", "x": -0.757, "y": 0.587, "z": 0, "radius": 0.31, "color": "white"}
            ],
            "bonds": [
                {"from": 0, "to": 1, "type": "single", "length": 0.96},
                {"from": 0, "to": 2, "type": "single", "length": 0.96}
            ],
            "description": "3D representation of water molecule structure",
            "category": "molecular",
            "material": "glass"
        }
    ])
    
    with open("src/data/threeDData.json", "w") as f:
        json.dump(data, f, indent=2)
    print("✓ Updated src/data/threeDData.json")

def generate_svg_patterns():
    """Generate mathematical SVG patterns"""
    # This would generate actual SVG files in a production environment
    # For now, we'll just create the directory structure
    svg_dir = Path("public/assets/svgs")
    svg_dir.mkdir(parents=True, exist_ok=True)
    
    print("✓ Created SVG directory structure")
    print("  Note: Actual SVG generation would require additional libraries")
    print("  Consider using libraries like: svgwrite, cairo, or matplotlib")

def main():
    """Main data processing function"""
    print("🐍 Processing data for Hacker1...")
    
    # Create directories
    create_directories()
    
    # Update data files
    update_two_d_data()
    update_three_d_data()
    
    # Generate SVG structure
    generate_svg_patterns()
    
    print("✅ Data processing complete!")
    print("\nGenerated files:")
    print("  - src/data/twoDData.json (2D visualization data)")
    print("  - src/data/threeDData.json (3D model data)")
    print("  - public/assets/svgs/ (SVG directory structure)")
    
    print("\n📝 Next steps:")
    print("  1. Install Python dependencies if needed: pip install numpy")
    print("  2. For SVG generation, consider: pip install svgwrite matplotlib")
    print("  3. Run 'npm run dev' to start the development server")

if __name__ == "__main__":
    main()
