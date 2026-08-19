import type { Assignment, CalendarEvent, Course } from './types'

export const courses: Course[] = [
  { id: 'cs310', code: 'CS 310', name: 'Networking Fundamentals', color: '#3b62d0', instructor: 'Dr. Maya Chen', email: 'mchen@university.edu', location: 'DeMoss Hall 204', schedule: 'MWF · 9:00–9:50 AM', credits: 3 },
  { id: 'econ201', code: 'ECON 201', name: 'Microeconomics', color: '#d15c46', instructor: 'Prof. Sam Rivera', email: 'srivera@university.edu', location: 'Montview 118', schedule: 'TTh · 10:15–11:30 AM', credits: 3 },
  { id: 'eng205', code: 'ENG 205', name: 'Technical Writing', color: '#6f56a6', instructor: 'Dr. Nora Wells', email: 'nwells@university.edu', location: 'Green Hall 305', schedule: 'TTh · 2:00–3:15 PM', credits: 3 },
  { id: 'bio110', code: 'BIO 110', name: 'Principles of Biology', color: '#27866f', instructor: 'Dr. Alex Kumar', email: 'akumar@university.edu', location: 'Science Hall 121', schedule: 'MW · 11:00–12:15 PM', credits: 4 },
]

export const initialAssignments: Assignment[] = [
  { id: 'a0', title: 'Discussion response', courseId: 'eng205', due: 'Yesterday · 5:00 PM', group: 'OVERDUE', type: 'Discussion', priority: 'normal', completed: false },
  { id: 'a1', title: 'Routing lab', courseId: 'cs310', due: '11:59 PM', group: 'TODAY', type: 'Lab', priority: 'high', completed: false },
  { id: 'a2', title: 'Chapter 6 questions', courseId: 'econ201', due: '5:00 PM', group: 'TODAY', type: 'Homework', priority: 'normal', completed: false },
  { id: 'a3', title: 'Cell structure worksheet', courseId: 'bio110', due: 'Tomorrow · 9:00 AM', group: 'TOMORROW', type: 'Homework', priority: 'normal', completed: false },
  { id: 'a4', title: 'Research paper draft', courseId: 'eng205', due: 'Friday · 11:59 PM', group: 'FRIDAY', type: 'Paper', priority: 'high', completed: false },
  { id: 'a5', title: 'Midterm exam', courseId: 'cs310', due: 'Oct 8 · 9:00 AM', group: 'NEXT WEEK', type: 'Exam', priority: 'high', completed: false },
  { id: 'a6', title: 'Reading notes: Chapter 5', courseId: 'econ201', due: 'Completed Monday', group: 'TODAY', type: 'Reading', priority: 'low', completed: true },
]

export const events: CalendarEvent[] = [
  { id: 'e1', title: 'CS 310', subtitle: 'Networking Fundamentals', courseId: 'cs310', day: 0, start: 9, duration: .85, location: 'DeMoss 204', color: '#3b62d0' },
  { id: 'e2', title: 'CS 310', subtitle: 'Networking Fundamentals', courseId: 'cs310', day: 2, start: 9, duration: .85, location: 'DeMoss 204', color: '#3b62d0' },
  { id: 'e3', title: 'CS 310', subtitle: 'Networking Fundamentals', courseId: 'cs310', day: 4, start: 9, duration: .85, location: 'DeMoss 204', color: '#3b62d0' },
  { id: 'e4', title: 'ECON 201', subtitle: 'Microeconomics', courseId: 'econ201', day: 1, start: 10.25, duration: 1.25, location: 'Montview 118', color: '#d15c46' },
  { id: 'e5', title: 'ECON 201', subtitle: 'Microeconomics', courseId: 'econ201', day: 3, start: 10.25, duration: 1.25, location: 'Montview 118', color: '#d15c46' },
  { id: 'e6', title: 'BIO 110', subtitle: 'Principles of Biology', courseId: 'bio110', day: 0, start: 11, duration: 1.25, location: 'Science Hall 121', color: '#27866f' },
  { id: 'e7', title: 'BIO 110', subtitle: 'Principles of Biology', courseId: 'bio110', day: 2, start: 11, duration: 1.25, location: 'Science Hall 121', color: '#27866f' },
  { id: 'e8', title: 'Baseball practice', subtitle: 'East field', day: 0, start: 14, duration: 2, color: '#d5a62e' },
  { id: 'e9', title: 'Baseball practice', subtitle: 'East field', day: 1, start: 14, duration: 2, color: '#d5a62e' },
  { id: 'e10', title: 'ENG 205', subtitle: 'Technical Writing', courseId: 'eng205', day: 3, start: 14, duration: 1.25, location: 'Green 305', color: '#6f56a6' },
  { id: 'e11', title: 'Study session', subtitle: 'Library · Floor 3', day: 2, start: 17.5, duration: 1.5, color: '#787b80' },
]
