# Gray Score Calculation Algorithm
## Automated Analysis of Pattern Color Content

**Version:** 1.0  
**Date:** June 24, 2025  
**Project:** Dark Mode Background Pattern Collection  
**Purpose:** Calculate accurate gray content percentages for CSS patterns  

---

## 🎯 **Algorithm Overview**

The Gray Score Algorithm analyzes CSS background patterns to determine their "grayness" on a scale of 0-100%. This helps designers make informed decisions about pattern usage, especially for accessibility and visual hierarchy.

### **What is a Gray Score?**
- **0%:** Fully colorful pattern (no gray content)
- **50%:** Balanced mix of color and gray tones
- **100%:** Pure grayscale pattern (no color information)

### **Why This Matters**
- **Accessibility:** High gray scores may reduce readability for text overlays
- **Visual Hierarchy:** Helps balance colorful vs. neutral patterns
- **Design Consistency:** Ensures appropriate pattern selection for different use cases

---

## 🧮 **Algorithm Logic**

### **Step 1: Color Extraction**
Parse CSS strings to identify all color values (rgba, hex) used in the pattern.

### **Step 2: Individual Color Analysis**
For each color, calculate:
- **Saturation:** How colorful vs. gray the color is
- **Brightness:** Overall lightness of the color
- **Gray Score:** Inverse of saturation (low saturation = high gray score)

### **Step 3: Weighted Combination**
Combine individual color scores using opacity as weight:
- More opaque colors have greater influence
- Transparent colors contribute less to final score

### **Step 4: Final Score Calculation**
Weighted average of all color gray scores in the pattern.

---

## 📝 **Pseudocode**

```pseudocode
ALGORITHM CalculateGrayScore(cssPattern)
BEGIN
    colors = ExtractColorsFromCSS(cssPattern)
    totalWeightedScore = 0
    totalWeight = 0
    
    FOR each color in colors DO
        // Calculate individual color grayness
        r, g, b, alpha = color.values
        min_rgb = MIN(r, g, b)
        max_rgb = MAX(r, g, b)
        range = max_rgb - min_rgb
        
        // Calculate saturation (0-100%)
        IF max_rgb = 0 THEN
            saturation = 0
        ELSE
            saturation = (range / max_rgb) × 100
        ENDIF
        
        // Gray score is inverse of saturation
        grayScore = 100 - saturation
        
        // Weight by opacity
        weight = alpha
        totalWeightedScore += grayScore × weight
        totalWeight += weight
    ENDFOR
    
    // Final weighted average
    IF totalWeight > 0 THEN
        finalScore = totalWeightedScore / totalWeight
    ELSE
        finalScore = 0
    ENDIF
    
    RETURN ROUND(finalScore)
END

FUNCTION ExtractColorsFromCSS(cssString)
BEGIN
    colors = []
    
    // Extract rgba() patterns
    rgbaMatches = REGEX_MATCH(cssString, "rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)")
    FOR each match in rgbaMatches DO
        r, g, b, alpha = PARSE_VALUES(match)
        colors.ADD({r, g, b, alpha})
    ENDFOR
    
    // Extract hex patterns
    hexMatches = REGEX_MATCH(cssString, "#[0-9a-fA-F]{3,6}")
    FOR each hex in hexMatches DO
        r, g, b = HEX_TO_RGB(hex)
        colors.ADD({r, g, b, alpha: 1.0})
    ENDFOR
    
    RETURN colors
END
```

---

## 💻 **JavaScript Implementation**

```javascript
/**
 * GRAY SCORE CALCULATION ALGORITHM
 * Analyzes CSS patterns to calculate accurate gray content percentages
 */
class GrayScoreCalculator {
    constructor() {
        this.patterns = new Map();
    }
    
    /**
     * Calculate how "gray" a single color is (0-100%)
     * Gray colors have R,G,B values that are close to each other
     * 
     * @param {number} r - Red value (0-255)
     * @param {number} g - Green value (0-255)  
     * @param {number} b - Blue value (0-255)
     * @returns {Object} Analysis object with grayScore, brightness, saturation
     */
    calculateColorGrayness(r, g, b) {
        // Normalize to 0-255 range
        r = Math.round(r > 1 ? r : r * 255);
        g = Math.round(g > 1 ? g : g * 255);  
        b = Math.round(b > 1 ? b : b * 255);
        
        // Calculate the range between min and max color values
        const min = Math.min(r, g, b);
        const max = Math.max(r, g, b);
        const range = max - min;
        
        // Calculate brightness (overall lightness)
        const brightness = (r + g + b) / 3;
        
        // Calculate saturation (how colorful vs gray)
        const saturation = max === 0 ? 0 : (range / max) * 100;
        
        // Gray score: low saturation = high gray score
        // Pure gray (R=G=B) has 0% saturation = 100% gray score
        // Colorful values have high saturation = low gray score
        const grayScore = Math.max(0, 100 - saturation);
        
        return {
            grayScore: grayScore,
            brightness: brightness,
            saturation: saturation,
            range: range
        };
    }
    
    /**
     * Extract colors from CSS background string
     * Supports rgba() and hex color formats
     * 
     * @param {string} cssString - CSS background property value
     * @returns {Array} Array of color objects {r, g, b, a, source}
     */
    extractColorsFromCSS(cssString) {
        const colors = [];
        
        // Match rgba() patterns
        const rgbaMatches = cssString.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)/g);
        if (rgbaMatches) {
            rgbaMatches.forEach(match => {
                const values = match.match(/(\d+(?:\.\d+)?)/g);
                if (values && values.length >= 3) {
                    const r = parseInt(values[0]);
                    const g = parseInt(values[1]); 
                    const b = parseInt(values[2]);
                    const a = values[3] ? parseFloat(values[3]) : 1.0;
                    colors.push({ r, g, b, a, source: match });
                }
            });
        }
        
        // Match hex colors
        const hexMatches = cssString.match(/#[0-9a-fA-F]{3,6}/g);
        if (hexMatches) {
            hexMatches.forEach(hex => {
                const r = parseInt(hex.slice(1, 3), 16);
                const g = parseInt(hex.slice(3, 5), 16);
                const b = parseInt(hex.slice(5, 7), 16);
                colors.push({ r, g, b, a: 1.0, source: hex });
            });
        }
        
        return colors;
    }
    
    /**
     * Calculate gray score for a complete pattern
     * Uses weighted average based on color opacity
     * 
     * @param {string} patternName - Name of the pattern for identification
     * @param {string} cssString - CSS background property value
     * @returns {Object} Analysis result with score and color breakdown
     */
    calculatePatternGrayScore(patternName, cssString) {
        const colors = this.extractColorsFromCSS(cssString);
        
        if (colors.length === 0) {
            return { score: 0, analysis: 'No colors found' };
        }
        
        let totalWeightedGrayScore = 0;
        let totalWeight = 0;
        const colorAnalysis = [];
        
        colors.forEach(color => {
            const analysis = this.calculateColorGrayness(color.r, color.g, color.b);
            
            // Weight by opacity - more opaque colors have more influence
            const weight = color.a;
            
            totalWeightedGrayScore += analysis.grayScore * weight;
            totalWeight += weight;
            
            colorAnalysis.push({
                color: color.source,
                rgb: `${color.r}, ${color.g}, ${color.b}`,
                opacity: color.a,
                grayScore: Math.round(analysis.grayScore),
                saturation: Math.round(analysis.saturation),
                brightness: Math.round(analysis.brightness),
                weight: Math.round(weight * 100) / 100
            });
        });
        
        const finalScore = totalWeight > 0 ? totalWeightedGrayScore / totalWeight : 0;
        
        return {
            score: Math.round(finalScore),
            colors: colorAnalysis,
            analysis: `Analyzed ${colors.length} colors with total weight ${Math.round(totalWeight * 100)/100}`
        };
    }
}

// Usage Example
const calculator = new GrayScoreCalculator();

// Analyze a granite pattern
const graniteCSS = `
    repeating-linear-gradient(
        36.87deg,
        rgba(42, 42, 42, 0.8) 0px,
        rgba(42, 42, 42, 0.8) 2px,
        rgba(58, 58, 58, 0.8) 2px,
        rgba(58, 58, 58, 0.8) 3px
    )
`;

const result = calculator.calculatePatternGrayScore('Granite Pattern', graniteCSS);
console.log(`Gray Score: ${result.score}%`);
```

---

## 🔬 **Mathematical Foundation**

### **Saturation Formula**
```
saturation = (max_rgb - min_rgb) / max_rgb × 100
```

Where:
- `max_rgb` = maximum value among R, G, B components
- `min_rgb` = minimum value among R, G, B components

### **Gray Score Formula**
```
gray_score = 100 - saturation
```

### **Weighted Average Formula**
```
final_score = Σ(gray_score_i × opacity_i) / Σ(opacity_i)
```

---

## 📊 **Example Analysis**

### **Pattern 1: Pure Gray**
```css
rgba(128, 128, 128, 1.0)
```
- **R=G=B:** Perfect gray
- **Saturation:** 0%
- **Gray Score:** 100%

### **Pattern 2: Blue Pattern**
```css
rgba(42, 42, 74, 0.8)
```
- **Min:** 42, **Max:** 74
- **Saturation:** (74-42)/74 × 100 = 43.2%
- **Gray Score:** 100 - 43.2 = 56.8%

### **Pattern 3: Multi-Color Weighted**
```css
rgba(128, 128, 128, 0.8)  // Gray Score: 100%, Weight: 0.8
rgba(255, 0, 0, 0.2)      // Gray Score: 0%, Weight: 0.2
```
- **Weighted Score:** (100×0.8 + 0×0.2) / (0.8+0.2) = 80%

---

## 🛠 **Algorithm Refinement Options**

### **Current Implementation**
- Uses simple saturation-based calculation
- Weights by opacity only
- Linear scoring curve

### **Potential Enhancements**
1. **Perceptual Weighting:** Account for human color perception
2. **Brightness Adjustment:** Darker grays might score differently
3. **Pattern Density:** Consider stripe width and repetition
4. **Color Temperature:** Distinguish warm vs. cool grays
5. **Contrast Analysis:** Factor in color relationships

### **Calibration Parameters**
```javascript
// These could be made adjustable:
const SATURATION_CURVE = 1.0;     // Linear vs. exponential
const BRIGHTNESS_WEIGHT = 0.1;    // Brightness influence  
const OPACITY_SENSITIVITY = 1.0;  // How much opacity matters
```

---

## 🧪 **Testing & Validation**

### **Test Cases**
1. **Pure Colors:** Red, Green, Blue should score ~0%
2. **Pure Grays:** R=G=B should score 100%
3. **Mixed Patterns:** Should reflect visual appearance
4. **Transparent Colors:** Should have reduced influence

### **Validation Method**
1. Visual inspection of patterns
2. Designer feedback on scores
3. Accessibility testing with actual text overlays
4. Comparison with existing manual assessments

### **Usage in Production**
```javascript
// Run on page load
document.addEventListener('DOMContentLoaded', function() {
    const calculator = new GrayScoreCalculator();
    const results = calculator.analyzeAllPatterns();
    
    // Update pattern descriptions with calculated scores
    updatePatternScores(results);
});
```

---

## ⚙️ **Integration Guide**

### **HTML Integration**
Include the script in your HTML file:
```html
<script src="gray-score-calculator.js"></script>
```

### **Console Usage**
```javascript
// Initialize
const calc = new GrayScoreCalculator();

// Analyze specific pattern
const score = calc.calculatePatternGrayScore('Pattern Name', cssString);

// View detailed results
calc.displayResults();
```

### **Automated Updates**
The algorithm can automatically update pattern descriptions with calculated scores, replacing manual estimates with accurate calculations.

---

## 📈 **Future Enhancements**

1. **Machine Learning Integration:** Train on designer preferences
2. **Real-time Analysis:** Update scores as patterns are edited
3. **Accessibility Scoring:** Combine with contrast ratio calculations
4. **Pattern Recommendations:** Suggest patterns based on use case
5. **Batch Processing:** Analyze entire design systems at once

---

# Gray Score Algorithm Documentation

## Overview
This JavaScript algorithm automatically calculates the "gray score" percentage for CSS background patterns, determining how suitable they are for large text areas.

## Core Algorithm

### RGB to Grayscale Conversion
Uses the standard ITU-R BT.709 luminance formula:
```javascript
function rgbToGrayScore(r, g, b) {
    // Standard luminance weights for human perception
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return Math.round((luminance / 255) * 100);
}
```

### Pattern Analysis
The algorithm:
1. Extracts RGBA color values from CSS `repeating-linear-gradient` patterns
2. Calculates gray score for each color using luminance formula
3. Averages the scores across all colors in the pattern
4. Applies manual overrides for visual accuracy

## Manual Override System

### Pure Gray Patterns (100%)
- **Marb-1, Marb-2, Marb-3**: Pure gray values like (58,58,58) and (74,74,74)
- **Gran-1, Gran-3**: Classic granite using pure grays (42,42,42) and (58,58,58)
- **Expo-1, Expo-2**: Experimental patterns with pure gray crosshatching
- **Test-1, Soft-1, Soft-3**: Ultra-soft and gradual gray transitions

### High Gray Patterns (85-95%)
- **Expo-6**: Mixed gray with high-contrast silver accents
- **Ripple-1**: Granite base with gray ripple effects
- **Cont-1**: High contrast accessibility grays (98%)

### Moderate Gray with Color Tints (60-80%)
- **Gran-2**: Purple-tinted granite (70%)
- **Clas-2**: Warm charcoal - CHARCOAL IS GRAY! (75%)
- **Cont-2**: Warm high contrast with red tinting (65%)
- **Test-2, Soft-2**: Brown-tinted marble patterns

### Colored Patterns (20-50%)
- **Fabric patterns (Fabr-1,2,3)**: Blue fabric weaves (25-30%)
- **Stained Glass (Glas-1,2,3)**: Deep blue patterns (20-24%)
- **Classical patterns**: Navy (35%) and burgundy (30%)
- **Ripple-2**: Fabric with gold ripples (35%)

### Light/Parchment Patterns (10-20%)
- **Expo-4**: Enhanced parchment with browns (15%)
- **Expo-5**: Light marble with bronze accents (20%)
- **Ripple-3**: Parchment with bronze ripples (10%)

## Text Use Recommendations

### Automatic Classification
```javascript
if (finalScore >= 85) {
    textUse = '❌ DO NOT USE - High gray content, avoid for large text areas';
} else if (finalScore >= 60) {
    textUse = '⚠️ MODERATE - Use carefully, getting too gray for large text areas';
} else {
    textUse = '✅ EXCELLENT - Perfect for large text areas';
}
```

## Implementation Details

### DOM Updates
The algorithm automatically:
1. Calculates scores for all patterns on page load
2. Updates visible pattern descriptions with calculated scores
3. Replaces existing "Gray Score:" lines with computed values
4. Updates "Text Use:" recommendations based on scores
5. Logs all calculations to console for debugging

### Pattern Mapping
Each pattern has a unique index corresponding to its position in the DOM:
```javascript
{
    name: 'Gran-1',
    css: 'repeating-linear-gradient(36.87deg, rgba(42,42,42,0.8)...)',
    index: 6  // DOM position for updating
}
```

## Key Findings from Research

### Standard Luminance Formula
Based on ITU-R BT.709 standard for HDTV:
- **Red weight**: 0.299 (least sensitive)
- **Green weight**: 0.587 (most sensitive - human vision)
- **Blue weight**: 0.114 (least sensitive)

### Visual Accuracy Overrides
Manual overrides are essential because:
1. **Pure gray patterns** need 100% classification regardless of opacity
2. **Charcoal IS gray** - high score required
3. **Colored patterns** may calculate higher than visual perception
4. **Parchment/light patterns** need special handling for contrast

## Maintenance
When adding new patterns:
1. Add to `patternMappings` array with correct index
2. Test calculated score vs visual appearance
3. Add manual override if needed
4. Update this documentation
5. Update `pattern-gray-scores.md` table

## Console Output
All calculations are logged for verification:
```
Gran-1: Override applied -> 100% (was 67%)
Fabr-1: 30% gray score
Glas-1: 20% gray score
```

This ensures transparency and allows for debugging the algorithm accuracy
