const styles = String.raw`/* ==========================================
NEXORA — PRODUCTIVITY WORKSPACE
Complete stylesheet
========================================== */

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

/* ---------- RESET ---------- */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

:root {
--bg: #100d18;
--surface: #1a1426;
--surface-light: #241b35;
--border: #342744;
--text: #f5f5fa;
--muted: #9999b0;
--purple: #aa8cff;
--purple-dark: #7655cc;
--green: #54d6a0;
--red: f#ec425c;
--radius: 16px;
--sidebar-width: 240px;
}

html {
scroll-behavior: smooth;
scroll-padding-top: 24px;
}

body {
min-height: 100vh;
background: var(--bg);
color: var(--text);
font-family: 'DM Sans', sans-serif;
font-size: 15px;
font-weight: 500;
line-height: 1.6;
}

button,
input,
textarea,
select {
font: inherit;
}

button {
cursor: pointer;
}

button:focus-visible,
input:focus-visible,
textarea:focus-visible,
a:focus-visible {
outline: 2px solid var(--purple);
outline-offset: 3px;
}

a {
color: inherit;
text-decoration: none;
}

button,
input,
textarea {
color: var(--text);
}

/* ---------- LAYOUT ---------- */

.app,
.app-layout,
.dashboard-layout {
display: flex;
min-height: 100vh;
}

.sidebar {
position: fixed;
top: 0;
right: 0;
left: auto;
width: var(--sidebar-width);
min-width: var(--sidebar-width);
height: 100vh;
overflow-y: auto;
padding: 28px 18px;
background: #130f1c;
border-left: 1px solid var(--border);
display: flex;
flex-direction: column;
gap: 30px;
}

.sidebar nav {
display: grid;
gap: 8px;
}

.main-content,
.main,
.dashboard {
flex: 1;
min-width: 0;
margin-right: var(--sidebar-width);
padding: 34px;
}

.container {
width: 100%;
max-width: 1200px;
margin: 0 auto;
}

/* ---------- BRAND ---------- */

.logo,
.brand {
display: flex;
align-items: center;
gap: 11px;
font-family: 'Space Grotesk', sans-serif;
font-size: 23px;
font-weight: 700;
letter-spacing: -1px;
}

.logo-icon,
.brand-icon {
width: 38px;
height: 38px;
display: grid;
place-items: center;
border-radius: 12px;
background: linear-gradient(135deg, #a78bfa, #6941d9);
color: #ffffff;
font-weight: 700;
}

/* ---------- NAVIGATION ---------- */

.nav,
.nav-menu,
.sidebar-nav {
display: flex;
flex-direction: column;
gap: 8px;
}

.nav-link,
.nav-item {
display: flex;
align-items: center;
gap: 12px;
width: 100%;
padding: 12px 14px;
border: 1px solid transparent;
border-radius: 10px;
background: transparent;
color: var(--muted);
font-weight: 600;
text-align: left;
transition: background 0.2s, color 0.2s;
}

.nav-link:hover,
.nav-item:hover,
.nav-link.active,
.nav-item.active {
background: rgba(155, 123, 255, 0.12);
border-color: rgba(155, 123, 255, 0.12);
color: var(--text);
}

/* ---------- HEADINGS ---------- */

h1,
h2,
h3,
h4 {
font-family: 'Space Grotesk', sans-serif;
font-weight: 700;
line-height: 1.25;
letter-spacing: -0.5px;
}

h1 {
margin-bottom: 12px;
font-size: clamp(28px, 4vw, 38px);
}

h2 {
margin-bottom: 10px;
font-size: 23px;
}

h3 {
margin-bottom: 8px;
font-size: 18px;
}

p {
color: var(--muted);
}

.subtitle,
.muted,
.description {
color: var(--muted);
}

/* ---------- HEADER ---------- */

.topbar,
.page-header {
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
gap: 18px;
margin-bottom: 32px;
}

.greeting {
margin-bottom: 6px;
}

.header-actions {
display: flex;
align-items: center;
gap: 12px;
}

/* ---------- CARDS ---------- */

.card,
.panel,
.dashboard-card {
min-width: 0;
padding: 23px;
background: var(--surface);
border: 1px solid var(--border);
border-radius: var(--radius);
box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.card:hover,
.panel:hover,
.dashboard-card:hover {
border-color: #383850;
}

.card-grid,
.dashboard-grid,
.stats-grid {
display: grid;
grid-template-columns: repeat(4, minmax(0, 1fr));
gap: 18px;
margin-bottom: 24px;
}

.section {
margin-bottom: 28px;
}

.section-header {
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
gap: 12px;
margin-bottom: 18px;
}

/* ---------- BUTTONS ---------- */

.btn,
.button,
.primary-button {
display: inline-flex;
align-items: center;
justify-content: center;
gap: 8px;
min-height: 42px;
padding: 10px 17px;
border: 1px solid transparent;
border-radius: 10px;
background: linear-gradient(135deg, var(--purple), var(--purple-dark));
color: #ffffff;
font-weight: 600;
text-align: center;
transition: transform 0.2s, filter 0.2s;
}

.btn:hover,
.button:hover,
.primary-button:hover {
filter: brightness(1.1);
transform: translateY(-1px);
}

.btn-secondary,
.secondary-button {
background: var(--surface-light);
border-color: var(--border);
color: var(--text);
}

.btn-danger {
background: rgba(255, 107, 129, 0.12);
border-color: rgba(255, 107, 129, 0.25);
color: var(--red);
}

button:disabled {
cursor: not-allowed;
opacity: 0.55;
}

/* ---------- INPUTS: VISIBLE TYPING ---------- */

input,
textarea,
select {
width: 100%;
min-width: 0;
padding: 12px 14px;
border: 1px solid var(--border);
border-radius: 10px;
background-color: #191925;
color: #ffffff;
-webkit-text-fill-color: #ffffff;
caret-color: var(--purple);
font-size: 15px;
transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus,
textarea:focus,
select:focus {
outline: none;
border-color: var(--purple);
box-shadow: 0 0 0 3px rgba(155, 123, 255, 0.12);
}

input::placeholder,
textarea::placeholder {
color: #a8a8bd;
-webkit-text-fill-color: #a8a8bd;
opacity: 1;
}

textarea {
min-height: 150px;
resize: vertical;
}

input[type="checkbox"] {
width: 18px;
height: 18px;
min-width: 18px;
accent-color: var(--purple);
cursor: pointer;
}

input[type="range"] {
padding: 0;
accent-color: var(--purple);
}

/* ---------- TASKS ---------- */

.task-form,
.input-row,
.add-task-form {
display: flex;
align-items: center;
gap: 10px;
margin-bottom: 20px;
}

.task-form input,
.input-row input,
.add-task-form input {
flex: 1;
min-width: 0;
}

#task-list,
#tasks-list,
#tasks-container,
#task-items,
[data-task-list] {
display: flex;
flex-direction: column;
gap: 10px;
}

.task-item {
display: flex;
align-items: center;
gap: 12px;
padding: 13px 14px;
background: var(--surface-light);
border: 1px solid var(--border);
border-radius: 11px;
}

.task-item input[type="checkbox"] {
flex-shrink: 0;
}

.task-text {
flex: 1;
min-width: 0;
overflow-wrap: anywhere;
color: var(--text);
}

.task-item button {
flex-shrink: 0;
width: 32px;
height: 32px;
border: 0;
border-radius: 8px;
background: transparent;
color: var(--muted);
font-size: 22px;
}

.task-item button:hover {
background: rgba(255, 107, 129, 0.12);
color: var(--red);
}

.empty-tasks {
padding: 20px 10px;
text-align: center;
color: var(--muted);
}

.task-item.completed {
opacity: 0.8;
}

/* ---------- PLAN MY DAY ---------- */

#plan-button {
display: inline-flex;
align-items: center;
justify-content: center;
gap: 8px;
min-height: 44px;
padding: 12px 20px;
border: 0;
border-radius: 11px;
background: linear-gradient(135deg, #a78bfa, #7755e8);
color: #ffffff;
font-weight: 700;
cursor: pointer;
transition: filter 0.2s, transform 0.2s;
}

#plan-button:hover {
filter: brightness(1.1);
transform: translateY(-1px);
}

#tasks-panel {
scroll-margin-top: 30px;
}

/* ---------- PROGRESS ---------- */

.progress-track,
.progress-background {
width: 100%;
height: 9px;
overflow: hidden;
border-radius: 999px;
background: #29293b;
}

#progress-bar,
.progress-fill {
height: 100%;
width: 0;
border-radius: inherit;
background: linear-gradient(90deg, var(--purple), #c4a9ff);
transition: width 0.35s ease;
}

progress {
width: 100%;
height: 9px;
accent-color: var(--purple);
}

.progress-info {
display: flex;
justify-content: space-between;
gap: 12px;
margin-bottom: 10px;
}

/* ---------- FOCUS TIMER ---------- */

.timer-card,
.focus-card {
text-align: center;
}

#timer-display,
#focus-timer,
#timer,
#timer-time,
[data-timer-display] {
margin: 20px 0;
font-family: 'Space Grotesk', sans-serif;
font-size: clamp(42px, 7vw, 64px);
font-weight: 700;
line-height: 1.2;
letter-spacing: 2px;
color: var(--text);
font-variant-numeric: tabular-nums;
}

.timer-controls,
.focus-controls {
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 10px;
}

/* ---------- NOTES ---------- */

.notes-card textarea,
#notes-input,
#notes-area,
#notes-textarea,
#note-input {
display: block;
width: 100%;
min-height: 180px;
margin-top: 12px;
background-color: #191925;
color: #ffffff;
}

#notes-status,
#save-status {
margin-top: 8px;
font-size: 12px;
color: var(--green);
}

/* ---------- STATISTICS ---------- */

.stat-label {
color: var(--muted);
font-size: 13px;
}

.stat-value {
margin-top: 8px;
font-family: 'Space Grotesk', sans-serif;
font-size: 30px;
font-weight: 700;
}

.stat-icon {
display: grid;
place-items: center;
width: 42px;
height: 42px;
margin-bottom: 15px;
border-radius: 12px;
background: rgba(155, 123, 255, 0.14);
color: var(--purple);
}

/* ---------- BADGES ---------- */

.badge,
.tag {
display: inline-flex;
align-items: center;
padding: 5px 10px;
border: 1px solid var(--border);
border-radius: 999px;
background: var(--surface-light);
color: var(--muted);
font-size: 12px;
font-weight: 600;
}

.badge-success {
color: var(--green);
border-color: rgba(84, 214, 160, 0.2);
background: rgba(84, 214, 160, 0.08);
}

/* ---------- DIVIDERS ---------- */

hr {
height: 1px;
margin: 22px 0;
border: 0;
background: var(--border);
}

/* ---------- TOAST NOTIFICATIONS ---------- */

#toast {
font-family: 'DM Sans', sans-serif;
}

/* ---------- MOBILE NAVIGATION ---------- */

.mobile-menu-button {
display: none;
}

/* ---------- RESPONSIVE TABLET ---------- */

@media (max-width: 1000px) {
:root {
--sidebar-width: 200px;
}

.main-content,
.main,
.dashboard {
    padding: 25px;
}

.card-grid,
.dashboard-grid,
.stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

}

/* ---------- RESPONSIVE MOBILE ---------- */

@media (max-width: 700px) {
.app,
.app-layout,
.dashboard-layout {
display: block;
}

.sidebar {
    position: sticky;
    top: 0;
    right: auto;
    left: auto;
    width: 100%;
    min-width: 0;
    min-height: auto;
    height: auto;
    overflow: visible;
    padding: 16px;
    border-left: 0;
    border-bottom: 1px solid var(--border);
    gap: 15px;
}

.sidebar nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 6px;
}

.nav,
.nav-menu,
.sidebar-nav {
    flex-direction: row;
    flex-wrap: wrap;
}

.nav-link,
.nav-item {
    width: auto;
    padding: 9px 12px;
    font-size: 13px;
}

.main-content,
.main,
.dashboard {
    margin-right: 0;
    padding: 20px 15px;
}

.topbar,
.page-header {
    align-items: flex-start;
}

.card-grid,
.dashboard-grid,
.stats-grid {
    grid-template-columns: 1fr;
}

.card,
.panel,
.dashboard-card {
    padding: 18px;
}

.task-form,
.input-row,
.add-task-form {
    align-items: stretch;
}

.task-form button,
.input-row button,
.add-task-form button {
    flex-shrink: 0;
}

}

/* ---------- SMALL MOBILE ---------- */

@media (max-width: 420px) {
h1 {
font-size: 27px;
}

h2 {
    font-size: 21px;
}

.task-form,
.input-row,
.add-task-form {
    flex-direction: column;
}

.task-form button,
.input-row button,
.add-task-form button {
    width: 100%;
}

.logo,
.brand {
    font-size: 21px;
}

}

`;

const styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);

// ========================================
// NEXORA — PLAN MY DAY
// ========================================

// ========================================
// NEXORA — SMART DAILY PLANNER
// ========================================

const planButton = document.getElementById('plan-button');
const tasksPanel = document.getElementById('tasks-panel');
const taskInput = document.getElementById('task-input');
const toast = document.getElementById('toast');

function plannerElement(tag, text, styles = '') {
    const element = document.createElement(tag);

    if (text !== undefined && text !== null) {
        element.textContent = text;
    }

    if (styles) {
        element.style.cssText = styles;
    }

    return element;
}

function plannerSelect(options, selectedValue) {
    const select = document.createElement('select');

    select.style.cssText = `
        width: 100%;
        min-width: 110px;
        padding: 10px;
        border: 1px solid #393970;
        border-radius: 9px;
        background: #191925;
        color: #ffffff;
    `;

    options.forEach(option => {
        const item = document.createElement('option');

        item.value = String(option.value);
        item.textContent = option.label;
        item.selected = String(option.value) === String(selectedValue);

        select.appendChild(item);
    });

    return select;
}

function getDefaultPlannerStart() {
    const now = new Date();

    now.setSeconds(0, 0);

    // Round up to the next half-hour.
    if (now.getMinutes() < 30) {
        now.setMinutes(30);
    } else {
        now.setHours(now.getHours() + 1);
        now.setMinutes(0);
    }

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
}

function showPlannerMessage(panel, message) {
    panel.replaceChildren();

    panel.appendChild(
        plannerElement('h2', 'Your Daily Plan', `
            margin-bottom: 12px;
            color: #ffffff;
        `)
    );

    panel.appendChild(
        plannerElement('p', message, `
            color: #c5bfdc;
            line-height: 1.7;
        `)
    );
}

function openDayPlanner() {
    const pendingTasks = tasks.filter(task => !task.completed);

    let panel = document.getElementById('day-planner-panel');

    if (!panel) {
        panel = plannerElement('section');

        panel.id = 'day-planner-panel';

        panel.style.cssText = `
            margin: 24px 0;
            padding: 26px;
            background: linear-gradient(145deg, #1a1426, #130f1c);
            border: 1px solid #393970;
            border-radius: 18px;
            color: #ffffff;
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
        `;

        const welcomeCard = document.querySelector('.welcome-card');

        if (welcomeCard) {
            welcomeCard.insertAdjacentElement('afterend', panel);
        } else if (tasksPanel) {
            tasksPanel.insertAdjacentElement('beforebegin', panel);
        } else {
            planButton.insertAdjacentElement('afterend', panel);
        }
    }

    panel.replaceChildren();

    const heading = plannerElement(
        'h2',
        'Plan Your Day',
        'margin-bottom: 8px; color: #ffffff;'
    );

    panel.appendChild(heading);

    panel.appendChild(
        plannerElement(
            'p',
            'Choose your priorities and how long each task should take. NEXORA will build your timetable.',
            'margin-bottom: 22px; color: #c5bfdc; line-height: 1.7;'
        )
    );

    if (pendingTasks.length === 0) {
        showPlannerMessage(
            panel,
            tasks.length
                ? 'All your tasks are complete! Add another task when you are ready.'
                : 'Add your tasks in Today’s Priorities first. Then come back here to create your schedule.'
        );

        panel.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        if (!tasks.length) {
            taskInput?.focus({ preventScroll: true });
        }

        return;
    }

    // Starting time settings.
    const settingsGrid = plannerElement('div', undefined, `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 16px;
        margin-bottom: 24px;
    `);

    const startLabel = plannerElement('label', 'Start my day', `
        display: flex;
        flex-direction: column;
        gap: 8px;
        color: #ffffff;
        font-weight: 600;
    `);

    const startInput = document.createElement('input');

    startInput.type = 'time';
    startInput.id = 'planner-start-time';
    startInput.value = getDefaultPlannerStart();

    startInput.style.cssText = `
        width: 100%;
        padding: 11px;
        border: 1px solid #393970;
        border-radius: 9px;
        background: #191925;
        color: #ffffff;
    `;

    startLabel.appendChild(startInput);

    const breakLabel = plannerElement('label', 'Break duration', `
        display: flex;
        flex-direction: column;
        gap: 8px;
        color: #ffffff;
        font-weight: 600;
    `);

    const breakSelect = plannerSelect([
        { value: 5, label: '5 minutes' },
        { value: 10, label: '10 minutes' },
        { value: 15, label: '15 minutes' },
        { value: 20, label: '20 minutes' }
    ], 10);

    breakLabel.appendChild(breakSelect);

    settingsGrid.append(startLabel, breakLabel);
    panel.appendChild(settingsGrid);

    // Task settings heading.
    panel.appendChild(
        plannerElement('h3', 'Organise your priorities', `
            margin-bottom: 14px;
            color: #ffffff;
        `)
    );

    const taskSettings = plannerElement('div', undefined, `
        display: flex;
        flex-direction: column;
        gap: 12px;
    `);

    const taskRows = [];

    const priorityOptions = [
        { value: 'high', label: '🔴 High priority' },
        { value: 'medium', label: '🟡 Medium priority' },
        { value: 'low', label: '🟢 Low priority' }
    ];

    const durationOptions = [
        { value: 15, label: '15 minutes' },
        { value: 25, label: '25 minutes' },
        { value: 30, label: '30 minutes' },
        { value: 45, label: '45 minutes' },
        { value: 60, label: '60 minutes' },
        { value: 90, label: '90 minutes' }
    ];

    pendingTasks.forEach((task, index) => {
        const row = plannerElement('div', undefined, `
            display: grid;
            grid-template-columns: minmax(130px, 1fr) repeat(2, minmax(115px, 150px));
            align-items: center;
            gap: 12px;
            padding: 15px;
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid #393970;
            border-radius: 12px;
        `);

        const name = plannerElement('div', task.text, `
            min-width: 0;
            overflow-wrap: anywhere;
            color: #ffffff;
            font-weight: 600;
        `);

        const prioritySelect = plannerSelect(
            priorityOptions,
            task.priority || 'medium'
        );

        const durationSelect = plannerSelect(
            durationOptions,
            durationOptions.some(
                option => Number(option.value) === Number(task.duration)
            ) ? task.duration : 30
        );

        prioritySelect.setAttribute(
            'aria-label',
            `Priority for ${task.text}`
        );

        durationSelect.setAttribute(
            'aria-label',
            `Duration for ${task.text}`
        );

        row.append(name, prioritySelect, durationSelect);
        taskSettings.appendChild(row);

        taskRows.push({
            task,
            index,
            prioritySelect,
            durationSelect
        });
    });

    panel.appendChild(taskSettings);

    const generateButton = plannerElement(
        'button',
        '✦ Generate My Schedule',
        `
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin-top: 22px;
            padding: 14px 18px;
            border: 0;
            border-radius: 11px;
            background: linear-gradient(135deg, #a78bfa, #7755e8);
            color: white;
            font-weight: 700;
            font-size: 15px;
            cursor: pointer;
        `
    );

    generateButton.type = 'button';
    panel.appendChild(generateButton);

    // Generate a real timetable.
    generateButton.addEventListener('click', () => {
        if (!startInput.value) {
            startInput.focus();
            return;
        }

        const orderedTasks = taskRows.map(row => {
            row.task.priority = row.prioritySelect.value;
            row.task.duration = Number(row.durationSelect.value);

            return {
                ...row,
                priority: row.prioritySelect.value,
                duration: Number(row.durationSelect.value)
            };
        });

        // Save task preferences alongside existing task data.
        saveTasks();

        const priorityRank = {
            high: 1,
            medium: 2,
            low: 3
        };

        orderedTasks.sort((a, b) => {
            return (
                priorityRank[a.priority] - priorityRank[b.priority] ||
                a.index - b.index
            );
        });

        const [startHours, startMinutes] = startInput.value
            .split(':')
            .map(Number);

        const scheduleStart = new Date();

        scheduleStart.setHours(
            startHours,
            startMinutes,
            0,
            0
        );

        let currentTime = new Date(scheduleStart);

        const scheduleCard = plannerElement('div', undefined, `
            margin-top: 24px;
            padding: 22px;
            background: #101019;
            border: 1px solid #393970;
            border-radius: 14px;
        `);

        scheduleCard.appendChild(
            plannerElement('h3', 'Your Timetable', `
                color: #ffffff;
                margin-bottom: 8px;
            `)
        );

        scheduleCard.appendChild(
            plannerElement(
                'p',
                'Tasks are arranged by priority, with breaks included.',
                'color: #c5bfdc; margin-bottom: 18px;'
            )
        );

        const timeline = plannerElement('div', undefined, `
            display: flex;
            flex-direction: column;
            gap: 10px;
        `);

        const formatTime = date => date.toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit'
        });

        let totalFocusMinutes = 0;
        let totalBreakMinutes = 0;

        orderedTasks.forEach((item, index) => {
            const taskStart = new Date(currentTime);

            currentTime = new Date(
                currentTime.getTime() + item.duration * 60000
            );

            const taskEnd = new Date(currentTime);

            const priorityLabel = {
                high: 'HIGH PRIORITY',
                medium: 'MEDIUM PRIORITY',
                low: 'LOW PRIORITY'
            }[item.priority];

            const taskCard = plannerElement('article', undefined, `
                display: grid;
                grid-template-columns: minmax(100px, 130px) minmax(0, 1fr);
                gap: 14px;
                padding: 15px;
                background: #1a1426;
                border: 1px solid #393970;
                border-radius: 11px;
            `);

            const timeColumn = plannerElement('div');

            timeColumn.appendChild(
                plannerElement('strong', formatTime(taskStart), `
                    display: block;
                    color: #ffffff;
                    font-size: 14px;
                `)
            );

            timeColumn.appendChild(
                plannerElement('span', formatTime(taskEnd), `
                    display: block;
                    color: #c5bfdc;
                    font-size: 13px;
                `)
            );

            const details = plannerElement('div');

            details.appendChild(
                plannerElement('strong', item.task.text, `
                    display: block;
                    color: #ffffff;
                    overflow-wrap: anywhere;
                `)
            );

            details.appendChild(
                plannerElement('span', priorityLabel, `
                    display: inline-block;
                    margin-top: 5px;
                    color: #c4b5fd;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                `)
            );

            details.appendChild(
                plannerElement('p', `${item.duration} minutes`, `
                    margin-top: 4px;
                    color: #c5bfdc;
                    font-size: 13px;
                `)
            );

            taskCard.append(timeColumn, details);
            timeline.appendChild(taskCard);

            totalFocusMinutes += item.duration;

            // Add a break after every two tasks, except at the end.
            const isBreakTime =
                (index + 1) % 2 === 0 &&
                index < orderedTasks.length - 1;

            if (isBreakTime) {
                const breakEnd = new Date(
                    currentTime.getTime() +
                    Number(breakSelect.value) * 60000
                );

                const breakCard = plannerElement(
                    'div',
                    `☕ ${formatTime(currentTime)} – ${formatTime(breakEnd)}  ·  Take a ${breakSelect.value}-minute break`,
                    `
                        padding: 12px 15px;
                        border: 1px dashed #64549a;
                        border-radius: 10px;
                        color: #d8ccff;
                        font-size: 13px;
                        line-height: 1.7;
                    `
                );

                timeline.appendChild(breakCard);

                totalBreakMinutes += Number(breakSelect.value);
                currentTime = breakEnd;
            }
        });

        scheduleCard.appendChild(timeline);

        const totalMinutes =
            totalFocusMinutes + totalBreakMinutes;

        const summary = plannerElement('div', undefined, `
            margin-top: 18px;
            padding: 16px;
            background: rgba(167, 139, 250, 0.1);
            border-radius: 10px;
        `);

        summary.appendChild(
            plannerElement(
                'strong',
                `Estimated finish: ${formatTime(currentTime)}`,
                'display: block; color: #ffffff;'
            )
        );

        summary.appendChild(
            plannerElement(
                'p',
                `${orderedTasks.length} tasks · ${totalFocusMinutes} minutes of work · ${totalBreakMinutes} minutes of breaks · ${totalMinutes} minutes in total`,
                'margin-top: 6px; color: #c5bfdc; font-size: 13px; line-height: 1.7;'
            )
        );

        scheduleCard.appendChild(summary);

        // Replace an earlier generated timetable, if one exists.
        const oldSchedule = panel.querySelector('#generated-schedule');

        if (oldSchedule) {
            oldSchedule.remove();
        }

        scheduleCard.id = 'generated-schedule';
        panel.appendChild(scheduleCard);

        scheduleCard.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        if (toast) {
            toast.textContent = 'Your timetable is ready!';
            toast.classList.add('visible');

            window.setTimeout(() => {
                toast.classList.remove('visible');
            }, 3000);
        }
    });

    panel.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

planButton?.addEventListener('click', openDayPlanner);

planButton?.addEventListener('click', () => {
    // Get all unfinished tasks.
    const pendingTasks = tasks.filter(task => !task.completed);

    // Find or create the schedule section.
    let plan = document.getElementById('day-plan');

    if (!plan) {
        plan = document.createElement('section');
        plan.id = 'day-plan';

        plan.style.cssText = `
            margin-top: 24px;
            padding: 24px;
            background: #1a1426;
            border: 1px solid #393970;
            border-radius: 16px;
            color: #ffffff;
        `;

        if (tasksPanel) {
            tasksPanel.appendChild(plan);
        } else {
            planButton.insertAdjacentElement('afterend', plan);
        }
    }

    // Clear the previous schedule.
    plan.replaceChildren();

    const heading = document.createElement('h2');
    heading.textContent = 'Your Plan for Today';
    plan.appendChild(heading);

    // Handle an empty task list.
    if (pendingTasks.length === 0) {
        const message = document.createElement('p');

        message.textContent = tasks.length
            ? 'Amazing! All your tasks are completed.'
            : 'You have no tasks yet. Add your priorities first.';

        plan.appendChild(message);

        plan.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        if (tasks.length === 0) {
            taskInput?.focus({ preventScroll: true });
        }

        return;
    }

    const description = document.createElement('p');
    description.textContent =
        'Here is your schedule. Each task has a 30-minute time slot.';

    plan.appendChild(description);

    const schedule = document.createElement('ol');

    schedule.style.cssText = `
        margin: 20px 0 0;
        padding-left: 24px;
    `;

    // Start at the next half-hour.
    const startTime = new Date();
    startTime.setSeconds(0, 0);

    if (startTime.getMinutes() < 30) {
        startTime.setMinutes(30);
    } else {
        startTime.setHours(startTime.getHours() + 1);
        startTime.setMinutes(0);
    }

    const formatTime = date =>
        date.toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit'
        });

    pendingTasks.forEach(task => {
        const endTime = new Date(
            startTime.getTime() + 30 * 60 * 1000
        );

        const item = document.createElement('li');

        item.style.cssText = `
            padding: 12px 0;
            border-bottom: 1px solid #393970;
            overflow-wrap: anywhere;
        `;

        const time = document.createElement('strong');

        time.textContent =
            `${formatTime(startTime)} – ${formatTime(endTime)}: `;

        const taskName = document.createElement('span');
        taskName.textContent = task.text;

        item.append(time, taskName);
        schedule.appendChild(item);

        startTime.setTime(endTime.getTime());
    });

    plan.appendChild(schedule);

    plan.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    if (toast) {
        toast.textContent = 'Your daily plan is ready!';
        toast.classList.add('visible');

        window.setTimeout(() => {
            toast.classList.remove('visible');
        }, 3000);
    }
});

planButton?.addEventListener('click', () => {
    tasksPanel?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    taskInput?.focus({ preventScroll: true });

    if (toast) {
        toast.textContent = 'Let\'s build your day. Add your first priority.';
        toast.classList.add('visible');
        window.setTimeout(() => toast.classList.remove('visible'), 3000);
    }
});

const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const taskRecurrence = document.getElementById('task-recurrence');
const taskReminder = document.getElementById('task-reminder');
const completedCount = document.getElementById('completed-count');
const remainingCount = document.getElementById('remaining-count');
const dailyProgressStat = document.getElementById('daily-progress-stat');
const progressPercent = document.getElementById('progress-percent');
const progressFill = document.getElementById('progress-fill');
const progressDescription = document.getElementById('progress-description');
const tasksStorageKey = 'nexora-tasks';

let tasks = [];

try {
    const savedTasks = localStorage.getItem(tasksStorageKey);
    tasks = savedTasks ? JSON.parse(savedTasks) : [];
} catch {
    tasks = [];
}

const saveTasks = () => {
    localStorage.setItem(tasksStorageKey, JSON.stringify(tasks));
};

const recurrenceLabels = {
    daily: 'Every day',
    weekdays: 'Weekdays',
    weekly: 'Every week'
};

const formatReminder = (reminder) => {
    const date = new Date(reminder);

    return date.toLocaleString([], {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
};

const formatDateTimeLocal = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const getNextRecurringReminder = (task) => {
    const nextDate = task.reminder ? new Date(task.reminder) : new Date();

    if (Number.isNaN(nextDate.getTime())) return '';

    if (task.recurrence === 'daily') {
        nextDate.setDate(nextDate.getDate() + 1);
    } else if (task.recurrence === 'weekdays') {
        nextDate.setDate(nextDate.getDate() + 1);

        while (nextDate.getDay() === 0 || nextDate.getDay() === 6) {
            nextDate.setDate(nextDate.getDate() + 1);
        }
    } else if (task.recurrence === 'weekly') {
        nextDate.setDate(nextDate.getDate() + 7);
    }

    return task.reminder ? formatDateTimeLocal(nextDate) : '';
};

const createNextRecurringTask = (task) => ({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    text: task.text,
    completed: false,
    recurrence: task.recurrence,
    reminder: getNextRecurringReminder(task),
    remindedAt: ''
});

const updateTaskStats = () => {
    const completedTasks = tasks.filter((task) => task.completed).length;
    const remainingTasks = tasks.length - completedTasks;
    const completionPercent = tasks.length
        ? Math.round((completedTasks / tasks.length) * 100)
        : 0;

    if (completedCount) completedCount.textContent = completedTasks;
    if (remainingCount) remainingCount.textContent = remainingTasks;
    if (progressPercent) progressPercent.textContent = completionPercent;
    if (dailyProgressStat) dailyProgressStat.textContent = completionPercent;
    if (progressFill) progressFill.style.width = `${completionPercent}%`;
    if (progressDescription) {
        progressDescription.textContent = tasks.length
            ? `${completedTasks} of ${tasks.length} tasks completed.`
            : 'Every completed task is progress.';
    }
};

const renderTasks = () => {
    if (!taskList) return;

    taskList.replaceChildren();

    if (!tasks.length) {
        const emptyMessage = document.createElement('p');
        emptyMessage.className = 'empty-tasks';
        emptyMessage.textContent = 'No tasks yet. Add your first priority.';
        taskList.append(emptyMessage);
        updateTaskStats();
        return;
    }

    tasks.forEach((task) => {
        const taskItem = document.createElement('div');
        taskItem.className = `task-item${task.completed ? ' completed' : ''}`;
        taskItem.dataset.taskId = task.id;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.setAttribute('aria-label', `Complete ${task.text}`);
        checkbox.dataset.action = 'toggle';

        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = task.text;

        const taskDetails = document.createElement('div');
        taskDetails.className = 'task-details';
        taskDetails.append(taskText);

        const taskMeta = document.createElement('div');
        taskMeta.className = 'task-meta';

        if (task.recurrence && task.recurrence !== 'none') {
            const recurrenceMeta = document.createElement('span');
            recurrenceMeta.textContent = `↻ ${recurrenceLabels[task.recurrence]}`;
            taskMeta.append(recurrenceMeta);
        }

        if (task.reminder) {
            const reminderMeta = document.createElement('span');
            reminderMeta.textContent = `Reminder: ${formatReminder(task.reminder)}`;

            if (new Date(task.reminder).getTime() <= Date.now() && !task.completed) {
                reminderMeta.className = 'task-reminder-due';
                reminderMeta.textContent = `Reminder due: ${formatReminder(task.reminder)}`;
            }

            taskMeta.append(reminderMeta);
        }

        if (taskMeta.childElementCount) {
            taskDetails.append(taskMeta);
        }

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.textContent = '×';
        deleteButton.setAttribute('aria-label', `Delete ${task.text}`);
        deleteButton.dataset.action = 'delete';

        taskItem.append(checkbox, taskDetails, deleteButton);
        taskList.append(taskItem);
    });

    updateTaskStats();
};

taskForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = taskInput?.value.trim();
    if (!text) return;

    tasks.push({
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        text,
        completed: false,
        recurrence: taskRecurrence?.value || 'none',
        reminder: taskReminder?.value || '',
        remindedAt: ''
    });
    saveTasks();
    renderTasks();
    taskForm.reset();
    taskInput?.focus();
});

taskList?.addEventListener('change', (event) => {
    const checkbox = event.target.closest('[data-action="toggle"]');
    const taskItem = checkbox?.closest('[data-task-id]');
    if (!taskItem) return;

    const task = tasks.find((item) => item.id === taskItem.dataset.taskId);
    if (!task) return;

    task.completed = checkbox.checked;

    if (task.completed && task.recurrence && task.recurrence !== 'none') {
        tasks.push(createNextRecurringTask(task));
    }

    saveTasks();
    renderTasks();
});

taskList?.addEventListener('click', (event) => {
    const deleteButton = event.target.closest('[data-action="delete"]');
    const taskItem = deleteButton?.closest('[data-task-id]');
    if (!taskItem) return;

    tasks = tasks.filter((task) => task.id !== taskItem.dataset.taskId);
    saveTasks();
    renderTasks();
});

renderTasks();

const checkTaskReminders = () => {
    const now = Date.now();
    let hasChanges = false;

    tasks.forEach((task) => {
        const reminderTime = new Date(task.reminder).getTime();

        if (
            !task.completed &&
            task.reminder &&
            Number.isFinite(reminderTime) &&
            reminderTime <= now &&
            task.remindedAt !== task.reminder
        ) {
            task.remindedAt = task.reminder;
            hasChanges = true;

            if (toast) {
                toast.textContent = `Reminder: ${task.text}`;
                toast.classList.add('visible');
                window.setTimeout(() => toast.classList.remove('visible'), 5000);
            }
        }
    });

    if (hasChanges) {
        saveTasks();
        renderTasks();
    }
};

checkTaskReminders();
window.setInterval(checkTaskReminders, 30000);
// ========================================
// NEXORA — AUTOMATIC NOTES SAVING
// ========================================

const notesStorageKey = "nexora-notes";

const noteFields = document.querySelectorAll(
    '#notes-input, #notes-area, #notes-textarea, #note-input, .notes-card textarea, textarea[name="notes"]'
);

const notesStatus = document.querySelector(
    "#notes-status, #save-status"
);

let savedNotes = "";

try {
    savedNotes = localStorage.getItem(notesStorageKey) || "";
} catch (error) {
    console.error("Could not load saved notes:", error);
}

noteFields.forEach((field) => {
    // Load previously saved notes.
    field.value = savedNotes;

    // Save notes whenever the user types.
    field.addEventListener("input", () => {
        try {
            localStorage.setItem(notesStorageKey, field.value);

            if (notesStatus) {
                notesStatus.textContent = "Notes saved automatically ✓";
            }
        } catch (error) {
            console.error("Could not save notes:", error);

            if (notesStatus) {
                notesStatus.textContent = "Unable to save notes.";
            }
        }
    });
});

console.log("NEXORA automatic notes saving is ready.");
// ============================================
// NEXORA — FOCUS ROOM TIMER
// ============================================

(() => {
    const display = document.getElementById("timer-display");
    const modeLabel = document.getElementById("timer-mode");
    const caption = document.getElementById("timer-caption");
    const toggleButton = document.getElementById("timer-toggle");
    const resetButton = document.getElementById("timer-reset");
    const focusDurationSelect = document.getElementById("focus-duration");
    const totalFocusTime = document.getElementById("total-focus-time");
    const sessionCounter = document.getElementById("session-count");
    const toast = document.getElementById("toast");

    // Stop if this page doesn't contain the timer.
    if (!display || !toggleButton || !resetButton) {
        return;
    }

    const DEFAULT_FOCUS_MINUTES = 25;
    const BREAK_SECONDS = 5 * 60;
    const STORAGE_KEY = "nexora-focus-timer";

    let mode = "focus";
    let focusMinutes = DEFAULT_FOCUS_MINUTES;
    let remainingSeconds = focusMinutes * 60;
    let totalFocusSeconds = 0;
    let isRunning = false;
    let endTime = null;
    let completedSessions = 0;
    let intervalId = null;
    let notificationTimeout = null;

    function getFocusSeconds() {
        return focusMinutes * 60;
    }

    function formatFocusTime(seconds) {
        const totalMinutes = Math.floor(seconds / 60);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        }

        return `${minutes}m`;
    }

    // Restore saved timer settings.
    try {
        const saved = JSON.parse(
            localStorage.getItem(STORAGE_KEY) || "null"
        );

        if (saved) {
            if (saved.mode === "focus" || saved.mode === "break") {
                mode = saved.mode;
            }

            if (
                Number.isInteger(saved.focusMinutes) &&
                saved.focusMinutes >= 1 &&
                saved.focusMinutes <= 180
            ) {
                focusMinutes = saved.focusMinutes;
            }

            if (focusDurationSelect) {
                focusDurationSelect.value = String(focusMinutes);
            }

            const maximum = mode === "focus"
                ? getFocusSeconds()
                : BREAK_SECONDS;

            if (
                Number.isFinite(saved.remainingSeconds) &&
                saved.remainingSeconds >= 0
            ) {
                remainingSeconds = Math.min(
                    maximum,
                    Math.floor(saved.remainingSeconds)
                );
            } else {
                remainingSeconds = maximum;
            }

            if (
                Number.isInteger(saved.completedSessions) &&
                saved.completedSessions >= 0
            ) {
                completedSessions = saved.completedSessions;
            }

            if (
                Number.isFinite(saved.totalFocusSeconds) &&
                saved.totalFocusSeconds >= 0
            ) {
                totalFocusSeconds = Math.floor(saved.totalFocusSeconds);
            }

            if (saved.running && Number.isFinite(saved.endTime)) {
                isRunning = true;
                endTime = saved.endTime;
            }
        }
    } catch (error) {
        console.warn("Could not restore the focus timer:", error);
    }

    function saveState() {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({
                    mode,
                    focusMinutes,
                    remainingSeconds,
                    isRunning,
                    endTime,
                    completedSessions,
                    totalFocusSeconds
                })
            );
        } catch (error) {
            console.warn("Could not save the focus timer:", error);
        }
    }

    function showNotification(message) {
        if (!toast) return;

        toast.textContent = message;
        toast.classList.add("visible");

        clearTimeout(notificationTimeout);

        notificationTimeout = setTimeout(() => {
            toast.classList.remove("visible");
        }, 3500);
    }

    function updateDisplay() {
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;

        display.textContent =
            `${String(minutes).padStart(2, "0")}:` +
            `${String(seconds).padStart(2, "0")}`;

        if (modeLabel) {
            modeLabel.textContent = mode === "focus"
                ? "FOCUS SESSION"
                : "BREAK TIME";
        }

        if (caption) {
            caption.textContent = mode === "focus"
                ? "Time to concentrate"
                : "Relax and recharge";
        }

        toggleButton.textContent = isRunning
            ? "Pause"
            : mode === "focus"
                ? "Start focus"
                : "Start break";

        if (sessionCounter) {
            sessionCounter.textContent = completedSessions;
        }

        if (totalFocusTime) {
            totalFocusTime.textContent = formatFocusTime(totalFocusSeconds);
        }

        document.title = isRunning
            ? `${display.textContent} — NEXORA`
            : "NEXORA — Your Productivity Space";

        saveState();
    }

    function stopInterval() {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    function finishSession() {
        stopInterval();

        isRunning = false;
        endTime = null;

        if (mode === "focus") {
            completedSessions++;
            totalFocusSeconds += getFocusSeconds();
            mode = "break";
            remainingSeconds = BREAK_SECONDS;

            showNotification(
                "Focus session complete! Time for a 5-minute break. 🎉"
            );
        } else {
            mode = "focus";
            remainingSeconds = getFocusSeconds();

            showNotification(
                "Break finished! Ready for another focus session?"
            );
        }

        updateDisplay();
    }

    function tick() {
        if (!isRunning || endTime === null) return;

        remainingSeconds = Math.max(
            0,
            Math.ceil((endTime - Date.now()) / 1000)
        );

        if (remainingSeconds <= 0) {
            finishSession();
            return;
        }

        updateDisplay();
    }

    function startTimer() {
        if (isRunning) return;

        if (remainingSeconds <= 0) {
            remainingSeconds = mode === "focus"
                ? getFocusSeconds()
                : BREAK_SECONDS;
        }

        isRunning = true;
        endTime = Date.now() + remainingSeconds * 1000;

        stopInterval();
        intervalId = setInterval(tick, 250);

        updateDisplay();
    }

    function pauseTimer() {
        if (!isRunning || endTime === null) return;

        remainingSeconds = Math.max(
            0,
            Math.ceil((endTime - Date.now()) / 1000)
        );

        isRunning = false;
        endTime = null;

        stopInterval();

        if (remainingSeconds <= 0) {
            finishSession();
            return;
        }

        updateDisplay();
    }

    function resetTimer() {
        stopInterval();

        isRunning = false;
        endTime = null;

        remainingSeconds = mode === "focus"
            ? getFocusSeconds()
            : BREAK_SECONDS;

        updateDisplay();
    }

    toggleButton.addEventListener("click", () => {
        if (isRunning) {
            pauseTimer();
        } else {
            startTimer();
        }
    });

    resetButton.addEventListener("click", resetTimer);

    focusDurationSelect?.addEventListener("change", () => {
        const selectedMinutes = Number(focusDurationSelect.value);

        if (!Number.isInteger(selectedMinutes) || selectedMinutes < 1) {
            focusDurationSelect.value = String(focusMinutes);
            return;
        }

        focusMinutes = selectedMinutes;

        if (!isRunning && mode === "focus") {
            remainingSeconds = getFocusSeconds();
        }

        updateDisplay();
    });

    // Restore a running timer after the page is refreshed.
    if (isRunning && endTime !== null) {
        if (endTime <= Date.now()) {
            remainingSeconds = 0;
            finishSession();
        } else {
            tick();
            intervalId = setInterval(tick, 250);
        }
    } else {
        isRunning = false;
        endTime = null;
        updateDisplay();
    }
})();
// ==================================================
// NEXORA — PRODUCTIVITY DASHBOARD & WEEKLY ANALYTICS
// ==================================================

(() => {
    const statsGrid = document.querySelector(".stats-grid");
    const timerDisplay = document.getElementById("timer-display");
    const timerMode = document.getElementById("timer-mode");
    const timerToggle = document.getElementById("timer-toggle");

    if (!statsGrid) {
        console.warn("NEXORA dashboard could not find the statistics section.");
        return;
    }

    const STORAGE_KEY = "nexora-weekly-focus-analytics";

    // -----------------------------------------------
    // LOAD SAVED ANALYTICS
    // -----------------------------------------------

    let dailyFocus = {};

    try {
        dailyFocus = JSON.parse(
            localStorage.getItem(STORAGE_KEY) || "{}"
        );

        if (
            !dailyFocus ||
            typeof dailyFocus !== "object" ||
            Array.isArray(dailyFocus)
        ) {
            dailyFocus = {};
        }
    } catch (error) {
        dailyFocus = {};
        console.warn("Could not load focus analytics:", error);
    }

    function dateKey(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    function getTodayFocusMs() {
        const entry = dailyFocus[dateKey(new Date())];

        return entry && Number.isFinite(entry.focusMs)
            ? Math.max(0, entry.focusMs)
            : 0;
    }

    function saveAnalytics() {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(dailyFocus)
            );
        } catch (error) {
            console.warn("Could not save focus analytics:", error);
        }
    }

    function addFocusTime(milliseconds, date) {
        if (!Number.isFinite(milliseconds) || milliseconds <= 0) {
            return;
        }

        const key = dateKey(date);

        if (!dailyFocus[key]) {
            dailyFocus[key] = { focusMs: 0 };
        }

        dailyFocus[key].focusMs += milliseconds;

        saveAnalytics();
    }

    // -----------------------------------------------
    // ADD THE FOCUS TIME STATISTIC
    // -----------------------------------------------

    let focusCard = document.getElementById("focus-time-card");

    if (!focusCard) {
        focusCard = document.createElement("article");
        focusCard.id = "focus-time-card";
        focusCard.className = "stat-card";

        focusCard.style.cssText = `
            min-width: 0;
            padding: 22px;
            border: 1px solid var(--border, #393970);
            border-radius: 16px;
            background: var(--surface, #1a1426);
        `;

        const cardTop = document.createElement("div");
        cardTop.className = "stat-top";

        const label = document.createElement("span");
        label.textContent = "Focus time today";

        const icon = document.createElement("span");
        icon.className = "stat-icon";
        icon.textContent = "◷";

        cardTop.append(label, icon);

        const value = document.createElement("div");
        value.id = "focus-time-today";
        value.className = "stat-number";
        value.textContent = "0 min";

        const description = document.createElement("p");
        description.textContent = "Time invested in yourself";

        focusCard.append(cardTop, value, description);
        statsGrid.appendChild(focusCard);
    }

    // Make room for all four statistic cards.
    statsGrid.style.gridTemplateColumns =
        "repeat(auto-fit, minmax(min(100%, 190px), 1fr))";

    const focusTimeValue = document.getElementById("focus-time-today");

    function formatMinutes(milliseconds) {
        const minutes = Math.floor(milliseconds / 60000);
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;

        if (hours > 0) {
            return `${hours}h ${remainingMinutes}m`;
        }

        return `${minutes} min`;
    }

    function updateFocusStatistic() {
        if (focusTimeValue) {
            focusTimeValue.textContent = formatMinutes(getTodayFocusMs());
        }
    }

    // -----------------------------------------------
    // CREATE THE WEEKLY PRODUCTIVITY CHART
    // -----------------------------------------------

    let weeklyPanel = document.getElementById("weekly-focus-panel");

    if (!weeklyPanel) {
        weeklyPanel = document.createElement("section");
        weeklyPanel.id = "weekly-focus-panel";
        weeklyPanel.className = "panel";

        weeklyPanel.style.cssText = `
            margin: 24px 0;
            padding: 24px;
            border: 1px solid var(--border, #393970);
            border-radius: 16px;
            background: var(--surface, #1a1426);
        `;

        const heading = document.createElement("h2");
        heading.textContent = "Your Weekly Focus";

        const subtitle = document.createElement("p");
        subtitle.textContent =
            "Your focus time over the last seven days.";

        subtitle.style.cssText = `
            margin: 8px 0 22px;
            color: var(--muted, #aaa2c0);
            font-size: 14px;
        `;

        const weeklyTotal = document.createElement("div");
        weeklyTotal.id = "weekly-focus-total";

        weeklyTotal.style.cssText = `
            margin-bottom: 20px;
            font-size: 25px;
            font-weight: 700;
        `;

        const chart = document.createElement("div");
        chart.id = "weekly-focus-chart";

        chart.style.cssText = `
            display: grid;
            grid-template-columns: repeat(7, minmax(0, 1fr));
            gap: 10px;
            align-items: end;
        `;

        const note = document.createElement("p");
        note.textContent =
            "Keep showing up. Small focused sessions add up.";

        note.style.cssText = `
            margin-top: 22px;
            font-size: 13px;
            color: var(--muted, #aaa2c0);
        `;

        weeklyPanel.append(heading, subtitle, weeklyTotal, chart, note);

        // Put the weekly chart below the statistics cards.
        statsGrid.insertAdjacentElement("afterend", weeklyPanel);
    }

    function renderWeeklyChart() {
        const chart = document.getElementById("weekly-focus-chart");
        const weeklyTotal = document.getElementById("weekly-focus-total");

        if (!chart || !weeklyTotal) {
            return;
        }

        chart.replaceChildren();

        const today = new Date();
        today.setHours(12, 0, 0, 0);

        const days = [];

        for (let offset = 6; offset >= 0; offset--) {
            const date = new Date(today);

            date.setDate(today.getDate() - offset);

            const entry = dailyFocus[dateKey(date)];

            const milliseconds =
                entry && Number.isFinite(entry.focusMs)
                    ? Math.max(0, entry.focusMs)
                    : 0;

            days.push({
                date,
                milliseconds
            });
        }

        const weekMilliseconds = days.reduce(
            (sum, day) => sum + day.milliseconds,
            0
        );

        weeklyTotal.textContent =
            `${formatMinutes(weekMilliseconds)} focused this week`;

        const maximum = Math.max(
            60 * 60 * 1000,
            ...days.map(day => day.milliseconds)
        );

        days.forEach(day => {
            const isToday =
                dateKey(day.date) === dateKey(new Date());

            const column = document.createElement("div");

            column.style.cssText = `
                min-width: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
            `;

            const value = document.createElement("span");

            value.textContent = Math.floor(
                day.milliseconds / 60000
            ) + "m";

            value.style.cssText = `
                font-size: 11px;
                color: var(--muted, #aaa2c0);
                text-align: center;
                overflow-wrap: anywhere;
            `;

            const track = document.createElement("div");

            track.style.cssText = `
                width: 100%;
                max-width: 48px;
                height: 120px;
                display: flex;
                align-items: flex-end;
                overflow: hidden;
                background: rgba(155, 123, 255, 0.10);
                border-radius: 8px;
            `;

            const bar = document.createElement("div");

            const percentage = Math.min(
                100,
                (day.milliseconds / maximum) * 100
            );

            bar.style.cssText = `
                width: 100%;
                height: ${percentage}%;
                min-height: ${day.milliseconds > 0 ? 4 : 0}px;
                background: ${isToday
                    ? "linear-gradient(180deg, #c4b5fd, #8b5cf6)"
                    : "linear-gradient(180deg, #8b7bd8, #6554ae)"};
                border-radius: 8px 8px 0 0;
                transition: height 0.3s ease;
            `;

            track.appendChild(bar);

            const dayLabel = document.createElement("span");

            dayLabel.textContent = day.date.toLocaleDateString(
                undefined,
                { weekday: "short" }
            );

            dayLabel.style.cssText = `
                font-size: 11px;
                font-weight: ${isToday ? "700" : "400"};
                color: ${isToday
                    ? "var(--text, #ffffff)"
                    : "var(--muted, #aaa2c0)"};
            `;

            column.setAttribute(
                "aria-label",
                `${dayLabel.textContent}: ${formatMinutes(day.milliseconds)}`
            );

            column.append(value, track, dayLabel);
            chart.appendChild(column);
        });
    }

    // -----------------------------------------------
    // TRACK ACTUAL FOCUS TIMER USAGE
    // -----------------------------------------------

    function isFocusTimerRunning() {
        return Boolean(
            timerDisplay &&
            timerMode &&
            timerToggle &&
            timerMode.textContent.trim() === "FOCUS SESSION" &&
            timerToggle.textContent.trim() === "Pause"
        );
    }

    function readRemainingMs() {
        if (!timerDisplay) {
            return 0;
        }

        const match = timerDisplay.textContent
            .trim()
            .match(/^(\d+):(\d{2})$/);

        if (!match) {
            return 0;
        }

        return (
            Number(match[1]) * 60 +
            Number(match[2])
        ) * 1000;
    }

    let lastTimestamp = Date.now();
    let previouslyRunning = isFocusTimerRunning();
    let previousRemainingMs = readRemainingMs();
    let previousModeWasFocus = Boolean(
        timerMode &&
        timerMode.textContent.trim() === "FOCUS SESSION"
    );

    let lastRenderedMinute = -1;
    let lastRenderedDate = dateKey(new Date());

    function trackFocusTime() {
        const now = Date.now();
        const elapsedMs = Math.max(0, now - lastTimestamp);

        // Use the previous timer state so we can count the final
        // focus seconds even when the timer switches into a break.
        if (previouslyRunning && previousModeWasFocus) {
            const focusElapsed = Math.min(
                elapsedMs,
                previousRemainingMs
            );

            if (focusElapsed > 0) {
                addFocusTime(
                    focusElapsed,
                    new Date(lastTimestamp)
                );
            }
        }

        const currentlyRunning = isFocusTimerRunning();

        const currentlyFocusMode = Boolean(
            timerMode &&
            timerMode.textContent.trim() === "FOCUS SESSION"
        );

        lastTimestamp = now;
        previouslyRunning = currentlyRunning;
        previousModeWasFocus = currentlyFocusMode;
        previousRemainingMs = readRemainingMs();

        updateFocusStatistic();

        const currentDate = dateKey(new Date());
        const currentMinute = Math.floor(getTodayFocusMs() / 60000);

        if (
            currentMinute !== lastRenderedMinute ||
            currentDate !== lastRenderedDate
        ) {
            renderWeeklyChart();

            lastRenderedMinute = currentMinute;
            lastRenderedDate = currentDate;
        }
    }

    // -----------------------------------------------
    // INITIALIZE DASHBOARD
    // -----------------------------------------------

    updateFocusStatistic();
    renderWeeklyChart();

    lastRenderedMinute = Math.floor(getTodayFocusMs() / 60000);

    setInterval(trackFocusTime, 1000);

    console.log("NEXORA productivity dashboard is ready.");
})();
// ============================================
// NEXORA — WORKING SIDEBAR NAVIGATION
// ============================================

(() => {
    const navButtons = document.querySelectorAll(".nav-item[data-page]");
    const pageTitle = document.getElementById("page-title");
    const viewAllButton = document.getElementById("view-all-button");

    const welcome = document.querySelector(".welcome-card");
    const stats = document.querySelector(".stats-grid");
    const contentGrid = document.querySelector(".content-grid:not(.lower-grid)");
    const lowerGrid = document.querySelector(".lower-grid");

    const tasksPanel = document.getElementById("tasks-panel");
    const focusPanel = document.querySelector(".focus-panel");
    const notesPanel = document.getElementById("notes-panel");
    const goalsPanel = document.getElementById("goals-panel");

    const pageNames = {
        overview: "Overview",
        tasks: "My Tasks",
        focus: "Focus Room",
        notes: "My Notes",
        goals: "My Goals"
    };

    // Hide sections without deleting their contents.
    const style = document.createElement("style");

    style.textContent = `
        .nexora-nav-hidden {
            display: none !important;
        }
    `;

    document.head.appendChild(style);

    function setVisible(element, visible) {
        if (!element) return;

        element.classList.toggle(
            "nexora-nav-hidden",
            !visible
        );
    }

    function navigateTo(page) {
        if (!pageNames[page]) return;

        history.replaceState(null, "", `#${page}`);

        document.querySelectorAll(".nexora-calendar-hidden").forEach(element => {
            element.classList.remove("nexora-calendar-hidden");
        });

        // Update the active sidebar button.
        navButtons.forEach(button => {
            const active = button.dataset.page === page;

            button.classList.toggle("active", active);
            button.setAttribute(
                "aria-current",
                active ? "page" : "false"
            );
        });

        // Update the heading while keeping its accent dot.
        if (pageTitle) {
            const textNode = Array.from(pageTitle.childNodes)
                .find(node => node.nodeType === Node.TEXT_NODE);

            if (textNode) {
                textNode.nodeValue = pageNames[page];
            }
        }

        // Reset section visibility.
        setVisible(welcome, false);
        setVisible(stats, false);
        setVisible(contentGrid, false);
        setVisible(lowerGrid, false);

        setVisible(tasksPanel, false);
        setVisible(focusPanel, false);
        setVisible(notesPanel, false);
        setVisible(goalsPanel, false);

        // The planner is created dynamically.
        setVisible(
            document.getElementById("day-planner-panel"),
            false
        );

        setVisible(
            document.getElementById("weekly-focus-panel"),
            false
        );

        // Show the requested page.
        switch (page) {
            case "overview":
                setVisible(welcome, true);
                setVisible(stats, true);
                setVisible(contentGrid, true);
                setVisible(lowerGrid, true);

                setVisible(tasksPanel, true);
                setVisible(focusPanel, true);
                setVisible(notesPanel, true);
                setVisible(goalsPanel, true);

                setVisible(
                    document.getElementById("day-planner-panel"),
                    true
                );

                setVisible(
                    document.getElementById("weekly-focus-panel"),
                    true
                );

                if (contentGrid) contentGrid.style.display = "";
                if (lowerGrid) lowerGrid.style.display = "";

                break;

            case "tasks":
                setVisible(contentGrid, true);
                setVisible(tasksPanel, true);

                setVisible(
                    document.getElementById("day-planner-panel"),
                    true
                );

                if (contentGrid) {
                    contentGrid.style.display = "block";
                }

                break;

            case "focus":
                setVisible(contentGrid, true);
                setVisible(focusPanel, true);

                if (contentGrid) {
                    contentGrid.style.display = "block";
                }

                break;

            case "notes":
                setVisible(lowerGrid, true);
                setVisible(notesPanel, true);

                if (lowerGrid) {
                    lowerGrid.style.display = "block";
                }

                break;

            case "goals":
                setVisible(stats, true);
                setVisible(lowerGrid, true);
                setVisible(goalsPanel, true);

                setVisible(
                    document.getElementById("weekly-focus-panel"),
                    true
                );

                if (lowerGrid) {
                    lowerGrid.style.display = "block";
                }

                break;
        }

        // Return to the top of the page.
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }

    // Connect every sidebar button.
    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            navigateTo(button.dataset.page);
        });
    });

    // Connect "View all" to My Tasks.
    viewAllButton?.addEventListener("click", () => {
        navigateTo("tasks");
    });

    // Restore the selected page from the URL, defaulting to Overview.
    const initialPage = window.location.hash.slice(1);
    navigateTo(pageNames[initialPage] ? initialPage : "overview");

    console.log("NEXORA navigation is ready.");
})();
// ============================================
// NEXORA — MY GOALS TRACKER
// ============================================

(() => {
    const goalsPanel = document.getElementById("goals-panel");

    if (!goalsPanel) {
        console.error("NEXORA: Goals panel was not found.");
        return;
    }

    const STORAGE_KEY = "nexora-personal-goals";

    let goals = [];

    // ----------------------------------------
    // LOAD SAVED GOALS
    // ----------------------------------------

    try {
        const saved = JSON.parse(
            localStorage.getItem(STORAGE_KEY) || "[]"
        );

        if (Array.isArray(saved)) {
            goals = saved.filter(goal =>
                goal &&
                typeof goal.id === "string" &&
                typeof goal.title === "string" &&
                typeof goal.targetDate === "string"
            ).map(goal => ({
                id: goal.id,
                title: goal.title,
                targetDate: goal.targetDate,
                progress: Math.max(
                    0,
                    Math.min(100, Number(goal.progress) || 0)
                )
            }));
        }
    } catch (error) {
        console.error("Could not load goals:", error);
    }

    function saveGoals() {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(goals)
            );

            return true;
        } catch (error) {
            console.error("Could not save goals:", error);
            showMessage("Unable to save. Check your browser storage.");
            return false;
        }
    }

    // ----------------------------------------
    // CREATE THE GOALS INTERFACE
    // ----------------------------------------

    const container = document.createElement("section");
    container.id = "nexora-goals-tracker";

    container.style.cssText = `
        margin-top: 28px;
        padding-top: 24px;
        border-top: 1px solid var(--border, #393970);
    `;

    const heading = document.createElement("h3");
    heading.textContent = "My Personal Goals";

    const description = document.createElement("p");
    description.textContent =
        "Set meaningful goals, choose deadlines, and track your progress.";

    description.style.cssText = `
        margin: 8px 0 20px;
        color: var(--muted, #aaa2c0);
        font-size: 14px;
        line-height: 1.7;
    `;

    container.append(heading, description);

    // ----------------------------------------
    // ADD GOAL FORM
    // ----------------------------------------

    const form = document.createElement("form");

    form.style.cssText = `
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 12px;
        margin-bottom: 20px;
    `;

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "What do you want to achieve?";
    titleLabel.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 7px;
        color: var(--text, #ffffff);
    `;

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "e.g. Finish my Science revision";
    titleInput.maxLength = 120;
    titleInput.required = true;

    titleLabel.appendChild(titleInput);

    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Target date";
    dateLabel.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 7px;
        color: var(--text, #ffffff);
    `;

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.required = true;

    dateLabel.appendChild(dateInput);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "+ Add Goal";

    submitButton.style.cssText = `
        width: 100%;
        min-height: 44px;
        padding: 12px 18px;
        border: none;
        border-radius: 10px;
        background: linear-gradient(135deg, #a78bfa, #7755e8);
        color: #ffffff;
        font-weight: 700;
        cursor: pointer;
    `;

    form.append(titleLabel, dateLabel, submitButton);

    // ----------------------------------------
    // GOAL STATUS AND MESSAGE
    // ----------------------------------------

    const message = document.createElement("p");
    message.setAttribute("role", "status");
    message.setAttribute("aria-live", "polite");

    message.style.cssText = `
        min-height: 22px;
        margin-bottom: 12px;
        color: var(--green, #54d6a0);
        font-size: 13px;
    `;

    const goalsList = document.createElement("div");

    goalsList.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 14px;
    `;

    const summary = document.createElement("p");

    summary.style.cssText = `
        margin-bottom: 14px;
        color: var(--muted, #aaa2c0);
        font-size: 13px;
    `;

    container.append(form, message, summary, goalsList);
    goalsPanel.appendChild(container);

    // Set the minimum deadline to today's date.
    function localDateString(date = new Date()) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    dateInput.min = localDateString();

    function showMessage(text) {
        message.textContent = text;
    }

    function getGoalStatus(goal) {
        if (goal.progress >= 100) {
            return "Completed 🎉";
        }

        if (goal.targetDate < localDateString()) {
            return "Deadline passed";
        }

        if (goal.targetDate === localDateString()) {
            return "Due today";
        }

        const daysRemaining = Math.ceil(
            (
                new Date(goal.targetDate + "T12:00:00").getTime() -
                new Date(localDateString() + "T12:00:00").getTime()
            ) / 86400000
        );

        return `${daysRemaining} day${daysRemaining === 1 ? "" : "s"} remaining`;
    }

    function formatDeadline(dateString) {
        return new Date(
            dateString + "T12:00:00"
        ).toLocaleDateString(undefined, {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    }

    // ----------------------------------------
    // RENDER ALL GOALS
    // ----------------------------------------

    function renderGoals() {
        goalsList.replaceChildren();

        const completed = goals.filter(
            goal => goal.progress >= 100
        ).length;

        summary.textContent = goals.length
            ? `${completed} of ${goals.length} goals completed`
            : "You haven't added any goals yet.";

        if (goals.length === 0) {
            const empty = document.createElement("div");

            empty.textContent =
                "Your next achievement starts with one small goal.";

            empty.style.cssText = `
                padding: 22px 14px;
                border: 1px dashed var(--border, #393970);
                border-radius: 12px;
                color: var(--muted, #aaa2c0);
                text-align: center;
                line-height: 1.7;
            `;

            goalsList.appendChild(empty);
            return;
        }

        goals.forEach(goal => {
            const card = document.createElement("article");

            card.style.cssText = `
                min-width: 0;
                padding: 17px;
                border: 1px solid var(--border, #393970);
                border-radius: 13px;
                background: rgba(255, 255, 255, 0.025);
            `;

            const title = document.createElement("h4");
            title.textContent = goal.title;

            title.style.cssText = `
                margin-bottom: 8px;
                color: var(--text, #ffffff);
                overflow-wrap: anywhere;
                font-size: 16px;
            `;

            const deadline = document.createElement("p");
            deadline.textContent =
                `Target: ${formatDeadline(goal.targetDate)} · ${getGoalStatus(goal)}`;

            deadline.style.cssText = `
                margin-bottom: 15px;
                color: var(--muted, #aaa2c0);
                font-size: 12px;
                line-height: 1.7;
            `;

            const progressHeader = document.createElement("div");

            progressHeader.style.cssText = `
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 10px;
                margin-bottom: 8px;
                color: var(--text, #ffffff);
                font-size: 13px;
            `;

            const progressLabel = document.createElement("label");
            progressLabel.textContent = "Progress";
            progressLabel.style.margin = "0";

            const percent = document.createElement("span");
            percent.textContent = `${goal.progress}%`;

            progressHeader.append(progressLabel, percent);

            const progressTrack = document.createElement("div");

            progressTrack.style.cssText = `
                width: 100%;
                height: 9px;
                overflow: hidden;
                background: rgba(155, 123, 255, 0.14);
                border-radius: 999px;
            `;

            const progressBar = document.createElement("div");

            progressBar.style.cssText = `
                width: ${goal.progress}%;
                height: 100%;
                background: linear-gradient(90deg, #9b7bff, #c4b5fd);
                border-radius: 999px;
                transition: width 0.2s ease;
            `;

            progressTrack.appendChild(progressBar);

            const sliderLabel = document.createElement("label");
            sliderLabel.textContent = "Update progress";
            sliderLabel.style.cssText = `
                display: block;
                margin: 15px 0 5px;
                color: var(--muted, #aaa2c0);
                font-size: 12px;
            `;

            const slider = document.createElement("input");

            slider.type = "range";
            slider.min = "0";
            slider.max = "100";
            slider.step = "5";
            slider.value = String(goal.progress);

            slider.setAttribute(
                "aria-label",
                `Progress for ${goal.title}`
            );

            slider.style.cssText = `
                width: 100%;
                accent-color: #a78bfa;
                cursor: pointer;
            `;

            sliderLabel.appendChild(slider);

            // Save progress while the slider moves.
            slider.addEventListener("input", () => {
                const newProgress = Number(slider.value);

                goal.progress = newProgress;

                percent.textContent = `${newProgress}%`;
                progressBar.style.width = `${newProgress}%`;
                deadline.textContent =
                    `Target: ${formatDeadline(goal.targetDate)} · ${getGoalStatus(goal)}`;

                const allGoalsCompleted = goals.every(
                    item => item.progress >= 100
                );

                summary.textContent =
                    `${goals.filter(item => item.progress >= 100).length} of ${goals.length} goals completed`;

                if (saveGoals()) {
                    showMessage(
                        newProgress === 100
                            ? "Goal completed! Congratulations! 🎉"
                            : "Progress saved automatically."
                    );
                }

                if (allGoalsCompleted) {
                    summary.textContent =
                        `All ${goals.length} goals completed! 🎉`;
                }
            });

            const actions = document.createElement("div");

            actions.style.cssText = `
                display: flex;
                flex-wrap: wrap;
                gap: 9px;
                margin-top: 12px;
            `;

            const completeButton = document.createElement("button");
            completeButton.type = "button";
            completeButton.textContent =
                goal.progress >= 100
                    ? "✓ Completed"
                    : "Mark complete";

            completeButton.disabled = goal.progress >= 100;

            completeButton.style.cssText = `
                flex: 1;
                min-height: 40px;
                padding: 9px 12px;
                border: 1px solid var(--border, #393970);
                border-radius: 9px;
                background: rgba(84, 214, 160, 0.08);
                color: var(--green, #54d6a0);
                cursor: pointer;
                opacity: ${goal.progress >= 100 ? "0.65" : "1"};
            `;

            completeButton.addEventListener("click", () => {
                goal.progress = 100;
                saveGoals();
                renderGoals();
                showMessage("Goal completed! Congratulations! 🎉");
            });

            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.textContent = "Delete";

            deleteButton.style.cssText = `
                min-height: 40px;
                padding: 9px 14px;
                border: 1px solid rgba(251, 113, 133, 0.3);
                border-radius: 9px;
                background: rgba(251, 113, 133, 0.08);
                color: #fb7185;
                cursor: pointer;
            `;

            deleteButton.addEventListener("click", () => {
                goals = goals.filter(item => item.id !== goal.id);

                if (saveGoals()) {
                    renderGoals();
                    showMessage("Goal deleted.");
                }
            });

            actions.append(completeButton, deleteButton);

            card.append(
                title,
                deadline,
                progressHeader,
                progressTrack,
                sliderLabel,
                actions
            );

            goalsList.appendChild(card);
        });
    }

    // ----------------------------------------
    // ADD A NEW GOAL
    // ----------------------------------------

    form.addEventListener("submit", event => {
        event.preventDefault();

        const title = titleInput.value.trim();
        const targetDate = dateInput.value;

        if (!title) {
            showMessage("Please enter a goal.");
            titleInput.focus();
            return;
        }

        if (!targetDate || targetDate < localDateString()) {
            showMessage("Please choose today or a future date.");
            dateInput.focus();
            return;
        }

        goals.push({
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            title,
            targetDate,
            progress: 0
        });

        if (!saveGoals()) {
            goals.pop();
            return;
        }

        form.reset();
        dateInput.min = localDateString();

        renderGoals();
        showMessage("Your new goal has been saved! ✓");
    });

    // Update statuses when returning to the page.
    document.addEventListener("visibilitychange", () => {
        if (!document.hidden) {
            renderGoals();
        }
    });

    renderGoals();

    console.log("NEXORA Goals Tracker is ready.");
})();
// ======================================================
// NEXORA — INTERACTIVE CALENDAR AND TASK DEADLINES
// ======================================================

(() => {
    if (window.__nexoraCalendarInitialized) return;
    window.__nexoraCalendarInitialized = true;

    const main = document.querySelector(".main-content");
    const footer = main?.querySelector("footer");
    const pageTitle = document.getElementById("page-title");
    const taskFormElement = document.getElementById("task-form");
    const taskInputElement = document.getElementById("task-input");
    const tasksContainer = document.getElementById("task-list");
    const toastElement = document.getElementById("toast");

    if (!main || typeof tasks === "undefined") {
        console.error("NEXORA Calendar: required elements were not found.");
        return;
    }

    // --------------------------------------------------
    // HELPERS
    // --------------------------------------------------

    function dateKey(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    function makeElement(tag, text, css = "") {
        const element = document.createElement(tag);

        if (text !== undefined && text !== null) {
            element.textContent = text;
        }

        if (css) {
            element.style.cssText = css;
        }

        return element;
    }

    function showMessage(message) {
        if (!toastElement) return;

        toastElement.textContent = message;
        toastElement.classList.add("visible");

        window.clearTimeout(showMessage.timeout);

        showMessage.timeout = window.setTimeout(() => {
            toastElement.classList.remove("visible");
        }, 3000);
    }

    function saveTaskChanges() {
        try {
            saveTasks();
            renderTasks();
            renderCalendar();
            return true;
        } catch (error) {
            console.error("Could not save calendar task changes:", error);
            showMessage("Unable to save your changes.");
            return false;
        }
    }

    // --------------------------------------------------
    // ADD A DEADLINE FIELD TO THE EXISTING TASK FORM
    // --------------------------------------------------

    let deadlineInput = document.getElementById("task-deadline-input");

    if (taskFormElement && taskInputElement && !deadlineInput) {
        const deadlineLabel = makeElement(
            "label",
            "Deadline (optional)",
            `
                display: flex;
                flex-direction: column;
                gap: 4px;
                flex: 0 0 175px;
                min-width: 0;
                color: var(--muted, #aaa2c0);
                font-size: 11px;
            `
        );

        deadlineInput = document.createElement("input");
        deadlineInput.type = "date";
        deadlineInput.id = "task-deadline-input";
        deadlineInput.setAttribute("aria-label", "Task deadline");
        deadlineInput.title = "Optional task deadline";

        deadlineInput.style.cssText = `
            width: 100%;
            min-width: 0;
            padding: 10px;
            font-size: 13px;
        `;

        deadlineLabel.appendChild(deadlineInput);

        const submitButton = taskFormElement.querySelector(
            'button[type="submit"], button:not([type])'
        );

        if (submitButton) {
            taskFormElement.insertBefore(deadlineLabel, submitButton);
        } else {
            taskFormElement.appendChild(deadlineLabel);
        }

        // Retain the existing form layout on larger screens.
        const taskFormStyle = document.createElement("style");

        taskFormStyle.textContent = `
            @media (max-width: 600px) {
                #task-form label {
                    flex-basis: auto !important;
                    width: 100%;
                }
            }
        `;

        document.head.appendChild(taskFormStyle);
    }

    // The existing task form resets after adding a task.
    // Capture the deadline before that reset occurs.
    let pendingSubmission = null;

    taskFormElement?.addEventListener("submit", event => {
        pendingSubmission = null;

        const text = taskInputElement?.value.trim();

        if (!text) return;

        pendingSubmission = {
            text,
            dueDate: deadlineInput?.value || "",
            previousCount: tasks.length
        };
    }, true);

    // The original task handler runs before this additional
    // listener, so the newly created task can be updated here.
    taskFormElement?.addEventListener("submit", () => {
        if (!pendingSubmission) return;

        const submission = pendingSubmission;
        pendingSubmission = null;

        const newTask = tasks[tasks.length - 1];

        if (
            tasks.length <= submission.previousCount ||
            !newTask ||
            newTask.text !== submission.text
        ) {
            return;
        }

        newTask.dueDate = submission.dueDate;

        if (deadlineInput) {
            deadlineInput.value = "";
        }

        saveTasks();
        renderTasks();
        renderCalendar();
    });

    // --------------------------------------------------
    // CALENDAR NAVIGATION BUTTON
    // --------------------------------------------------

    const nav = document.querySelector(".sidebar nav");

    const calendarButton = makeElement(
        "button",
        null
    );

    calendarButton.type = "button";
    calendarButton.className = "nav-item";
    calendarButton.dataset.page = "calendar";
    calendarButton.setAttribute("aria-label", "Open Calendar");

    calendarButton.append(
        document.createTextNode("▦ "),
        makeElement("span", "Calendar")
    );

    if (nav && !nav.querySelector('[data-page="calendar"]')) {
        const tasksButton = nav.querySelector('[data-page="tasks"]');

        if (tasksButton) {
            tasksButton.insertAdjacentElement("afterend", calendarButton);
        } else {
            nav.appendChild(calendarButton);
        }
    }

    // --------------------------------------------------
    // BUILD THE CALENDAR PAGE
    // --------------------------------------------------

    const calendarPanel = makeElement("section");

    calendarPanel.id = "nexora-calendar-panel";

    calendarPanel.style.cssText = `
        margin-bottom: 28px;
        padding: clamp(16px, 3vw, 28px);
        background: var(--surface, #1a1426);
        border: 1px solid var(--border, #393970);
        border-radius: 18px;
        color: var(--text, #ffffff);
    `;

    const calendarHeader = makeElement("div", null, `
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 15px;
        margin-bottom: 22px;
    `);

    const calendarHeadingGroup = makeElement("div");

    calendarHeadingGroup.append(
        makeElement("p", "PLAN AHEAD", `
            color: var(--muted, #aaa2c0);
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1.5px;
            margin-bottom: 6px;
        `),
        makeElement("h2", "Your Calendar", `
            color: var(--text, #ffffff);
            margin: 0;
            font-size: 26px;
        `)
    );

    const monthControls = makeElement("div", null, `
        display: flex;
        align-items: center;
        gap: 9px;
    `);

    function createCalendarButton(label, accessibleName) {
        const button = makeElement("button", label, `
            min-width: 42px;
            min-height: 42px;
            padding: 8px 12px;
            border: 1px solid var(--border, #393970);
            border-radius: 10px;
            background: var(--surface-light, #241b35);
            color: var(--text, #ffffff);
            cursor: pointer;
        `);

        button.type = "button";
        button.setAttribute("aria-label", accessibleName);

        return button;
    }

    const previousMonthButton = createCalendarButton(
        "←",
        "Previous month"
    );

    const monthLabel = makeElement("h3", "", `
        min-width: 140px;
        margin: 0;
        text-align: center;
        color: var(--text, #ffffff);
        font-size: 16px;
    `);

    const nextMonthButton = createCalendarButton(
        "→",
        "Next month"
    );

    const todayButton = createCalendarButton(
        "Today",
        "Go to today"
    );

    monthControls.append(
        previousMonthButton,
        monthLabel,
        nextMonthButton,
        todayButton
    );

    calendarHeader.append(calendarHeadingGroup, monthControls);

    const legend = makeElement("p", "● Task deadline     ✓ Completed task", `
        margin-bottom: 14px;
        color: var(--muted, #aaa2c0);
        font-size: 12px;
    `);

    const calendarGrid = makeElement("div");

    calendarGrid.id = "nexora-calendar-grid";

    calendarGrid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        gap: 7px;
    `;

    const selectedDayPanel = makeElement("section", null, `
        margin-top: 28px;
        padding-top: 22px;
        border-top: 1px solid var(--border, #393970);
    `);

    selectedDayPanel.id = "nexora-selected-day";

    const unscheduledPanel = makeElement("section", null, `
        margin-top: 28px;
        padding-top: 22px;
        border-top: 1px solid var(--border, #393970);
    `);

    unscheduledPanel.id = "nexora-unscheduled-tasks";

    calendarPanel.append(
        calendarHeader,
        legend,
        calendarGrid,
        selectedDayPanel,
        unscheduledPanel
    );

    if (footer) {
        footer.insertAdjacentElement("beforebegin", calendarPanel);
    } else {
        main.appendChild(calendarPanel);
    }

    // Hide the calendar initially.
    const hiddenStyle = document.createElement("style");

    hiddenStyle.textContent = `
        .nexora-calendar-hidden {
            display: none !important;
        }

        #nexora-calendar-grid button:focus-visible {
            outline: 2px solid var(--purple, #9b7bff);
            outline-offset: 2px;
        }
    `;

    document.head.appendChild(hiddenStyle);

    calendarPanel.classList.add("nexora-calendar-hidden");

    // --------------------------------------------------
    // CALENDAR STATE
    // --------------------------------------------------

    const today = new Date();
    today.setHours(12, 0, 0, 0);

    let currentMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        1,
        12
    );

    let selectedDate = new Date(today);

    function getTasksForDate(key) {
        return tasks.filter(task => task.dueDate === key);
    }

    function formatDateLong(date) {
        return date.toLocaleDateString(undefined, {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }

    function formatDateShort(key) {
        if (!key) return "No deadline";

        const date = new Date(`${key}T12:00:00`);

        if (Number.isNaN(date.getTime())) {
            return "Invalid date";
        }

        return date.toLocaleDateString(undefined, {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    }

    function makeActionButton(text, background, color) {
        const button = makeElement("button", text, `
            min-height: 38px;
            padding: 8px 12px;
            border: 1px solid var(--border, #393970);
            border-radius: 9px;
            background: ${background};
            color: ${color};
            cursor: pointer;
            font-size: 12px;
            font-weight: 600;
        `);

        button.type = "button";

        return button;
    }

    // --------------------------------------------------
    // DRAW MONTH GRID
    // --------------------------------------------------

    function renderMonthGrid() {
        calendarGrid.replaceChildren();

        monthLabel.textContent = currentMonth.toLocaleDateString(
            undefined,
            {
                month: "long",
                year: "numeric"
            }
        );

        const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

        weekdays.forEach(day => {
            calendarGrid.appendChild(
                makeElement("div", day, `
                    padding: 6px 0;
                    text-align: center;
                    color: var(--muted, #aaa2c0);
                    font-size: 11px;
                    font-weight: 700;
                `)
            );
        });

        const firstOfMonth = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth(),
            1,
            12
        );

        // Convert Sunday-based JS numbering to Monday-based numbering.
        const mondayOffset = (firstOfMonth.getDay() + 6) % 7;

        const gridStart = new Date(firstOfMonth);
        gridStart.setDate(gridStart.getDate() - mondayOffset);

        for (let index = 0; index < 42; index++) {
            const date = new Date(gridStart);

            date.setDate(gridStart.getDate() + index);

            const key = dateKey(date);
            const isCurrentMonth =
                date.getMonth() === currentMonth.getMonth();

            const isToday = key === dateKey(today);
            const isSelected = key === dateKey(selectedDate);
            const dayTasks = getTasksForDate(key);

            const button = makeElement("button");

            button.type = "button";
            button.setAttribute(
                "aria-label",
                `${formatDateLong(date)}, ${dayTasks.length} task${dayTasks.length === 1 ? "" : "s"}`
            );

            button.setAttribute(
                "aria-pressed",
                String(isSelected)
            );

            button.style.cssText = `
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                gap: 5px;
                min-width: 0;
                min-height: 76px;
                padding: 9px 2px 6px;
                border: 1px solid ${isSelected
                    ? "var(--purple, #9b7bff)"
                    : isToday
                        ? "rgba(155, 123, 255, 0.55)"
                        : "var(--border, #393970)"};
                border-radius: 10px;
                background: ${isSelected
                    ? "rgba(155, 123, 255, 0.22)"
                    : "rgba(255, 255, 255, 0.02)"};
                color: ${isCurrentMonth
                    ? "var(--text, #ffffff)"
                    : "var(--muted, #aaa2c0)"};
                cursor: pointer;
                opacity: ${isCurrentMonth ? "1" : "0.55"};
            `;

            const dayNumber = makeElement(
                "span",
                String(date.getDate()),
                `
                    font-size: 13px;
                    font-weight: ${isToday || isSelected ? "700" : "500"};
                `
            );

            button.appendChild(dayNumber);

            if (dayTasks.length > 0) {
                const completed = dayTasks.filter(
                    task => task.completed
                ).length;

                const marker = makeElement(
                    "span",
                    completed === dayTasks.length
                        ? "✓ Done"
                        : `● ${dayTasks.length}`,
                    `
                        max-width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-size: 10px;
                        font-weight: 600;
                        color: ${completed === dayTasks.length
                            ? "#54d6a0"
                            : "#c4b5fd"};
                    `
                );

                button.appendChild(marker);
            }

            button.addEventListener("click", () => {
                selectedDate = new Date(date);
                selectedDate.setHours(12, 0, 0, 0);

                if (!isCurrentMonth) {
                    currentMonth = new Date(
                        date.getFullYear(),
                        date.getMonth(),
                        1,
                        12
                    );
                }

                renderCalendar();
            });

            calendarGrid.appendChild(button);
        }
    }

    // --------------------------------------------------
    // DRAW TASKS FOR THE SELECTED DATE
    // --------------------------------------------------

    function renderSelectedDay() {
        selectedDayPanel.replaceChildren();

        selectedDayPanel.appendChild(
            makeElement("h3", formatDateLong(selectedDate), `
                margin-bottom: 8px;
                color: var(--text, #ffffff);
                font-size: 18px;
            `)
        );

        const key = dateKey(selectedDate);
        const dayTasks = getTasksForDate(key);

        selectedDayPanel.appendChild(
            makeElement(
                "p",
                `${dayTasks.length} task${dayTasks.length === 1 ? "" : "s"} scheduled`,
                `
                    margin-bottom: 18px;
                    color: var(--muted, #aaa2c0);
                    font-size: 13px;
                `
            )
        );

        if (dayTasks.length === 0) {
            selectedDayPanel.appendChild(
                makeElement("p", "Nothing scheduled for this day yet.", `
                    padding: 15px;
                    border: 1px dashed var(--border, #393970);
                    border-radius: 10px;
                    color: var(--muted, #aaa2c0);
                    font-size: 13px;
                `)
            );
        }

        dayTasks.forEach(task => {
            const row = makeElement("article", null, `
                display: flex;
                flex-direction: column;
                gap: 12px;
                margin-bottom: 12px;
                padding: 15px;
                border: 1px solid var(--border, #393970);
                border-radius: 12px;
                background: rgba(255, 255, 255, 0.025);
            `);

            const taskTitle = makeElement(
                "div",
                `${task.completed ? "✓ " : ""}${task.text}`,
                `
                    color: ${task.completed
                        ? "var(--muted, #aaa2c0)"
                        : "var(--text, #ffffff)"};
                    font-weight: 600;
                    overflow-wrap: anywhere;
                    ${task.completed ? "text-decoration: line-through;" : ""}
                `
            );

            const deadlineControls = makeElement("div", null, `
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 8px;
            `);

            const dateEdit = document.createElement("input");

            dateEdit.type = "date";
            dateEdit.value = task.dueDate || "";
            dateEdit.setAttribute(
                "aria-label",
                `Change deadline for ${task.text}`
            );

            dateEdit.style.cssText = `
                flex: 1 1 155px;
                min-width: 0;
                padding: 9px;
                font-size: 12px;
            `;

            const saveDateButton = makeActionButton(
                "Save deadline",
                "rgba(155, 123, 255, 0.14)",
                "#c4b5fd"
            );

            saveDateButton.addEventListener("click", () => {
                task.dueDate = dateEdit.value;

                if (saveTaskChanges()) {
                    showMessage(
                        task.dueDate
                            ? "Task deadline updated!"
                            : "Task deadline removed."
                    );
                }
            });

            const completionButton = makeActionButton(
                task.completed ? "Reopen task" : "Mark complete",
                "rgba(84, 214, 160, 0.09)",
                "#54d6a0"
            );

            completionButton.addEventListener("click", () => {
                task.completed = !task.completed;

                if (saveTaskChanges()) {
                    showMessage(
                        task.completed
                            ? "Task completed! ✓"
                            : "Task reopened."
                    );
                }
            });

            deadlineControls.append(
                dateEdit,
                saveDateButton,
                completionButton
            );

            row.append(taskTitle, deadlineControls);
            selectedDayPanel.appendChild(row);
        });

        // Quick-add form for the selected calendar date.
        const addForm = document.createElement("form");

        addForm.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 18px;
        `;

        const newTaskInput = document.createElement("input");

        newTaskInput.type = "text";
        newTaskInput.maxLength = 120;
        newTaskInput.placeholder = "Add a task for this day...";
        newTaskInput.required = true;
        newTaskInput.setAttribute(
            "aria-label",
            "New task for selected date"
        );

        newTaskInput.style.cssText = `
            flex: 1 1 200px;
            min-width: 0;
        `;

        const addTaskButton = makeActionButton(
            "+ Add task",
            "linear-gradient(135deg, #a78bfa, #7755e8)",
            "#ffffff"
        );

        addTaskButton.style.flex = "0 0 auto";
        addTaskButton.style.padding = "10px 18px";

        addForm.append(newTaskInput, addTaskButton);

        addForm.addEventListener("submit", event => {
            event.preventDefault();

            const text = newTaskInput.value.trim();

            if (!text) return;

            tasks.push({
                id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
                text,
                completed: false,
                dueDate: key
            });

            if (saveTaskChanges()) {
                showMessage("Task added to your calendar! ✓");
            }
        });

        selectedDayPanel.appendChild(addForm);
    }

    // --------------------------------------------------
    // DRAW TASKS THAT DO NOT HAVE A DEADLINE
    // --------------------------------------------------

    function renderUnscheduledTasks() {
        unscheduledPanel.replaceChildren();

        unscheduledPanel.appendChild(
            makeElement("h3", "Tasks without a deadline", `
                margin-bottom: 8px;
                color: var(--text, #ffffff);
                font-size: 18px;
            `)
        );

        unscheduledPanel.appendChild(
            makeElement(
                "p",
                "Assign a deadline to any existing task here.",
                `
                    margin-bottom: 16px;
                    color: var(--muted, #aaa2c0);
                    font-size: 13px;
                `
            )
        );

        const unscheduled = tasks.filter(
            task => !task.dueDate && !task.completed
        );

        if (unscheduled.length === 0) {
            unscheduledPanel.appendChild(
                makeElement("p", "All unfinished tasks have deadlines. Nice work!", `
                    color: var(--muted, #aaa2c0);
                    font-size: 13px;
                `)
            );

            return;
        }

        unscheduled.forEach(task => {
            const row = makeElement("div", null, `
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 10px;
                margin-bottom: 10px;
                padding: 12px;
                border: 1px solid var(--border, #393970);
                border-radius: 10px;
            `);

            const title = makeElement("span", task.text, `
                flex: 1 1 150px;
                min-width: 0;
                color: var(--text, #ffffff);
                font-size: 13px;
                overflow-wrap: anywhere;
            `);

            const dateInput = document.createElement("input");

            dateInput.type = "date";
            dateInput.value = dateKey(selectedDate);
            dateInput.setAttribute(
                "aria-label",
                `Set deadline for ${task.text}`
            );

            dateInput.style.cssText = `
                flex: 0 1 155px;
                min-width: 0;
                padding: 9px;
                font-size: 12px;
            `;

            const saveButton = makeActionButton(
                "Set deadline",
                "rgba(155, 123, 255, 0.14)",
                "#c4b5fd"
            );

            saveButton.addEventListener("click", () => {
                if (!dateInput.value) {
                    showMessage("Choose a deadline first.");
                    dateInput.focus();
                    return;
                }

                task.dueDate = dateInput.value;

                if (saveTaskChanges()) {
                    selectedDate = new Date(
                        `${task.dueDate}T12:00:00`
                    );

                    currentMonth = new Date(
                        selectedDate.getFullYear(),
                        selectedDate.getMonth(),
                        1,
                        12
                    );

                    renderCalendar();
                    showMessage("Deadline assigned successfully! ✓");
                }
            });

            row.append(title, dateInput, saveButton);
            unscheduledPanel.appendChild(row);
        });
    }

    // --------------------------------------------------
    // REFRESH THE CALENDAR
    // --------------------------------------------------

    function renderCalendar() {
        renderMonthGrid();
        renderSelectedDay();
        renderUnscheduledTasks();
    }

    previousMonthButton.addEventListener("click", () => {
        currentMonth = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth() - 1,
            1,
            12
        );

        renderCalendar();
    });

    nextMonthButton.addEventListener("click", () => {
        currentMonth = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth() + 1,
            1,
            12
        );

        renderCalendar();
    });

    todayButton.addEventListener("click", () => {
        selectedDate = new Date();
        selectedDate.setHours(12, 0, 0, 0);

        currentMonth = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            1,
            12
        );

        renderCalendar();
    });

    // --------------------------------------------------
    // CONNECT CALENDAR TO THE SIDEBAR
    // --------------------------------------------------

    function hideCalendarPage() {
        calendarPanel.classList.add("nexora-calendar-hidden");
        calendarButton.classList.remove("active");
        calendarButton.setAttribute("aria-current", "false");
    }

    function showCalendarPage() {
        document.querySelectorAll(".nav-item[data-page]").forEach(button => {
            button.classList.remove("active");
            button.setAttribute("aria-current", "false");
        });

        calendarButton.classList.add("active");
        calendarButton.setAttribute("aria-current", "page");

        const textNode = pageTitle &&
            Array.from(pageTitle.childNodes).find(
                node => node.nodeType === Node.TEXT_NODE
            );

        if (textNode) {
            textNode.nodeValue = "Calendar";
        }

        // Hide the normal dashboard content.
        [
            ".welcome-card",
            ".stats-grid",
            ".content-grid",
            ".lower-grid",
            "#day-planner-panel",
            "#weekly-focus-panel"
        ].forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                element.classList.add("nexora-calendar-hidden");
            });
        });

        calendarPanel.classList.remove("nexora-calendar-hidden");

        renderCalendar();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    calendarButton.addEventListener("click", showCalendarPage);

    // When any existing sidebar section is selected, hide Calendar.
    document.querySelectorAll(
        '.nav-item[data-page]:not([data-page="calendar"])'
    ).forEach(button => {
        button.addEventListener("click", hideCalendarPage);
    });

    // Make View All hide Calendar when navigating to My Tasks.
    document.getElementById("view-all-button")?.addEventListener(
        "click",
        hideCalendarPage
    );

    // Keep the calendar accurate when a task is completed or deleted
    // using the existing task list.
    tasksContainer?.addEventListener("change", () => {
        renderCalendar();
    });

    tasksContainer?.addEventListener("click", () => {
        renderCalendar();
    });

    renderCalendar();

    console.log("NEXORA Calendar is ready.");
})();
// =============================================
// NEXORA — LEVEL UP, XP, STREAKS & ACHIEVEMENTS
// =============================================

(() => {
    if (window.__nexoraLevelUpInitialized) return;
    window.__nexoraLevelUpInitialized = true;

    const STORAGE_KEY = "nexora-level-up-v1";
    const SESSION_KEY = "nexora-focus-timer";

    const statsGrid = document.querySelector(".stats-grid");
    const sessionCounter = document.getElementById("session-count");
    const toast = document.getElementById("toast");

    if (!statsGrid) {
        console.error("NEXORA Level Up: dashboard not found.");
        return;
    }

    function localDateKey(date = new Date()) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    function safeLoad() {
        try {
            const saved = JSON.parse(
                localStorage.getItem(STORAGE_KEY) || "null"
            );

            if (!saved || typeof saved !== "object") {
                return null;
            }

            return saved;
        } catch (error) {
            console.warn("Could not load Level Up data:", error);
            return null;
        }
    }

    const previousData = safeLoad();

    const data = {
        xp: Math.max(0, Number(previousData?.xp) || 0),

        rewardedTaskIds: Array.isArray(previousData?.rewardedTaskIds)
            ? previousData.rewardedTaskIds.filter(
                id => typeof id === "string"
            )
            : [],

        focusSessionsRewarded: Math.max(
            0,
            Number(previousData?.focusSessionsRewarded) || 0
        ),

        lastProcessedSessions:
            Number.isInteger(previousData?.lastProcessedSessions)
                ? previousData.lastProcessedSessions
                : null,

        activityDates: Array.isArray(previousData?.activityDates)
            ? previousData.activityDates.filter(
                date => typeof date === "string"
            )
            : [],

        unlockedBadges: Array.isArray(previousData?.unlockedBadges)
            ? previousData.unlockedBadges.filter(
                badge => typeof badge === "string"
            )
            : []
    };

    function saveData() {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(data)
            );

            return true;
        } catch (error) {
            console.warn("Could not save Level Up data:", error);
            return false;
        }
    }

    function showToast(message) {
        if (!toast) return;

        toast.textContent = message;
        toast.classList.add("visible");

        clearTimeout(showToast.timeout);

        showToast.timeout = setTimeout(() => {
            toast.classList.remove("visible");
        }, 3000);
    }

    // -----------------------------------------
    // DAILY STREAK
    // -----------------------------------------

    function recordActivity() {
        const today = localDateKey();

        if (!data.activityDates.includes(today)) {
            data.activityDates.push(today);
        }

        // Keep the stored history within reasonable limits.
        data.activityDates = [
            ...new Set(data.activityDates)
        ].sort().slice(-400);
    }

    function getCurrentStreak() {
        const activeDates = new Set(data.activityDates);
        const today = new Date();
        today.setHours(12, 0, 0, 0);

        // A streak can remain active through yesterday.
        if (!activeDates.has(localDateKey(today))) {
            today.setDate(today.getDate() - 1);

            if (!activeDates.has(localDateKey(today))) {
                return 0;
            }
        }

        let streak = 0;

        while (activeDates.has(localDateKey(today))) {
            streak++;

            today.setDate(today.getDate() - 1);
        }

        return streak;
    }

    // -----------------------------------------
    // ACHIEVEMENTS
    // -----------------------------------------

    const badges = [
        {
            id: "first-task",
            icon: "🌱",
            name: "First Steps",
            description: "Complete your first task.",
            unlocked: () => data.rewardedTaskIds.length >= 1
        },
        {
            id: "five-tasks",
            icon: "⚔️",
            name: "Task Champion",
            description: "Complete five different tasks.",
            unlocked: () => data.rewardedTaskIds.length >= 5
        },
        {
            id: "first-focus",
            icon: "🎯",
            name: "Focus Starter",
            description: "Finish your first focus session.",
            unlocked: () => data.focusSessionsRewarded >= 1
        },
        {
            id: "five-focus",
            icon: "🧠",
            name: "Focus Hero",
            description: "Finish five focus sessions.",
            unlocked: () => data.focusSessionsRewarded >= 5
        },
        {
            id: "three-day-streak",
            icon: "🔥",
            name: "On a Roll",
            description: "Be active for three consecutive days.",
            unlocked: () => getCurrentStreak() >= 3
        }
    ];

    // -----------------------------------------
    // BUILD THE LEVEL UP CARD
    // -----------------------------------------

    const panel = document.createElement("section");

    panel.id = "nexora-level-up";
    panel.className = "panel";

    panel.style.cssText = `
        margin: 24px 0;
        padding: 24px;
        background: linear-gradient(145deg, #19152f, #11101f);
        border: 1px solid #393056;
        border-radius: 18px;
        color: #ffffff;
    `;

    const heading = document.createElement("h2");
    heading.textContent = "⚡ Level Up";

    heading.style.cssText = `
        margin-bottom: 7px;
        color: #ffffff;
        font-size: 24px;
    `;

    const subtitle = document.createElement("p");

    subtitle.textContent =
        "Every small win takes you one step further.";

    subtitle.style.cssText = `
        margin-bottom: 22px;
        color: #aaa2c0;
        font-size: 13px;
        line-height: 1.7;
    `;

    const overview = document.createElement("div");

    overview.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 12px;
        margin-bottom: 22px;
    `;

    function createStat(label, id) {
        const card = document.createElement("div");

        card.style.cssText = `
            padding: 16px;
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid #302747;
            border-radius: 12px;
        `;

        const value = document.createElement("div");
        value.id = id;

        value.style.cssText = `
            color: #c4b5fd;
            font-size: 25px;
            font-weight: 700;
            overflow-wrap: anywhere;
        `;

        const caption = document.createElement("p");
        caption.textContent = label;

        caption.style.cssText = `
            margin-top: 5px;
            color: #aaa2c0;
            font-size: 12px;
        `;

        card.append(value, caption);

        return card;
    }

    overview.append(
        createStat("Current level", "nexora-level-number"),
        createStat("Total XP earned", "nexora-total-xp"),
        createStat("Daily streak", "nexora-streak-count")
    );

    const levelMessage = document.createElement("p");
    levelMessage.id = "nexora-level-message";

    levelMessage.style.cssText = `
        margin-bottom: 10px;
        color: #e9ddff;
        font-size: 13px;
        font-weight: 600;
    `;

    const progressTrack = document.createElement("div");

    progressTrack.style.cssText = `
        width: 100%;
        height: 12px;
        overflow: hidden;
        background: #302747;
        border-radius: 999px;
    `;

    const progressFill = document.createElement("div");

    progressFill.id = "nexora-xp-progress";

    progressFill.style.cssText = `
        width: 0%;
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(90deg, #8b5cf6, #c4b5fd);
        transition: width 0.35s ease;
    `;

    progressTrack.appendChild(progressFill);

    const progressCaption = document.createElement("p");
    progressCaption.id = "nexora-xp-caption";

    progressCaption.style.cssText = `
        margin-top: 9px;
        color: #aaa2c0;
        font-size: 12px;
    `;

    const badgeHeading = document.createElement("h3");
    badgeHeading.textContent = "🏆 Achievements";

    badgeHeading.style.cssText = `
        margin: 26px 0 13px;
        color: #ffffff;
        font-size: 17px;
    `;

    const badgeGrid = document.createElement("div");

    badgeGrid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
    `;

    panel.append(
        heading,
        subtitle,
        overview,
        levelMessage,
        progressTrack,
        progressCaption,
        badgeHeading,
        badgeGrid
    );

    // Place the panel below the main statistics cards.
    statsGrid.insertAdjacentElement("afterend", panel);

    // -----------------------------------------
    // NAVIGATION INTEGRATION
    // -----------------------------------------

    function updatePanelVisibility(page) {
        panel.style.display = page === "overview" ? "" : "none";
    }

    document.querySelectorAll(".nav-item[data-page]").forEach(button => {
        button.addEventListener("click", () => {
            updatePanelVisibility(button.dataset.page);
        });
    });

    document.getElementById("view-all-button")?.addEventListener(
        "click",
        () => updatePanelVisibility("tasks")
    );

    const currentActivePage = document.querySelector(
        '.nav-item.active[data-page]'
    );

    updatePanelVisibility(currentActivePage?.dataset.page || "overview");

    // -----------------------------------------
    // REFRESH LEVEL, PROGRESS AND BADGES
    // -----------------------------------------

    function refreshUI(notifyNewBadges = false) {
        const level = Math.floor(data.xp / 100) + 1;
        const xpIntoLevel = data.xp % 100;
        const nextLevel = level + 1;

        document.getElementById("nexora-level-number").textContent =
            `LVL ${level}`;

        document.getElementById("nexora-total-xp").textContent =
            data.xp;

        document.getElementById("nexora-streak-count").textContent =
            `🔥 ${getCurrentStreak()}`;

        levelMessage.textContent =
            `Level ${level} · ${xpIntoLevel}/100 XP to Level ${nextLevel}`;

        progressFill.style.width = `${xpIntoLevel}%`;

        progressCaption.textContent =
            `${100 - xpIntoLevel} XP until your next level.`;

        badgeGrid.replaceChildren();

        const currentBadgeIds = [];

        badges.forEach(badge => {
            const isUnlocked = badge.unlocked();

            if (isUnlocked) {
                currentBadgeIds.push(badge.id);
            }

            const card = document.createElement("article");

            card.style.cssText = `
                padding: 14px;
                border: 1px solid ${isUnlocked ? "#6b579d" : "#302747"};
                border-radius: 12px;
                background: ${isUnlocked
                    ? "rgba(155, 123, 255, 0.12)"
                    : "rgba(255, 255, 255, 0.025)"};
                opacity: ${isUnlocked ? "1" : "0.58"};
            `;

            const icon = document.createElement("div");
            icon.textContent = isUnlocked ? badge.icon : "🔒";

            icon.style.cssText = `
                margin-bottom: 8px;
                font-size: 23px;
            `;

            const name = document.createElement("strong");
            name.textContent = badge.name;

            name.style.cssText = `
                display: block;
                color: #f5f3ff;
                font-size: 13px;
            `;

            const description = document.createElement("p");
            description.textContent = badge.description;

            description.style.cssText = `
                margin-top: 6px;
                color: #aaa2c0;
                font-size: 11px;
                line-height: 1.6;
            `;

            const status = document.createElement("span");
            status.textContent = isUnlocked ? "UNLOCKED" : "LOCKED";

            status.style.cssText = `
                display: inline-block;
                margin-top: 10px;
                color: ${isUnlocked ? "#c4b5fd" : "#aaa2c0"};
                font-size: 10px;
                font-weight: 700;
                letter-spacing: 0.8px;
            `;

            card.append(icon, name, description, status);
            badgeGrid.appendChild(card);
        });

        const newlyUnlocked = currentBadgeIds.filter(
            id => !data.unlockedBadges.includes(id)
        );

        data.unlockedBadges = currentBadgeIds;

        saveData();

        if (notifyNewBadges && newlyUnlocked.length > 0) {
            const badge = badges.find(
                item => item.id === newlyUnlocked[0]
            );

            if (badge) {
                showToast(`🏆 Badge unlocked: ${badge.name}!`);
            }
        }
    }

    // -----------------------------------------
    // EARN XP
    // -----------------------------------------

    function earnXP(amount, reason) {
        data.xp += amount;

        recordActivity();
        saveData();
        refreshUI(true);

        // The badge notification takes priority if a new
        // achievement was unlocked.
        const newBadge = badges.find(badge =>
            data.unlockedBadges.includes(badge.id) &&
            !earnXP.previousBadges?.includes(badge.id)
        );

        if (newBadge) {
            earnXP.previousBadges = [...data.unlockedBadges];
        } else {
            earnXP.previousBadges = [...data.unlockedBadges];
            showToast(`+${amount} XP — ${reason}`);
        }
    }

    // -----------------------------------------
    // REWARD TASK COMPLETIONS
    // -----------------------------------------

    document.addEventListener("change", event => {
        const checkbox = event.target;

        if (
            !(checkbox instanceof HTMLInputElement) ||
            checkbox.type !== "checkbox" ||
            checkbox.dataset.action !== "toggle" ||
            !checkbox.checked
        ) {
            return;
        }

        const taskItem = checkbox.closest("[data-task-id]");
        const taskId = taskItem?.dataset.taskId;

        if (!taskId) return;

        // The existing task handler updates the task first.
        // Check the result after all event handlers finish.
        setTimeout(() => {
            const task = tasks.find(item => item.id === taskId);

            if (
                !task ||
                !task.completed ||
                data.rewardedTaskIds.includes(taskId)
            ) {
                return;
            }

            data.rewardedTaskIds.push(taskId);

            earnXP(10, "Task completed!");
        }, 0);

    }, true);

    // -----------------------------------------
    // REWARD FOCUS SESSIONS
    // -----------------------------------------

    function getDisplayedSessionCount() {
        const value = Number(sessionCounter?.textContent);

        return Number.isInteger(value) && value >= 0
            ? value
            : 0;
    }

    function processSessionCount() {
        const currentCount = getDisplayedSessionCount();

        if (data.lastProcessedSessions === null) {
            // Start from the current count without granting XP
            // for focus sessions completed before this feature.
            data.lastProcessedSessions = currentCount;
            saveData();
            return;
        }

        if (currentCount < data.lastProcessedSessions) {
            data.lastProcessedSessions = currentCount;
            saveData();
            return;
        }

        const difference =
            currentCount - data.lastProcessedSessions;

        if (difference <= 0) return;

        data.lastProcessedSessions = currentCount;
        data.focusSessionsRewarded += difference;

        // Award 25 XP for each newly completed focus session.
        data.xp += difference * 25;

        recordActivity();
        saveData();
        refreshUI(true);

        if (difference === 1) {
            showToast("+25 XP — Focus session completed!");
        } else {
            showToast(`+${difference * 25} XP — Focus sessions completed!`);
        }
    }

    if (sessionCounter) {
        const observer = new MutationObserver(processSessionCount);

        observer.observe(sessionCounter, {
            childList: true,
            characterData: true,
            subtree: true
        });

        // Detect sessions that finished while the page was closed.
        processSessionCount();
    }

    // -----------------------------------------
    // INITIALIZE
    // -----------------------------------------

    refreshUI(false);

    // Display the current streak and XP on load.
    saveData();

    console.log("NEXORA Level Up is ready!");
})();
// =============================================
// NEXORA — LEVEL UP, XP, STREAKS & ACHIEVEMENTS
// =============================================

(() => {
    if (window.__nexoraLevelUpInitialized) return;
    window.__nexoraLevelUpInitialized = true;

    const STORAGE_KEY = "nexora-level-up-v1";
    const SESSION_KEY = "nexora-focus-timer";

    const statsGrid = document.querySelector(".stats-grid");
    const sessionCounter = document.getElementById("session-count");
    const toast = document.getElementById("toast");

    if (!statsGrid) {
        console.error("NEXORA Level Up: dashboard not found.");
        return;
    }

    function localDateKey(date = new Date()) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    function safeLoad() {
        try {
            const saved = JSON.parse(
                localStorage.getItem(STORAGE_KEY) || "null"
            );

            if (!saved || typeof saved !== "object") {
                return null;
            }

            return saved;
        } catch (error) {
            console.warn("Could not load Level Up data:", error);
            return null;
        }
    }

    const previousData = safeLoad();

    const data = {
        xp: Math.max(0, Number(previousData?.xp) || 0),

        rewardedTaskIds: Array.isArray(previousData?.rewardedTaskIds)
            ? previousData.rewardedTaskIds.filter(
                id => typeof id === "string"
            )
            : [],

        focusSessionsRewarded: Math.max(
            0,
            Number(previousData?.focusSessionsRewarded) || 0
        ),

        lastProcessedSessions:
            Number.isInteger(previousData?.lastProcessedSessions)
                ? previousData.lastProcessedSessions
                : null,

        activityDates: Array.isArray(previousData?.activityDates)
            ? previousData.activityDates.filter(
                date => typeof date === "string"
            )
            : [],

        unlockedBadges: Array.isArray(previousData?.unlockedBadges)
            ? previousData.unlockedBadges.filter(
                badge => typeof badge === "string"
            )
            : []
    };

    function saveData() {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(data)
            );

            return true;
        } catch (error) {
            console.warn("Could not save Level Up data:", error);
            return false;
        }
    }

    function showToast(message) {
        if (!toast) return;

        toast.textContent = message;
        toast.classList.add("visible");

        clearTimeout(showToast.timeout);

        showToast.timeout = setTimeout(() => {
            toast.classList.remove("visible");
        }, 3000);
    }

    // -----------------------------------------
    // DAILY STREAK
    // -----------------------------------------

    function recordActivity() {
        const today = localDateKey();

        if (!data.activityDates.includes(today)) {
            data.activityDates.push(today);
        }

        // Keep the stored history within reasonable limits.
        data.activityDates = [
            ...new Set(data.activityDates)
        ].sort().slice(-400);
    }

    function getCurrentStreak() {
        const activeDates = new Set(data.activityDates);
        const today = new Date();
        today.setHours(12, 0, 0, 0);

        // A streak can remain active through yesterday.
        if (!activeDates.has(localDateKey(today))) {
            today.setDate(today.getDate() - 1);

            if (!activeDates.has(localDateKey(today))) {
                return 0;
            }
        }

        let streak = 0;

        while (activeDates.has(localDateKey(today))) {
            streak++;

            today.setDate(today.getDate() - 1);
        }

        return streak;
    }

    // -----------------------------------------
    // ACHIEVEMENTS
    // -----------------------------------------

    const badges = [
        {
            id: "first-task",
            icon: "🌱",
            name: "First Steps",
            description: "Complete your first task.",
            unlocked: () => data.rewardedTaskIds.length >= 1
        },
        {
            id: "five-tasks",
            icon: "⚔️",
            name: "Task Champion",
            description: "Complete five different tasks.",
            unlocked: () => data.rewardedTaskIds.length >= 5
        },
        {
            id: "first-focus",
            icon: "🎯",
            name: "Focus Starter",
            description: "Finish your first focus session.",
            unlocked: () => data.focusSessionsRewarded >= 1
        },
        {
            id: "five-focus",
            icon: "🧠",
            name: "Focus Hero",
            description: "Finish five focus sessions.",
            unlocked: () => data.focusSessionsRewarded >= 5
        },
        {
            id: "three-day-streak",
            icon: "🔥",
            name: "On a Roll",
            description: "Be active for three consecutive days.",
            unlocked: () => getCurrentStreak() >= 3
        }
    ];

    // -----------------------------------------
    // BUILD THE LEVEL UP CARD
    // -----------------------------------------

    const panel = document.createElement("section");

    panel.id = "nexora-level-up";
    panel.className = "panel";

    panel.style.cssText = `
        margin: 24px 0;
        padding: 24px;
        background: linear-gradient(145deg, #19152f, #11101f);
        border: 1px solid #393056;
        border-radius: 18px;
        color: #ffffff;
    `;

    const heading = document.createElement("h2");
    heading.textContent = "⚡ Level Up";

    heading.style.cssText = `
        margin-bottom: 7px;
        color: #ffffff;
        font-size: 24px;
    `;

    const subtitle = document.createElement("p");

    subtitle.textContent =
        "Every small win takes you one step further.";

    subtitle.style.cssText = `
        margin-bottom: 22px;
        color: #aaa2c0;
        font-size: 13px;
        line-height: 1.7;
    `;

    const overview = document.createElement("div");

    overview.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 12px;
        margin-bottom: 22px;
    `;

    function createStat(label, id) {
        const card = document.createElement("div");

        card.style.cssText = `
            padding: 16px;
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid #302747;
            border-radius: 12px;
        `;

        const value = document.createElement("div");
        value.id = id;

        value.style.cssText = `
            color: #c4b5fd;
            font-size: 25px;
            font-weight: 700;
            overflow-wrap: anywhere;
        `;

        const caption = document.createElement("p");
        caption.textContent = label;

        caption.style.cssText = `
            margin-top: 5px;
            color: #aaa2c0;
            font-size: 12px;
        `;

        card.append(value, caption);

        return card;
    }

    overview.append(
        createStat("Current level", "nexora-level-number"),
        createStat("Total XP earned", "nexora-total-xp"),
        createStat("Daily streak", "nexora-streak-count")
    );

    const levelMessage = document.createElement("p");
    levelMessage.id = "nexora-level-message";

    levelMessage.style.cssText = `
        margin-bottom: 10px;
        color: #e9ddff;
        font-size: 13px;
        font-weight: 600;
    `;

    const progressTrack = document.createElement("div");

    progressTrack.style.cssText = `
        width: 100%;
        height: 12px;
        overflow: hidden;
        background: #302747;
        border-radius: 999px;
    `;

    const progressFill = document.createElement("div");

    progressFill.id = "nexora-xp-progress";

    progressFill.style.cssText = `
        width: 0%;
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(90deg, #8b5cf6, #c4b5fd);
        transition: width 0.35s ease;
    `;

    progressTrack.appendChild(progressFill);

    const progressCaption = document.createElement("p");
    progressCaption.id = "nexora-xp-caption";

    progressCaption.style.cssText = `
        margin-top: 9px;
        color: #aaa2c0;
        font-size: 12px;
    `;

    const badgeHeading = document.createElement("h3");
    badgeHeading.textContent = "🏆 Achievements";

    badgeHeading.style.cssText = `
        margin: 26px 0 13px;
        color: #ffffff;
        font-size: 17px;
    `;

    const badgeGrid = document.createElement("div");

    badgeGrid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
    `;

    panel.append(
        heading,
        subtitle,
        overview,
        levelMessage,
        progressTrack,
        progressCaption,
        badgeHeading,
        badgeGrid
    );

    // Place the panel below the main statistics cards.
    statsGrid.insertAdjacentElement("afterend", panel);

    // -----------------------------------------
    // NAVIGATION INTEGRATION
    // -----------------------------------------

    function updatePanelVisibility(page) {
        panel.style.display = page === "overview" ? "" : "none";
    }

    document.querySelectorAll(".nav-item[data-page]").forEach(button => {
        button.addEventListener("click", () => {
            updatePanelVisibility(button.dataset.page);
        });
    });

    document.getElementById("view-all-button")?.addEventListener(
        "click",
        () => updatePanelVisibility("tasks")
    );

    const currentActivePage = document.querySelector(
        '.nav-item.active[data-page]'
    );

    updatePanelVisibility(currentActivePage?.dataset.page || "overview");

    // -----------------------------------------
    // REFRESH LEVEL, PROGRESS AND BADGES
    // -----------------------------------------

    function refreshUI(notifyNewBadges = false) {
        const level = Math.floor(data.xp / 100) + 1;
        const xpIntoLevel = data.xp % 100;
        const nextLevel = level + 1;

        document.getElementById("nexora-level-number").textContent =
            `LVL ${level}`;

        document.getElementById("nexora-total-xp").textContent =
            data.xp;

        document.getElementById("nexora-streak-count").textContent =
            `🔥 ${getCurrentStreak()}`;

        levelMessage.textContent =
            `Level ${level} · ${xpIntoLevel}/100 XP to Level ${nextLevel}`;

        progressFill.style.width = `${xpIntoLevel}%`;

        progressCaption.textContent =
            `${100 - xpIntoLevel} XP until your next level.`;

        badgeGrid.replaceChildren();

        const currentBadgeIds = [];

        badges.forEach(badge => {
            const isUnlocked = badge.unlocked();

            if (isUnlocked) {
                currentBadgeIds.push(badge.id);
            }

            const card = document.createElement("article");

            card.style.cssText = `
                padding: 14px;
                border: 1px solid ${isUnlocked ? "#6b579d" : "#302747"};
                border-radius: 12px;
                background: ${isUnlocked
                    ? "rgba(155, 123, 255, 0.12)"
                    : "rgba(255, 255, 255, 0.025)"};
                opacity: ${isUnlocked ? "1" : "0.58"};
            `;

            const icon = document.createElement("div");
            icon.textContent = isUnlocked ? badge.icon : "🔒";

            icon.style.cssText = `
                margin-bottom: 8px;
                font-size: 23px;
            `;

            const name = document.createElement("strong");
            name.textContent = badge.name;

            name.style.cssText = `
                display: block;
                color: #f5f3ff;
                font-size: 13px;
            `;

            const description = document.createElement("p");
            description.textContent = badge.description;

            description.style.cssText = `
                margin-top: 6px;
                color: #aaa2c0;
                font-size: 11px;
                line-height: 1.6;
            `;

            const status = document.createElement("span");
            status.textContent = isUnlocked ? "UNLOCKED" : "LOCKED";

            status.style.cssText = `
                display: inline-block;
                margin-top: 10px;
                color: ${isUnlocked ? "#c4b5fd" : "#aaa2c0"};
                font-size: 10px;
                font-weight: 700;
                letter-spacing: 0.8px;
            `;

            card.append(icon, name, description, status);
            badgeGrid.appendChild(card);
        });

        const newlyUnlocked = currentBadgeIds.filter(
            id => !data.unlockedBadges.includes(id)
        );

        data.unlockedBadges = currentBadgeIds;

        saveData();

        if (notifyNewBadges && newlyUnlocked.length > 0) {
            const badge = badges.find(
                item => item.id === newlyUnlocked[0]
            );

            if (badge) {
                showToast(`🏆 Badge unlocked: ${badge.name}!`);
            }
        }
    }

    // -----------------------------------------
    // EARN XP
    // -----------------------------------------

    function earnXP(amount, reason) {
        data.xp += amount;

        recordActivity();
        saveData();
        refreshUI(true);

        // The badge notification takes priority if a new
        // achievement was unlocked.
        const newBadge = badges.find(badge =>
            data.unlockedBadges.includes(badge.id) &&
            !earnXP.previousBadges?.includes(badge.id)
        );

        if (newBadge) {
            earnXP.previousBadges = [...data.unlockedBadges];
        } else {
            earnXP.previousBadges = [...data.unlockedBadges];
            showToast(`+${amount} XP — ${reason}`);
        }
    }

    // -----------------------------------------
    // REWARD TASK COMPLETIONS
    // -----------------------------------------

    document.addEventListener("change", event => {
        const checkbox = event.target;

        if (
            !(checkbox instanceof HTMLInputElement) ||
            checkbox.type !== "checkbox" ||
            checkbox.dataset.action !== "toggle" ||
            !checkbox.checked
        ) {
            return;
        }

        const taskItem = checkbox.closest("[data-task-id]");
        const taskId = taskItem?.dataset.taskId;

        if (!taskId) return;

        // The existing task handler updates the task first.
        // Check the result after all event handlers finish.
        setTimeout(() => {
            const task = tasks.find(item => item.id === taskId);

            if (
                !task ||
                !task.completed ||
                data.rewardedTaskIds.includes(taskId)
            ) {
                return;
            }

            data.rewardedTaskIds.push(taskId);

            earnXP(10, "Task completed!");
        }, 0);

    }, true);

    // -----------------------------------------
    // REWARD FOCUS SESSIONS
    // -----------------------------------------

    function getDisplayedSessionCount() {
        const value = Number(sessionCounter?.textContent);

        return Number.isInteger(value) && value >= 0
            ? value
            : 0;
    }

    function processSessionCount() {
        const currentCount = getDisplayedSessionCount();

        if (data.lastProcessedSessions === null) {
            // Start from the current count without granting XP
            // for focus sessions completed before this feature.
            data.lastProcessedSessions = currentCount;
            saveData();
            return;
        }

        if (currentCount < data.lastProcessedSessions) {
            data.lastProcessedSessions = currentCount;
            saveData();
            return;
        }

        const difference =
            currentCount - data.lastProcessedSessions;

        if (difference <= 0) return;

        data.lastProcessedSessions = currentCount;
        data.focusSessionsRewarded += difference;

        // Award 25 XP for each newly completed focus session.
        data.xp += difference * 25;

        recordActivity();
        saveData();
        refreshUI(true);

        if (difference === 1) {
            showToast("+25 XP — Focus session completed!");
        } else {
            showToast(`+${difference * 25} XP — Focus sessions completed!`);
        }
    }

    if (sessionCounter) {
        const observer = new MutationObserver(processSessionCount);

        observer.observe(sessionCounter, {
            childList: true,
            characterData: true,
            subtree: true
        });

        // Detect sessions that finished while the page was closed.
        processSessionCount();
    }

    // -----------------------------------------
    // INITIALIZE
    // -----------------------------------------

    refreshUI(false);

    // Display the current streak and XP on load.
    saveData();

    console.log("NEXORA Level Up is ready!");
})();