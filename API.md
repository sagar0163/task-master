# Task Master - API Documentation

## Data Structure

### Task
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "completed": "boolean",
  "priority": "high|medium|low",
  "dueDate": "YYYY-MM-DD",
  "projectId": "string",
  "tags": ["string"],
  "subtasks": [],
  "createdAt": "ISO date",
  "completedAt": "ISO date"
}
```

### Project
```json
{
  "id": "string",
  "name": "string",
  "color": "#hex"
}
```

## localStorage Keys
- `tasks` - Array of tasks
- `projects` - Array of projects
