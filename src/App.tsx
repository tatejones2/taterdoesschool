import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { NavLink, Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Archive, ArrowLeft, BookOpen, CalendarDays, Check, ChevronDown, ChevronLeft, ChevronRight, CircleHelp, Clock3, Command, Grid2X2, LayoutList, MapPin, Menu, Moon, MoreHorizontal, Plus, Search, Settings, SlidersHorizontal, Sparkles, UserRound, X } from 'lucide-react'
import { courses, events, initialAssignments } from './data'
import type { Assignment } from './types'

const nav = [
  { to: '/today', label: 'Today', icon: Grid2X2 },
  { to: '/calendar', label: 'Calendar', icon: CalendarDays },
  { to: '/assignments', label: 'Assignments', icon: LayoutList },
  { to: '/courses', label: 'Courses', icon: BookOpen },
  { to: '/schedule', label: 'Schedule', icon: Clock3 },
]

const courseFor = (id: string) => courses.find((course) => course.id === id)!

function App() {
  const [assignments, setAssignments] = useState<Assignment[]>(() => {
    const saved = localStorage.getItem('tds-assignments')
    return saved ? JSON.parse(saved) as Assignment[] : initialAssignments
  })
  const [addOpen, setAddOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()

  useEffect(() => localStorage.setItem('tds-assignments', JSON.stringify(assignments)), [assignments])
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const typing = ['INPUT', 'TEXTAREA', 'SELECT'].includes((event.target as HTMLElement).tagName)
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setSearchOpen(true) }
      if (!typing && event.key.toLowerCase() === 'c') setAddOpen(true)
      if (event.key === 'Escape') { setAddOpen(false); setSearchOpen(false) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const toggle = (id: string) => setAssignments((items) => items.map((item) => item.id === id ? { ...item, completed: !item.completed } : item))
  const addAssignment = (assignment: Assignment) => setAssignments((items) => [assignment, ...items])

  return <div className="app-shell">
    <Sidebar onAdd={() => setAddOpen(true)} onSearch={() => setSearchOpen(true)} />
    <header className="mobile-header">
      <button className="icon-button" aria-label="Open menu" onClick={() => setMobileMenu(true)}><Menu size={20} /></button>
      <Brand compact />
      <button className="avatar" aria-label="Profile">TJ</button>
    </header>
    {mobileMenu && <div className="mobile-drawer"><button className="drawer-backdrop" aria-label="Close menu" onClick={() => setMobileMenu(false)} /><aside><div className="drawer-head"><Brand /><button className="icon-button" onClick={() => setMobileMenu(false)}><X /></button></div>{nav.map((item) => <NavItem key={item.to} {...item} onClick={() => setMobileMenu(false)} />)}<NavItem to="/settings" label="Settings" icon={Settings} onClick={() => setMobileMenu(false)} /></aside></div>}
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Navigate to="/today" replace />} />
        <Route path="/today" element={<TodayPage assignments={assignments} toggle={toggle} onAdd={() => setAddOpen(true)} />} />
        <Route path="/assignments" element={<AssignmentsPage assignments={assignments} toggle={toggle} onAdd={() => setAddOpen(true)} />} />
        <Route path="/calendar" element={<CalendarPage onAdd={() => setAddOpen(true)} />} />
        <Route path="/courses" element={<CoursesPage onAdd={() => setAddOpen(true)} />} />
        <Route path="/courses/:courseId" element={<CoursePage assignments={assignments} toggle={toggle} />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/today" replace />} />
      </Routes>
    </main>
    <MobileNav onAdd={() => setAddOpen(true)} />
    {addOpen && <AddDialog onClose={() => setAddOpen(false)} onAdd={addAssignment} />}
    {searchOpen && <CommandPalette onClose={() => setSearchOpen(false)} onAdd={() => { setSearchOpen(false); setAddOpen(true) }} />}
  </div>
}

function Brand({ compact = false }: { compact?: boolean }) {
  return <div className={`brand ${compact ? 'compact' : ''}`}><span>T</span>{!compact && <strong>TATER<br />DOES SCHOOL</strong>}</div>
}

function NavItem({ to, label, icon: Icon, onClick }: { to: string; label: string; icon: typeof Grid2X2; onClick?: () => void }) {
  return <NavLink to={to} onClick={onClick} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}><Icon size={17} strokeWidth={1.8} /><span>{label}</span></NavLink>
}

function Sidebar({ onAdd, onSearch }: { onAdd: () => void; onSearch: () => void }) {
  return <aside className="sidebar">
    <Brand />
    <button className="quick-add" onClick={onAdd}><Plus size={18} /> Quick add <kbd>C</kbd></button>
    <nav aria-label="Main navigation">{nav.map((item) => <NavItem key={item.to} {...item} />)}</nav>
    <div className="semester-block"><div className="eyebrow-row"><span>Fall 2026</span><ChevronDown size={14} /></div>
      {courses.slice(0, 3).map((course) => <NavLink className="course-link" to={`/courses/${course.id}`} key={course.id}><i style={{ background: course.color }} />{course.code}</NavLink>)}
    </div>
    <div className="sidebar-spacer" />
    <button className="search-button" onClick={onSearch}><Search size={16} />Search <kbd>⌘ K</kbd></button>
    <NavItem to="/settings" label="Settings" icon={Settings} />
    <div className="profile-chip"><div className="avatar">TJ</div><div><strong>Tate Jones</strong><span>Student</span></div><MoreHorizontal size={16} /></div>
  </aside>
}

function MobileNav({ onAdd }: { onAdd: () => void }) {
  return <nav className="mobile-nav" aria-label="Mobile navigation">
    {nav.slice(0, 2).map((item) => <NavItem key={item.to} {...item} />)}
    <button className="mobile-add" onClick={onAdd} aria-label="Add assignment"><Plus /></button>
    {nav.slice(2, 4).map((item) => <NavItem key={item.to} {...item} />)}
  </nav>
}

function PageHeader({ eyebrow, title, subtitle, action }: { eyebrow?: string; title: string; subtitle?: string; action?: ReactNode }) {
  return <header className="page-header"><div>{eyebrow && <div className="page-eyebrow">{eyebrow}</div>}<h1>{title}</h1>{subtitle && <p>{subtitle}</p>}</div>{action}</header>
}

function AddButton({ onClick, label = 'Add assignment' }: { onClick: () => void; label?: string }) {
  return <button className="primary-button" onClick={onClick}><Plus size={17} />{label}</button>
}

function TodayPage({ assignments, toggle, onAdd }: { assignments: Assignment[]; toggle: (id: string) => void; onAdd: () => void }) {
  const today = assignments.filter((a) => !a.completed && (a.group === 'TODAY' || a.group === 'OVERDUE'))
  const upcoming = assignments.filter((a) => !a.completed && !['TODAY', 'OVERDUE'].includes(a.group)).slice(0, 4)
  return <div className="page today-page">
    <PageHeader eyebrow="Tuesday · August 18" title="Good morning, Tate." subtitle="Here’s what your day looks like." action={<AddButton onClick={onAdd} />} />
    <section className="day-summary"><div><span>05</span><p>items on your plate</p></div><div><span>03</span><p>classes & events</p></div><div className="focus-note"><Sparkles size={16} /><p>Your next open block is <strong>12:15–2:00 PM</strong></p></div></section>
    <div className="today-grid">
      <section><SectionHead number="01" title="Today’s schedule" action="View calendar" href="/calendar" />
        <div className="timeline">
          <ScheduleRow time="09:00" code="CS 310" title="Networking Fundamentals" location="DeMoss Hall 204" color="#3b62d0" past />
          <ScheduleRow time="10:15" code="ECON 201" title="Microeconomics" location="Montview 118" color="#d15c46" current />
          <ScheduleRow time="14:00" code="—" title="Baseball practice" location="East field" color="#d5a62e" />
          <ScheduleRow time="17:30" code="—" title="Study session" location="Library · Floor 3" color="#787b80" />
        </div>
      </section>
      <aside className="today-side"><section><SectionHead number="02" title="Due today" action="View all" href="/assignments" /><div className="task-list">{today.map((a) => <AssignmentRow key={a.id} assignment={a} toggle={toggle} compact />)}</div></section>
        <section><SectionHead number="03" title="Coming up" /><div className="coming-list">{upcoming.map((a) => { const c = courseFor(a.courseId); return <div key={a.id} className="coming-row"><i style={{ background: c.color }} /><div><strong>{a.title}</strong><span>{c.code} · {a.type}</span></div><time>{a.group === 'NEXT WEEK' ? 'Oct 8' : a.group}</time></div> })}</div></section>
      </aside>
    </div>
  </div>
}

function SectionHead({ number, title, action, href }: { number: string; title: string; action?: string; href?: string }) {
  return <div className="section-head"><div><span>{number}</span><h2>{title}</h2></div>{action && (href ? <NavLink to={href}>{action} <ChevronRight size={14} /></NavLink> : <button>{action}</button>)}</div>
}

function ScheduleRow({ time, code, title, location, color, current, past }: { time: string; code: string; title: string; location: string; color: string; current?: boolean; past?: boolean }) {
  return <div className={`schedule-row ${current ? 'current' : ''} ${past ? 'past' : ''}`}><time>{time}</time><div className="timeline-mark"><i style={{ background: color }} /></div><div className="schedule-info"><div><b>{code}</b><strong>{title}</strong></div><span><MapPin size={13} />{location}</span>{current && <em>NOW</em>}</div></div>
}

function CheckButton({ checked, onClick }: { checked: boolean; onClick: () => void }) {
  return <button className={`check ${checked ? 'checked' : ''}`} aria-label={checked ? 'Mark incomplete' : 'Mark complete'} onClick={onClick}>{checked && <Check size={13} />}</button>
}

function AssignmentRow({ assignment, toggle, compact = false }: { assignment: Assignment; toggle: (id: string) => void; compact?: boolean }) {
  const course = courseFor(assignment.courseId)
  return <article className={`assignment-row ${assignment.completed ? 'is-complete' : ''} ${compact ? 'compact' : ''}`}><CheckButton checked={assignment.completed} onClick={() => toggle(assignment.id)} /><div className="assignment-main"><strong>{assignment.title}</strong><div><span className="course-dot" style={{ background: course.color }} />{course.code}<span>·</span>{assignment.type}</div></div>{assignment.priority === 'high' && <span className="priority">HIGH</span>}<time>{assignment.due}</time><button className="row-menu" aria-label="More options"><MoreHorizontal size={18} /></button></article>
}

function AssignmentsPage({ assignments, toggle, onAdd }: { assignments: Assignment[]; toggle: (id: string) => void; onAdd: () => void }) {
  const [tab, setTab] = useState('Upcoming')
  const [course, setCourse] = useState('all')
  const visible = assignments.filter((a) => (course === 'all' || a.courseId === course) && (tab === 'Completed' ? a.completed : !a.completed) && (tab !== 'Today' || ['TODAY', 'OVERDUE'].includes(a.group)))
  const groups = ['OVERDUE', 'TODAY', 'TOMORROW', 'FRIDAY', 'NEXT WEEK'] as const
  return <div className="page">
    <PageHeader eyebrow="Fall 2026" title="Assignments" subtitle={`${assignments.filter((a) => !a.completed).length} open assignments across ${courses.length} courses.`} action={<AddButton onClick={onAdd} />} />
    <div className="toolbar"><div className="tabs">{['Upcoming', 'Today', 'This week', 'Completed'].map((item) => <button className={tab === item ? 'active' : ''} onClick={() => setTab(item)} key={item}>{item}</button>)}</div><div className="filters"><select value={course} onChange={(e) => setCourse(e.target.value)} aria-label="Filter by course"><option value="all">All courses</option>{courses.map((c) => <option value={c.id} key={c.id}>{c.code}</option>)}</select><button className="secondary-button"><SlidersHorizontal size={15} /> Filters</button></div></div>
    <div className="assignment-groups">{tab === 'Completed' ? <AssignmentGroup title="Completed" items={visible} toggle={toggle} /> : groups.map((group) => <AssignmentGroup key={group} title={group} items={visible.filter((a) => a.group === group)} toggle={toggle} />)}</div>
  </div>
}

function AssignmentGroup({ title, items, toggle }: { title: string; items: Assignment[]; toggle: (id: string) => void }) {
  if (!items.length) return null
  return <section className="assignment-group"><div className="group-title"><h2>{title}</h2><span>{items.length.toString().padStart(2, '0')}</span></div>{items.map((item) => <AssignmentRow key={item.id} assignment={item} toggle={toggle} />)}</section>
}

const days = ['MON 17', 'TUE 18', 'WED 19', 'THU 20', 'FRI 21']
function CalendarPage({ onAdd }: { onAdd: () => void }) {
  const [view, setView] = useState<'Week' | 'Month'>('Week')
  return <div className="page calendar-page"><PageHeader eyebrow="Fall 2026" title="Calendar" action={<AddButton onClick={onAdd} label="Add event" />} />
    <div className="calendar-toolbar"><div className="calendar-nav"><button className="secondary-button">Today</button><button className="icon-button"><ChevronLeft /></button><button className="icon-button"><ChevronRight /></button><strong>August 17–21, 2026</strong></div><div className="segmented"><button className={view === 'Week' ? 'active' : ''} onClick={() => setView('Week')}>Week</button><button className={view === 'Month' ? 'active' : ''} onClick={() => setView('Month')}>Month</button></div></div>
    {view === 'Week' ? <WeekCalendar /> : <MonthCalendar />}</div>
}

function WeekCalendar() {
  const hours = Array.from({ length: 12 }, (_, i) => i + 8)
  return <div className="week-calendar"><div className="week-header"><span />{days.map((day, index) => <div className={index === 1 ? 'today' : ''} key={day}><span>{day.split(' ')[0]}</span><b>{day.split(' ')[1]}</b></div>)}</div><div className="week-body"><div className="time-column">{hours.map((h) => <time key={h}>{h > 12 ? h - 12 : h} {h >= 12 ? 'PM' : 'AM'}</time>)}</div><div className="day-grid">{days.map((day, index) => <div className={`day-column ${index === 1 ? 'today' : ''}`} key={day}>{events.filter((event) => event.day === index).map((event) => <div className="calendar-event" key={event.id} style={{ top: `${(event.start - 8) * 64}px`, height: `${Math.max(event.duration * 64, 48)}px`, borderColor: event.color, background: `${event.color}15` }}><b>{event.title}</b><span>{event.subtitle}</span><small>{formatTime(event.start)}</small></div>)}</div>)}</div></div></div>
}

function formatTime(value: number) { const h = Math.floor(value); const m = Math.round((value - h) * 60); return `${h > 12 ? h - 12 : h}:${m.toString().padStart(2, '0')}` }

function MonthCalendar() {
  const dates = Array.from({ length: 35 }, (_, i) => i - 3)
  return <div className="month"><div className="month-days">{['MON','TUE','WED','THU','FRI','SAT','SUN'].map((d) => <span key={d}>{d}</span>)}</div><div className="month-grid">{dates.map((d, i) => <div className={`${d <= 0 || d > 31 ? 'muted' : ''} ${d === 18 ? 'current' : ''}`} key={i}><b>{d <= 0 ? 31 + d : d > 31 ? d - 31 : d}</b>{[6,8,11,13,14,18,20,25].includes(d) && <span className="month-event">{d === 18 ? 'Routing lab due' : 'Class · 9:00'}</span>}</div>)}</div></div>
}

function CoursesPage({ onAdd }: { onAdd: () => void }) {
  return <div className="page"><PageHeader eyebrow="Fall 2026" title="Courses" subtitle={`${courses.length} active courses · 13 total credits`} action={<AddButton onClick={onAdd} label="Add course" />} />
    <div className="course-grid">{courses.map((course, index) => <NavLink to={`/courses/${course.id}`} className="course-card" key={course.id}><div className="course-number">0{index + 1}</div><div className="course-color" style={{ background: course.color }} /><div className="course-card-body"><span>{course.code}</span><h2>{course.name}</h2><dl><div><dt>Schedule</dt><dd>{course.schedule}</dd></div><div><dt>Location</dt><dd>{course.location}</dd></div><div><dt>Instructor</dt><dd>{course.instructor}</dd></div></dl></div><ChevronRight /></NavLink>)}</div>
  </div>
}

function CoursePage({ assignments, toggle }: { assignments: Assignment[]; toggle: (id: string) => void }) {
  const { courseId } = useParams(); const course = courses.find((c) => c.id === courseId) ?? courses[0]
  return <div className="page course-detail"><NavLink to="/courses" className="back-link"><ArrowLeft size={15} /> All courses</NavLink><header className="course-hero"><div className="course-index" style={{ background: course.color }}>01</div><div><span>{course.code} · Fall 2026</span><h1>{course.name}</h1></div><button className="secondary-button"><MoreHorizontal /> Manage</button></header>
    <div className="course-detail-grid"><main><SectionHead number="01" title="Upcoming assignments" /><div className="task-list">{assignments.filter((a) => a.courseId === course.id && !a.completed).map((a) => <AssignmentRow key={a.id} assignment={a} toggle={toggle} />)}</div><SectionHead number="02" title="Course schedule" /><div className="meeting-list">{course.schedule.startsWith('MWF') ? ['Monday','Wednesday','Friday'].map((d) => <div key={d}><strong>{d}</strong><span>9:00–9:50 AM</span><span>{course.location}</span></div>) : ['Tuesday','Thursday'].map((d) => <div key={d}><strong>{d}</strong><span>{course.schedule.split('·')[1]}</span><span>{course.location}</span></div>)}</div></main><aside className="course-facts"><h2>Course information</h2><Fact label="Instructor" value={course.instructor} sub={course.email} /><Fact label="Location" value={course.location} /><Fact label="Credits" value={`${course.credits} credits`} /><Fact label="Office hours" value="Tuesday · 1:00–3:00 PM" /><button className="secondary-button">Open course website <ChevronRight size={14} /></button></aside></div>
  </div>
}

function Fact({ label, value, sub }: { label: string; value: string; sub?: string }) { return <div className="fact"><span>{label}</span><strong>{value}</strong>{sub && <small>{sub}</small>}</div> }

function SchedulePage() {
  return <div className="page"><PageHeader eyebrow="Recurring week" title="Schedule" subtitle="Your typical week at a glance." action={<button className="secondary-button"><Plus size={17} /> Add recurring event</button>} /><div className="schedule-summary">{days.map((day, i) => <section key={day}><header><span>{day.split(' ')[0]}</span><b>{day.split(' ')[1]}</b></header><div>{events.filter((e) => e.day === i).map((e) => <article key={e.id}><i style={{ background: e.color }} /><time>{formatTime(e.start)}</time><div><strong>{e.title}</strong><span>{e.subtitle}</span><small>{e.location}</small></div></article>)}</div></section>)}</div></div>
}

function SettingsPage() {
  const [dark, setDark] = useState(false)
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light' }, [dark])
  return <div className="page settings-page"><PageHeader eyebrow="Account" title="Settings" subtitle="Manage your preferences and active semester." /><div className="settings-grid"><nav><button className="active"><UserRound /> Profile</button><button><CalendarDays /> Calendar</button><button><Moon /> Appearance</button><button><Archive /> Semesters</button></nav><main><h2>Profile</h2><p>Your personal details and academic preferences.</p><div className="form-grid"><label>Display name<input defaultValue="Tate Jones" /></label><label>Email<input defaultValue="tate@university.edu" type="email" /></label><label>Timezone<select defaultValue="America/New_York"><option>America/New_York</option><option>America/Chicago</option><option>America/Los_Angeles</option></select></label><label>Active semester<select><option>Fall 2026</option><option>Spring 2027</option></select></label></div><div className="setting-row"><div><strong>Dark appearance</strong><span>Use a darker color palette throughout the app.</span></div><button className={`switch ${dark ? 'on' : ''}`} onClick={() => setDark(!dark)}><i /></button></div><button className="primary-button">Save changes</button></main></div></div>
}

function Dialog({ children, onClose, wide = false }: { children: ReactNode; onClose: () => void; wide?: boolean }) {
  return <div className="dialog-layer" role="presentation"><button className="dialog-backdrop" aria-label="Close dialog" onClick={onClose} /><section className={`dialog ${wide ? 'wide' : ''}`} role="dialog" aria-modal="true">{children}</section></div>
}

function AddDialog({ onClose, onAdd }: { onClose: () => void; onAdd: (assignment: Assignment) => void }) {
  const [type, setType] = useState<'assignment' | 'event' | 'course'>('assignment')
  const [title, setTitle] = useState('')
  const [courseId, setCourseId] = useState('cs310')
  const submit = (event: FormEvent) => { event.preventDefault(); if (!title.trim()) return; if (type === 'assignment') onAdd({ id: crypto.randomUUID(), title, courseId, due: 'Tomorrow · 11:59 PM', group: 'TOMORROW', type: 'Assignment', priority: 'normal', completed: false }); onClose() }
  return <Dialog onClose={onClose}><header className="dialog-head"><div><span>Quick add</span><h2>Add something new</h2></div><button className="icon-button" onClick={onClose}><X /></button></header><div className="type-tabs">{(['assignment','event','course'] as const).map((item) => <button className={type === item ? 'active' : ''} onClick={() => setType(item)} key={item}>{item}</button>)}</div><form onSubmit={submit} className="add-form"><label>{type === 'course' ? 'Course name' : 'Title'}<input autoFocus value={title} onChange={(e) => setTitle(e.target.value)} placeholder={type === 'assignment' ? 'e.g. Chapter 7 problem set' : `New ${type}…`} required /></label>{type !== 'course' && <label>Course<select value={courseId} onChange={(e) => setCourseId(e.target.value)}>{courses.map((course) => <option value={course.id} key={course.id}>{course.code} — {course.name}</option>)}</select></label>}<div className="two-fields"><label>{type === 'course' ? 'Course code' : 'Date'}<input type={type === 'course' ? 'text' : 'date'} defaultValue={type === 'course' ? '' : '2026-08-19'} placeholder="CS 101" /></label><label>{type === 'course' ? 'Color' : 'Time'}<input type={type === 'course' ? 'color' : 'time'} defaultValue={type === 'course' ? '#3b62d0' : '23:59'} /></label></div><button type="button" className="more-options">More options <ChevronDown /></button><footer><span>Press <kbd>↵</kbd> to save</span><button className="primary-button" type="submit">Add {type}</button></footer></form></Dialog>
}

function CommandPalette({ onClose, onAdd }: { onClose: () => void; onAdd: () => void }) {
  const [query, setQuery] = useState(''); const navigate = useNavigate()
  const links = useMemo(() => [...nav.map((n) => ({ label: `Go to ${n.label}`, to: n.to })), ...courses.map((c) => ({ label: `${c.code} — ${c.name}`, to: `/courses/${c.id}` }))].filter((x) => x.label.toLowerCase().includes(query.toLowerCase())), [query])
  const go = (to: string) => { navigate(to); onClose() }
  return <Dialog onClose={onClose} wide><div className="command-search"><Search /><input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search courses, assignments, and commands…" /><kbd>ESC</kbd></div><div className="command-list"><span>QUICK ACTIONS</span><button onClick={onAdd}><Plus />Add assignment<kbd>C</kbd></button>{links.map((item) => <button key={item.to} onClick={() => go(item.to)}><Command />{item.label}<ChevronRight /></button>)}</div><footer className="command-footer"><span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span><span><kbd>↵</kbd> Open</span><CircleHelp size={14} /></footer></Dialog>
}

export default App
