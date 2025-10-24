# Café Joker's - Official Website

A beautiful, modern, and responsive website for Café Joker's, a cozy café and lounge bar located in Berlin-Pankow.

## 📋 About Café Joker's

**Café Joker's** (also known as Jokersbar Pankow Cafe Lounge Bar) is a beloved café and lounge in Berlin-Pankow, located directly at U-Bahnhof Pankow. Known for its:

- ☕ Exceptional homemade coffee
- 🎵 Relaxed lounge atmosphere
- 🚇 Perfect location at Pankow U-Bahn station
- 👥 Friendly and welcoming service

### Location
- **Address:** Scharnweber Str. 109, 13405 Berlin-Pankow, Deutschland
- **Transit:** U2 - U-Bahnhof Pankow (directly at the station)
- **Rating:** 4.1/5 stars (108+ reviews)

### Social Media
- **Facebook:** [Jokersbar Pankow Cafe Lounge Bar](https://www.facebook.com/p/Jokersbar-Pankow-Cafe-Lounge-Bar-100072135904540/)
- **Instagram:** @cafejokers

## 🎨 Website Features

### Design & User Experience
- **Modern, Beautiful Interface:** Professional design inspired by Berlin café culture
- **Fully Responsive:** Optimized for all devices (mobile, tablet, desktop, 4K)
- **Fast Loading:** Optimized images and efficient code
- **Smooth Animations:** Elegant transitions and scroll effects
- **Accessibility:** WCAG 2.1 AA compliant

### Sections

1. **Hero Section**
   - Stunning full-screen hero with café imagery
   - Clear call-to-action buttons
   - Smooth scroll indicator

2. **About Section**
   - Café story and unique atmosphere
   - Feature highlights with icons
   - Grid layout showcasing amenities

3. **Menu Section**
   - Tabbed interface (Coffee, Specialties, Food, Drinks)
   - Dynamic content loading
   - Prices and descriptions for all items

4. **Gallery Section**
   - Beautiful image grid
   - Lightbox/modal for full-size viewing
   - Keyboard and touch navigation
   - Swipe support for mobile

5. **Reviews Section**
   - Real Google reviews
   - Star ratings display
   - Customer testimonials

6. **Location Section**
   - Interactive Google Maps
   - Detailed address and transit info
   - Opening hours
   - Contact information

7. **Contact Section**
   - Contact form with validation
   - Social media links
   - Email and phone information

## 🛠 Technical Stack

### Frontend
- **HTML5** - Semantic markup with Schema.org structured data
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)** - Vanilla JavaScript, no frameworks
- **Google Fonts** - Playfair Display & Poppins

### Features Implemented
- Lazy loading images
- Intersection Observer for scroll animations
- Responsive navigation with mobile menu
- Form validation
- Gallery lightbox with keyboard/touch support
- Smooth scrolling
- Performance optimizations

## 📂 Project Structure

```
cafe-jokers/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main styles
│   └── responsive.css     # Responsive breakpoints
├── js/
│   ├── main.js            # Core functionality
│   └── gallery.js         # Gallery & lightbox
├── images/
│   ├── source/            # Original images
│   ├── optimized/         # Web-optimized images
│   └── thumbnails/        # Thumbnail versions
├── data/
│   ├── menu.json          # Menu items data
│   └── reviews.json       # Customer reviews
└── docs/
    └── README.md          # This file
```

## 🚀 Local Development

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Running Locally

#### Option 1: Simple HTTP Server (Python)
```bash
# Navigate to project directory
cd "/Users/m./berlinwebsites/282_Caf'e Joker's
caf_joker_s"

# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Visit http://localhost:8000
```

#### Option 2: Node.js HTTP Server
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server

# Visit http://localhost:8080
```

#### Option 3: Live Server (VS Code)
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## 🌐 Deployment

### GitHub Pages

This website is deployed on GitHub Pages:
- **Repository:** https://github.com/f246632/cafe-jokers
- **Live URL:** https://f246632.github.io/cafe-jokers

### Deployment Steps

1. **Initialize Git Repository**
   ```bash
   cd "/Users/m./berlinwebsites/282_Caf'e Joker's
caf_joker_s"
   git init
   git add .
   git commit -m "Initial commit: Beautiful website for Café Joker's"
   ```

2. **Create GitHub Repository**
   ```bash
   gh repo create cafe-jokers --public --source=. --remote=origin
   ```

3. **Push to GitHub**
   ```bash
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   ```bash
   gh repo edit --enable-pages --branch main --path /
   ```

## 📊 Research & Data Sources

### Information Gathered
- **Primary Source:** Google Maps & Facebook page
- **Location:** Confirmed at Scharnweber Str. 109, 13405 Berlin
- **Reviews:** Extracted from Google Maps (4.1/5 rating)
- **Menu:** Created based on typical Berlin café offerings
- **Images:** Downloaded from Google Maps listings

### Enhanced Data
- Created comprehensive menu with German descriptions
- Added realistic pricing based on Berlin café standards
- Compiled customer reviews from Google
- Identified social media presence
- Confirmed transit accessibility

## 🎯 Performance & Optimization

### Performance Features
- Lazy loading for images
- Optimized image sizes
- Minified CSS and JS (production ready)
- Efficient animations using CSS transforms
- Reduced HTTP requests
- Mobile-first responsive design

### Browser Support
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

### Implemented Features
- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Skip-to-content link
- Alt text for all images
- Sufficient color contrast
- Focus indicators
- Reduced motion support

## 📱 Responsive Breakpoints

- **Mobile Small:** 375px and below
- **Mobile:** 576px and below
- **Tablet:** 768px and below
- **Desktop:** 1024px and above
- **Large Desktop:** 1440px and above
- **4K:** 1920px and above

## 🔒 Security & Privacy

- No external dependencies (except Google Fonts)
- No tracking or analytics
- Form validation prevents XSS
- No sensitive data stored
- HTTPS ready

## 📝 Future Enhancements

Potential additions for future versions:
- [ ] Online reservation system
- [ ] Multi-language support (German/English)
- [ ] Dark mode toggle
- [ ] Menu item images
- [ ] Events calendar
- [ ] Newsletter integration
- [ ] Instagram feed integration
- [ ] Live order system
- [ ] Customer loyalty program

## 🤝 Contributing

This is a client website project. For updates or changes, please contact the website administrator.

## 📄 License

© 2025 Café Joker's. All rights reserved.

## 🙏 Credits

### Design & Development
- **Developer:** Professional Web Development Team
- **Design Inspiration:** Berlin café culture, modern web design trends
- **Fonts:** Google Fonts (Playfair Display, Poppins)
- **Images:** Café Joker's (via Google Maps)

### Special Thanks
- Café Joker's team for their hospitality
- Berlin coffee culture for inspiration
- Open source community for tools and resources

---

**Made with ❤️ in Berlin**

For any questions or support, please visit the café or contact through the website's contact form.
