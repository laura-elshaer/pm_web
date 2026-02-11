// Module content data based on the curriculum
const moduleData = {
    1: {
        title: "Module 1: Product Foundations",
        content: `
            <h2>Product Foundations</h2>
            
            <div class="key-concept">
                <h3>🎯 What is a Product?</h3>
                <p><strong>A product is a vehicle for delivering value to customers while capturing value for the business.</strong></p>
                <p>Products are systems, not just features. Digital products are ecosystems, not just interfaces.</p>
            </div>

            <h3>The Core Product Loop</h3>
            <ul>
                <li>User has a problem</li>
                <li>Product provides a solution</li>
                <li>Value is exchanged (time, money, data, trust)</li>
            </ul>
            <p>If this loop breaks, the product fails — regardless of how good the UI is.</p>

            <div class="example-box">
                <h3>✅ Checkpoint Questions</h3>
                <ul>
                    <li>Who is this for?</li>
                    <li>What problem does it solve?</li>
                    <li>Why would someone choose this over alternatives?</li>
                </ul>
            </div>

            <h3>What a Product Manager Does</h3>
            <p>A Product Manager decides:</p>
            <ul>
                <li><strong>What problems to solve</strong></li>
                <li><strong>In what order</strong></li>
                <li><strong>And why</strong></li>
            </ul>

            <div class="key-concept">
                <h3>🔑 Key PM Responsibilities</h3>
                <ol>
                    <li><strong>Owning the Problem Space</strong> - Understanding who the user is, what they're struggling with, and why it matters</li>
                    <li><strong>Setting Direction</strong> - Defining vision, strategy, and principles</li>
                    <li><strong>Prioritizing Under Constraints</strong> - Balancing user value, business impact, engineering effort, and risk</li>
                    <li><strong>Defining Success</strong> - Choosing metrics and optimizing for outcomes, not outputs</li>
                    <li><strong>Orchestrating Execution</strong> - Managing alignment, tradeoffs, and communication</li>
                    <li><strong>Learning and Adapting</strong> - Analyzing data and deciding to iterate, pivot, or stop</li>
                </ol>
            </div>

            <h3>PM vs PO vs Engineer vs Designer</h3>
            <div class="example-box">
                <h4>Product Manager (PM)</h4>
                <p><strong>Focus:</strong> Why + What</p>
                <ul>
                    <li>Why does this matter?</li>
                    <li>What problem are we solving?</li>
                    <li>What outcome are we aiming for?</li>
                </ul>

                <h4>Product Owner (PO)</h4>
                <p><strong>Focus:</strong> What exactly + When</p>
                <ul>
                    <li>What's in the backlog?</li>
                    <li>What's next?</li>
                    <li>What does "done" mean?</li>
                </ul>
            </div>

            <div class="warning-box">
                <h3>⚠️ Important Note</h3>
                <p>Many companies combine PM and PO roles or use titles inconsistently. <strong>Titles are unreliable. Scope matters.</strong></p>
            </div>

            <h3>Product Lifecycle Stages</h3>
            <ol>
                <li><strong>Discovery (0→1):</strong> Validate problem and solution. Focus on learning speed.</li>
                <li><strong>Growth:</strong> Scale what works. Focus on acquisition and retention.</li>
                <li><strong>Maturity:</strong> Maximize efficiency and profitability.</li>
                <li><strong>Decline/Renewal:</strong> Pivot, reposition, or sunset.</li>
            </ol>

            <div class="key-concept">
                <h3>💡 Outcome vs Output</h3>
                <p><strong>Output:</strong> What you build (features, releases)</p>
                <p><strong>Outcome:</strong> The behavior or business change you create</p>
                <p><em>Shipping ≠ succeeding. PMs who track only outputs are managing delivery, not product.</em></p>
            </div>
        `
    },
    2: {
        title: "Module 2: Users, Problems & Discovery",
        content: `
            <h2>Users, Problems & Discovery</h2>
            
            <div class="key-concept">
                <h3>👥 Who Are We Building For?</h3>
                <p><strong>User:</strong> The person who directly uses the product</p>
                <p><strong>Customer:</strong> The person who pays for the product</p>
                <p><strong>Stakeholder:</strong> Anyone affected by the product's success or failure</p>
            </div>

            <div class="warning-box">
                <h3>⚠️ Classic PM Mistake</h3>
                <p>Treating "everyone" as the user leads to generic features that satisfy no one.</p>
                <p><strong>PM Rule:</strong> If you can't clearly say who this is for, you can't say why it matters.</p>
            </div>

            <h3>Creating Effective Personas</h3>
            <p>A persona is a decision-making tool that helps PMs decide what to build, what to skip, and what to say no to.</p>

            <div class="example-box">
                <h4>Good Persona Structure</h4>
                <ul>
                    <li><strong>Role/Context:</strong> What situation are they in?</li>
                    <li><strong>Goals:</strong> What are they trying to achieve?</li>
                    <li><strong>Pain Points:</strong> What blocks or frustrates them?</li>
                    <li><strong>Behaviors:</strong> What do they currently do instead?</li>
                    <li><strong>Constraints:</strong> Time, money, tech literacy, environment</li>
                </ul>

                <h4>Example:</h4>
                <p>"Sarah, a final-year university student juggling five courses and a part-time job, struggles to track deadlines across multiple platforms, causing missed submissions and constant stress."</p>
            </div>

            <h3>Jobs To Be Done (JTBD)</h3>
            <div class="key-concept">
                <p><strong>Core Idea:</strong> People don't buy products — they hire them to do a job.</p>
                <p>Users are attached to making progress in a specific moment, not to features or brands.</p>
            </div>

            <h4>JTBD Format</h4>
            <p><strong>When</strong> [situation], <strong>I want to</strong> [motivation], <strong>so I can</strong> [desired outcome].</p>

            <div class="example-box">
                <h4>Example:</h4>
                <p>"When I have multiple deadlines, I want a simple way to see priorities, so I don't miss important submissions."</p>
            </div>

            <h3>Discovery Interviews</h3>
            <p>Discovery interviews help PMs understand real user problems, behaviors, and motivations without pitching solutions.</p>

            <div class="key-concept">
                <h4>Good vs Bad Questions</h4>
                <p><strong>❌ Bad (solution-first):</strong></p>
                <ul>
                    <li>"Would you use this feature?"</li>
                    <li>"Do you like dashboards?"</li>
                </ul>
                <p><strong>✅ Good (problem-first):</strong></p>
                <ul>
                    <li>"Can you walk me through the last time this happened?"</li>
                    <li>"What made that frustrating?"</li>
                    <li>"What do you do today instead?"</li>
                </ul>
            </div>

            <div class="warning-box">
                <h3>🎯 PM Interview Rule</h3>
                <p>Ask about the past, not hypothetical futures.</p>
                <p><strong>Past behavior = evidence. Opinions = noise.</strong></p>
            </div>

            <h3>Problem Framing</h3>
            <p>A well-framed problem already suggests good solutions. A poorly framed problem leads to feature chaos.</p>

            <div class="example-box">
                <h4>Problem Statement Template</h4>
                <p>[User] experiences [struggle] when [situation], which leads to [impact]. We know this because [evidence].</p>
            </div>

            <div class="key-concept">
                <h3>Problem ≠ Solution</h3>
                <p><strong>❌ Solution:</strong> "We need a dashboard"</p>
                <p><strong>✅ Problem:</strong> "Users don't know what to prioritize, causing missed deadlines and stress"</p>
            </div>
        `
    },
    3: {
        title: "Module 3: Solutions, MVPs & Prioritization",
        content: `
            <h2>Solutions, MVPs & Prioritization</h2>
            
            <div class="key-concept">
                <h3>💡 From Problems to Solutions</h3>
                <p><strong>Good PMs explore many solutions. Bad PMs fall in love with the first one.</strong></p>
                <p>Problems do not imply a single solution. Solutions are hypotheses, not answers.</p>
            </div>

            <h3>Solution Exploration Process</h3>
            <ol>
                <li>Start with your persona, JTBD, and problem statement</li>
                <li>Ask: "What are different ways we could help?"</li>
                <li>Generate multiple solution ideas without judging</li>
                <li>Evaluate based on impact, effort, and risk</li>
            </ol>

            <div class="example-box">
                <h4>Example: Multiple Solutions for One Problem</h4>
                <p><strong>Problem:</strong> Users don't know what to prioritize when deadlines overlap.</p>
                <p><strong>Possible Solutions:</strong></p>
                <ul>
                    <li>Priority ranking system</li>
                    <li>Smart reminders</li>
                    <li>Weekly overview dashboard</li>
                    <li>AI-powered suggestions</li>
                    <li>Manual tagging system</li>
                </ul>
            </div>

            <h3>What Is an MVP?</h3>
            <div class="key-concept">
                <p><strong>An MVP is not the smallest product — it's the smallest test of value.</strong></p>
                <p>An MVP answers: Will users care? Will they use it? Does it solve the core problem?</p>
            </div>

            <div class="warning-box">
                <h3>⚠️ MVP Myths</h3>
                <ul>
                    <li>❌ MVP = ugly product</li>
                    <li>❌ MVP = version 1.0</li>
                    <li>❌ MVP = half-built product</li>
                </ul>
            </div>

            <h4>How to Define an MVP</h4>
            <ol>
                <li><strong>What is the core value?</strong> - The one thing users should get</li>
                <li><strong>What is the riskiest assumption?</strong> - What must be true for this to work?</li>
                <li><strong>What's the smallest way to test it?</strong> - That's your MVP</li>
            </ol>

            <div class="example-box">
                <h4>MVP Example</h4>
                <p><strong>Solution idea:</strong> Smart priority suggestions</p>
                <p><strong>Not MVP:</strong> Full AI engine + dashboards + settings</p>
                <p><strong>MVP:</strong> Simple rule-based prioritization shown once per day</p>
            </div>

            <h3>Prioritization: Choosing What Comes First</h3>
            <div class="key-concept">
                <p><strong>Prioritization is saying "no" with evidence.</strong></p>
                <p>Every "yes" costs time, money, and focus.</p>
            </div>

            <h4>Why Prioritization Is Hard</h4>
            <ul>
                <li>Limited resources</li>
                <li>Conflicting stakeholder requests</li>
                <li>Unclear value signals</li>
            </ul>

            <h4>Common Prioritization Frameworks</h4>
            <ul>
                <li><strong>Impact vs Effort</strong> - Quick visual assessment</li>
                <li><strong>RICE</strong> - Reach, Impact, Confidence, Effort</li>
                <li><strong>Must-have vs Nice-to-have</strong> - Essential vs optional</li>
                <li><strong>Opportunity cost thinking</strong> - What are we NOT doing?</li>
            </ul>

            <div class="warning-box">
                <h3>⚠️ Important</h3>
                <p>Frameworks guide thinking — they don't replace judgment.</p>
            </div>

            <h4>Simple PM Prioritization Questions</h4>
            <ul>
                <li>Which solves the biggest pain?</li>
                <li>Which reduces the highest risk?</li>
                <li>Which helps us learn fastest?</li>
                <li>What happens if we don't build this?</li>
            </ul>

            <h3>From PM to PO: Execution Thinking</h3>
            <div class="example-box">
                <h4>PM vs PO Mindset Shift</h4>
                <table style="width:100%; border-collapse: collapse;">
                    <tr>
                        <th style="border: 1px solid #ddd; padding: 8px;">PM</th>
                        <th style="border: 1px solid #ddd; padding: 8px;">PO</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">What problem matters?</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">What do we build next?</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">Why are we doing this?</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">What exactly are we shipping?</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">Outcome-focused</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">Scope-focused</td>
                    </tr>
                </table>
            </div>
        `
    },
    4: {
        title: "Module 4: Agile, Backlogs & Delivery",
        content: `
            <h2>Agile, Backlogs & Delivery</h2>
            
            <div class="key-concept">
                <h3>⚡ The Agile Mindset</h3>
                <p><strong>Agile is a mindset focused on learning quickly through real use, so teams can adjust direction before investing too much in the wrong solution.</strong></p>
            </div>

            <h4>Agile Core Values</h4>
            <ul>
                <li><strong>Working software over documentation</strong> - Learn from what users can actually use</li>
                <li><strong>Customer feedback over assumptions</strong> - Real behavior matters more than predictions</li>
                <li><strong>Adaptation over rigid plans</strong> - Plans should change when reality gives new information</li>
            </ul>

            <div class="warning-box">
                <h3>⚠️ What Agile Is NOT</h3>
                <ul>
                    <li>❌ No planning</li>
                    <li>❌ No documentation</li>
                    <li>❌ No deadlines</li>
                </ul>
                <p>Agile is "learn fast and adjust," not "move fast and break things."</p>
            </div>

            <h3>Scrum vs Kanban</h3>
            <div class="example-box">
                <h4>Scrum: Working in Planned Chunks</h4>
                <p><strong>What it feels like:</strong> "Let's pause, decide what we'll work on for the next 2 weeks, focus only on that, then review how it went."</p>
                
                <p><strong>Key Features:</strong></p>
                <ul>
                    <li>Time-boxed sprints (usually 1-2 weeks)</li>
                    <li>Defined roles (PO, Scrum Master, Team)</li>
                    <li>Planned work per sprint</li>
                    <li>Regular ceremonies (Planning, Review, Retro)</li>
                </ul>
                
                <p><strong>Best for:</strong> New product development, complex work, teams needing structure</p>
            </div>

            <div class="example-box">
                <h4>Kanban: Continuous Flow</h4>
                <p><strong>What it feels like:</strong> "As soon as something is finished, we pull in the next most important task."</p>
                
                <p><strong>Key Features:</strong></p>
                <ul>
                    <li>Continuous flow (no sprints)</li>
                    <li>Work-in-progress (WIP) limits</li>
                    <li>Visual workflow (To Do → In Progress → Done)</li>
                    <li>Flexible prioritization</li>
                </ul>
                
                <p><strong>Best for:</strong> Maintenance work, support, unpredictable ongoing work</p>
            </div>

            <h3>The Product Backlog</h3>
            <div class="key-concept">
                <p><strong>A backlog is not a to-do list. It's a prioritized list of problems worth solving.</strong></p>
            </div>

            <h4>What Lives in a Backlog</h4>
            <ul>
                <li>🧑‍💻 <strong>User stories</strong> - Requests framed around user needs</li>
                <li>🐞 <strong>Bugs</strong> - Things that are broken or confusing</li>
                <li>🛠 <strong>Technical improvements</strong> - Work users don't see but feel later</li>
                <li>🧪 <strong>Experiments</strong> - Ideas you're not sure about yet</li>
            </ul>

            <h4>PO Responsibilities</h4>
            <ol>
                <li><strong>Ordering the backlog</strong> - Based on user impact, business goals, risk reduction</li>
                <li><strong>Refining items</strong> - Clarify, break down, remove vague items</li>
                <li><strong>Keeping it aligned to goals</strong> - Every item should connect to a product goal</li>
            </ol>

            <h3>User Stories & Acceptance Criteria</h3>
            <div class="example-box">
                <h4>User Story Format</h4>
                <p><strong>As a</strong> [user], <strong>I want</strong> [goal], <strong>so that</strong> [benefit].</p>
                
                <h4>Example:</h4>
                <p>"As a student, I want to see my top priorities so I can focus on what matters."</p>
                
                <h4>Acceptance Criteria:</h4>
                <ul>
                    <li>Shows top 3 tasks</li>
                    <li>Sorted by deadline</li>
                    <li>Updates daily</li>
                </ul>
            </div>

            <h3>Agile Ceremonies</h3>
            <ul>
                <li><strong>Sprint Planning</strong> - PO explains priorities, team estimates and commits</li>
                <li><strong>Daily Standups</strong> - Progress check, surface blockers</li>
                <li><strong>Sprint Review</strong> - Demo working software, gather feedback</li>
                <li><strong>Retrospective</strong> - Improve how the team works</li>
            </ul>

            <div class="key-concept">
                <h3>💡 Definition of Done (DoD)</h3>
                <p>If "done" isn't defined, nothing is done.</p>
                <p><strong>Typical DoD includes:</strong> Code complete, tested, reviewed, meets acceptance criteria, ready to ship</p>
            </div>

            <div class="warning-box">
                <h3>🎯 PO Rule of Thumb</h3>
                <p>Protect user value first, even under pressure.</p>
            </div>
        `
    },
    5: {
        title: "Module 5: Metrics, Outcomes & Learning",
        content: `
            <h2>Metrics, Outcomes & Learning</h2>
            
            <div class="key-concept">
                <h3>📈 Shipping Is Not Success</h3>
                <p><strong>Learning and impact are success.</strong></p>
                <p>PMs are responsible for outcomes, not outputs.</p>
            </div>

            <h3>Outputs vs Outcomes vs Impact</h3>
            <div class="example-box">
                <p><strong>Output:</strong> What you shipped (feature, page, button, release)</p>
                <p><strong>Outcome:</strong> The change in user behavior (what users do differently)</p>
                <p><strong>Impact:</strong> The business or long-term value created</p>
                
                <h4>Example:</h4>
                <ul>
                    <li><strong>Output:</strong> Added a task prioritization feature</li>
                    <li><strong>Outcome:</strong> Fewer missed deadlines</li>
                    <li><strong>Impact:</strong> Higher student retention over the semester</li>
                </ul>
            </div>

            <div class="warning-box">
                <h3>⚠️ Important</h3>
                <p>"If all you can say is what you built, you're not done yet."</p>
            </div>

            <h3>North Star Metrics</h3>
            <div class="key-concept">
                <p><strong>A North Star metric captures the value your product delivers to users in one number.</strong></p>
                <p>It aligns teams, decisions, and tradeoffs.</p>
            </div>

            <h4>What Makes a Good North Star Metric</h4>
            <ul>
                <li>Reflects user value</li>
                <li>Correlates with long-term growth</li>
                <li>Understandable by the whole team</li>
                <li>Hard to game</li>
            </ul>

            <div class="example-box">
                <h4>Examples:</h4>
                <ul>
                    <li><strong>Ride-sharing:</strong> Completed trips per user</li>
                    <li><strong>Learning product:</strong> Lessons completed with success</li>
                    <li><strong>Productivity tool:</strong> Weekly active tasks completed</li>
                </ul>
                <p><em>Note: Revenue is usually an output, not a North Star.</em></p>
            </div>

            <h3>Core Product KPIs</h3>
            <p>KPIs break the North Star into measurable signals.</p>

            <h4>Common KPI Categories</h4>
            <ul>
                <li><strong>Adoption</strong> - Are users using it?</li>
                <li><strong>Engagement</strong> - Are they coming back?</li>
                <li><strong>Retention</strong> - Do they stick around?</li>
                <li><strong>Success</strong> - Do they achieve the intended outcome?</li>
                <li><strong>Efficiency</strong> - Does it reduce time/effort?</li>
            </ul>

            <h3>Vanity Metrics vs Success Metrics</h3>
            <div class="warning-box">
                <h4>⚠️ Vanity Metrics (Feel good but mean nothing)</h4>
                <ul>
                    <li>Total sign-ups</li>
                    <li>Page views</li>
                    <li>Feature clicks</li>
                    <li>Downloads</li>
                </ul>
                <p><strong>Test:</strong> "If this number doubled, would users actually be better off?" If no → vanity.</p>
            </div>

            <div class="example-box">
                <h4>✅ Success Metrics</h4>
                <ul>
                    <li>% of users completing a core task</li>
                    <li>Retention after first use</li>
                    <li>Reduction in user pain</li>
                    <li>Repeat usage tied to value</li>
                </ul>
            </div>

            <h3>Post-Launch Evaluation</h3>
            <div class="key-concept">
                <p><strong>Launching is the beginning of the work, not the end.</strong></p>
            </div>

            <h4>PM Post-Launch Checklist</h4>
            <ul>
                <li>Did users adopt it?</li>
                <li>Did behavior change?</li>
                <li>Did it solve the problem?</li>
                <li>What surprised us?</li>
            </ul>

            <h4>Sources of Evidence</h4>
            <ul>
                <li>Product analytics</li>
                <li>User feedback</li>
                <li>Support tickets</li>
                <li>Qualitative interviews</li>
            </ul>

            <div class="key-concept">
                <h3>💡 PM Insight</h3>
                <p>Numbers tell what happened. Conversations tell why.</p>
            </div>

            <h3>The Learning Loop</h3>
            <ol>
                <li><strong>Hypothesis</strong> - What do we believe?</li>
                <li><strong>Build (MVP)</strong> - Test the smallest version</li>
                <li><strong>Measure</strong> - Collect data</li>
                <li><strong>Learn</strong> - Analyze results</li>
                <li><strong>Decide</strong> - Iterate, expand, or kill</li>
            </ol>

            <div class="example-box">
                <h4>Possible Decisions After Launch</h4>
                <ul>
                    <li>Double down (it's working)</li>
                    <li>Improve (needs refinement)</li>
                    <li>Simplify (too complex)</li>
                    <li>Roll back (causing issues)</li>
                    <li>Sunset the feature (not valuable)</li>
                </ul>
            </div>

            <div class="warning-box">
                <h3>🎯 Important PM Behavior</h3>
                <p>Killing a feature that didn't work is success, not failure. It proves learning occurred.</p>
            </div>
        `
    }
};

function openModule(moduleNumber) {
    const modal = document.getElementById('moduleModal');
    const content = document.getElementById('moduleContent');
    
    if (moduleData[moduleNumber]) {
        content.innerHTML = `
            <h1>${moduleData[moduleNumber].title}</h1>
            <div class="module-content">
                ${moduleData[moduleNumber].content}
            </div>
        `;
        modal.style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('moduleModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('moduleModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Made with Bob
