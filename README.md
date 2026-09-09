# 😂 Random Joke Generator

A simple, fun web application that fetches and displays random jokes from an external API.

## 🎯 Features

- ✨ Fetches random jokes from JokeAPI
- 📋 Copy joke to clipboard
- 🔗 Share jokes on social media
- 📊 Tracks total jokes loaded
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🎨 Beautiful gradient UI
- ⌨️ Press Enter to get a new joke

## 🌐 Live Demo

**Visit:** [Random Joke Generator](https://linthu-092.github.io/random-joke-generator/)

## 🚀 How to Use

1. **Open the website** - Click the link above or visit the GitHub Pages URL
2. **Get a joke** - Click the "Get a Joke" button
3. **Share** - Use the Share button to share on social media
4. **Copy** - Use the Copy button to copy the joke to clipboard
5. **Keep laughing** - Repeat!

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with gradients and animations
- **JavaScript (ES6+)** - Functionality and API calls
- **JokeAPI** - External joke data source

## 📚 API Used

[JokeAPI](https://official-joke-api.appspot.com/) - Provides random jokes

**Endpoint:** `https://official-joke-api.appspot.com/random_joke`

**Response Format:**
```json
{
  "type": "general",
  "setup": "Why don't scientists trust atoms?",
  "punchline": "Because they make up everything!",
  "id": 1
}
```

## 📁 Project Structure

```
random-joke-generator/
├── index.html       # HTML structure
├── style.css        # Styling
├── script.js        # JavaScript functionality
├── README.md        # Documentation
└── .gitignore       # Git ignore file
```

## 💻 Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/LINTHU-092/random-joke-generator.git
   cd random-joke-generator
   ```

2. **Open in browser**
   - Simply double-click `index.html`
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

## 🎨 Features Explained

### Get a Joke
- Fetches a random joke from JokeAPI
- Shows loading spinner while fetching
- Displays setup and punchline
- Increments joke counter

### Copy Joke
- Copies the joke text to your clipboard
- Works on all modern browsers
- Shows confirmation message

### Share Joke
- Uses Web Share API on supported devices
- Falls back to Twitter share on desktop
- Allows sharing with custom text

### Keyboard Shortcut
- Press **Enter** to get a new joke
- Great for rapid-fire laughs!

## 🎯 Possible Enhancements

- [ ] Add joke categories/filters
- [ ] Add favorites/bookmarks
- [ ] Dark mode toggle
- [ ] Sound effects
- [ ] Joke history
- [ ] Ratings/reactions
- [ ] Multiple joke APIs
- [ ] Offline mode (cached jokes)

## 🐛 Troubleshooting

**"Failed to fetch joke"?**
- Check your internet connection
- The API might be temporarily down
- Try refreshing the page

**Share button not working?**
- Some older browsers don't support Web Share API
- The app falls back to Twitter sharing

## 📝 License

MIT License - Feel free to use and modify

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 👨‍💻 Author

**LINTHU-092**

## 🙏 Acknowledgments

- [JokeAPI](https://official-joke-api.appspot.com/) for providing the jokes
- GitHub Pages for free hosting

---

**Made with ❤️ and a lot of laughs 😂**