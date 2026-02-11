// Interactive Games Implementation

const games = {
    prioritization: {
        title: "🎯 Prioritization Challenge",
        instructions: "Drag and drop features into the correct quadrant based on Impact vs Effort. High Impact + Low Effort features should be prioritized first!",
        features: [
            { id: 1, name: "Password Reset", description: "Allow users to reset forgotten passwords", impact: "high", effort: "low" },
            { id: 2, name: "Dark Mode", description: "Add dark theme option", impact: "low", effort: "low" },
            { id: 3, name: "AI Recommendations", description: "ML-powered task suggestions", impact: "high", effort: "high" },
            { id: 4, name: "Custom Themes", description: "Let users customize colors", impact: "low", effort: "high" },
            { id: 5, name: "Mobile Notifications", description: "Push notifications for deadlines", impact: "high", effort: "low" },
            { id: 6, name: "Social Sharing", description: "Share tasks on social media", impact: "low", effort: "high" }
        ]
    },
    userstory: {
        title: "📝 User Story Builder",
        instructions: "Complete the user story by selecting the correct components. A good user story follows: As a [user], I want [goal], so that [benefit].",
        scenarios: [
            {
                context: "Building a student productivity app",
                user: ["student", "teacher", "administrator"],
                goal: ["see my upcoming deadlines", "customize the interface", "share my schedule"],
                benefit: ["I don't miss important submissions", "the app looks nice", "my friends know when I'm busy"],
                correct: { user: "student", goal: "see my upcoming deadlines", benefit: "I don't miss important submissions" }
            },
            {
                context: "E-commerce checkout flow",
                user: ["shopper", "store owner", "delivery driver"],
                goal: ["save my payment info", "track inventory", "see delivery routes"],
                benefit: ["checkout is faster next time", "I know what's in stock", "I can plan my day"],
                correct: { user: "shopper", goal: "save my payment info", benefit: "checkout is faster next time" }
            }
        ]
    },
    problem: {
        title: "🔍 Problem vs Solution",
        instructions: "Identify whether each statement is a Problem or a Solution. Remember: Problems describe user struggles, Solutions describe what to build.",
        statements: [
            { text: "Users don't know which tasks to prioritize", type: "problem" },
            { text: "Add a priority ranking feature", type: "solution" },
            { text: "Students miss deadlines due to poor visibility", type: "problem" },
            { text: "Build a dashboard with calendar view", type: "solution" },
            { text: "New users abandon signup because it's too long", type: "problem" },
            { text: "Implement AI-powered suggestions", type: "solution" },
            { text: "Users feel overwhelmed by too many notifications", type: "problem" },
            { text: "Create a notification settings page", type: "solution" }
        ]
    },
    metrics: {
        title: "📊 Metrics Master",
        instructions: "Classify each metric as either a Vanity Metric (looks good but doesn't indicate real value) or a Success Metric (shows actual user value).",
        metrics: [
            { text: "Total app downloads", type: "vanity" },
            { text: "% of users completing their first task", type: "success" },
            { text: "Page views per session", type: "vanity" },
            { text: "Weekly active users who complete core actions", type: "success" },
            { text: "Number of sign-ups", type: "vanity" },
            { text: "Reduction in time to complete key workflow", type: "success" },
            { text: "Social media followers", type: "vanity" },
            { text: "User retention after 30 days", type: "success" }
        ]
    }
};

let currentGame = null;
let gameState = {};

function startGame(gameType) {
    currentGame = gameType;
    const modal = document.getElementById('gameModal');
    const content = document.getElementById('gameContent');
    
    if (gameType === 'prioritization') {
        content.innerHTML = renderPrioritizationGame();
        initializeDragAndDrop();
        startGameTimer();
    } else if (gameType === 'userstory') {
        gameState.currentScenario = 0;
        gameState.userStoryAnswers = [];
        content.innerHTML = renderUserStoryGame();
    } else if (gameType === 'problem') {
        gameState.problemAnswers = [];
        content.innerHTML = renderProblemGame();
    } else if (gameType === 'metrics') {
        gameState.metricsAnswers = [];
        content.innerHTML = renderMetricsGame();
    }
    
    modal.style.display = 'block';
}

function closeGameModal() {
    document.getElementById('gameModal').style.display = 'none';
    stopGameTimer();
    currentGame = null;
    gameState = {};
}

// Prioritization Game
function renderPrioritizationGame() {
    const game = games.prioritization;
    return `
        <div class="game-container">
            <h2 class="game-title">${game.title}</h2>
            <div class="game-instructions">
                <p>${game.instructions}</p>
                <div class="game-timer">⏱️ Time: <span id="timer">0:00</span></div>
                <div class="game-score">🎯 Score: <span id="score">0</span></div>
            </div>
            
            <div id="features-pool" class="features-pool">
                <h3>🎴 Drag Features to Quadrants:</h3>
                ${game.features.map(f => `
                    <div class="feature-item" draggable="true" data-id="${f.id}" data-impact="${f.impact}" data-effort="${f.effort}">
                        <div class="feature-icon">${getFeatureIcon(f.name)}</div>
                        <h4>${f.name}</h4>
                        <p>${f.description}</p>
                        <div class="drag-hint">👆 Drag me!</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="priority-grid">
                <div class="priority-quadrant high-impact-low-effort" data-quadrant="high-low">
                    <div class="quadrant-header">
                        <h3>🚀 Do First</h3>
                        <p>High Impact, Low Effort</p>
                    </div>
                    <div class="quadrant-drop-zone">Drop here</div>
                </div>
                <div class="priority-quadrant high-impact-high-effort" data-quadrant="high-high">
                    <div class="quadrant-header">
                        <h3>📅 Plan Carefully</h3>
                        <p>High Impact, High Effort</p>
                    </div>
                    <div class="quadrant-drop-zone">Drop here</div>
                </div>
                <div class="priority-quadrant low-impact-low-effort" data-quadrant="low-low">
                    <div class="quadrant-header">
                        <h3>⚡ Quick Wins</h3>
                        <p>Low Impact, Low Effort</p>
                    </div>
                    <div class="quadrant-drop-zone">Drop here</div>
                </div>
                <div class="priority-quadrant low-impact-high-effort" data-quadrant="low-high">
                    <div class="quadrant-header">
                        <h3>❌ Avoid</h3>
                        <p>Low Impact, High Effort</p>
                    </div>
                    <div class="quadrant-drop-zone">Drop here</div>
                </div>
            </div>
            
            <button class="submit-game-btn" onclick="checkPrioritization()">🎯 Check My Answers</button>
            <div id="prioritization-result"></div>
        </div>
    `;
}

function getFeatureIcon(name) {
    const icons = {
        'Password Reset': '🔐',
        'Dark Mode': '🌙',
        'AI Recommendations': '🤖',
        'Custom Themes': '🎨',
        'Mobile Notifications': '📱',
        'Social Sharing': '📤'
    };
    return icons[name] || '✨';
}

// Start timer when game loads
let gameTimer = null;
let gameStartTime = null;

function startGameTimer() {
    gameStartTime = Date.now();
    gameTimer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - gameStartTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        const timerEl = document.getElementById('timer');
        if (timerEl) {
            timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
}

function stopGameTimer() {
    if (gameTimer) {
        clearInterval(gameTimer);
        gameTimer = null;
    }
}

function initializeDragAndDrop() {
    const features = document.querySelectorAll('.feature-item');
    const quadrants = document.querySelectorAll('.priority-quadrant');
    
    features.forEach(feature => {
        feature.addEventListener('dragstart', handleDragStart);
        feature.addEventListener('dragend', handleDragEnd);
    });
    
    quadrants.forEach(quadrant => {
        quadrant.addEventListener('dragover', handleDragOver);
        quadrant.addEventListener('drop', handleDrop);
        quadrant.addEventListener('dragleave', handleDragLeave);
    });
}

function handleDragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    e.dataTransfer.setData('feature-id', this.dataset.id);
    e.dataTransfer.setData('impact', this.dataset.impact);
    e.dataTransfer.setData('effort', this.dataset.effort);
    this.style.opacity = '0.4';
}

function handleDragEnd(e) {
    this.style.opacity = '1';
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    this.style.background = '#e0e7ff';
    return false;
}

function handleDragLeave(e) {
    this.style.background = '';
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    
    const featureId = e.dataTransfer.getData('feature-id');
    const impact = e.dataTransfer.getData('impact');
    const effort = e.dataTransfer.getData('effort');
    const innerHTML = e.dataTransfer.getData('text/html');
    
    const newFeature = document.createElement('div');
    newFeature.className = 'feature-item';
    newFeature.draggable = true;
    newFeature.dataset.id = featureId;
    newFeature.dataset.impact = impact;
    newFeature.dataset.effort = effort;
    newFeature.innerHTML = innerHTML;
    
    // Remove from original location
    const originalFeature = document.querySelector(`[data-id="${featureId}"]`);
    if (originalFeature) {
        originalFeature.remove();
    }
    
    this.appendChild(newFeature);
    this.style.background = '';
    
    // Re-initialize drag for the new element
    newFeature.addEventListener('dragstart', handleDragStart);
    newFeature.addEventListener('dragend', handleDragEnd);
    
    return false;
}

function checkPrioritization() {
    stopGameTimer();
    const quadrants = document.querySelectorAll('.priority-quadrant');
    let correct = 0;
    let total = 0;
    let confetti = '';
    
    quadrants.forEach(quadrant => {
        const features = quadrant.querySelectorAll('.feature-item');
        const quadrantType = quadrant.dataset.quadrant;
        
        features.forEach(feature => {
            total++;
            const impact = feature.dataset.impact;
            const effort = feature.dataset.effort;
            const expectedQuadrant = `${impact}-${effort}`;
            
            if (expectedQuadrant === quadrantType) {
                correct++;
                feature.style.border = '3px solid #10b981';
                feature.style.animation = 'correctPulse 0.5s ease-out';
                confetti += '🎉';
            } else {
                feature.style.border = '3px solid #ef4444';
                feature.style.animation = 'shake 0.5s ease-out';
            }
        });
    });
    
    const resultDiv = document.getElementById('prioritization-result');
    const percentage = Math.round((correct / total) * 100);
    const elapsed = document.getElementById('timer').textContent;
    
    // Calculate score based on accuracy and time
    const timeBonus = gameStartTime ? Math.max(0, 100 - Math.floor((Date.now() - gameStartTime) / 1000)) : 0;
    const finalScore = (percentage * 10) + timeBonus;
    
    resultDiv.innerHTML = `
        <div class="game-result ${percentage >= 80 ? '' : 'incorrect'}">
            <div class="result-confetti">${percentage >= 80 ? '🎉🎊🎉🎊🎉' : '💪📚💪'}</div>
            <h3>${percentage >= 80 ? '🏆 Excellent Work!' : '📚 Keep Learning!'}</h3>
            <div class="score-display">${correct} / ${total} correct (${percentage}%)</div>
            <div class="time-display">⏱️ Time: ${elapsed}</div>
            <div class="final-score">Final Score: ${finalScore} points</div>
            <p>${percentage >= 80 ?
                '🎯 You understand prioritization well! High Impact + Low Effort features should always be prioritized first.' :
                '💡 Review the Impact vs Effort framework. Remember: High Impact + Low Effort = Do First!'}</p>
            ${percentage >= 80 ? '<div class="achievement">🏅 Achievement Unlocked: Prioritization Pro!</div>' : ''}
        </div>
    `;
    
    // Update score display
    const scoreEl = document.getElementById('score');
    if (scoreEl) {
        scoreEl.textContent = finalScore;
    }
}

// User Story Game
function renderUserStoryGame() {
    const game = games.userstory;
    const scenario = game.scenarios[gameState.currentScenario];
    
    return `
        <div class="game-container">
            <h2 class="game-title">${game.title}</h2>
            <div class="game-instructions">
                <p>${game.instructions}</p>
            </div>
            
            <div class="quiz-question">
                <h3>Scenario ${gameState.currentScenario + 1}: ${scenario.context}</h3>
                <p>Build a user story by selecting the best option for each component:</p>
                
                <div style="margin: 2rem 0;">
                    <h4>As a...</h4>
                    <div class="quiz-options">
                        ${scenario.user.map(u => `
                            <div class="quiz-option" onclick="selectUserStoryPart('user', '${u}')">
                                ${u}
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div style="margin: 2rem 0;">
                    <h4>I want to...</h4>
                    <div class="quiz-options">
                        ${scenario.goal.map(g => `
                            <div class="quiz-option" onclick="selectUserStoryPart('goal', '${g}')">
                                ${g}
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div style="margin: 2rem 0;">
                    <h4>So that...</h4>
                    <div class="quiz-options">
                        ${scenario.benefit.map(b => `
                            <div class="quiz-option" onclick="selectUserStoryPart('benefit', '${b}')">
                                ${b}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <button class="submit-game-btn" onclick="checkUserStory()">Check Answer</button>
            <div id="userstory-result"></div>
        </div>
    `;
}

function selectUserStoryPart(part, value) {
    if (!gameState.currentAnswer) {
        gameState.currentAnswer = {};
    }
    gameState.currentAnswer[part] = value;
    
    // Re-render to update preview and selections
    document.getElementById('gameContent').innerHTML = renderUserStoryGame();
}

function checkUserStory() {
    const scenario = games.userstory.scenarios[gameState.currentScenario];
    const correct = scenario.correct;
    const answer = gameState.currentAnswer || {};
    
    const isCorrect = answer.user === correct.user &&
                     answer.goal === correct.goal &&
                     answer.benefit === correct.benefit;
    
    const resultDiv = document.getElementById('userstory-result');
    resultDiv.innerHTML = `
        <div class="game-result ${isCorrect ? '' : 'incorrect'}">
            <div class="result-confetti">${isCorrect ? '🎉🎊✨🎉🎊' : '💭📝💡'}</div>
            <h3>${isCorrect ? '🏆 Perfect User Story!' : '📚 Almost There!'}</h3>
            
            <div class="story-comparison">
                <div class="story-box ${isCorrect ? 'correct-story' : 'incorrect-story'}">
                    <h4>📝 Your Story:</h4>
                    <p>As a <strong>${answer.user || '___'}</strong>, I want <strong>${answer.goal || '___'}</strong>, so that <strong>${answer.benefit || '___'}</strong>.</p>
                </div>
                
                ${!isCorrect ? `
                <div class="story-box correct-story">
                    <h4>✅ Correct Story:</h4>
                    <p>As a <strong>${correct.user}</strong>, I want <strong>${correct.goal}</strong>, so that <strong>${correct.benefit}</strong>.</p>
                </div>
                ` : ''}
            </div>
            
            <div class="feedback-message">
                ${isCorrect ?
                    '🎯 Excellent! This user story clearly defines <strong>who</strong> the user is, <strong>what</strong> they want, and <strong>why</strong> it matters to them.' :
                    '💡 <strong>Tip:</strong> User stories should focus on the user goal and the value they receive, not just features. Think about who benefits most and why.'}
            </div>
            
            ${isCorrect ? '<div class="achievement">🏅 User Story Master!</div>' : ''}
            
            ${gameState.currentScenario < games.userstory.scenarios.length - 1 ?
                '<button class="submit-game-btn" onclick="nextUserStory()">📖 Next Scenario →</button>' :
                '<button class="submit-game-btn" onclick="closeGameModal()">🎉 Complete!</button>'}
        </div>
    `;
}

function nextUserStory() {
    gameState.currentScenario++;
    gameState.currentAnswer = {};
    document.getElementById('gameContent').innerHTML = renderUserStoryGame();
}

// Problem vs Solution Game
function renderProblemGame() {
    const game = games.problem;
    
    return `
        <div class="game-container">
            <h2 class="game-title">${game.title}</h2>
            <div class="game-instructions">
                <p>${game.instructions}</p>
            </div>
            
            <div id="problem-statements">
                ${game.statements.map((stmt, idx) => `
                    <div class="quiz-question" style="margin-bottom: 1.5rem;">
                        <p><strong>${idx + 1}. "${stmt.text}"</strong></p>
                        <div class="quiz-options" style="flex-direction: row; gap: 1rem;">
                            <div class="quiz-option" onclick="selectProblemAnswer(${idx}, 'problem')" style="flex: 1;">
                                Problem
                            </div>
                            <div class="quiz-option" onclick="selectProblemAnswer(${idx}, 'solution')" style="flex: 1;">
                                Solution
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <button class="submit-game-btn" onclick="checkProblemAnswers()">Check All Answers</button>
            <div id="problem-result"></div>
        </div>
    `;
}

function selectProblemAnswer(index, answer) {
    gameState.problemAnswers[index] = answer;
    
    const options = event.target.parentElement.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.classList.remove('selected'));
    event.target.classList.add('selected');
}

function checkProblemAnswers() {
    const statements = games.problem.statements;
    let correct = 0;
    
    statements.forEach((stmt, idx) => {
        const userAnswer = gameState.problemAnswers[idx];
        const isCorrect = userAnswer === stmt.type;
        
        if (isCorrect) correct++;
        
        const questionDiv = document.querySelectorAll('.quiz-question')[idx];
        const options = questionDiv.querySelectorAll('.quiz-option');
        
        options.forEach(opt => {
            const optText = opt.textContent.trim().toLowerCase();
            if (optText === stmt.type) {
                opt.classList.add('correct');
            } else if (opt.classList.contains('selected')) {
                opt.classList.add('incorrect');
            }
        });
    });
    
    const percentage = Math.round((correct / statements.length) * 100);
    const resultDiv = document.getElementById('problem-result');
    
    resultDiv.innerHTML = `
        <div class="game-result ${percentage >= 80 ? '' : 'incorrect'}">
            <h3>${percentage >= 80 ? '🎉 Excellent!' : '📚 Keep Practicing!'}</h3>
            <div class="score-display">${correct} / ${statements.length} correct (${percentage}%)</div>
            <p>${percentage >= 80 ? 
                'You can clearly distinguish problems from solutions! This is a crucial PM skill.' : 
                'Remember: Problems describe user struggles and pain points. Solutions describe what to build.'}</p>
        </div>
    `;
}

// Metrics Game
function renderMetricsGame() {
    const game = games.metrics;
    
    return `
        <div class="game-container">
            <h2 class="game-title">${game.title}</h2>
            <div class="game-instructions">
                <p>${game.instructions}</p>
            </div>
            
            <div id="metrics-list">
                ${game.metrics.map((metric, idx) => `
                    <div class="quiz-question" style="margin-bottom: 1.5rem;">
                        <p><strong>${idx + 1}. "${metric.text}"</strong></p>
                        <div class="quiz-options" style="flex-direction: row; gap: 1rem;">
                            <div class="quiz-option" onclick="selectMetricAnswer(${idx}, 'vanity')" style="flex: 1;">
                                Vanity Metric
                            </div>
                            <div class="quiz-option" onclick="selectMetricAnswer(${idx}, 'success')" style="flex: 1;">
                                Success Metric
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <button class="submit-game-btn" onclick="checkMetricsAnswers()">Check All Answers</button>
            <div id="metrics-result"></div>
        </div>
    `;
}

function selectMetricAnswer(index, answer) {
    gameState.metricsAnswers[index] = answer;
    
    const options = event.target.parentElement.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.classList.remove('selected'));
    event.target.classList.add('selected');
}

function checkMetricsAnswers() {
    const metrics = games.metrics.metrics;
    let correct = 0;
    
    metrics.forEach((metric, idx) => {
        const userAnswer = gameState.metricsAnswers[idx];
        const isCorrect = userAnswer === metric.type;
        
        if (isCorrect) correct++;
        
        const questionDiv = document.querySelectorAll('.quiz-question')[idx];
        const options = questionDiv.querySelectorAll('.quiz-option');
        
        options.forEach(opt => {
            const optText = opt.textContent.trim().toLowerCase().replace(' metric', '');
            if (optText === metric.type) {
                opt.classList.add('correct');
            } else if (opt.classList.contains('selected')) {
                opt.classList.add('incorrect');
            }
        });
    });
    
    const percentage = Math.round((correct / metrics.length) * 100);
    const resultDiv = document.getElementById('metrics-result');
    
    resultDiv.innerHTML = `
        <div class="game-result ${percentage >= 80 ? '' : 'incorrect'}">
            <h3>${percentage >= 80 ? '🎉 Outstanding!' : '📚 Review Metrics!'}</h3>
            <div class="score-display">${correct} / ${metrics.length} correct (${percentage}%)</div>
            <p>${percentage >= 80 ? 
                'You understand the difference between vanity and success metrics! This helps you focus on what truly matters.' : 
                'Remember: Ask "If this number doubled, would users actually be better off?" If no → vanity metric.'}</p>
        </div>
    `;
}

// Made with Bob
