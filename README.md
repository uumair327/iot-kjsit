# IoT Club KJSIT Website

A modern React-based website for the IoT Club at K.J. Somaiya Institute of Technology, built with TypeScript and Vite.

## Features

- **Home Page**: Interactive hero section with typewriter effect and rotating carousel
- **Projects Page**: Showcase of IoT projects with descriptions and images
- **Workshops Page**: Detailed information about upcoming workshops and events
- **Contact Page**: Contact form with validation and embedded Google Maps
- **Responsive Design**: Mobile-friendly navigation and layouts
- **Modern UI**: Clean, professional design with smooth animations

## Technologies Used

- React 18 with TypeScript
- React Router for navigation
- Bootstrap for styling
- React Icons for iconography
- Vite for fast development and building
- GitHub Pages for deployment

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your system.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/iot-kjsit.git
cd iot-kjsit
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Deployment

This project is configured for GitHub Pages deployment. To deploy:

1. Update the `homepage` field in `package.json` with your GitHub Pages URL
2. Run `npm run deploy`

## Project Structure

```
src/
├── components/
│   ├── NavBar.tsx          # Navigation component
│   ├── Hero.tsx            # Home page hero section
│   ├── ProjectsPage.tsx    # Projects showcase
│   ├── WorkshopsPage.tsx   # Workshops information
│   ├── ContactUsPage.tsx   # Contact form and info
│   └── *.css              # Component styles
├── App.tsx                # Main app component with routing
├── main.tsx              # App entry point
└── index.css             # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Issues Fixed

- ✅ Fixed NavBar CSS import conflicts
- ✅ Replaced broken image links with placeholder images
- ✅ Updated workshop data with realistic information
- ✅ Removed broken resource links
- ✅ Improved 404 page with navigation
- ✅ Enhanced responsive design
- ✅ Fixed routing configuration for GitHub Pages
- ✅ Removed conflicting standalone HTML file

## License

This project is licensed under the MIT License.