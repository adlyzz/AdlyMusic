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
    "<p>Hello! I'm Adly, a 16-year-old passionate about making music, drawing, and playing games. I've been blessed with incredible friends since 2022, including JinnTheNoob, Skytraveler, Hafi, CloudGuy, and many more. We connect as online friends, sharing a friendly atmosphere, and we’re always open to making new friends!</p><br><br><p>Art and music have always been close to my heart. I love drawing, and I often share my work on Instagram, particularly chibi-style characters. When it comes to music, I usually release my tracks on YouTube first. I’m also into 2D/3D animation and enjoy games like Geometry Dash and Minecraft, especially when I play with my friends. That's a bit about me, and I hope you enjoy what I create. Thank you for your support!</p>"
  );
});

document.getElementById('story-btn').addEventListener('click', () => {
  updateContent(
    'My Story',
    "<p>My love for music began when I was just 13 years old. I started by listening to music intensely, trying to grasp its essence. I picked up the piano and learned to play chords, which led me to experiment with creating my own music. At 14, I began making music using an app that allowed me to loop sounds. I uploaded my first tracks to YouTube under the name 'Seanvin'.</p><br><br><p>Despite the challenges, I made 5 songs, but due to copyright issues, I switched to FL Studio Mobile. At first, I was lost in the software, but I persisted and created my first Lofi beat. Though I kept that beat private, it filled me with joy. This was the moment I became hooked on music production, and I spent countless hours learning on my own.</p><br><br><p>Reaching 500 views and 20 likes on my music gave me the courage to think about releasing my tracks on Spotify. The journey wasn’t easy, though. Most platforms were paid, and I felt downhearted. But then, I discovered a free distribution website, and I eagerly shared my song 'I Am Here' on Instagram, Facebook, and TikTok. The joy of seeing my work out there was incredible, even though there were personal things I couldn’t share with my parents.</p><br><br><p>As I continued creating, a singer named NerdYX used one of my beats in a song called 'On Top! / H-hello?'. I reached out to him, and we decided to collaborate and release the song on Spotify. Along the way, I discovered SpaceMedia, a free and user-friendly distribution platform, where I released tracks like 'Sweet Giggles' and 'Kawaii Dreams'. However, those were denied. Eventually, 'On Top' was released, and I was over the moon to share it with the world.</p><br><br><p>Months passed, and I kept pushing forward, releasing more music. Despite facing mental and loneliness struggles, I continue to pour my heart into my creations. My journey isn’t easy, but it’s one I’m dedicated to, for myself and for everyone who listens.</p>"
  );
});

document.getElementById('music-btn').addEventListener('click', () => {
  updateContent(
    'My Music',
    `
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>1. Music Name: Ovilla (4/10)</h3>
            <p>Date Released: Jan/30/2024</p>
            <p>Available on Platform: YouTube (Unlisted)</p>
            <p>Description: It's just a lo-fi music with loops. It sounds suck but calming.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>2. Music Name: Dead Limit (2/10)</h3>
            <p>Date Released: Mar/1/2024</p>
            <p>Available on Platform: YouTube (Unlisted)</p>
            <p>Description: Phonk genre with a piano start, but turns into something random with a bad melody.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>3. Music Name: Return Your Own Life (1/10)</h3>
            <p>Date Released: May/5/2024</p>
            <p>Available on Platform: YouTube (Private)</p>
            <p>Description: A loop-based track attempting hardstyle, but not quite hitting the mark.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>4. Music Name: Under My Expected (3/10)</h3>
            <p>Date Released: May/6/2024</p>
            <p>Available on Platform: YouTube (Private)</p>
            <p>Description: A better attempt at hardstyle, but still a bit off.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>5. Music Name: D*MN (5/10)</h3>
            <p>Date Released: Jun/25/2024</p>
            <p>Available on Platform: YouTube (Public)</p>
            <p>Description: Uses Fluxxwave bells with a random, fast melody. Not bad.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>6. Music Name: ZeroTimeLess (6/10)</h3>
            <p>Date Released: Jun/29/2024</p>
            <p>Available on Platform: YouTube (Public)</p>
            <p>Description: An iconic melody, though still a bit imperfect.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>7. Music Name: YOZ-! (2/10)</h3>
            <p>Date Released: Jun/29/2024</p>
            <p>Available on Platform: YouTube (Public)</p>
            <p>Description: A track with an unclear identity. Not sure what it's supposed to be.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>8. Music Name: OverDose Time! (5/10)</h3>
            <p>Date Released: Jun/29/2024</p>
            <p>Available on Platform: YouTube (Public)</p>
            <p>Description: A silly, fast-paced track with a random "krush" genre vibe.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>9. Music Name: Kawaii Dreams (5/10)</h3>
            <p>Date Released: Jul/2/2024</p>
            <p>Available on Platform: YouTube (Public)</p>
            <p>Description: First music video with animation. It sounds a bit dizzy, but fun!</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>10. Music Name: Sweet Giggles (7/10)</h3>
            <p>Date Released: Jul/4/2024</p>
            <p>Available on Platform: YouTube (Public)</p>
            <p>Description: A favorite and iconic track, loved by many.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>11. Music Name: I Am Here! (10/10)</h3>
            <p>Date Released: Jul/13/2024</p>
            <p>Available on Platform: Spotify, YouTube, Instagram, TikTok</p>
            <p>Description: My best iconic music ever. It sounds really good to me.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>12. Music Name: I Lost Again (0/10)</h3>
            <p>Date Released: Jul/20/2024</p>
            <p>Available on Platform: YouTube (Unlisted)</p>
            <p>Description: First time feeling down about making music. I feel I can't make something better than 'I Am Here!'</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>13. Music Name: Cozy Charm (8/10)</h3>
            <p>Date Released: Jul/26/2024</p>
            <p>Available on Platform: Spotify, YouTube, Instagram, TikTok</p>
            <p>Description: After some time off, I'm happy to make new music again. It's good and iconic.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>14. Music Name: Overdose Time II (3/10)</h3>
            <p>Date Released: Aug/3/2024</p>
            <p>Available on Platform: YouTube (Public)</p>
            <p>Description: A chaotic, loud EDM track. Not the best, but still interesting.</p>
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
            <h3>16. Music Name: VoidZone (5/10)</h3>
            <p>Date Released: Aug/15/2024</p>
            <p>Available on Platform: Spotify, YouTube, Instagram, TikTok</p>
            <p>Description: I don't even know this music exists, but it's alright.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>17. Music Name: Hypnotic Room! (7/10)</h3>
            <p>Date Released: Aug/27/2024</p>
            <p>Available on Platform: Spotify, YouTube, Instagram, TikTok</p>
            <p>Description: I learned to make music seriously, and it's very good!</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>18. Music Name: F*ck U St*ss / Drop It Off (4/10)</h3>
            <p>Date Released: Sep/3/2024</p>
            <p>Available on Platform: Spotify, YouTube, Instagram, TikTok</p>
            <p>Description: I love the start, but the rest feels pretty trash.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>19. Music Name: Alch Ni (5/10)</h3>
            <p>Date Released: Sep/3/2024</p>
            <p>Available on Platform: YouTube (Public)</p>
            <p>Description: Yuju-Attict loves it. Maybe it's his favorite music.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>20. Music Name: I Sxrry (2/10)</h3>
            <p>Date Released: Sep/3/2024</p>
            <p>Available on Platform: YouTube (Public)</p>
            <p>Description: Not good. It's bad.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>21. Music Name: I Ciez Shoty (2/10)</h3>
            <p>Date Released: Sep/3/2024</p>
            <p>Available on Platform: YouTube (Public)</p>
            <p>Description: I'm not sure about this one either. It's just there.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>22. Music Name: Ha-Hello/On Top! (7/10)</h3>
            <p>Date Released: Sep/5/2024</p>
            <p>Available on Platform: Spotify, YouTube, Instagram, TikTok</p>
            <p>Description: I love it! It sounds cool.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>23. Music Name: Na-Shiko (6/10)</h3>
            <p>Date Released: Sep/8/2024</p>
            <p>Available on Platform: Spotify, YouTube, Instagram, TikTok</p>
            <p>Description: Pretty iconic, but very good overall.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>24. Music Name: Keep Listen Forever/I In Love With You (9/10)</h3>
            <p>Date Released: Sep/16/2024</p>
            <p>Available on Platform: Spotify, YouTube, Instagram, TikTok</p>
            <p>Description: A masterpiece. It sounds exciting!</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>25. Music Name: Broken System (10/10)</h3>
            <p>Date Released: Sep/22/2024</p>
            <p>Available on Platform: Spotify, YouTube, Instagram, TikTok</p>
            <p>Description: A masterpiece! I can't make music like this again.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>26. Music Name: Happy Birthday (5/10)</h3>
            <p>Date Released: Oct/7/2024</p>
            <p>Available on Platform: YouTube (Public)</p>
            <p>Description: It's my birthday track, and it's just alright.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>27. Music Name: Snooze Alarm Ahh Beat (5/10)</h3>
            <p>Date Released: Oct/11/2024</p>
            <p>Available on Platform: YouTube (Public)</p>
            <p>Description: I don't know about this one.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>28. Music Name: Progress Failed (2/10)</h3>
            <p>Date Released: Oct/20/2024</p>
            <p>Available on Platform: YouTube (Public)</p>
            <p>Description: It's bad, lol.</p>
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
            <h3>30. Music Name: Just An Game (5/10)</h3>
            <p>Date Released: Nov/13/2024</p>
            <p>Available on Platform: YouTube (Public)</p>
            <p>Description: Uh... not sure what to say.</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>31. Music Name: I Want You Like Me Back (9/10)</h3>
            <p>Date Released: Nov/17/2024</p>
            <p>Available on Platform: Spotify, YouTube, Instagram, TikTok</p>
            <p>Description: YOOOOWW! I love this one!</p>
        </div>
        <div>
        ‎ ‎ ‎ ‎ 
            <h3>32. Music Name: Get Some Memories (9/10)</h3>
            <p>Date Released: Dec/5/2024</p>
            <p>Available on Platform: Spotify, YouTube, Instagram, TikTok</p>
            <p>Description: Really good and calming. I love it.</p>
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
            <h3>34. Music Name: Silly (9/10)</h3>
            <p>Date Released: Dec/18/2024</p>
            <p>Available on Platform: YouTube (Public) / Coming soon to Spotify, Instagram, TikTok</p>
            <p>Description: I love it! Hardstyle, and WOW!</p>
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
