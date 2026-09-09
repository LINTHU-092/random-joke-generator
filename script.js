let jokeCount = 0;

// Joke API URL (using JokeAPI)
const JOKE_API = 'https://official-joke-api.appspot.com/random_joke';

// Function to fetch and display a joke
async function getJoke() {
    const jokeContent = document.getElementById('jokeContent');
    const loading = document.getElementById('loading');
    const jokeText = document.getElementById('jokeText');
    
    // Show loading state
    jokeContent.style.display = 'none';
    loading.style.display = 'block';
    
    try {
        // Fetch joke from API
        const response = await fetch(JOKE_API);
        
        if (!response.ok) {
            throw new Error('Failed to fetch joke');
        }
        
        const data = await response.json();
        
        // Build the joke text
        let jokeDisplay = data.setup + '\n\n' + data.punchline;
        
        // Store the current joke for sharing/copying
        window.currentJoke = jokeDisplay;
        
        // Hide loading and show joke
        loading.style.display = 'none';
        jokeContent.style.display = 'flex';
        jokeText.textContent = jokeDisplay;
        
        // Increment counter
        jokeCount++;
        document.getElementById('jokeCount').textContent = jokeCount;
        
        // Add animation
        jokeContent.style.animation = 'none';
        setTimeout(() => {
            jokeContent.style.animation = 'slideIn 0.5s ease-in-out';
        }, 10);
        
    } catch (error) {
        console.error('Error:', error);
        loading.style.display = 'none';
        jokeContent.style.display = 'flex';
        jokeText.textContent = 'Oops! Something went wrong. Please try again!';
    }
}

// Function to copy joke to clipboard
function copyJoke() {
    if (!window.currentJoke) {
        alert('Get a joke first!');
        return;
    }
    
    navigator.clipboard.writeText(window.currentJoke).then(() => {
        alert('Joke copied to clipboard! 📋');
    }).catch(() => {
        alert('Failed to copy');
    });
}

// Function to share joke
function shareJoke() {
    if (!window.currentJoke) {
        alert('Get a joke first!');
        return;
    }
    
    if (navigator.share) {
        navigator.share({
            title: 'Check out this joke!',
            text: window.currentJoke,
            url: window.location.href
        }).catch(() => {
            // Share cancelled
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const encodedJoke = encodeURIComponent(window.currentJoke);
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedJoke}`;
        window.open(twitterUrl, '_blank');
    }
}

// Load a joke on page load
window.addEventListener('load', () => {
    getJoke();
});

// Allow Enter key to get a new joke
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getJoke();
    }
});