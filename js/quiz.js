// Quiz data from the curriculum
const quizData = {
    1: [
        {
            question: "What best describes a product (not a feature)?",
            options: [
                "A set of UI screens",
                "A system that delivers value and captures value",
                "A roadmap of planned work",
                "A list of customer requests"
            ],
            correct: 1,
            explanation: "A product is a vehicle for delivering value to customers while capturing value for the business."
        },
        {
            question: "Why can a well-built feature still fail?",
            options: [
                "Engineers didn't implement it correctly",
                "Users don't like new features",
                "It may not solve a real problem",
                "Marketing didn't promote it"
            ],
            correct: 2,
            explanation: "Even well-built features fail if they don't solve a real user problem."
        },
        {
            question: "What question should a PM ask first when hearing 'We should build X'?",
            options: [
                "How long will it take?",
                "Who requested it?",
                "What problem are we solving and for whom?",
                "Can engineering build it?"
            ],
            correct: 2,
            explanation: "PMs should always start by understanding the problem before jumping to solutions."
        },
        {
            question: "PMs are primarily responsible for:",
            options: [
                "Shipping on time",
                "Managing engineers",
                "Maximizing outcomes",
                "Writing tickets"
            ],
            correct: 2,
            explanation: "PMs are responsible for outcomes (behavior change and business impact), not just outputs."
        },
        {
            question: "What does 'owning the problem space' mean?",
            options: [
                "Deciding the UI",
                "Understanding user struggles deeply",
                "Writing detailed requirements",
                "Approving designs"
            ],
            correct: 1,
            explanation: "Owning the problem space means deeply understanding who the user is, what they struggle with, and why it matters."
        },
        {
            question: "Outputs differ from outcomes because outcomes:",
            options: [
                "Are easier to measure",
                "Focus on user behavior change",
                "Are owned by engineers",
                "Are less important"
            ],
            correct: 1,
            explanation: "Outcomes focus on behavior change and impact, while outputs are just what you shipped."
        },
        {
            question: "Why are frameworks useful but insufficient?",
            options: [
                "They replace judgment",
                "They only work in startups",
                "They guide thinking but don't make decisions",
                "They slow teams down"
            ],
            correct: 2,
            explanation: "Frameworks are tools that guide thinking, but PMs still need judgment to make final decisions."
        },
        {
            question: "When should a PM change direction?",
            options: [
                "When leadership asks",
                "When timelines slip",
                "When evidence shows the solution isn't working",
                "When competitors copy you"
            ],
            correct: 2,
            explanation: "PMs should change direction when data and evidence show the current approach isn't working."
        },
        {
            question: "What happens without a clear product vision?",
            options: [
                "Teams move faster",
                "Teams build disconnected features",
                "Teams avoid conflict",
                "Teams focus on users"
            ],
            correct: 1,
            explanation: "Without vision, teams build good things that don't add up to anything coherent."
        },
        {
            question: "Why isn't 'shipping on time' a PM success metric?",
            options: [
                "It's hard to measure",
                "It doesn't indicate value creation",
                "Engineers already track it",
                "It's subjective"
            ],
            correct: 1,
            explanation: "Shipping on time is an output metric. PMs should focus on whether the shipped work created value."
        }
    ],
    2: [
        {
            question: "Who is the user?",
            options: [
                "The person who approves the budget",
                "The person who pays",
                "The person who uses the product",
                "The CEO"
            ],
            correct: 2,
            explanation: "The user is the person who directly interacts with and uses the product."
        },
        {
            question: "Why is 'everyone' a bad target user?",
            options: [
                "Everyone is different",
                "It leads to generic solutions",
                "It increases development cost",
                "It confuses stakeholders"
            ],
            correct: 1,
            explanation: "Targeting 'everyone' leads to generic features that satisfy no one specifically."
        },
        {
            question: "What is the primary purpose of a persona?",
            options: [
                "Marketing segmentation",
                "Demographic analysis",
                "Decision-making guidance",
                "Stakeholder alignment"
            ],
            correct: 2,
            explanation: "Personas are decision-making tools that help PMs decide what to build and what to skip."
        },
        {
            question: "Jobs To Be Done focuses on:",
            options: [
                "Features users want",
                "Products users like",
                "Progress users want in a situation",
                "UI improvements"
            ],
            correct: 2,
            explanation: "JTBD focuses on the progress users want to make in specific situations, not features."
        },
        {
            question: "Why should JTBD avoid mentioning products?",
            options: [
                "Products change over time",
                "It limits creativity",
                "It hides assumptions",
                "Jobs exist independent of solutions"
            ],
            correct: 3,
            explanation: "Jobs exist regardless of specific products or solutions. The job stays the same even as solutions evolve."
        },
        {
            question: "Discovery interviews should focus on:",
            options: [
                "Hypothetical futures",
                "Feature feedback",
                "Past behavior",
                "Competitive analysis"
            ],
            correct: 2,
            explanation: "Past behavior is evidence. Hypothetical futures are just opinions."
        },
        {
            question: "Which question is best for discovery?",
            options: [
                "Would you use this tool?",
                "Do you like dashboards?",
                "Can you walk me through the last time this happened?",
                "Would you pay for this?"
            ],
            correct: 2,
            explanation: "Questions about past behavior reveal real struggles and patterns."
        },
        {
            question: "What indicates a strong problem statement?",
            options: [
                "Mentions a feature",
                "Includes evidence",
                "Is very broad",
                "Is solution-oriented"
            ],
            correct: 1,
            explanation: "Strong problem statements include evidence showing the problem is real and significant."
        },
        {
            question: "Problem framing matters because it:",
            options: [
                "Speeds up development",
                "Reduces stakeholder input",
                "Guides solution quality",
                "Improves UI consistency"
            ],
            correct: 2,
            explanation: "A well-framed problem naturally suggests good solutions. Poor framing leads to feature chaos."
        },
        {
            question: "What leads to solution-first traps?",
            options: [
                "Lack of engineers",
                "Poor personas",
                "Skipping discovery",
                "Tight deadlines"
            ],
            correct: 2,
            explanation: "Skipping discovery means jumping to solutions without understanding the real problem."
        }
    ],
    3: [
        {
            question: "Why generate multiple solutions per problem?",
            options: [
                "To involve more people",
                "To reduce engineering effort",
                "To avoid locking into the wrong approach",
                "To impress stakeholders"
            ],
            correct: 2,
            explanation: "Exploring multiple solutions prevents falling in love with the first idea."
        },
        {
            question: "An MVP is best defined as:",
            options: [
                "A small product",
                "A beta version",
                "The smallest test of value",
                "A prototype"
            ],
            correct: 2,
            explanation: "An MVP is the smallest thing that tests your riskiest assumption about value."
        },
        {
            question: "What does an MVP primarily test?",
            options: [
                "Usability",
                "Scalability",
                "Core assumptions",
                "Performance"
            ],
            correct: 2,
            explanation: "MVPs test whether your core assumptions about user value are correct."
        },
        {
            question: "Why focus on the riskiest assumption first?",
            options: [
                "It's easiest to test",
                "It determines whether the idea survives",
                "Engineers prefer it",
                "Stakeholders demand it"
            ],
            correct: 1,
            explanation: "If your riskiest assumption is wrong, nothing else matters."
        },
        {
            question: "Why is building a full solution early risky?",
            options: [
                "It costs more",
                "It slows learning",
                "It locks decisions",
                "All of the above"
            ],
            correct: 3,
            explanation: "Building too much too early costs more, slows learning, and locks you into decisions before validation."
        },
        {
            question: "Prioritization is mainly about:",
            options: [
                "Choosing fast wins",
                "Maximizing output",
                "Making tradeoffs explicit",
                "Reducing scope"
            ],
            correct: 2,
            explanation: "Prioritization makes tradeoffs explicit and evidence-based rather than emotional."
        },
        {
            question: "Why is every 'yes' costly?",
            options: [
                "It adds meetings",
                "It increases technical debt",
                "It consumes limited resources",
                "It delays releases"
            ],
            correct: 2,
            explanation: "Every 'yes' consumes time, money, and focus that could go elsewhere."
        },
        {
            question: "Which question best supports prioritization?",
            options: [
                "Who requested this?",
                "What's easiest to build?",
                "Which reduces the highest risk?",
                "What's most visible?"
            ],
            correct: 2,
            explanation: "Prioritization should focus on reducing risk and maximizing learning or impact."
        },
        {
            question: "PM → PO shift mainly involves:",
            options: [
                "Strategy → execution",
                "Vision → coding",
                "Discovery → design",
                "Research → analytics"
            ],
            correct: 0,
            explanation: "The PM→PO shift is from strategic thinking (why/what) to execution thinking (what exactly/when)."
        },
        {
            question: "Early-stage products should optimize for:",
            options: [
                "Scale",
                "Polish",
                "Learning speed",
                "Revenue"
            ],
            correct: 2,
            explanation: "Early-stage products should optimize for learning quickly, not scale or polish."
        }
    ],
    4: [
        {
            question: "Agile primarily exists to:",
            options: [
                "Speed up delivery",
                "Reduce risk through learning",
                "Eliminate planning",
                "Replace documentation"
            ],
            correct: 1,
            explanation: "Agile reduces risk by enabling fast learning and adaptation based on real feedback."
        },
        {
            question: "'Working software over documentation' means:",
            options: [
                "Don't write docs",
                "Software teaches more than plans",
                "Engineers decide everything",
                "Specs are unnecessary"
            ],
            correct: 1,
            explanation: "We learn more from working software that users can try than from plans and specs."
        },
        {
            question: "Scrum differs from Kanban mainly by:",
            options: [
                "Roles",
                "Tools",
                "Time-boxed sprints",
                "Documentation"
            ],
            correct: 2,
            explanation: "Scrum uses time-boxed sprints while Kanban uses continuous flow."
        },
        {
            question: "Kanban is best suited for:",
            options: [
                "New product development",
                "Long-term planning",
                "Unpredictable ongoing work",
                "Large feature launches"
            ],
            correct: 2,
            explanation: "Kanban works well for unpredictable, ongoing work that needs flexibility."
        },
        {
            question: "A product backlog is:",
            options: [
                "A task list",
                "A feature list",
                "A prioritized list of problems",
                "A sprint plan"
            ],
            correct: 2,
            explanation: "A backlog is a prioritized list of problems worth solving, not just tasks."
        },
        {
            question: "Why is backlog prioritization critical?",
            options: [
                "It reduces meetings",
                "It signals what matters most",
                "It speeds up sprints",
                "It improves estimates"
            ],
            correct: 1,
            explanation: "Prioritization signals what matters most and guides team focus."
        },
        {
            question: "User stories focus on:",
            options: [
                "Technical implementation",
                "UI details",
                "User goals",
                "Acceptance testing"
            ],
            correct: 2,
            explanation: "User stories focus on user goals and the value they want to achieve."
        },
        {
            question: "Acceptance criteria exist to:",
            options: [
                "Guide design",
                "Define 'done' clearly",
                "Reduce documentation",
                "Replace testing"
            ],
            correct: 1,
            explanation: "Acceptance criteria clearly define when a story is considered complete."
        },
        {
            question: "What is the Definition of Done?",
            options: [
                "Sprint scope",
                "Quality agreement",
                "Release checklist",
                "Deployment plan"
            ],
            correct: 1,
            explanation: "DoD is a quality agreement that defines what 'done' means for the team."
        },
        {
            question: "A PO's main responsibility during delivery is to:",
            options: [
                "Manage people",
                "Protect user value",
                "Write code",
                "Control timelines"
            ],
            correct: 1,
            explanation: "POs protect user value even under pressure to cut corners or rush."
        }
    ],
    5: [
        {
            question: "An outcome measures:",
            options: [
                "Features shipped",
                "User behavior change",
                "Engineering effort",
                "Revenue"
            ],
            correct: 1,
            explanation: "Outcomes measure changes in user behavior, not just what was shipped."
        },
        {
            question: "Why isn't shipping success?",
            options: [
                "It's expected",
                "It doesn't guarantee value",
                "It's hard to measure",
                "It's subjective"
            ],
            correct: 1,
            explanation: "Shipping is just an output. Success is whether it created value for users and the business."
        },
        {
            question: "A North Star metric represents:",
            options: [
                "Revenue growth",
                "Feature usage",
                "Long-term user value",
                "Team productivity"
            ],
            correct: 2,
            explanation: "A North Star metric captures the core value your product delivers to users."
        },
        {
            question: "Why are vanity metrics dangerous?",
            options: [
                "They're inaccurate",
                "They're hard to track",
                "They don't reflect real value",
                "They slow teams down"
            ],
            correct: 2,
            explanation: "Vanity metrics can go up without users actually being better off."
        },
        {
            question: "KPIs exist to:",
            options: [
                "Replace the North Star",
                "Break outcomes into signals",
                "Track output",
                "Justify decisions"
            ],
            correct: 1,
            explanation: "KPIs break the North Star into measurable day-to-day signals."
        },
        {
            question: "Which is a success metric?",
            options: [
                "Page views",
                "Sign-ups",
                "Repeat task completion",
                "Downloads"
            ],
            correct: 2,
            explanation: "Repeat task completion shows users are getting value and coming back."
        },
        {
            question: "Post-launch evaluation should focus on:",
            options: [
                "Delivery speed",
                "User adoption and impact",
                "Stakeholder feedback",
                "Roadmap planning"
            ],
            correct: 1,
            explanation: "Post-launch evaluation focuses on whether users adopted it and if it created impact."
        },
        {
            question: "Why are qualitative insights still needed?",
            options: [
                "Metrics are unreliable",
                "Numbers don't explain 'why'",
                "Stakeholders expect interviews",
                "They're easier to collect"
            ],
            correct: 1,
            explanation: "Numbers tell what happened, but conversations tell why it happened."
        },
        {
            question: "A learning loop ends with:",
            options: [
                "Measurement",
                "Iteration or stopping",
                "Shipping",
                "Reporting"
            ],
            correct: 1,
            explanation: "Learning loops end with a decision: iterate, expand, or stop based on evidence."
        },
        {
            question: "Killing a feature can be success because:",
            options: [
                "It saves engineering time",
                "It shows decisiveness",
                "It prevents further waste",
                "It proves learning occurred"
            ],
            correct: 3,
            explanation: "Killing a feature that didn't work proves you learned and adapted based on evidence."
        }
    ]
};

let currentQuiz = null;
let currentQuestionIndex = 0;
let quizAnswers = [];
let quizScore = 0;

function startQuiz(moduleNumber) {
    currentQuiz = moduleNumber;
    currentQuestionIndex = 0;
    quizAnswers = [];
    quizScore = 0;
    
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = renderQuizQuestion();
}

function renderQuizQuestion() {
    const questions = quizData[currentQuiz];
    const question = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    return `
        <div class="quiz-progress" style="background: #e2e8f0; height: 8px; border-radius: 4px; margin-bottom: 2rem;">
            <div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); height: 100%; width: ${progress}%; border-radius: 4px; transition: width 0.3s;"></div>
        </div>
        
        <div class="quiz-question">
            <h3>Question ${currentQuestionIndex + 1} of ${questions.length}</h3>
            <p style="font-size: 1.2rem; margin: 1.5rem 0;">${question.question}</p>
            
            <div class="quiz-options">
                ${question.options.map((option, idx) => `
                    <div class="quiz-option" onclick="selectQuizAnswer(${idx})">
                        ${option}
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="quiz-navigation">
            <button class="quiz-nav-btn" onclick="previousQuestion()" ${currentQuestionIndex === 0 ? 'disabled' : ''}>
                ← Previous
            </button>
            <button class="quiz-nav-btn" onclick="nextQuestion()" id="next-btn" disabled>
                ${currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next →'}
            </button>
        </div>
        
        <div id="answer-feedback" style="margin-top: 2rem;"></div>
    `;
}

function selectQuizAnswer(answerIndex) {
    const questions = quizData[currentQuiz];
    const question = questions[currentQuestionIndex];
    
    quizAnswers[currentQuestionIndex] = answerIndex;
    
    // Visual feedback
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, idx) => {
        opt.classList.remove('selected', 'correct', 'incorrect');
        if (idx === answerIndex) {
            opt.classList.add('selected');
        }
    });
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
    
    // Show immediate feedback
    const feedbackDiv = document.getElementById('answer-feedback');
    const isCorrect = answerIndex === question.correct;
    
    options[question.correct].classList.add('correct');
    if (!isCorrect) {
        options[answerIndex].classList.add('incorrect');
    }
    
    feedbackDiv.innerHTML = `
        <div class="game-result ${isCorrect ? '' : 'incorrect'}">
            <h4>${isCorrect ? '✅ Correct!' : '❌ Incorrect'}</h4>
            <p>${question.explanation}</p>
        </div>
    `;
    
    if (isCorrect) {
        quizScore++;
    }
}

function nextQuestion() {
    const questions = quizData[currentQuiz];
    
    if (currentQuestionIndex === questions.length - 1) {
        showQuizResults();
    } else {
        currentQuestionIndex++;
        document.getElementById('quiz-content').innerHTML = renderQuizQuestion();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        document.getElementById('quiz-content').innerHTML = renderQuizQuestion();
        
        // If already answered, show the answer
        if (quizAnswers[currentQuestionIndex] !== undefined) {
            selectQuizAnswer(quizAnswers[currentQuestionIndex]);
        }
    }
}

function showQuizResults() {
    const questions = quizData[currentQuiz];
    const percentage = Math.round((quizScore / questions.length) * 100);
    
    let message = '';
    let emoji = '';
    
    if (percentage >= 90) {
        emoji = '🏆';
        message = 'Outstanding! You have mastered this module!';
    } else if (percentage >= 80) {
        emoji = '🎉';
        message = 'Excellent work! You have a strong understanding!';
    } else if (percentage >= 70) {
        emoji = '👍';
        message = 'Good job! Review the areas you missed.';
    } else if (percentage >= 60) {
        emoji = '📚';
        message = 'Keep learning! Review the module content.';
    } else {
        emoji = '💪';
        message = 'Don\'t give up! Go back and review the module.';
    }
    
    document.getElementById('quiz-content').innerHTML = `
        <div class="game-result">
            <h2>${emoji} Quiz Complete!</h2>
            <div class="score-display">${quizScore} / ${questions.length} correct</div>
            <div style="font-size: 2.5rem; margin: 1rem 0;">${percentage}%</div>
            <p style="font-size: 1.2rem; margin: 1.5rem 0;">${message}</p>
            
            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                <button class="quiz-nav-btn" onclick="startQuiz(${currentQuiz})">
                    Retake Quiz
                </button>
                <button class="quiz-nav-btn" onclick="backToQuizSelection()">
                    Choose Another Module
                </button>
            </div>
        </div>
    `;
}

function backToQuizSelection() {
    document.getElementById('quiz-content').innerHTML = `
        <p>Select a module to take the quiz:</p>
        <div class="quiz-modules">
            <button class="quiz-module-btn" onclick="startQuiz(1)">Module 1 Quiz</button>
            <button class="quiz-module-btn" onclick="startQuiz(2)">Module 2 Quiz</button>
            <button class="quiz-module-btn" onclick="startQuiz(3)">Module 3 Quiz</button>
            <button class="quiz-module-btn" onclick="startQuiz(4)">Module 4 Quiz</button>
            <button class="quiz-module-btn" onclick="startQuiz(5)">Module 5 Quiz</button>
        </div>
    `;
}

// Made with Bob
