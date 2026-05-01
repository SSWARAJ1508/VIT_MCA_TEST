// Application State
const STATE_KEY = 'vitmca_mock_state';

let state = {
    started: false,
    submitted: false,
    timeLeft: 7200, // 2 hours in seconds
    currentQuestionIndex: 0,
    answers: {}, // { index: optionIndex }
    statuses: {}, // { index: 'not_visited' | 'not_answered' | 'answered' | 'marked' }
};

// DOM Elements
const views = {
    instruction: document.getElementById('instruction-view'),
    exam: document.getElementById('exam-view'),
    result: document.getElementById('result-view')
};

const elements = {
    consentCheckbox: document.getElementById('consent-checkbox'),
    startBtn: document.getElementById('btn-start-exam'),
    timerContainer: document.getElementById('timer-container'),
    timeLeftDisplay: document.getElementById('time-left'),
    
    // Exam Controls
    sectionTabs: document.getElementById('section-tabs'),
    questionNumberDisplay: document.getElementById('question-number-display'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    questionGrid: document.getElementById('question-grid'),
    
    // Action Buttons
    btnPrev: document.getElementById('btn-prev'),
    btnSaveNext: document.getElementById('btn-save-next'),
    btnMarkReview: document.getElementById('btn-mark-review'),
    btnClear: document.getElementById('btn-clear-response'),
    btnSubmit: document.getElementById('btn-submit-exam'),
    
    // Modals
    confirmModal: document.getElementById('confirm-modal'),
    btnCancelSubmit: document.getElementById('btn-cancel-submit'),
    btnConfirmSubmit: document.getElementById('btn-confirm-submit'),
    confirmMsg: document.getElementById('confirm-msg'),
};

let timerInterval;

// Sections mapping based on questions array
const sections = [...new Set(questions.map(q => q.section))];

// Initialize
function init() {
    loadState();
    
    if (state.submitted) {
        showView('result');
        renderResult();
    } else if (state.started) {
        showView('exam');
        startTimer();
        renderExam();
    } else {
        showView('instruction');
    }

    attachEventListeners();
}

// State Management
function saveState() {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

function loadState() {
    const saved = localStorage.getItem(STATE_KEY);
    if (saved) {
        state = JSON.parse(saved);
    } else {
        // Initialize statuses
        questions.forEach((_, index) => {
            state.statuses[index] = 'not_visited';
        });
        state.statuses[0] = 'not_answered'; // first question visited
    }
}

// View Management
function showView(viewName) {
    Object.values(views).forEach(v => v.classList.remove('active'));
    views[viewName].classList.add('active');
    
    if (viewName === 'exam') {
        elements.timerContainer.style.display = 'block';
    } else {
        elements.timerContainer.style.display = 'none';
    }
}

// Event Listeners
function attachEventListeners() {
    // Instructions
    elements.consentCheckbox.addEventListener('change', (e) => {
        elements.startBtn.disabled = !e.target.checked;
    });

    elements.startBtn.addEventListener('click', () => {
        state.started = true;
        state.statuses[0] = 'not_answered';
        saveState();
        showView('exam');
        startTimer();
        renderExam();
        
        // Fullscreen suggestion
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(e => console.log("Fullscreen denied"));
        }
    });

    // Exam Actions
    elements.btnPrev.addEventListener('click', () => navigate(-1));
    elements.btnSaveNext.addEventListener('click', () => handleSaveNext());
    elements.btnMarkReview.addEventListener('click', () => handleMarkReview());
    elements.btnClear.addEventListener('click', () => clearResponse());
    
    elements.btnSubmit.addEventListener('click', () => promptSubmit());
    
    // Modal
    elements.btnCancelSubmit.addEventListener('click', () => elements.confirmModal.classList.remove('active'));
    elements.btnConfirmSubmit.addEventListener('click', () => submitExam());
}

// Exam Rendering
function renderExam() {
    renderTabs();
    renderQuestion();
    renderGrid();
}

function renderTabs() {
    elements.sectionTabs.innerHTML = '';
    const currentSection = questions[state.currentQuestionIndex].section;
    
    sections.forEach(section => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${section === currentSection ? 'active' : ''}`;
        btn.textContent = section;
        btn.onclick = () => jumpToSection(section);
        elements.sectionTabs.appendChild(btn);
    });
}

function renderQuestion() {
    const qIndex = state.currentQuestionIndex;
    const q = questions[qIndex];
    
    elements.questionNumberDisplay.textContent = `Question ${qIndex + 1} of ${questions.length}`;
    elements.questionText.textContent = q.question;
    
    elements.optionsContainer.innerHTML = '';
    const selectedOption = state.answers[qIndex];
    
    q.options.forEach((opt, i) => {
        const label = document.createElement('label');
        label.className = `option-label ${selectedOption === i ? 'selected' : ''}`;
        
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `question-${qIndex}`;
        radio.value = i;
        if (selectedOption === i) radio.checked = true;
        
        radio.addEventListener('change', () => {
            document.querySelectorAll('.option-label').forEach(l => l.classList.remove('selected'));
            label.classList.add('selected');
        });
        
        label.appendChild(radio);
        label.appendChild(document.createTextNode(opt));
        elements.optionsContainer.appendChild(label);
    });

    // Button states
    elements.btnPrev.disabled = qIndex === 0;
}

function renderGrid() {
    elements.questionGrid.innerHTML = '';
    questions.forEach((_, i) => {
        const btn = document.createElement('div');
        let statusClass = state.statuses[i];
        if (statusClass === 'not_visited') statusClass = '';
        else if (statusClass === 'not_answered') statusClass = 'not-answered';
        
        btn.className = `grid-btn ${statusClass} ${i === state.currentQuestionIndex ? 'active' : ''}`;
        btn.textContent = i + 1;
        btn.onclick = () => jumpToQuestion(i);
        elements.questionGrid.appendChild(btn);
    });
}

// Navigation & Actions
function getSelectedOption() {
    const selected = document.querySelector(`input[name="question-${state.currentQuestionIndex}"]:checked`);
    return selected ? parseInt(selected.value) : null;
}

function handleSaveNext() {
    const selected = getSelectedOption();
    const qIndex = state.currentQuestionIndex;
    
    if (selected !== null) {
        state.answers[qIndex] = selected;
        state.statuses[qIndex] = 'answered';
    } else {
        if (state.statuses[qIndex] === 'not_visited' || state.statuses[qIndex] === 'not_answered') {
            state.statuses[qIndex] = 'not_answered';
        }
    }
    
    navigate(1);
}

function handleMarkReview() {
    const selected = getSelectedOption();
    const qIndex = state.currentQuestionIndex;
    
    if (selected !== null) {
        state.answers[qIndex] = selected;
    }
    state.statuses[qIndex] = 'marked';
    
    navigate(1);
}

function clearResponse() {
    const qIndex = state.currentQuestionIndex;
    delete state.answers[qIndex];
    state.statuses[qIndex] = 'not_answered';
    saveState();
    renderQuestion();
    renderGrid();
}

function navigate(direction) {
    const nextIndex = state.currentQuestionIndex + direction;
    if (nextIndex >= 0 && nextIndex < questions.length) {
        jumpToQuestion(nextIndex);
    }
}

function jumpToQuestion(index) {
    // Before jumping, if current is not visited, mark as not answered (if they just looked at it)
    const qIndex = state.currentQuestionIndex;
    if (state.statuses[qIndex] === 'not_visited') {
        state.statuses[qIndex] = 'not_answered';
    }
    
    state.currentQuestionIndex = index;
    if (state.statuses[index] === 'not_visited') {
        state.statuses[index] = 'not_answered';
    }
    
    saveState();
    renderExam();
}

function jumpToSection(section) {
    const firstQuestionIndex = questions.findIndex(q => q.section === section);
    if (firstQuestionIndex !== -1) {
        jumpToQuestion(firstQuestionIndex);
    }
}

// Timer functionality
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        state.timeLeft--;
        updateTimerDisplay();
        
        if (state.timeLeft % 10 === 0) saveState(); // periodically save time
        
        if (state.timeLeft <= 0) {
            clearInterval(timerInterval);
            submitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const h = Math.floor(state.timeLeft / 3600);
    const m = Math.floor((state.timeLeft % 3600) / 60);
    const s = state.timeLeft % 60;
    elements.timeLeftDisplay.textContent = 
        `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// Submission
function promptSubmit() {
    const answeredCount = Object.values(state.statuses).filter(s => s === 'answered').length;
    const total = questions.length;
    
    elements.confirmMsg.innerHTML = `
        You have answered <strong>${answeredCount}</strong> out of ${total} questions.<br>
        Are you sure you want to submit the exam? You cannot change answers after submission.
    `;
    elements.confirmModal.classList.add('active');
}

function submitExam() {
    elements.confirmModal.classList.remove('active');
    clearInterval(timerInterval);
    state.submitted = true;
    saveState();
    showView('result');
    renderResult();
}

// Result & Analysis
function renderResult() {
    let score = 0;
    let attempted = 0;
    let sectionScores = {};
    let sectionTotals = {};
    
    sections.forEach(s => {
        sectionScores[s] = 0;
        sectionTotals[s] = 0;
    });

    questions.forEach((q, i) => {
        sectionTotals[q.section]++;
        if (state.answers[i] !== undefined) {
            attempted++;
            if (state.answers[i] === q.answer) {
                score++;
                sectionScores[q.section]++;
            }
        }
    });

    // Stats
    document.getElementById('res-score').textContent = `${score}/${questions.length}`;
    document.getElementById('res-attempted').textContent = attempted;
    document.getElementById('res-correct').textContent = score;
    document.getElementById('res-accuracy').textContent = attempted > 0 ? Math.round((score / attempted) * 100) + '%' : '0%';

    // Insights
    let maxScoreRatio = -1;
    let minScoreRatio = 2;
    let bestSection = 'N/A';
    let worstSection = 'N/A';

    sections.forEach(s => {
        const ratio = sectionScores[s] / sectionTotals[s];
        if (ratio > maxScoreRatio) { maxScoreRatio = ratio; bestSection = s; }
        if (ratio < minScoreRatio) { minScoreRatio = ratio; worstSection = s; }
    });

    document.getElementById('res-strongest').textContent = `${bestSection} (${Math.round(maxScoreRatio*100)}%)`;
    document.getElementById('res-weakest').textContent = `${worstSection} (${Math.round(minScoreRatio*100)}%)`;

    // Chart
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sections,
            datasets: [{
                label: 'Score per Section',
                data: sections.map(s => sectionScores[s]),
                backgroundColor: 'rgba(59, 130, 246, 0.6)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true, max: Math.max(...Object.values(sectionTotals)) }
            }
        }
    });

    // Review
    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '';
    
    questions.forEach((q, i) => {
        const userAns = state.answers[i];
        const isCorrect = userAns === q.answer;
        const isAttempted = userAns !== undefined;

        const div = document.createElement('div');
        div.className = 'review-item';
        
        div.innerHTML = `
            <div class="review-q">Q${i+1}. ${q.question}</div>
            <div class="review-ans">
                <div class="ans-row ${isAttempted ? (isCorrect ? 'correct' : 'incorrect') : ''}">
                    <strong>Your Answer:</strong> ${isAttempted ? q.options[userAns] : 'Not Attempted'}
                </div>
                ${(!isCorrect || !isAttempted) ? `
                <div class="ans-row correct">
                    <strong>Correct Answer:</strong> ${q.options[q.answer]}
                </div>` : ''}
            </div>
            <div class="review-exp">
                <strong>Explanation:</strong> ${q.explanation}
            </div>
        `;
        reviewContainer.appendChild(div);
    });
}

// Start
init();
