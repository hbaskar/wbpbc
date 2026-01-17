# Residential Pages Redesign Plan

## Overview
This plan outlines the systematic rework of all residential pages to match and improve upon the original HTML design. The focus is on better image quality, enhanced layouts, improved user experience, and modern design patterns.

## Key Design Principles from Original HTML

### 1. Layout Patterns
- **Hero Section**: Title + subtitle in header banner, then image on left + content on right
- **Alternating Sections**: Content/image alternating with background color changes
- **Visual Elements**: Decorative images (Group-36-1.webp) for visual interest
- **Process Steps**: Icon-based numbered steps with green circular icons
- **FAQ Sections**: Accordion with proper spacing and visual hierarchy
- **Gallery**: Grid layout with proper aspect ratios

### 2. Image Quality Strategy
- Use full-resolution URLs (exclude `-300x175`, `-768x448` variants)
- Download original quality images from source URLs
- Ensure proper image dimensions and aspect ratios
- Use `srcset` for responsive images where appropriate

### 3. Visual Design Elements
- Green accent color (#72FD02) for CTAs and highlights
- Alternating background colors (white/light gray)
- Proper spacing and padding
- Decorative elements between sections
- Trust badges and ratings sections

## Page-by-Page Redesign Plan

### Page 1: Main Residential Page (`/residential`)
**Current Issues:**
- Basic layout doesn't match original
- Missing decorative elements
- Images not high quality
- Services grid too simple

**Redesign Tasks:**
1. ✅ Extract full-resolution image URLs from `residential-old.html`
2. ✅ Download high-quality images (wepik-bilal-project, Group-36-1.webp)
3. ✅ Redesign hero section: Image left, content right with proper spacing
4. ✅ Add decorative Group-36-1.webp image between sections
5. ✅ Enhance services grid with icons or images
6. ✅ Improve FAQ section styling to match original
7. ✅ Add proper gallery layout with better image quality
8. ✅ Add trust badges/ratings section if present in original

**Key Sections to Implement:**
- Header banner with title and subtitle
- Hero section: Image (left) + Content (right)
- Decorative image section
- Services grid (enhanced)
- FAQ accordion
- Gallery section

---

### Page 2: Pickleball Court Construction (`/residential/pickleball-courts-construction`)
**Current Issues:**
- Missing process steps section
- No decorative elements
- Images not properly placed
- Missing trust badges section

**Redesign Tasks:**
1. ✅ Extract full-resolution images (imgi_66_505163386, dde4dbeb33096108fc901693249dad31cc73e90c.png)
2. ✅ Download Group-36-1.webp and trust badge images
3. ✅ Redesign hero: Image right, content left
4. ✅ Add "Dimensions" section with image and text side-by-side
5. ✅ Add "Construction Process" section with numbered steps and green circular icons
6. ✅ Add trust badges section (4.9 rating, Top Rated Service 2025)
7. ✅ Improve overall spacing and visual hierarchy

**Key Sections to Implement:**
- Header banner
- Hero: Content (left) + Image (right)
- Dimensions section: Image + text
- Process steps with icons (1-5 steps)
- Trust badges section
- Additional content sections

---

### Page 3: Basketball Courts (`/residential/basketball-courts`)
**Current Issues:**
- Missing size comparison images
- No decorative elements
- FAQ section needs better styling
- Missing gallery section

**Redesign Tasks:**
1. ✅ Extract full-resolution images (e5eb271b-057f-4706-ab48-23b384a6561f.webp, Group-36-1.webp)
2. ✅ Download size comparison images (mini, half, full court)
3. ✅ Redesign hero section with proper image placement
4. ✅ Add size comparison section with images
5. ✅ Enhance FAQ accordion styling
6. ✅ Add gallery section with project images
7. ✅ Add decorative elements

**Key Sections to Implement:**
- Header banner
- Hero section
- Size options section with images
- FAQ accordion
- Gallery section

---

### Page 4: Multi-Sport Courts (`/residential/multi-sport-construction`)
**Current Issues:**
- Missing feature highlights
- No visual elements
- Basic accordion

**Redesign Tasks:**
1. ✅ Extract images from `residential-multi-sport-courts-old.html`
2. ✅ Redesign hero section
3. ✅ Add "Why Build" section with feature cards
4. ✅ Enhance accordion with better styling
5. ✅ Add visual elements

**Key Sections to Implement:**
- Header banner
- Hero section
- Why Build section with features
- FAQ accordion
- Additional content

---

### Page 5: Artificial Turf & Putting Greens (`/residential/artificial-turf-putting-greens`)
**Current Issues:**
- Missing turf type images
- No visual examples
- Basic layout

**Redesign Tasks:**
1. ✅ Extract images from `residential-artificial-turf-and-putting-grass-old.html`
2. ✅ Add turf type comparison section
3. ✅ Add use case images
4. ✅ Enhance layout with better image placement

**Key Sections to Implement:**
- Header banner
- Hero section
- Turf types section
- Use cases section
- Gallery

---

### Page 6: Court Fencing (`/residential/court-fencing`)
**Current Issues:**
- Missing fence type examples
- No visual comparisons
- Basic layout

**Redesign Tasks:**
1. ✅ Extract images from `residential-court-fencing-old.html`
2. ✅ Add fence height comparison section
3. ✅ Add visual examples for each fence type
4. ✅ Enhance gallery section

**Key Sections to Implement:**
- Header banner
- Hero section
- Fence types section
- Gallery with examples

---

### Page 7: Hoops and Nets (`/residential/hoops-nets`)
**Current Issues:**
- Missing product images
- No visual examples
- Basic layout

**Redesign Tasks:**
1. ✅ Extract images from `residential-hoops-and-nets-old-html`
2. ✅ Add product showcase section
3. ✅ Add installation examples
4. ✅ Enhance gallery

**Key Sections to Implement:**
- Header banner
- Hero section
- Product types section
- Gallery

---

### Page 8: Custom Courts (`/residential/custom-courts`)
**Current Issues:**
- Missing project examples
- No visual showcase
- Basic layout

**Redesign Tasks:**
1. ✅ Extract images from `residential-custom-courts-old.html`
2. ✅ Add project showcase section
3. ✅ Add before/after examples
4. ✅ Enhance gallery

**Key Sections to Implement:**
- Header banner
- Hero section
- Project types section
- Gallery

---

### Page 9: Pickleball Court Resurfacing (`/residential/pickleball-court-resurfacing`)
**Current Issues:**
- Missing before/after images
- No process visualization
- Basic layout

**Redesign Tasks:**
1. ✅ Extract images from `residential-pickleball-court-resurfacing-old.html`
2. ✅ Add before/after gallery
3. ✅ Add process steps
4. ✅ Enhance FAQ section

**Key Sections to Implement:**
- Header banner
- Hero section
- Before/after gallery
- Process section
- FAQ section

---

## Implementation Strategy

### Phase 1: Image Quality Improvement
1. Extract all full-resolution image URLs from old HTML files
2. Download high-quality images to `public/residential/`
3. Update content service with proper image paths
4. Verify image quality and dimensions

### Phase 2: Layout Redesign
1. Create reusable layout components:
   - Hero section component (image left/right variants)
   - Process steps component (with icons)
   - Trust badges component
   - Decorative image component
2. Update each page component with new layouts
3. Implement alternating background sections
4. Add proper spacing and visual hierarchy

### Phase 3: Component Enhancement
1. Enhance accordion styling to match original
2. Improve gallery components with better layouts
3. Add decorative elements between sections
4. Implement responsive design improvements

### Phase 4: Visual Polish
1. Add animations and transitions
2. Improve typography and spacing
3. Add hover effects
4. Ensure consistent color scheme
5. Mobile responsiveness testing

## Technical Implementation Details

### Image Handling
- Use absolute paths starting with `/residential/`
- Implement lazy loading for gallery images
- Use proper `alt` attributes for accessibility
- Consider `srcset` for responsive images

### Component Structure
```typescript
// Reusable components to create:
- ResidentialHeroComponent (with image position variants)
- ProcessStepsComponent (numbered steps with icons)
- TrustBadgesComponent
- DecorativeImageComponent
- EnhancedGalleryComponent
```

### Styling Approach
- Use SCSS variables for consistent colors
- Implement BEM-like naming for components
- Create utility classes for common patterns
- Ensure mobile-first responsive design

## Success Criteria

✅ All images are high quality (full resolution)
✅ Layouts match or improve upon original HTML
✅ Visual hierarchy is clear and user-friendly
✅ All pages are responsive and mobile-friendly
✅ Consistent design language across all pages
✅ Smooth animations and transitions
✅ Fast page load times
✅ Accessibility standards met

## Priority Order

1. **Main Residential Page** - Foundation for all other pages
2. **Pickleball Court Construction** - Most detailed, sets pattern
3. **Basketball Courts** - Similar structure, good for consistency
4. **Multi-Sport Courts** - Medium complexity
5. **Artificial Turf** - Simpler, good for quick wins
6. **Court Fencing** - Simpler layout
7. **Hoops and Nets** - Product showcase
8. **Custom Courts** - Project showcase
9. **Pickleball Resurfacing** - Before/after focus

## Notes

- Always extract full-resolution image URLs (exclude size variants)
- Maintain consistency in component structure
- Test on multiple screen sizes
- Ensure all images load properly
- Keep design modern while respecting original structure

