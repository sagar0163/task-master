// Task Master - Subtasks Extension
// Add this to enable subtasks feature

// Additional filter options for tasks
const subtaskFilters = {
    hasSubtasks: 'Has subtasks',
    noSubtasks: 'No subtasks',
    allSubtasksDone: 'All subtasks done',
    someSubtasksDone: 'Some subtasks done'
};

// Quick add feature
const quickAdd = {
    enabled: true,
    shortcut: 'Ctrl+Enter'
};

// Export/Import
const exportImport = {
    exportJSON: () => JSON.stringify({ tasks: tasks.value, projects: projects.value }),
    importJSON: (data) => { /* import logic */ }
};
