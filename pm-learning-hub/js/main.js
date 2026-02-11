// Main JavaScript file for general functionality

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe module and game cards
    const cards = document.querySelectorAll('.module-card, .game-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
});

// Close modals with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const moduleModal = document.getElementById('moduleModal');
        const gameModal = document.getElementById('gameModal');
        
        if (moduleModal.style.display === 'block') {
            closeModal();
        }
        if (gameModal.style.display === 'block') {
            closeGameModal();
        }
    }
});

// Add active state to navigation
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Progress tracking (optional feature)
const progressData = {
    modulesCompleted: [],
    gamesCompleted: [],
    quizScores: {}
};

function saveProgress() {
    localStorage.setItem('pmLearningProgress', JSON.stringify(progressData));
}

function loadProgress() {
    const saved = localStorage.getItem('pmLearningProgress');
    if (saved) {
        Object.assign(progressData, JSON.parse(saved));
    }
}

function markModuleComplete(moduleNumber) {
    if (!progressData.modulesCompleted.includes(moduleNumber)) {
        progressData.modulesCompleted.push(moduleNumber);
        saveProgress();
        updateProgressDisplay();
    }
}

function markGameComplete(gameName) {
    if (!progressData.gamesCompleted.includes(gameName)) {
        progressData.gamesCompleted.push(gameName);
        saveProgress();
        updateProgressDisplay();
    }
}

function saveQuizScore(moduleNumber, score, total) {
    progressData.quizScores[moduleNumber] = {
        score: score,
        total: total,
        percentage: Math.round((score / total) * 100),
        date: new Date().toISOString()
    };
    saveProgress();
    updateProgressDisplay();
}

function updateProgressDisplay() {
    // Update module cards with completion status
    progressData.modulesCompleted.forEach(moduleNum => {
        const moduleCard = document.querySelector(`[data-module="${moduleNum}"]`);
        if (moduleCard && !moduleCard.querySelector('.completion-badge')) {
            const badge = document.createElement('div');
            badge.className = 'completion-badge';
            badge.innerHTML = '✓ Completed';
            badge.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                background: var(--success);
                color: white;
                padding: 0.3rem 0.8rem;
                border-radius: 15px;
                font-size: 0.8rem;
                font-weight: bold;
            `;
            moduleCard.style.position = 'relative';
            moduleCard.appendChild(badge);
        }
    });
}

// Initialize progress on page load
loadProgress();
updateProgressDisplay();

// Add some helpful console messages for developers
console.log('%c🎓 PM Learning Hub', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cWelcome to the Product Management Learning Hub!', 'font-size: 14px; color: #64748b;');
console.log('%cExplore modules, play games, and test your knowledge.', 'font-size: 12px; color: #94a3b8;');

// Story Navigation with interactive elements
function nextScene(sceneNumber) {
    // Hide all scenes
    const scenes = document.querySelectorAll('.story-scene');
    scenes.forEach(scene => scene.classList.remove('active'));
    
    // Show the selected scene
    const targetScene = document.getElementById(`scene-${sceneNumber}`);
    if (targetScene) {
        targetScene.classList.add('active');
        
        // Smooth scroll to the story section
        targetScene.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Add interactive listeners to new scene
        addSceneInteractivity(sceneNumber);
    }
}

// Add interactive elements to each scene
function addSceneInteractivity(sceneNumber) {
    const scene = document.getElementById(`scene-${sceneNumber}`);
    if (!scene) return;
    
    // Make character clickable
    const character = scene.querySelector('.persona-character');
    if (character && !character.hasAttribute('data-interactive')) {
        character.setAttribute('data-interactive', 'true');
        character.addEventListener('click', function() {
            this.querySelector('.character-image').style.animation = 'bounce 0.6s ease';
            setTimeout(() => {
                this.querySelector('.character-image').style.animation = '';
            }, 600);
        });
    }
    
    // Make thought bubble interactive
    const bubble = scene.querySelector('.thought-bubble');
    if (bubble && !bubble.hasAttribute('data-interactive')) {
        bubble.setAttribute('data-interactive', 'true');
        bubble.addEventListener('click', function() {
            this.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                this.style.animation = 'bubbleAppear 0.5s ease-out 0.3s backwards';
            }, 500);
        });
    }
}

// Initialize first scene interactivity
document.addEventListener('DOMContentLoaded', function() {
    addSceneInteractivity(1);
});

// Export functions for use in other scripts
window.pmLearning = {
    markModuleComplete,
    markGameComplete,
    saveQuizScore,
    progressData
};

// Make nextScene available globally
window.nextScene = nextScene;

// Interactive character animation
function toggleCharacterAnimation(sceneNum) {
    const char = document.getElementById(`char-${sceneNum}`);
    char.classList.add('bounce-animation');
    setTimeout(() => {
        char.classList.remove('bounce-animation');
    }, 600);
}

// Interactive quiz functionality
function checkAnswer(sceneNum, result) {
    const scene = document.getElementById(`scene-${sceneNum}`);
    const options = scene.querySelectorAll('.quiz-option');
    const navBtn = document.getElementById(`next-btn-${sceneNum}`) || document.getElementById(`nav-${sceneNum}`);
    
    // Disable all options after selection
    options.forEach(option => {
        option.disabled = true;
        if (option.onclick.toString().includes(result)) {
            if (result === 'correct') {
                option.classList.add('correct-answer');
                option.innerHTML += ' ✓';
            }
        } else {
            option.classList.add('wrong-answer');
        }
    });
    
    // Show feedback
    const feedback = document.createElement('div');
    feedback.className = result === 'correct' ? 'feedback-correct' : 'feedback-wrong';
    feedback.innerHTML = result === 'correct'
        ? '🎉 Correct! Great thinking!'
        : '❌ Not quite. Think about user needs first!';
    scene.querySelector('.interactive-quiz').appendChild(feedback);
    
    // Animate character
    toggleCharacterAnimation(sceneNum);
    
    // Show navigation after correct answer
    if (result === 'correct' && navBtn) {
        setTimeout(() => {
            navBtn.style.display = sceneNum === 1 ? 'inline-block' : 'flex';
        }, 500);
    }
}

// Make functions available globally
window.toggleCharacterAnimation = toggleCharacterAnimation;
window.checkAnswer = checkAnswer;

// Made with Bob
