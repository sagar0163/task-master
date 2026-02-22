// Productivity Calculation Engine
const calculateScore = (tasks) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    
    const completedToday = tasks.filter(t => {
        if (!t.completed || !t.completedAt) return false;
        const compDate = new Date(t.completedAt).getTime();
        return compDate >= today;
    }).length;

    const totalActive = tasks.filter(t => !t.completed).length;
    
    // Base score calculation
    let score = completedToday * 10;
    if (totalActive > 0) {
        score -= Math.min(totalActive * 2, 20); // Penalty for too many active tasks
    }
    
    return Math.max(0, score);
};

// Date relative formatting
const getRelativeDate = (dateStr) => {
    const date = new Date(dateStr);
    const today = new Date();
    today.setHours(0,0,0,0);
    const diff = (date - today) / (1000 * 60 * 60 * 24);
    
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Tomorrow';
    if (diff === -1) return 'Yesterday';
    if (diff > 1 && diff < 7) return date.toLocaleDateString('en-US', { weekday: 'long' });
    return date.toLocaleDateString();
};
