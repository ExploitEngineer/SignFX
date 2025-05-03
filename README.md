# SignFX

<div align="center">
  <p>A modern signature creation app with fluid GLSL animations</p>
</div>

## ✨ Features

- **Interactive Signature Canvas**: Create smooth, natural signatures with customizable pens
- **GLSL Animations**: Beautiful fluid animations powered by GLSL shaders
- **Multiple Export Options**: Save signatures as PNG, SVG, or PDF
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- **Frontend**: Next.js, TypeScript, React
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: GSAP for transitions, GLSL for fluid effects
- **State Management**: React Context API
- **Performance**: Optimized canvas rendering with hardware acceleration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ExploitEngineer/SignFX.git

# Navigate to the project directory
cd SignFX

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## 📝 Usage

1. Use the toolbar to select pen style, color, and thickness
2. Sign on the canvas using mouse, touchscreen, or stylus
3. Apply animation effects from the effects panel
4. Preview your signature with animations
5. Download your signature in your preferred format

## 🔧 Configuration

The app can be configured through environment variables:

```
NEXT_PUBLIC_CANVAS_WIDTH=1000
NEXT_PUBLIC_CANVAS_HEIGHT=300
NEXT_PUBLIC_MAX_UNDO_HISTORY=10
```

See `.env.example` for all available options.

## 📱 Responsive Design

SignFX is designed to work flawlessly across all device sizes:

- **Desktop**: Full-featured experience with keyboard shortcuts
- **Tablet**: Optimized for stylus input with palm rejection
- **Mobile**: Simplified UI with touch-optimized controls

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [React Signature Canvas](https://github.com/agilgur5/react-signature-canvas) for inspiration
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [GSAP](https://greensock.com/gsap/) for the smooth animations
- Icon pack by [Lucide](https://lucide.dev/)

---

<div align="center">
  <p>Created with ❤️ by <a href="https://github.com/ExploitEngineer">ExploitEngineer</a></p>
</div>
