export const globalNav = [
  { id: 'account', label: 'Account', icon: 'UserRound' },
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { id: 'courses', label: 'Courses', icon: 'BookOpen', active: true },
  { id: 'calendar', label: 'Calendar', icon: 'Calendar' },
  { id: 'inbox', label: 'Inbox', icon: 'Inbox' },
  { id: 'history', label: 'History', icon: 'History' },
  { id: 'commons', label: 'Commons', icon: 'Share2', badge: 4 },
  { id: 'help', label: 'Help', icon: 'HelpCircle' },
  { id: 'accessibility', label: 'Accessibility', icon: 'Accessibility' },
];

export const courseNav = [
  { label: 'Home', icon: 'Home' },
  { label: 'Announcements', icon: 'Megaphone', hidden: true },
  { label: 'Assignments', icon: 'ClipboardList', hidden: true },
  { label: 'Discussions', icon: 'MessagesSquare' },
  { label: 'Grades', icon: 'BarChart3' },
  { label: 'People', icon: 'Users' },
  { label: 'Pages', icon: 'FileText', hidden: true },
  { label: 'Files', icon: 'Folder', hidden: true },
  { label: 'Syllabus', icon: 'ScrollText' },
  { label: 'Outcomes', icon: 'Target', hidden: true },
  { label: 'Rubrics', icon: 'Grid3X3', hidden: true },
  { label: 'Quizzes', icon: 'ListChecks', hidden: true },
  { label: 'Modules', icon: 'Boxes', selected: true },
  { label: 'Collaborations', icon: 'Handshake' },
  { label: 'Chat', icon: 'MessageSquare' },
  { label: 'Attendance', icon: 'CalendarCheck' },
  { label: 'Google Drive', icon: 'Cloud' },
  { label: 'LockDown Browser', icon: 'Lock' },
  { label: 'ASU Bookstore', icon: 'ShoppingBag' },
  { label: 'Ally Dashboard', icon: 'Gauge' },
  { label: 'MediaPlus', icon: 'Video' },
];

export const courseStatus = {
  published: true,
  actions: [
    'Import Existing Content',
    'Import from Commons',
    'Choose Home Page',
    'View Course Stream',
    'Course Setup Checklist',
    'New Announcement',
    'Course Analytics',
    'View Course Notifications',
  ],
};

export const moduleData = {
  title: 'test module',
  published: false,
  items: [],
};

// Add a blank line to match webpack line numbers and prevent undefined data access
export default { globalNav, courseNav, courseStatus, moduleData };