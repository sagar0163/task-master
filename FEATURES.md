# Task Master - Features

## Task Properties

| Property | Type | Description |
|----------|------|-------------|
| id | string | Unique identifier |
| title | string | Task name |
| description | string | Detailed description |
| completed | boolean | Completion status |
| priority | string | high/medium/low |
| dueDate | date | Due date |
| tags | array | Task tags |
| subtasks | array | Child tasks |

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl+N | New task |
| Ctrl+S | Save |
| Delete | Delete task |
| Enter | Complete task |
| Ctrl+F | Search |

## Data Storage

- LocalStorage for persistence
- JSON export/import
- Sync with cloud (future)

## Plugins

### Categories
Organize tasks by project, context, or custom categories.

### Reminders
Set due date reminders with notifications.

### Time Tracking
Track time spent on each task.
