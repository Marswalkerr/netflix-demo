# Netflix Clone

A Netflix clone built using React, featuring movie trailers, dynamic content rows, and a responsive design. This project uses The Movie Database (TMDB) API to fetch real movie data and YouTube for trailer playback.

!Click here to see the live demo: [Netflix Demo](https://themovie-site-demo.netlify.app/)

## eatures

- Dynamic hero banner with featured content
- Multiple categories of movies and TV shows
- Trailer playback functionality
- Responsive design for all screen sizes
- Real-time content updates from TMDB
- Play trailers directly in the app
- Smooth transitions and animations

## Technologies Used

- React.js
- Axios for API requests
- TMDB API for movie data
- CSS3 for styling
- react-youTube for video playback

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14.0 or later)
- npm or yarn package manager
- A TMDB API key

## Installation and Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a .env file in the project root and add your TMDB API key**
   ```env
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Visit `http://localhost:3000` to view the app

## API Configuration

The project uses TMDB API for fetching movie data. To set up your own API access:

1. Visit [TMDB Website](https://www.themoviedb.org/)
2. Create an account and get your API key
3. Add the API key to your .env file

## Customization

You can customize various aspects of the application:

1. **Add New Movie Categories**
   - Edit the `Requests.js` file to add new movie categories
   ```javascript
   const requests = {
     fetchNewCategory: `/discover/movie?api_key=${API_KEY}&with_genres=YOUR_GENRE_ID`,
   };
   ```

2. **Modify Styling**
   - Edit the CSS files in the components directory to change the appearance

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request