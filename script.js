// Global variables
let noBtnMoves = 0;
let globalNoClickCount = 0;

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Falling hearts animation
    function createHeart() {
        const heartRain = document.getElementById('heartRain');
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = ['❤️', '💕', '💖', '💗', '💓', '💝'][Math.floor(Math.random() * 6)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heartRain.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }

    setInterval(createHeart, 300);

    // Setup the No button behavior
    const noBtn = document.getElementById('noBtn');
    
    if (noBtn) {
        // Run away on hover
        noBtn.addEventListener('mouseenter', function() {
            noBtnMoves++;
            
            const maxX = window.innerWidth - noBtn.offsetWidth - 100;
            const maxY = window.innerHeight - noBtn.offsetHeight - 100;
            
            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;
            
            noBtn.style.position = 'fixed';
            noBtn.style.left = randomX + 'px';
            noBtn.style.top = randomY + 'px';
            noBtn.style.transition = 'all 0.3s ease';
            noBtn.style.zIndex = '1000';
            
            // Shrink the button
            const newSize = Math.max(0.2, 1 - (noBtnMoves * 0.04));
            noBtn.style.transform = `scale(${newSize})`;
            
            // All the makulit messages
            const messages = [
                "No",
                "Wait, what?",
                "Seriously? 😅",
                "Come on naman!",
                "Please? 🥺",
                "Pretty please?",
                "With sugar on top?",
                "Sige na pleaseeee",
                "I'm begging you! 🙏",
                "Don't do this to me",
                "You're killing me here",
                "My heart is breaking 💔",
                "Think about it...",
                "Reconsider! 😭",
                "Last chance!",
                "Are you sure sure?",
                "Like REALLY sure?",
                "100% sure?",
                "Okay but WHY though?",
                "What did I do? 😢",
                "I'll be sad forever",
                "Please I'm shrinking!",
                "Look how small I am!",
                "You're so mean! 😤",
                "Fine, be like that!",
                "But seriously though...",
                "One more chance?",
                "Pleaseee lang 🥹",
                "I won't give up!",
                "Never gonna give you up! 🎵",
                "Still here!",
                "Getting tiny now...",
                "Can barely see me?",
                "Almost invisible...",
                "Okay FINE",
                "You win... OR DO YOU?",
                "Psych! Still here!",
                "I'm persistent!",
                "Very very persistent!",
                "Super duper persistent!",
                "This is exhausting",
                "For both of us tbh",
                "But I won't stop!",
                "Because I love you!",
                "And you love me too!",
                "Just admit it!",
                "Say YES!",
                "Just click YES!",
                "The YES button is right there!",
                "See it? It's big and pink!",
                "So easy to click!",
                "Unlike me, I'm tiny now",
                "Sooooo tiny",
                "Microscopic!",
                "Okay seriously now...",
                "This is your last warning",
                "I'm about to disappear",
                "3...",
                "2...",
                "1...",
                "Bye! 👋"
            ];
            
            if (noBtnMoves <= messages.length) {
                noBtn.textContent = messages[noBtnMoves - 1];
            } else {
                noBtn.textContent = "...still here tho 😏";
            }
            
            // Make button rotate and move faster
            if (noBtnMoves > 15) {
                noBtn.style.transition = 'all 0.2s ease';
            }
            if (noBtnMoves > 30) {
                noBtn.style.transition = 'all 0.1s ease';
                noBtn.style.transform = `scale(${newSize}) rotate(${noBtnMoves * 10}deg)`;
            }
            
            // Disappear after many attempts
            if (noBtnMoves >= 60) {
                noBtn.style.opacity = '0';
                setTimeout(() => {
                    noBtn.style.display = 'none';
                    
                    const card = document.querySelector('.button-group');
                    const hint = document.createElement('p');
                    hint.style.cssText = 'color: #d63384; font-style: italic; margin-top: 20px; animation: fadeInUp 0.5s ease; font-size: 1.2rem; font-weight: 600;';
                    hint.textContent = "FINE! Looks like YES is your ONLY option now! 💕😤";
                    card.appendChild(hint);
                }, 300);
            }
            
            // Alerts for extra makulit factor
            if (noBtnMoves === 10) {
                setTimeout(() => alert("Wow, you're really trying to click NO? 🤨"), 100);
            }
            if (noBtnMoves === 25) {
                setTimeout(() => alert("Okay this is getting ridiculous! Just say YES! 😂"), 100);
            }
            if (noBtnMoves === 40) {
                setTimeout(() => alert("You've tried FORTY TIMES! Are you okay? 😅"), 100);
            }
            if (noBtnMoves === 55) {
                setTimeout(() => alert("Almost there! Just 5 more attempts and the button disappears forever! 😈"), 100);
            }
        });
    }
});

// Functions that need to be in global scope for onclick
function handleNo() {
    const noBtn = document.getElementById('noBtn');
    globalNoClickCount++;
    
    if (globalNoClickCount === 1) {
        alert("Did you really think I'd let you click that? 😏");
        noBtn.textContent = "Not happening!";
        noBtn.style.position = 'fixed';
        noBtn.style.left = Math.random() * (window.innerWidth - 200) + 'px';
        noBtn.style.top = Math.random() * (window.innerHeight - 200) + 'px';
    } else {
        alert("Seriously, stop trying! 😂");
        noBtn.style.left = Math.random() * (window.innerWidth - 200) + 'px';
        noBtn.style.top = Math.random() * (window.innerHeight - 200) + 'px';
    }
}

function handleYes() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Create celebration popup
    const celebration = document.createElement('div');
    celebration.className = 'celebration';
    celebration.innerHTML = `
        <span class="big-emoji">🎉</span>
        <h2>YAY! 💕</h2>
        <p>You've made me the happiest person in the world!</p>
        <p>Now let's make this Valentine's Day unforgettable! 💖</p>
        <button class="btn btn-yes" onclick="closeCelebration()" style="margin-top: 20px;">Let's Do This! 🚀</button>
    `;
    document.body.appendChild(celebration);

    // Create confetti
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = ['#ff6b9d', '#ffc0cb', '#ff69b4', '#ff1493', '#db7093'][Math.floor(Math.random() * 5)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

function closeCelebration() {
    document.querySelector('.overlay').remove();
    document.querySelector('.celebration').remove();
}