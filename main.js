// Function to simulate the welcome screen
function showWelcomeScreen() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const loadingText = document.getElementById('loading');
    
    setTimeout(() => {
        loadingText.textContent = "Almost There...";
    }, 2000);

    setTimeout(() => {
        welcomeScreen.classList.add('hidden'); // Hide the welcome screen
        document.getElementById('main-page').classList.remove('hidden'); // Show main page
        document.getElementById('content-section').classList.remove('hidden'); // Show content section
    }, 5000); // Wait 5 seconds before transitioning
}

// Run welcome animation
window.onload = function() {
    showWelcomeScreen();
};

// Button Handlers
document.getElementById('about-btn').addEventListener('click', () => {
  updateContent(
    'About Me',
    "<p>Hello! I'm Adly, a 17y/o Heh..i make music and still learn it...Well I waste my 1 year Experimenting Sound/music and make very many useless music..then i start learn from Mixing then sound design..still suck tbh..but I'll keep learn into piano theory and better melody..maybe..uhh...memorize chord?xD,Anyway in other side..i actually Drawing,Editing,and Animation stuff..but mostly music ofc..i make some solo MV Vocaloid..you can see on my YouTube :D!</p>"
  );
});

document.getElementById('story-btn').addEventListener('click', () => {
  updateContent(
    'My Story',
    "<p>I interested Into Music Because I Could Describe My Emotion into Feeling. id like to show what kind genre/type music i love listening soo you'll probably see I make Soo Many and random music (Actually i don't like it lol) ,All my music was wrong start because i didn't watch Some tutorial manually and suddenly created them..like trying learn piano but only using my own language to make..now i listen my music and feel shame how Unbalanced the Mixing and Very bad quality..but im glad it was pure emotion on it!</p>"
  );
});

document.getElementById('music-btn').addEventListener('click', () => {
  updateContent(
    'My Music',
    `
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>11. Music Name: I Am Here!</h3>
            <p>Date Released: Jul/13/2024</p>
            <p>Available on Platform: Spotify, YouTube, Instagram, TikTok</p>
            <p>Description: My best iconic music ever. It sounds really good to me.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>12. Music Name: Silent Voice</h3>
            <p>Date Released: Jul/2/2025</p>
            <p>Available on Platform: YouTube,Spotify,more</p>
            <p>Description: The First Official MV!'</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>13. Music Name: Small Wings</h3>
            <p>Date Released: Jul/13/2025</p>
            <p>Available on Platform: YouTube</p>
            <p>Description: The second MV,I really Proud for this Because full effort 1 month to made this masterpiece!.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>14. Music Name: Overload</h3>
            <p>Date Released: Des/27/2025</p>
            <p>Available on Platform: YouTube (Public)</p>
            <p>Description: Digicore and really my type beat..bit shame for the power chord sounds unbalanced and messy.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>15. Music Name: Last Deleted Memory (7/10)</h3>
            <p>Date Released: Aug/9/2024</p>
            <p>Available on Platform: Spotify, YouTube, Instagram, TikTok</p>
            <p>Description: An iconic track with breakcore vibes, mixed with my own style.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>29. Music Name: It's Not About Dream (8/10)</h3>
            <p>Date Released: Oct/20/2024</p>
            <p>Available on Platform: Spotify, YouTube, Instagram, TikTok</p>
            <p>Description: I love it! It's energetic and powerful.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>33. Music Name: Miku My Pookie Po! (10/10)</h3>
            <p>Date Released: Dec/7/2024</p>
            <p>Available on Platform: Spotify, YouTube, Instagram, TikTok</p>
            <p>Description: MY FAVORITE! It's perfect. I love this.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>34. Music Name: [Hatsune Miku]</h3>
            <p>Date Released: Okt/25/2025</p>
            <p>Available on Platform: YouTube (Public)</p>
            <p>Description: Unfinish Song but soo Cool!</p>
        </div>
    `
  );
});

document.getElementById('connect-btn').addEventListener('click', () => {
  updateContent(
    'Connect with Me',
    `
        <ul>
            <li><a href="https://discord.com/invite/SA5yysqZyB" target="_blank">Discord</a></li>
            <li><a href="https://on.soundcloud.com/WTb8P" target="_blank">SoundCloud</a></li>
            <li><a href="https://www.instagram.com/just.adly?igsh=MTN4eDB4OW01cmhlaw==" target="_blank">Instagram</a></li>
            <li><a href="https://www.tiktok.com/@_adlys?_t=8sQrjOsMqBc&_r=1" target="_blank">TikTok</a></li>
            <li><a href="https://x.com/Adly_fadil?t=MaNu_FPkq4NH-mkG60VEEw&s=33" target="_blank">Twitter/X</a></li>
            <li><a href="https://youtube.com/@adlyzz?si=peF9gIoF9-_T-h_X" target="_blank">YouTube</a></li>
            <li><a href="https://pin.it/40mn3KpjV" target="_blank">Pinterest</a></li>
            <li><a href="https://www.facebook.com/share/18PK5PWC6K/" target="_blank">Facebook</a></li>
        </ul>
        `
  );
});

// Function to update content with animation
function updateContent(title, content) {
    const contentSection = document.getElementById('content');

    contentSection.classList.remove('visible');
    contentSection.classList.add('hidden');

    setTimeout(() => {
        contentSection.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
        `;
        contentSection.classList.remove('hidden');
        contentSection.classList.add('visible');
    }, 300);
}// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
