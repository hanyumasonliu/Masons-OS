const STORAGE = {
  schedule: "mos_schedule_v1",
  tasks: "mos_tasks_v1",
  checks: "mos_checks_v1",
  notes: "mos_notes_v1",
  prefs: "mos_prefs_v1",
};

const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const defaultSchedule = {
  days: [
    {
      name: "Monday",
      title: "Anchor & Build",
      theme: "Establish momentum for the week",
      shortTerm: "PhD output + app progress",
      longTerm: "Academic credibility + income leverage",
      blocks: [
        {
          id: "mon-1",
          time: "10:30–11:00",
          title: "Wake up slowly. Hydrate. Light stretching or mobility.",
          details:
            "Why: Transition your nervous system gently; no cortisol spike.",
        },
        {
          id: "mon-2",
          time: "11:00–12:15",
          title: "Deep Work (PhD writing or analysis)",
          details:
            "One clear task only. Why short-term: papers move forward. Why long-term: publications are non-negotiable career capital.",
        },
        {
          id: "mon-3",
          time: "12:15–1:15",
          title: "Lunch (1 hour)",
          details:
            "Eat calmly. Light messages to family or friends. Why: social connection without cognitive drain.",
        },
        {
          id: "mon-4",
          time: "1:15–2:30",
          title: "Deep Work continuation (same PhD task)",
          details:
            "No switching. Finish what you started. Why: cognitive momentum > restarting later.",
        },
        {
          id: "mon-5",
          time: "2:30–3:30",
          title: "Exercise (gym or conditioning)",
          details:
            "Strength training or cardio. Why short-term: energy reset. Why long-term: protects mental health and career longevity.",
        },
        {
          id: "mon-6",
          time: "3:30–4:45",
          title: "Build block (apps / automation / demos)",
          details:
            "Concrete progress only: features, UI polish, demo assets. Why: money and optionality.",
        },
        {
          id: "mon-7",
          time: "5:30–6:30",
          title: "Dinner (1 hour)",
          details: "No work. No screens if possible.",
        },
        {
          id: "mon-8",
          time: "Evening",
          title:
            "Light activities: content scripting (not filming), reading, time with your wife, casual calls",
          details:
            "Why: evenings are not for output — they are for sustainability.",
        },
      ],
    },
    {
      name: "Tuesday",
      title: "Campus + Maintain",
      theme: "Obligations + light progress",
      shortTerm: "Show up fully, don’t overload",
      longTerm: "Professional presence without burnout",
      blocks: [
        {
          id: "tue-1",
          time: "10:30–11:30",
          title: "Wake + light morning routine",
          details: "Protect cognitive energy for later travel.",
        },
        {
          id: "tue-2",
          time: "11:30–12:00",
          title: "Meeting prep / email / light admin",
          details: "Why: protect cognitive energy for later travel.",
        },
        {
          id: "tue-3",
          time: "12:00–1:00",
          title: "Online meeting",
          details: "Eat lightly during or immediately after.",
        },
        {
          id: "tue-4",
          time: "1:00–2:00",
          title: "Lunch (1 hour)",
          details: "Recovery before commute.",
        },
        {
          id: "tue-5",
          time: "2:00–2:30",
          title: "Drive to campus",
          details: "",
        },
        {
          id: "tue-6",
          time: "3:00–4:00",
          title: "Seminar (on campus)",
          details:
            "Active listening, minimal note-taking. Why: presence matters more than output here.",
        },
        {
          id: "tue-7",
          time: "4:00–4:30",
          title: "Drive home",
          details: "",
        },
        {
          id: "tue-8",
          time: "5:30–6:30",
          title: "Dinner (1 hour)",
          details: "",
        },
        {
          id: "tue-9",
          time: "6:30–7:30",
          title: "Exercise (light tennis or walk)",
          details:
            "Not intense. Just movement. Why: stress relief after campus day.",
        },
        {
          id: "tue-10",
          time: "Evening",
          title: "No heavy work. Light reflection or content idea capture only",
          details: "",
        },
      ],
    },
    {
      name: "Wednesday",
      title: "Survival & Presence",
      theme: "Show up, conserve energy",
      shortTerm: "Fulfill commitments",
      longTerm: "Avoid midweek burnout",
      blocks: [
        {
          id: "wed-1",
          time: "10:30–11:00",
          title: "Wake gently. No exercise yet",
          details: "",
        },
        {
          id: "wed-2",
          time: "11:00–11:30",
          title: "Drive to campus",
          details: "",
        },
        {
          id: "wed-3",
          time: "12:00–1:00",
          title: "On-campus meeting",
          details: "",
        },
        {
          id: "wed-4",
          time: "1:00–2:00",
          title: "Lunch (on campus)",
          details: "Walk, reset, decompress.",
        },
        {
          id: "wed-5",
          time: "2:00–3:00",
          title: "Light work only: reading, notes, admin, content idea capture",
          details: "Why: your brain is already taxed.",
        },
        {
          id: "wed-6",
          time: "3:00–4:00",
          title: "Rest or passive recovery at home",
          details: "",
        },
        {
          id: "wed-7",
          time: "5:00–6:00",
          title: "Dinner (early, 1 hour)",
          details: "",
        },
        {
          id: "wed-8",
          time: "6:15–9:00",
          title: "Evening class (on campus)",
          details: "",
        },
        {
          id: "wed-9",
          time: "After class",
          title: "Shower. Talk. Sleep. No work, no guilt",
          details: "",
        },
      ],
    },
    {
      name: "Thursday",
      title: "Recover & Produce",
      theme: "Reclaim lost output",
      shortTerm: "Deep work + app shipping",
      longTerm: "Consistency beats intensity",
      blocks: [
        {
          id: "thu-1",
          time: "10:30–11:00",
          title: "Wake + mobility",
          details: "",
        },
        {
          id: "thu-2",
          time: "11:00–12:15",
          title: "Deep Work (PhD)",
          details: "Pick up exactly where Monday left off.",
        },
        {
          id: "thu-3",
          time: "12:15–1:15",
          title: "Lunch (1 hour)",
          details: "",
        },
        {
          id: "thu-4",
          time: "1:15–2:30",
          title: "Deep Work continuation",
          details: "",
        },
        {
          id: "thu-5",
          time: "2:30–3:30",
          title: "Exercise (gym or conditioning)",
          details: "Higher intensity than Tuesday.",
        },
        {
          id: "thu-6",
          time: "3:30–4:45",
          title: "Build block (apps / automation)",
          details: "Primary shipping session of the week.",
        },
        {
          id: "thu-7",
          time: "5:30–6:30",
          title: "Dinner (1 hour)",
          details: "",
        },
        {
          id: "thu-8",
          time: "Evening",
          title: "Content filming or editing if energy allows, otherwise rest",
          details: "",
        },
      ],
    },
    {
      name: "Friday",
      title: "Close Loops",
      theme: "Reflection + creativity",
      shortTerm: "Finish the week clean",
      longTerm: "Compound learning and visibility",
      blocks: [
        {
          id: "fri-1",
          time: "10:30–11:30",
          title: "Wake + easy morning",
          details: "",
        },
        {
          id: "fri-2",
          time: "11:30–12:30",
          title: "Light deep work: editing, reviewing, planning",
          details: "",
        },
        {
          id: "fri-3",
          time: "12:30–1:30",
          title: "Lunch (1 hour)",
          details: "",
        },
        {
          id: "fri-4",
          time: "1:30–2:30",
          title: "Exercise (tennis or conditioning)",
          details: "Fun, competitive, identity-based.",
        },
        {
          id: "fri-5",
          time: "2:30–4:00",
          title: "Content creation: writing posts, reviewing analytics, updating portfolio",
          details: "Why: Fridays are for reflection, not pushing.",
        },
        {
          id: "fri-6",
          time: "5:30–6:30",
          title: "Dinner (1 hour)",
          details: "",
        },
        {
          id: "fri-7",
          time: "Evening",
          title: "Social, date night, friends",
          details: "This is part of success, not separate from it.",
        },
      ],
    },
    {
      name: "Saturday",
      title: "Express & Play",
      theme: "Creation + identity",
      shortTerm: "Batch content",
      longTerm: "Build public leverage",
      blocks: [
        {
          id: "sat-1",
          time: "10:30–11:30",
          title: "Slow start. Coffee. Walk",
          details: "",
        },
        {
          id: "sat-2",
          time: "11:30–12:30",
          title: "Exercise (tennis practice or coaching)",
          details: "Primary tennis day.",
        },
        {
          id: "sat-3",
          time: "12:30–1:30",
          title: "Lunch",
          details: "",
        },
        {
          id: "sat-4",
          time: "1:30–3:00",
          title: "Content filming (batch)",
          details: "3–6 short videos. No editing.",
        },
        {
          id: "sat-5",
          time: "3:00–5:00",
          title: "Free time or light creative work",
          details: "",
        },
        {
          id: "sat-6",
          time: "5:30–6:30",
          title: "Dinner",
          details: "",
        },
        {
          id: "sat-7",
          time: "Evening",
          title: "Fully off. Social life encouraged",
          details: "",
        },
      ],
    },
    {
      name: "Sunday",
      title: "Align & Recover",
      theme: "Clarity + relationships",
      shortTerm: "Reduce anxiety",
      longTerm: "Sustainable high performance",
      blocks: [
        {
          id: "sun-1",
          time: "10:30–11:30",
          title: "Gentle start. Stretch. Walk",
          details: "",
        },
        {
          id: "sun-2",
          time: "11:30–12:30",
          title: "Weekly review",
          details: "Decide next week’s priorities. No tasks.",
        },
        {
          id: "sun-3",
          time: "12:30–1:30",
          title: "Lunch",
          details: "",
        },
        {
          id: "sun-4",
          time: "1:30–2:30",
          title: "Content editing + scheduling",
          details: "",
        },
        {
          id: "sun-5",
          time: "2:30–3:30",
          title: "Active recovery (walk, mobility, light tennis)",
          details: "",
        },
        {
          id: "sun-6",
          time: "3:30–5:00",
          title: "Family calls or visits",
          details: "",
        },
        {
          id: "sun-7",
          time: "5:30–6:30",
          title: "Dinner",
          details: "",
        },
        {
          id: "sun-8",
          time: "Evening",
          title: "Rest. Prepare mentally for Monday",
          details: "",
        },
      ],
    },
  ],
};

const state = {
  schedule: loadSchedule(),
  tasks: loadTasks(),
  checks: loadChecks(),
  notes: loadNotes(),
  prefs: loadPrefs(),
  selectedDayIndex: getTodayIndex(),
  scheduleEdit: false,
  tasksEdit: false,
};

const dayTabs = document.getElementById("dayTabs");
const scheduleList = document.getElementById("scheduleList");
const dayTitle = document.getElementById("dayTitle");
const dayTheme = document.getElementById("dayTheme");
const dayShort = document.getElementById("dayShort");
const dayLong = document.getElementById("dayLong");
const progressLabel = document.getElementById("progressLabel");
const todayLabel = document.getElementById("todayLabel");
const todayTheme = document.getElementById("todayTheme");
const toggleEdit = document.getElementById("toggleEdit");
const toggleWhy = document.getElementById("toggleWhy");
const resetToday = document.getElementById("resetToday");
const addBlock = document.getElementById("addBlock");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskTag = document.getElementById("taskTag");
const taskList = document.getElementById("taskList");
const toggleTaskEdit = document.getElementById("toggleTaskEdit");
const showCompleted = document.getElementById("showCompleted");
const clearCompleted = document.getElementById("clearCompleted");
const dailyNotes = document.getElementById("dailyNotes");

render();

function render() {
  renderTodayCard();
  renderTabs();
  renderDayMeta();
  renderSchedule();
  renderTasks();
  renderNotes();
}

function renderTodayCard() {
  const today = new Date();
  todayLabel.textContent = today.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const todaySchedule = state.schedule.days[getTodayIndex()];
  todayTheme.textContent = todaySchedule ? todaySchedule.title : "";
}

function renderTabs() {
  dayTabs.innerHTML = "";
  state.schedule.days.forEach((day, index) => {
    const date = getDateForDayIndex(index);
    const label = `${day.name.slice(0, 3)} ${date.getDate()}`;
    const button = document.createElement("button");
    button.textContent = label;
    if (index === state.selectedDayIndex) {
      button.classList.add("active");
    }
    button.addEventListener("click", () => {
      state.selectedDayIndex = index;
      render();
    });
    dayTabs.appendChild(button);
  });
}

function renderDayMeta() {
  const day = state.schedule.days[state.selectedDayIndex];
  dayTitle.textContent = day.title;
  dayTheme.textContent = day.theme;
  dayShort.textContent = day.shortTerm;
  dayLong.textContent = day.longTerm;

  [dayTitle, dayTheme, dayShort, dayLong].forEach((el) => {
    el.contentEditable = state.scheduleEdit;
    el.classList.toggle("editing", state.scheduleEdit);
    el.onblur = () => {
      const targetDay = state.schedule.days[state.selectedDayIndex];
      targetDay.title = dayTitle.textContent.trim() || targetDay.title;
      targetDay.theme = dayTheme.textContent.trim() || targetDay.theme;
      targetDay.shortTerm = dayShort.textContent.trim();
      targetDay.longTerm = dayLong.textContent.trim();
      saveSchedule();
      renderTodayCard();
    };
  });
}

function renderSchedule() {
  scheduleList.innerHTML = "";
  const day = state.schedule.days[state.selectedDayIndex];
  const dateKey = getDateKey(getDateForDayIndex(state.selectedDayIndex));
  const dayChecks = state.checks[dateKey] || {};
  const total = day.blocks.length;
  const done = day.blocks.filter((block) => dayChecks[block.id]).length;
  progressLabel.textContent = `${done} of ${total} blocks done for ${day.name} (${dateKey}).`;

  day.blocks.forEach((block) => {
    const item = document.createElement("div");
    item.className = "schedule-item";
    if (state.scheduleEdit) {
      item.classList.add("editing");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(dayChecks[block.id]);
    checkbox.addEventListener("change", () => {
      if (!state.checks[dateKey]) {
        state.checks[dateKey] = {};
      }
      state.checks[dateKey][block.id] = checkbox.checked;
      saveChecks();
      renderSchedule();
    });

    const content = document.createElement("div");

    const time = document.createElement("div");
    time.className = "time";
    time.textContent = block.time;
    time.contentEditable = state.scheduleEdit;
    time.onblur = () => {
      block.time = time.textContent.trim();
      saveSchedule();
    };

    const title = document.createElement("div");
    title.textContent = block.title;
    title.contentEditable = state.scheduleEdit;
    title.onblur = () => {
      block.title = title.textContent.trim();
      saveSchedule();
    };

    const details = document.createElement("div");
    details.className = "details";
    details.textContent = block.details;
    details.contentEditable = state.scheduleEdit;
    details.onblur = () => {
      block.details = details.textContent.trim();
      saveSchedule();
    };

    if (state.prefs.hideWhy && !state.scheduleEdit) {
      details.style.display = "none";
    }

    content.appendChild(time);
    content.appendChild(title);
    if (block.details || state.scheduleEdit) {
      content.appendChild(details);
    }

    const actions = document.createElement("div");
    actions.className = "block-actions";
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Delete";
    removeButton.addEventListener("click", () => {
      day.blocks = day.blocks.filter((entry) => entry.id !== block.id);
      saveSchedule();
      renderSchedule();
    });
    actions.appendChild(removeButton);

    item.appendChild(checkbox);
    item.appendChild(content);
    item.appendChild(actions);

    scheduleList.appendChild(item);
  });
}

function renderTasks() {
  taskList.innerHTML = "";
  const filtered = state.tasks.filter(
    (task) => state.prefs.showCompleted || !task.done
  );

  filtered.forEach((task) => {
    const item = document.createElement("div");
    item.className = "task-item";
    if (task.done) {
      item.classList.add("done");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => {
      task.done = checkbox.checked;
      saveTasks();
      renderTasks();
    });

    const content = document.createElement("div");
    const text = document.createElement("div");
    text.className = "task-text";
    text.textContent = task.text;
    text.contentEditable = state.tasksEdit;
    text.onblur = () => {
      task.text = text.textContent.trim();
      saveTasks();
    };

    content.appendChild(text);

    if (task.tag) {
      const tag = document.createElement("div");
      tag.className = "task-tag";
      tag.textContent = task.tag;
      content.appendChild(tag);
    }

    const remove = document.createElement("button");
    remove.className = "btn ghost small";
    remove.type = "button";
    remove.textContent = "Delete";
    remove.addEventListener("click", () => {
      state.tasks = state.tasks.filter((entry) => entry.id !== task.id);
      saveTasks();
      renderTasks();
    });

    item.appendChild(checkbox);
    item.appendChild(content);
    item.appendChild(remove);
    taskList.appendChild(item);
  });
}

function renderNotes() {
  const dateKey = getDateKey(getDateForDayIndex(state.selectedDayIndex));
  dailyNotes.value = state.notes[dateKey] || "";
}

function loadSchedule() {
  const stored = localStorage.getItem(STORAGE.schedule);
  if (!stored) return JSON.parse(JSON.stringify(defaultSchedule));
  try {
    return JSON.parse(stored);
  } catch {
    return JSON.parse(JSON.stringify(defaultSchedule));
  }
}

function loadTasks() {
  const stored = localStorage.getItem(STORAGE.tasks);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

function loadChecks() {
  const stored = localStorage.getItem(STORAGE.checks);
  if (!stored) return {};
  try {
    return JSON.parse(stored);
  } catch {
    return {};
  }
}

function loadNotes() {
  const stored = localStorage.getItem(STORAGE.notes);
  if (!stored) return {};
  try {
    return JSON.parse(stored);
  } catch {
    return {};
  }
}

function loadPrefs() {
  const stored = localStorage.getItem(STORAGE.prefs);
  if (!stored)
    return {
      hideWhy: false,
      showCompleted: true,
    };
  try {
    return JSON.parse(stored);
  } catch {
    return {
      hideWhy: false,
      showCompleted: true,
    };
  }
}

function saveSchedule() {
  localStorage.setItem(STORAGE.schedule, JSON.stringify(state.schedule));
}

function saveTasks() {
  localStorage.setItem(STORAGE.tasks, JSON.stringify(state.tasks));
}

function saveChecks() {
  localStorage.setItem(STORAGE.checks, JSON.stringify(state.checks));
}

function saveNotes() {
  localStorage.setItem(STORAGE.notes, JSON.stringify(state.notes));
}

function savePrefs() {
  localStorage.setItem(STORAGE.prefs, JSON.stringify(state.prefs));
}

function getTodayIndex() {
  const today = new Date();
  return (today.getDay() + 6) % 7;
}

function getWeekStart(date) {
  const copy = new Date(date);
  const dayIndex = (copy.getDay() + 6) % 7;
  copy.setDate(copy.getDate() - dayIndex);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function getDateForDayIndex(index) {
  const start = getWeekStart(new Date());
  const date = new Date(start);
  date.setDate(start.getDate() + index);
  return date;
}

function getDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function uuid() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

// Event bindings

toggleEdit.addEventListener("click", () => {
  state.scheduleEdit = !state.scheduleEdit;
  toggleEdit.textContent = state.scheduleEdit ? "Done Editing" : "Edit Schedule";
  addBlock.style.display = state.scheduleEdit ? "inline-flex" : "none";
  render();
});

addBlock.addEventListener("click", () => {
  const day = state.schedule.days[state.selectedDayIndex];
  day.blocks.push({
    id: uuid(),
    time: "New block",
    title: "Describe the activity",
    details: "Why it matters",
  });
  saveSchedule();
  renderSchedule();
});

resetToday.addEventListener("click", () => {
  const todayKey = getDateKey(new Date());
  state.checks[todayKey] = {};
  saveChecks();
  renderSchedule();
});

toggleWhy.addEventListener("click", () => {
  state.prefs.hideWhy = !state.prefs.hideWhy;
  toggleWhy.textContent = state.prefs.hideWhy ? "Show Why" : "Hide Why";
  savePrefs();
  renderSchedule();
});

showCompleted.checked = state.prefs.showCompleted;
showCompleted.addEventListener("change", () => {
  state.prefs.showCompleted = showCompleted.checked;
  savePrefs();
  renderTasks();
});

clearCompleted.addEventListener("click", () => {
  state.tasks = state.tasks.filter((task) => !task.done);
  saveTasks();
  renderTasks();
});

toggleTaskEdit.addEventListener("click", () => {
  state.tasksEdit = !state.tasksEdit;
  toggleTaskEdit.textContent = state.tasksEdit ? "Done Editing" : "Edit Tasks";
  renderTasks();
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return;
  state.tasks.push({
    id: uuid(),
    text,
    tag: taskTag.value.trim(),
    done: false,
  });
  taskInput.value = "";
  taskTag.value = "";
  saveTasks();
  renderTasks();
});

dailyNotes.addEventListener("input", () => {
  const dateKey = getDateKey(getDateForDayIndex(state.selectedDayIndex));
  state.notes[dateKey] = dailyNotes.value;
  saveNotes();
});

addBlock.style.display = "none";
if (state.prefs.hideWhy) {
  toggleWhy.textContent = "Show Why";
}
