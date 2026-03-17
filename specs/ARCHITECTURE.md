# Architecture Document: Task Master

## 1. System Overview

Task Master is a client-side single-page application (SPA) built with Vue.js 3. It uses a component-based architecture with reactive state management, storing all data locally in the browser's LocalStorage.

## 2. Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     Vue.js Application                       │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐   │
│  │                  Root App Component                  │   │
│  │                    (index.html)                      │   │
│  └─────────────────────┬───────────────────────────────┘   │
│                        │                                    │
│  ┌─────────────────────┼───────────────────────────────┐   │
│  │           Vue Composition API                       │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌────────────┐  │   │
│  │  │ useTasks()  │  │useProjects()│  │useStats() │  │   │
│  │  │ - tasks[]   │  │- projects[] │  │- total    │  │   │
│  │  │ - addTask()│  │ - addProject│  │- completed│  │   │
│  │  │ - update() │  │ - getColor()│  │- overdue  │  │   │
│  │  │ - delete() │  │             │  │           │  │   │
│  │  └─────────────┘  └─────────────┘  └────────────┘  │   │
│  └─────────────────────┬───────────────────────────────┘   │
│                        │                                    │
│  ┌─────────────────────┼───────────────────────────────┐   │
│  │              Storage Layer                           │   │
│  │              (LocalStorage API)                      │   │
│  │  - tasks: Task[]                                    │   │
│  │  - projects: Project[]                              │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## 3. Component Structure

### Main Components
- **TaskList:** Displays list of tasks with filtering
- **TaskItem:** Individual task display with actions
- **TaskForm:** Form for creating/editing tasks
- **ProjectSelector:** Dropdown for project selection
- **PriorityBadge:** Visual priority indicator
- **StatsDashboard:** Analytics display
- **SearchBar:** Task search input
- **FilterPanel:** Filter controls

### Data Flow
```
User Action → Vue Component → Composable Function → LocalStorage
                                            ↓
                              Reactive State Update ← Storage Watcher
                                            ↓
                              UI Re-render
```

## 4. Data Models

### Task
```typescript
interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  dueDate?: string;
  projectId?: string;
  createdAt: string;
  updatedAt: string;
}
```

### Project
```typescript
interface Project {
  id: string;
  name: string;
  color: string;
}
```

## 5. State Management

### Composables Pattern
- **useTasks():** Task CRUD operations and state
- **useProjects():** Project management
- **useStats():** Statistics calculations
- **useFilters():** Filter and search state

### LocalStorage Schema
```json
{
  "taskmaster_tasks": [...],
  "taskmaster_projects": [...]
}
```

## 6. File Structure

```
task-master/
├── index.html          # Main SPA entry
├── logic.js            # Core business logic
├── subtasks.js         # Subtask handling
├── specs/              # Documentation
├── test/               # Test files
├── README.md
├── API.md
├── FEATURES.md
└── SPEC.md
```

## 7. Technology Stack

| Layer | Technology |
|-------|------------|
| Framework | Vue.js 3 (Composition API) |
| Styling | TailwindCSS |
| Storage | LocalStorage |
| Build | None (CDN imports) |
| Runtime | Browser |

---

*Document Version: 1.0*  
*Created: 2026-03-17*
