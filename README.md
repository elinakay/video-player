# React Video Player App

A simple React application for playing and switching between different videos with a dynamic video player.

## Overview

This React Video Player App allows users to view and control videos dynamically. The application includes a video player component (`Video.js`), a menu component (`Menu.js`) for selecting different videos, and an app component (`App.js`) that manages the overall structure and state of the application.

## Features

- **Dynamic Video Player:** The app utilizes a dynamic video player component that allows users to view and control videos.
- **Video Selection:** Users can choose from different video options using the menu component, which dynamically updates the video player source.

## Project Structure

- **`src/`**
  - **`App.js`**: Main component managing the application state and rendering.
  - **`Video.js`**: Component for displaying and controlling the video player.
  - **`Menu.js`**: Component for providing options to select different videos.
  - **`index.js`**: Entry point for rendering the app to the HTML container.

## Getting Started

1. **Clone Repository:**
   ```bash
   git clone https://github.com/elinakay/video-player.git
   cd video-player
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the App:**
   ```bash
   npm start
   ```

4. **Open in Browser:**
   Visit `http://localhost:3000` in your web browser to experience the React Video Player App.

## Usage

1. **Video Selection:**
   - Click on the radio buttons in the menu component to switch between different videos.

2. **Dynamic Video Player:**
   - The video player dynamically updates its source based on the selected option.

## Dependencies

- React
- ReactDOM

## Contributing

Contributions are welcome! If you have ideas for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- The app was created as a learning exercise for React development.
