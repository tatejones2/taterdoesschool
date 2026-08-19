export type Course = {
  id: string
  code: string
  name: string
  color: string
  instructor: string
  email: string
  location: string
  schedule: string
  credits: number
}

export type Assignment = {
  id: string
  title: string
  courseId: string
  due: string
  group: 'OVERDUE' | 'TODAY' | 'TOMORROW' | 'FRIDAY' | 'NEXT WEEK'
  type: string
  priority: 'low' | 'normal' | 'high'
  completed: boolean
}

export type CalendarEvent = {
  id: string
  title: string
  subtitle?: string
  courseId?: string
  day: number
  start: number
  duration: number
  location?: string
  color: string
}
