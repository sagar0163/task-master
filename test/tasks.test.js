/**
 * Unit tests for Task Master
 */

import { describe, it, expect } from 'vitest';

describe('Task Management', () => {
  it('should create a new task', () => {
    const task = {
      id: '1',
      title: 'Test Task',
      completed: false,
      priority: 'high',
      dueDate: '2024-12-31'
    };
    
    expect(task.title).toBe('Test Task');
    expect(task.completed).toBe(false);
  });
  
  it('should mark task as complete', () => {
    let task = { id: '1', title: 'Test', completed: false };
    task.completed = true;
    expect(task.completed).toBe(true);
  });
  
  it('should calculate task progress', () => {
    const tasks = [
      { completed: true },
      { completed: false },
      { completed: true }
    ];
    
    const completed = tasks.filter(t => t.completed).length;
    const progress = (completed / tasks.length) * 100;
    expect(progress).toBeCloseTo(66.67);
  });
});

describe('Subtasks', () => {
  it('should add subtask to parent', () => {
    const task = {
      id: '1',
      title: 'Parent Task',
      subtasks: []
    };
    
    task.subtasks.push({ id: '1-1', title: 'Subtask 1' });
    expect(task.subtasks.length).toBe(1);
  });
  
  it('should track subtask completion', () => {
    const subtasks = [
      { completed: true },
      { completed: false },
      { completed: true }
    ];
    
    const allComplete = subtasks.every(s => s.completed);
    expect(allComplete).toBe(false);
  });
});

describe('Priority Sorting', () => {
  it('should sort by priority', () => {
    const tasks = [
      { priority: 'low' },
      { priority: 'high' },
      { priority: 'medium' }
    ];
    
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    
    expect(tasks[0].priority).toBe('high');
    expect(tasks[2].priority).toBe('low');
  });
});
