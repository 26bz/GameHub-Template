# Thank You for Choosing the GameHub Hosting Company Template!

### Before You Begin

To get the best experience from this template, we recommend downloading **Visual Studio Code (VS Code)**—a free, powerful code editor that makes customizing and managing your template easy.

The template is built using **React** and **Tailwind CSS**, offering advanced flexibility for experienced developers, while also being straightforward for beginners.

---

### Getting Started

1. **Install Visual Studio Code**  
   [Download VS Code](https://code.visualstudio.com/Download)

2. **Install Yarn Package Manager**  
   First, install Node.js from [nodejs.org](https://nodejs.org/), then install Yarn:
   ```bash
   npm install -g yarn
   ```

Navigate to the project folder and install dependencies:

```bash
cd gamehub
yarn install
```

Start the development server:

```bash
yarn dev
```

Visit `http://localhost:5173` to see your site.

---

### Making Changes

Edit the files in the `src` directory to customize your site. The development server will automatically reload when you save changes.

### Managing Public Assets

The `public` folder contains static assets that are served directly:

1. **Icons and Favicons**
   - `favicon.ico` - Main favicon
   - `apple-touch-icon.png` - Icon for iOS devices
   - `pwa-192x192.png` and `pwa-512x512.png` - PWA icons
   - `masked-icon.svg` - Safari pinned tab icon

2. **Game Images** (in `public/images/`)
   - Add game images here (supported formats: jpg, png, avif)
   - Use compressed formats like .avif for better performance
   - Recommended size: 800x600 or 16:9 ratio

3. **PWA Configuration**
   - `manifest.json` - Controls how your app appears when installed
   - Edit this file to change:
     ```json
     {
       "name": "Your Site Name",
       "short_name": "Short Name",
       "theme_color": "#your-color",
       "background_color": "#your-color",
       "icons": [...]
     }
     ```

---

### Building for Deployment

Build your project:

```bash
yarn build
```

This generates the files in the **`dist`** folder.

---

### Server Configuration

- For Apache servers: Use the provided `.htaccess` file
- For Nginx servers: Use the provided `gamehub.nginx` configuration file

---

### Deployment

Upload the contents of the **`dist`** folder to your web server.

---

Enjoy your new GameHub site!
