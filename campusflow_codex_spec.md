# CampusFlow — Product & Engineering Specification

## 1. Project Summary

**Working name:** CampusFlow  
**Product type:** College student productivity web app  
**Primary platform:** Responsive web application  
**Frontend:** React + Vite + TypeScript  
**Design style:** Swiss International / International Typographic Style  
**Primary goal:** Help college students organize assignments, classes, events, deadlines, and daily schedules in one clean, fast, low-friction interface.

CampusFlow should feel significantly simpler than a traditional project-management tool and more structured than a basic calendar.

The product should answer three questions immediately when a student opens it:

1. What do I need to do today?
2. What is coming up next?
3. Where do I need to be?

The application should prioritize **clarity, speed, visual hierarchy, and low cognitive load**.

---

# 2. Product Vision

College students often manage coursework across several disconnected systems:

- Learning management systems
- Email
- Syllabi
- Google Calendar / Apple Calendar
- Notes apps
- To-do apps
- Group chats
- Paper planners

CampusFlow should act as the student's personal academic command center.

The app should consolidate:

- Courses
- Assignments
- Exams
- Quizzes
- Projects
- Class meetings
- Study blocks
- Club events
- Work shifts
- Practices
- Personal events
- Recurring schedules

The product should make it possible to understand an entire week in seconds without forcing the user to maintain a complicated productivity system.

---

# 3. Core Product Principles

## 3.1 Simplicity First

Every major action should be understandable without onboarding documentation.

Avoid:

- Deep nested menus
- Excessive configuration
- Enterprise project-management terminology
- Large setup requirements
- Overloaded dashboards

Prefer:

- Obvious actions
- Strong defaults
- Inline editing
- Keyboard shortcuts
- Minimal navigation
- Fast task creation

---

## 3.2 Student-Specific, Not Generic

CampusFlow should be designed around the academic calendar.

Use terminology such as:

- Course
- Assignment
- Exam
- Quiz
- Due date
- Semester
- Office hours

instead of generic business terminology such as:

- Project
- Sprint
- Ticket
- Milestone
- Workspace

---

## 3.3 One Source of Truth

Assignments, calendar events, and courses should all use the same underlying data system.

Example:

An assignment due Friday should appear automatically in:

- Today view when relevant
- Upcoming assignments
- Course page
- Calendar
- Weekly schedule

The user should never need to enter the same information multiple times.

---

## 3.4 Fast Interaction

Frequent actions should take very few clicks.

Examples:

- Add assignment
- Mark assignment complete
- Move due date
- Add event
- View today's schedule
- Filter by course

Target most common actions to take fewer than 3 interactions.

---

# 4. Target Users

## Primary User

College students managing multiple courses and activities.

Typical characteristics:

- 4–7 courses per semester
- Multiple assignments each week
- Exams and quizzes
- Extracurricular activities
- Athletics, employment, or clubs
- Frequently checking schedules from a phone or laptop

---

## Example Personas

### Busy Student

Has five classes, works part-time, and participates in a student organization.

Needs:

- Deadline visibility
- Schedule coordination
- Reminders
- Easy weekly planning

### Student Athlete

Has:

- Courses
- Practices
- Lifts
- Team meetings
- Travel
- Games

Needs to understand when schoolwork fits between athletic responsibilities.

### Highly Organized Student

Already uses calendars and task apps but wants a cleaner academic-focused system.

Needs:

- Fast input
- Keyboard shortcuts
- Calendar views
- Course organization
- Filtering

---

# 5. MVP Scope

The MVP should include:

1. Authentication
2. Semester setup
3. Course management
4. Assignment management
5. Event management
6. Recurring class schedules
7. Today dashboard
8. Weekly calendar
9. Upcoming assignments
10. Assignment completion tracking
11. Course color coding
12. Responsive mobile layout
13. Search and filtering
14. Basic settings
15. Local or cloud persistence depending on selected backend architecture

Do not overbuild the first release.

---

# 6. Future Features

These features should NOT block the MVP.

Potential later additions:

- Canvas LMS integration
- Blackboard integration
- Moodle integration
- Google Calendar sync
- Outlook Calendar sync
- Apple Calendar export
- Automatic syllabus parsing
- AI assignment extraction
- AI study planning
- Push notifications
- Email reminders
- Mobile apps
- GPA tracking
- Grade tracking
- Course grade calculators
- Assignment priority prediction
- Study-session recommendations
- Shared study groups
- Roommate/shared calendars
- Widgets
- Offline-first mode

Architecture should leave reasonable room for these additions without prematurely implementing them.

---

# 7. Information Architecture

Primary navigation:

- Today
- Calendar
- Assignments
- Courses
- Schedule

Secondary navigation:

- Search
- Settings
- Profile

Desktop layout:

```text
┌─────────────────────────────────────────────────────────────┐
│ Sidebar │ Main Content                                     │
│         │                                                  │
│ Today   │                                                  │
│ Calendar│                                                  │
│ Tasks   │                                                  │
│ Courses │                                                  │
│ Schedule│                                                  │
│         │                                                  │
│ Settings│                                                  │
└─────────────────────────────────────────────────────────────┘
```

Mobile layout:

Use a compact bottom navigation bar containing the most-used destinations.

Suggested mobile nav:

- Today
- Calendar
- Add
- Assignments
- Courses

---

# 8. Dashboard / Today View

The Today view is the primary home screen.

Its purpose is to immediately communicate the student's day.

## Header

Display:

- Current weekday
- Date
- Optional greeting
- Quick Add button

Example:

```text
TUESDAY
AUGUST 18

Good morning, Tate.
```

Do not make greetings visually dominant.

---

## Today Schedule

Chronological list of events.

Example:

```text
8:00 AM     CS 310
            Networking Fundamentals
            DeMoss Hall 204

10:15 AM    ECON 201
            Microeconomics

1:00 PM     Baseball Practice

6:30 PM     Study Session
```

Current or next event should receive a subtle emphasis.

---

## Due Today

Show assignments due that day.

Each row includes:

- Completion checkbox
- Assignment title
- Course
- Due time
- Priority indicator if applicable

Example:

```text
○ Routing Lab                         CS 310       11:59 PM
○ Chapter 6 Questions                ECON 201      5:00 PM
```

---

## Coming Up

Show approximately the next 3–7 important items.

Prioritize:

1. Overdue assignments
2. Assignments due today
3. Assignments due tomorrow
4. Exams
5. High-priority assignments
6. Remaining future assignments

---

# 9. Assignments

Assignments are one of the core entities.

## Assignment Fields

Required:

- Title
- Course
- Due date

Optional:

- Due time
- Assignment type
- Description
- Priority
- Status
- Estimated duration
- URL
- Notes

Assignment types:

- Assignment
- Homework
- Project
- Paper
- Quiz
- Exam
- Reading
- Lab
- Discussion
- Presentation
- Other

---

## Assignment Status

Possible statuses:

- Not started
- In progress
- Completed

For the initial UI, a simple completed checkbox may be sufficient.

Status architecture should allow expansion later.

---

## Assignment Priority

Priority values:

- Low
- Normal
- High

Do not visually overwhelm the UI with priority labels.

Use small indicators.

---

# 10. Assignment Views

The Assignments page should support multiple organization modes.

Primary view:

### Upcoming

Grouped by date.

```text
TODAY

[ ] Networking Lab
    CS 310 · 11:59 PM

TOMORROW

[ ] Economics Chapter Questions
    ECON 201 · 5:00 PM

FRIDAY

[ ] Database Project Milestone
    CS 340 · 11:59 PM
```

Additional filters:

- All
- Today
- This Week
- Overdue
- Completed

Filter by:

- Course
- Assignment type
- Priority

---

# 11. Quick Add Assignment

Adding an assignment must be extremely fast.

Quick-add form:

```text
Assignment title

Course
Due date
Due time

[More options]

Add Assignment
```

The full advanced form should not be required for normal entry.

Remember recent course selection where appropriate.

---

# 12. Courses

Courses act as organizational containers.

## Course Fields

Required:

- Course name
- Course code
- Color

Optional:

- Instructor
- Location
- Meeting schedule
- Credits
- Office hours
- Instructor email
- Course website
- Notes

Example:

```text
Course name: Data Networking & Security
Code: IT 340
Instructor: Dr. Smith
Location: DeMoss 204
```

---

# 13. Course Page

Each course receives its own page.

Header:

```text
IT 340
Data Networking & Security
```

Sections:

- Next class
- Upcoming assignments
- Course schedule
- Instructor information
- Notes

Optional later:

- Course files
- Grade
- Resources
- AI assistance

---

# 14. Calendar

Provide a visually clean calendar.

MVP views:

- Week
- Month

Default desktop view should be Week.

Default mobile view can be a compact agenda or 3-day view if full week becomes difficult to use.

---

## Weekly Calendar

Time should be vertical.

Days should be horizontal.

Example:

```text
          MON      TUE      WED      THU      FRI

8 AM      CS310             CS310             CS310

10 AM              ECON              ECON

1 PM      Practice Practice Practice Practice Practice
```

Events use course/event colors.

Do not use excessive borders.

---

## Calendar Event Interaction

Clicking an event should open an event detail popover or sheet.

Allow:

- Edit
- Delete
- Duplicate
- Mark assignment complete if event corresponds to assignment

---

# 15. Events

Events represent non-assignment scheduled items.

Examples:

- Classes
- Meetings
- Practice
- Games
- Club events
- Work shifts
- Study sessions
- Appointments
- Personal events

Fields:

- Title
- Start date
- Start time
- End time
- Location
- Description
- Category
- Color
- Recurrence
- Associated course

---

# 16. Recurring Events

The app must support recurring events.

Common recurrence rules:

- Daily
- Weekdays
- Weekly
- Custom weekdays
- Until date

Example:

```text
CS 310

Monday / Wednesday / Friday
9:00–9:50 AM

Repeats until December 4
```

Use a recurrence system compatible with common calendar standards if possible.

---

# 17. Schedule Setup

The Schedule page helps the user define their typical weekly routine.

Possible categories:

- Classes
- Practice
- Work
- Meetings
- Study blocks
- Personal

Users should be able to quickly visualize their repeating week.

---

# 18. Semester Management

Students organize courses within semesters.

Semester fields:

- Name
- Start date
- End date

Examples:

- Fall 2026
- Spring 2027
- Summer 2027

Allow:

- Active semester
- Archived semesters

Assignments and courses belong to a semester.

---

# 19. Search

Global search should support:

- Assignment titles
- Course names
- Course codes
- Events

Keyboard shortcut:

```text
Cmd + K
```

or

```text
Ctrl + K
```

Search should open a command palette.

---

# 20. Command Palette

Recommended.

Possible commands:

```text
Add assignment
Add event
Open calendar
Go to today
Open CS 310
Search assignments
```

Keyboard-first workflows strongly improve the desktop experience.

---

# 21. Design Direction

## Style

Use **Swiss International / International Typographic Style**.

Design characteristics:

- Strong grid
- Clean typography
- Generous whitespace
- Precise alignment
- Minimal decoration
- Functional hierarchy
- Bold typography
- Limited color use
- Clear geometric relationships

Avoid turning the interface into a decorative interpretation of Swiss posters.

The UI must remain a modern productivity application.

---

# 22. Visual Inspiration

Conceptual references:

- Linear
- Notion Calendar
- Things
- Cron
- Raycast
- Apple Calendar
- Modern Swiss editorial layouts

Do not copy any product directly.

---

# 23. Typography

Use a modern grotesk sans-serif.

Recommended free options:

- Inter
- Geist
- IBM Plex Sans
- Helvetica Neue where available
- Arial as final fallback

Suggested font stack:

```css
font-family:
  Inter,
  "Helvetica Neue",
  Helvetica,
  Arial,
  sans-serif;
```

Typography should provide most of the interface hierarchy.

---

# 24. Typography Scale

Suggested scale:

```text
Display       48–64px
Page title    32–40px
Section title 20–24px
Body          15–16px
Small         13–14px
Metadata      11–12px
```

Use uppercase sparingly for:

- Dates
- Section labels
- Metadata

Example:

```text
TUESDAY
AUGUST 18
```

---

# 25. Layout System

Use an 8px spacing system.

Suggested values:

```text
4px
8px
12px
16px
24px
32px
48px
64px
96px
```

Prefer strong alignment over decorative containers.

---

# 26. Grid

Desktop content should use a consistent responsive grid.

Suggested maximum content width:

```text
1440px
```

Pages should have:

- Consistent sidebar
- Main content column
- Optional contextual side panel

---

# 27. Color System

Keep the base UI mostly neutral.

Suggested semantic palette structure:

```text
Background
Surface
Elevated Surface
Primary Text
Secondary Text
Muted Text
Border
Accent
Success
Warning
Danger
```

Course colors can provide the majority of the product's color.

Example course colors:

- Blue
- Red
- Green
- Orange
- Violet
- Teal
- Yellow

Ensure sufficient contrast.

---

# 28. Dark Mode

Dark mode is optional for MVP but the design-token architecture should support it.

Do not hardcode colors throughout components.

Use CSS variables.

Example:

```css
:root {
  --bg: ...;
  --surface: ...;
  --text-primary: ...;
  --text-secondary: ...;
  --border: ...;
}
```

---

# 29. Borders and Corners

Swiss styling should favor crisp geometry.

Suggested:

```text
Border radius: 6–10px
```

Avoid excessive pill-shaped UI.

Buttons and tags may use moderate rounding but not every object should be a floating card.

---

# 30. Shadows

Use extremely subtle shadows or none.

Prefer:

- Borders
- Background contrast
- Whitespace

over heavy shadows.

---

# 31. Iconography

Use a consistent icon library.

Recommended:

```text
Lucide React
```

Avoid mixing icon libraries.

Icons should generally accompany text instead of replacing understandable labels.

---

# 32. Responsive Design

The app must work well on:

- Desktop
- Laptop
- Tablet
- Mobile

Desktop is optimized for planning.

Mobile is optimized for checking and quick entry.

---

# 33. Mobile Experience

Mobile layout should emphasize:

- Today's schedule
- Due assignments
- Quick add
- Agenda
- Assignment completion

Avoid squeezing desktop calendar layouts onto small screens.

Use:

- Bottom navigation
- Sheets
- Stacked lists
- Agenda views

---

# 34. Interaction Patterns

Prefer:

- Inline editing
- Side sheets
- Dialogs
- Command palette
- Context menus

Avoid navigating to a completely separate page for tiny edits.

---

# 35. Keyboard Shortcuts

Suggested shortcuts:

```text
C       Create assignment
E       Create event
T       Today
W       Week calendar
Cmd+K   Search / command palette
Esc     Close dialog
```

Do not activate single-key shortcuts while a user is typing inside an input.

---

# 36. Notifications

For the MVP, in-app indicators are sufficient.

Future reminder system may include:

- Browser notifications
- Email
- Mobile push

Potential reminder options:

```text
At due time
10 minutes before
30 minutes before
1 hour before
1 day before
Custom
```

---

# 37. Empty States

Every empty state should explain the next useful action.

Bad:

```text
No data.
```

Good:

```text
No assignments due today.

Your schedule is clear.
```

or

```text
You haven't added any courses yet.

Add your first course to start organizing the semester.

[Add Course]
```

---

# 38. Accessibility

Target WCAG 2.2 AA where practical.

Requirements:

- Keyboard navigation
- Visible focus indicators
- Accessible labels
- Semantic HTML
- High color contrast
- Screen-reader-friendly dialogs
- Do not use color as the only state indicator
- Respect reduced motion settings

---

# 39. Recommended Technology Stack

## Frontend

```text
React
Vite
TypeScript
```

Recommended supporting libraries:

```text
React Router
TanStack Query
Zod
React Hook Form
date-fns
Lucide React
```

Optional:

```text
TanStack Table
```

for complex lists if needed later.

---

# 40. Styling

Recommended:

```text
Tailwind CSS
```

or CSS Modules with centralized design tokens.

Preferred implementation for Codex:

**Tailwind CSS + CSS variables**

Reason:

- Efficient iteration
- Consistent spacing
- Responsive utilities
- Easy design token integration

Do not allow Tailwind classes to result in inconsistent arbitrary styling.

Create reusable primitives.

---

# 41. Component Strategy

Use reusable UI primitives.

Recommended components:

```text
Button
IconButton
Input
Textarea
Select
Checkbox
RadioGroup
DatePicker
TimePicker
Dialog
Sheet
Popover
DropdownMenu
Tabs
Badge
Tooltip
Toast
CommandPalette
EmptyState
Skeleton
```

Application-specific components:

```text
AssignmentRow
AssignmentCard
CourseBadge
CourseCard
CalendarEvent
ScheduleEvent
DayColumn
UpcomingSection
QuickAdd
SemesterSelector
```

---

# 42. Suggested Backend

For an MVP, use:

**Supabase**

Recommended capabilities:

- PostgreSQL
- Authentication
- Row-level security
- Hosted database
- Easy React integration

Alternative:

- Firebase

Supabase is preferred because the relational data model fits courses, assignments, semesters, and events well.

---

# 43. Authentication

Support:

- Email + password
- Google OAuth

Google login is highly desirable for college students.

Future support:

- Microsoft login
- University SSO

---

# 44. Database Model

Use UUID primary keys.

Every user-owned record must include:

```text
user_id
```

Use row-level security to prevent users from accessing records they do not own.

---

# 45. Database Schema

## users / profiles

```text
id
email
display_name
avatar_url
timezone
created_at
updated_at
```

Authentication identity may live in Supabase Auth while profile data lives in a profiles table.

---

## semesters

```text
id
user_id
name
start_date
end_date
is_active
created_at
updated_at
```

---

## courses

```text
id
user_id
semester_id
name
code
color
instructor_name
instructor_email
location
credits
website_url
notes
created_at
updated_at
```

---

## assignments

```text
id
user_id
course_id
semester_id
title
description
assignment_type
due_at
priority
status
estimated_minutes
url
notes
completed_at
created_at
updated_at
```

---

## events

```text
id
user_id
course_id nullable
semester_id nullable
title
description
category
location
start_at
end_at
all_day
color
recurrence_rule nullable
created_at
updated_at
```

---

## reminders

Future-ready table:

```text
id
user_id
assignment_id nullable
event_id nullable
remind_at
reminder_type
created_at
```

---

# 46. Data Relationships

```text
User
 ├── Semesters
 │    ├── Courses
 │    │    ├── Assignments
 │    │    └── Events
 │    └── Events
 │
 └── Personal Events
```

An event may optionally belong to a course.

An assignment normally belongs to a course.

---

# 47. Row-Level Security

All user-owned tables must enforce:

```text
auth.uid() = user_id
```

Users must never be able to read or modify another user's data.

Do not rely exclusively on frontend filtering.

---

# 48. Timezone Handling

Store timestamps in UTC.

Store the user's preferred timezone.

Convert timestamps for display.

Use robust date utilities.

Never assume the user's timezone from the browser forever; allow it to be configured.

---

# 49. Frontend Project Structure

Suggested:

```text
src/
  app/
    App.tsx
    router.tsx
    providers.tsx

  components/
    ui/
    assignments/
    calendar/
    courses/
    schedule/
    layout/

  features/
    assignments/
    courses/
    events/
    semesters/
    auth/

  pages/
    TodayPage.tsx
    CalendarPage.tsx
    AssignmentsPage.tsx
    CoursesPage.tsx
    CoursePage.tsx
    SchedulePage.tsx
    SettingsPage.tsx

  hooks/

  lib/
    supabase.ts
    dates.ts
    validation.ts
    utils.ts

  services/

  types/

  styles/
    globals.css
    tokens.css
```

Avoid unnecessary abstraction before components are actually reused.

---

# 50. Routing

Suggested routes:

```text
/
 /today
 /calendar
 /assignments
 /courses
 /courses/:courseId
 /schedule
 /settings
 /login
 /signup
```

Authenticated users visiting `/` should be redirected to `/today`.

---

# 51. State Management

Prefer server-state tools over large global stores.

Use:

```text
TanStack Query
```

for backend data.

Use local component state for UI behavior.

Optional lightweight global state:

```text
Zustand
```

Only add it if genuinely necessary.

Do not introduce Redux unless the complexity clearly requires it.

---

# 52. Forms

Use:

```text
React Hook Form
Zod
```

for:

- Validation
- Form state
- Error messages

Forms should support keyboard submission.

---

# 53. Optimistic Updates

Use optimistic interactions where appropriate.

Examples:

- Completing assignment
- Changing assignment date
- Updating priority

UI should feel immediate.

Rollback if the backend operation fails.

---

# 54. Loading States

Avoid full-screen loading indicators once the application shell is mounted.

Use:

- Skeleton rows
- Placeholder calendar blocks
- Inline spinners

The navigation should remain usable.

---

# 55. Error Handling

Use clear human-readable messages.

Example:

```text
We couldn't save that assignment.
Your changes have not been lost. Try again.
```

Never expose raw database errors to the user.

Log technical errors separately.

---

# 56. Toasts

Use toasts for confirmation when the interface does not otherwise make the result obvious.

Examples:

```text
Assignment created
Event deleted
Course updated
```

Avoid displaying a toast for every checkbox interaction.

---

# 57. Performance

Target:

- Initial load under ~2 seconds on typical broadband
- Fast route transitions
- Immediate checkbox interactions
- Minimal JavaScript overhead

Use route-level lazy loading where beneficial.

Avoid premature micro-optimization.

---

# 58. Data Fetching

Load only the data required for the active view.

Examples:

Today page:

- Today's events
- Overdue assignments
- Assignments due soon

Calendar:

- Events for displayed date range
- Assignment deadlines for displayed range

Do not fetch the user's entire academic history on every page.

---

# 59. Offline Behavior

Full offline support is not required for MVP.

However:

- Avoid destructive behavior during temporary network loss
- Provide retry options
- Preserve unsaved form values when possible

Offline-first can be considered later.

---

# 60. Security Requirements

Never expose privileged Supabase credentials in the frontend.

Only public client keys may be shipped to the browser.

Use:

- Supabase Row Level Security
- Environment variables
- Input validation
- Proper auth session handling

Do not store secrets in the repository.

---

# 61. Environment Variables

Example:

```text
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Provide:

```text
.env.example
```

Do not commit `.env`.

---

# 62. Authentication Flow

New user:

```text
Landing
↓
Sign Up
↓
Create Profile
↓
Create Semester
↓
Add Courses
↓
Today Dashboard
```

Returning user:

```text
Login
↓
Today Dashboard
```

---

# 63. Onboarding

Keep onboarding minimal.

Recommended flow:

### Step 1

```text
What semester are you planning?
```

Fields:

- Semester name
- Start date
- End date

### Step 2

```text
Add your courses
```

Allow multiple courses quickly.

### Step 3

```text
You're ready.
```

Open Today page.

Do not require users to enter their entire schedule before accessing the app.

---

# 64. Add Course Flow

Form:

```text
Course name*
Course code*
Color*

Instructor
Location
Website

[Add Course]
```

After creation, optionally ask:

```text
Add meeting schedule?
```

but allow the user to skip.

---

# 65. Class Meeting Setup

Allow patterns such as:

```text
Monday
Wednesday
Friday
```

and:

```text
9:00 AM – 9:50 AM
```

Location:

```text
DeMoss Hall 204
```

Create recurring events from the course schedule.

---

# 66. Quick Add System

A global "+" button should allow:

```text
Assignment
Event
Course
```

Desktop:

Use a small menu or command palette.

Mobile:

Use an action sheet.

---

# 67. Today Logic

The Today page should query:

```text
Events where start_at is today

Assignments where:
due_at is today
OR overdue and incomplete

Upcoming assignments within configurable future range
```

Sort assignments by:

```text
overdue
due time
priority
```

---

# 68. Overdue Behavior

Overdue assignments should remain visible until:

- Completed
- Deleted
- Due date changed

Use clear but not overly aggressive styling.

Example:

```text
OVERDUE · 2 DAYS
```

---

# 69. Completion Behavior

When an assignment is completed:

- Update status to completed
- Store completed_at
- Remove from active upcoming list
- Leave available in completed/history views

Allow undo shortly after completion.

---

# 70. Calendar Assignment Deadlines

Assignments may appear in the calendar as deadline markers.

Visually distinguish them from timed events.

Example:

Timed event:

```text
9:00–9:50
CS 310
```

Assignment:

```text
● Routing Lab due
```

---

# 71. Course Colors

Course color must remain consistent across:

- Calendar
- Assignments
- Course page
- Course badges
- Schedule

Do not allow arbitrary unreadable colors.

Offer a curated palette.

---

# 72. Settings

MVP settings:

- Name
- Email
- Timezone
- Default calendar view
- Week start day
- Active semester
- Appearance
- Sign out

Future:

- Notifications
- Integrations
- Calendar sync
- Data export

---

# 73. Profile

Keep profile functionality minimal.

This is a productivity app, not a social network.

Avoid:

- Followers
- Public profiles
- Feeds

---

# 74. Landing Page

If a public marketing page is built, keep it minimal.

Recommended structure:

```text
Hero
Product preview
Core benefits
Features
Call to action
Footer
```

Possible headline:

```text
College, organized.
```

Supporting copy:

```text
Assignments, classes, events, and deadlines in one place.
```

CTA:

```text
Get started
```

---

# 75. UI Copy

Use concise language.

Prefer:

```text
Add assignment
```

over:

```text
Create a new academic assignment
```

Prefer:

```text
Due tomorrow
```

over:

```text
This assignment has a deadline occurring tomorrow.
```

---

# 76. Animation

Use motion sparingly.

Good uses:

- Dialog opening
- Checkbox completion
- Menu transitions
- Drag interactions

Duration:

```text
100–200ms
```

Respect:

```css
prefers-reduced-motion
```

---

# 77. Drag and Drop

Not required for MVP.

Potential later use:

- Reschedule event
- Move assignment
- Reorder tasks

Do not make drag-and-drop the only way to perform an action.

---

# 78. Testing

Use:

```text
Vitest
React Testing Library
```

Critical tests should include:

- Assignment creation
- Assignment completion
- Course creation
- Date grouping
- Today calculations
- Overdue calculations
- Authentication-protected routes

Optional E2E:

```text
Playwright
```

Recommended for core user flows.

---

# 79. Linting and Formatting

Configure:

```text
ESLint
Prettier
```

TypeScript should run in strict mode.

The codebase should have no avoidable TypeScript errors.

---

# 80. CI

Use GitHub Actions.

Required checks on pull requests:

```text
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
```

The pipeline should fail on any broken required check.

---

# 81. Package Scripts

Recommended:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "test": "vitest",
    "test:run": "vitest run",
    "preview": "vite preview"
  }
}
```

Adapt to the final Vite/TypeScript setup.

---

# 82. README

Create a polished README containing:

- Project overview
- Screenshots when available
- Tech stack
- Requirements
- Local setup
- Environment variables
- Database setup
- Scripts
- Testing
- Deployment
- Architecture notes

---

# 83. Seed Data

Provide optional development seed data.

Example:

Courses:

```text
CS 310 — Networking Fundamentals
ECON 201 — Microeconomics
ENG 205 — Technical Writing
```

Assignments:

```text
Routing Lab
Chapter 6 Questions
Research Paper Draft
```

Events:

```text
Baseball Practice
Study Session
Office Hours
```

Seed data must never be loaded into production accidentally.

---

# 84. Demo Experience

Development/demo mode should look populated enough to communicate the product.

The dashboard should demonstrate:

- Multiple courses
- Assignment due today
- Upcoming exam
- Several calendar events
- Completed assignment
- Recurring class

---

# 85. Suggested MVP Screens

Codex should implement the following key screens:

1. Login
2. Sign Up
3. Onboarding
4. Today
5. Assignments
6. Calendar
7. Courses
8. Course Detail
9. Schedule
10. Settings
11. Add Assignment dialog
12. Add Event dialog
13. Add Course dialog

---

# 86. Today Page Layout Example

```text
┌──────────────────────────────────────────────────────┐
│ TUESDAY                                    + Add     │
│ AUGUST 18                                            │
│                                                      │
│ TODAY                                                │
│                                                      │
│ 08:00   CS 310                                       │
│         Networking Fundamentals                      │
│                                                      │
│ 10:15   ECON 201                                     │
│         Microeconomics                               │
│                                                      │
│ 13:00   Baseball Practice                            │
│                                                      │
│ ──────────────────────────────────────────────────── │
│ DUE TODAY                                            │
│                                                      │
│ ○ Routing Lab                      CS 310    11:59 PM │
│ ○ Chapter Questions                ECON      5:00 PM │
│                                                      │
│ ──────────────────────────────────────────────────── │
│ COMING UP                                            │
│                                                      │
│ Database Exam                        Thursday         │
│ Paper Draft                          Friday           │
└──────────────────────────────────────────────────────┘
```

---

# 87. Desktop Navigation Example

```text
CAMPUSFLOW

TODAY
CALENDAR
ASSIGNMENTS
COURSES
SCHEDULE

──────────────

FALL 2026

CS 310
ECON 201
ENG 205

──────────────

SETTINGS
```

Keep navigation visually quiet.

The content should dominate.

---

# 88. Assignment Page Layout Example

```text
ASSIGNMENTS

[Upcoming] [Today] [This Week] [Completed]

Filter: All Courses

TODAY

○ Routing Lab
  CS 310
  Due 11:59 PM

TOMORROW

○ Chapter 6 Questions
  ECON 201
  Due 5:00 PM

FRIDAY

○ Research Paper Draft
  ENG 205
  Due 11:59 PM
```

---

# 89. Course Page Layout Example

```text
CS 310
NETWORKING FUNDAMENTALS

Instructor
Dr. Smith

Schedule
MWF · 9:00–9:50 AM

Location
DeMoss 204

UPCOMING

○ Routing Lab
  Due Tuesday

○ Midterm Exam
  October 8

COURSE SCHEDULE

Monday      9:00–9:50
Wednesday   9:00–9:50
Friday      9:00–9:50
```

---

# 90. UX Details That Matter

Small details should receive attention.

Examples:

- Press Enter to submit quick forms
- Clicking course badge filters assignments
- Completing tasks animates subtly
- Esc closes dialogs
- Current day is easy to identify
- Calendar retains last-selected view
- Due dates use relative labels when helpful
- Mobile touch targets are at least ~44px
- Forms autofocus the first meaningful field

---

# 91. Date Formatting

Use friendly dates.

Examples:

```text
Today
Tomorrow
Fri, Aug 21
Sep 4
```

Avoid showing the year when it is obvious.

Use exact date in detail views when useful.

---

# 92. Accessibility Color Handling

Course colors cannot be the only way courses are identified.

Always display course code or name with the color.

Example:

```text
● CS 310
```

---

# 93. Analytics

Not required for MVP.

If analytics are added later, collect only useful product events.

Examples:

- assignment_created
- assignment_completed
- event_created
- course_created

Do not capture assignment content without a clear need and privacy consideration.

---

# 94. Privacy

Academic planning data should be treated as private.

Avoid public-by-default data.

Users should have a future path to:

- Export data
- Delete account
- Delete stored data

---

# 95. Deployment

Recommended:

Frontend:

```text
Vercel
```

or:

```text
Netlify
```

Backend:

```text
Supabase
```

Alternative frontend deployment:

```text
Cloudflare Pages
```

The project should remain deployable independently of local development.

---

# 96. PWA Support

Consider basic PWA support after MVP.

Potential benefits:

- Home-screen installation
- Faster mobile access
- Cached application shell

Do not let PWA work delay the core planner experience.

---

# 97. Development Phases

## Phase 1 — Foundation

Build:

- Vite project
- TypeScript
- Styling system
- Design tokens
- Routing
- App shell
- Sidebar
- Responsive navigation
- Supabase client
- Authentication

---

## Phase 2 — Academic Structure

Build:

- Semesters
- Courses
- Course creation
- Course list
- Course detail

---

## Phase 3 — Assignments

Build:

- Assignment CRUD
- Quick add
- Upcoming page
- Assignment completion
- Filters
- Overdue handling

---

## Phase 4 — Events & Schedule

Build:

- Events
- Recurrence
- Class schedules
- Schedule page
- Event editing

---

## Phase 5 — Calendar

Build:

- Week view
- Month view
- Assignment deadline indicators
- Event detail interaction

---

## Phase 6 — Today Dashboard

Build:

- Today's events
- Due today
- Overdue
- Coming up
- Quick add

---

## Phase 7 — Polish

Add:

- Keyboard shortcuts
- Command palette
- Skeleton loaders
- Empty states
- Responsive refinement
- Accessibility review
- Error handling
- Tests

---

# 98. Codex Implementation Rules

When building the project, Codex should follow these rules.

## General

1. Use React + Vite + TypeScript.
2. Keep components small and understandable.
3. Avoid unnecessary abstractions.
4. Do not introduce dependencies without a clear purpose.
5. Maintain strict TypeScript typing.
6. Keep business logic outside presentational components where reasonable.
7. Use reusable primitives for repeated UI patterns.
8. Preserve accessibility.
9. Write clean semantic HTML.
10. Keep the interface fast.

---

## Design

1. Follow Swiss International design principles.
2. Prioritize alignment and typography.
3. Avoid excessive cards.
4. Avoid gradients unless there is an exceptional reason.
5. Avoid glassmorphism.
6. Avoid oversized rounded corners.
7. Avoid decorative shadows.
8. Avoid generic SaaS dashboard visuals.
9. Keep colors restrained.
10. Course colors should provide much of the interface color.

---

## UX

1. Common actions should require minimal clicks.
2. Never bury assignment creation.
3. Always make today's schedule easy to access.
4. Empty states must provide a next step.
5. Keyboard users must be able to operate the app.
6. Mobile layouts must be intentionally designed rather than scaled-down desktop layouts.
7. Do not require unnecessary fields.
8. Preserve user input after recoverable errors.

---

# 99. Definition of MVP Complete

The MVP is complete when a user can:

1. Create an account.
2. Create a semester.
3. Add courses.
4. Add recurring class schedules.
5. Add assignments.
6. Add events.
7. See their schedule for today.
8. See assignments due today.
9. See upcoming assignments.
10. Mark assignments complete.
11. View a weekly calendar.
12. View a monthly calendar.
13. Filter assignments by course.
14. Edit and delete assignments.
15. Edit and delete events.
16. Use the app comfortably from mobile and desktop.
17. Log out and return later with data preserved.
18. Use the application without seeing another user's data.

---

# 100. Acceptance Criteria

## Authentication

- User can sign up.
- User can log in.
- User can log out.
- Protected pages are inaccessible without authentication.
- User sessions persist appropriately.

## Courses

- User can create a course.
- User can edit a course.
- User can delete a course.
- Course colors remain consistent.

## Assignments

- User can create an assignment.
- Assignment appears in appropriate views.
- User can complete assignment.
- User can edit assignment.
- User can delete assignment.
- Overdue assignment is clearly identified.
- Completed assignments no longer appear in default active lists.

## Events

- User can create event.
- User can create recurring class event.
- User can edit event.
- User can delete event.
- Event appears on calendar and Today view where applicable.

## Calendar

- Week view works.
- Month view works.
- Current day is clearly indicated.
- Course colors are visible.
- Assignment deadlines can be distinguished from events.

## Responsive UI

- Layout is usable at common mobile widths.
- Navigation adapts appropriately.
- Forms do not overflow.
- Calendar has a mobile-friendly alternative.

## Security

- User A cannot read User B's records.
- User A cannot modify User B's records.
- Secrets are not committed to source control.

---

# 101. Nice-to-Have MVP Enhancements

If core functionality is complete and stable, consider:

- Cmd/Ctrl + K command palette
- Drag assignment to reschedule
- Dark mode
- Google sign-in
- Data export
- PWA installation
- Browser reminders

These should not compromise MVP quality.

---

# 102. Long-Term Product Opportunities

CampusFlow could later evolve into a much more powerful academic assistant.

Potential direction:

```text
Student uploads syllabus
↓
AI identifies:
- assignments
- exams
- reading
- grading policies
- course schedule
↓
Student confirms
↓
CampusFlow automatically creates semester plan
```

Additional AI could later answer:

```text
What do I need to get done this week?

When should I study for my networking exam?

Which assignments are most urgent?

How busy is next week?
```

AI should enhance organization rather than replace basic deterministic scheduling.

---

# 103. Potential LMS Integrations

Future integrations:

- Canvas
- Blackboard
- Moodle
- D2L Brightspace

Integration goal:

Automatically import:

- Course names
- Assignments
- Due dates
- Announcements
- Grades

Design the backend so externally sourced assignments could later store fields such as:

```text
external_provider
external_id
external_url
last_synced_at
```

Do not implement unless included in a future milestone.

---

# 104. Potential Calendar Integrations

Future integrations:

- Google Calendar
- Microsoft Outlook
- Apple Calendar via ICS

Potential synchronization strategy:

- CampusFlow events → external calendar
- External calendar → CampusFlow

Conflict and ownership rules must be defined before two-way sync is implemented.

---

# 105. AI Features — Future Only

Possible AI functionality:

### Syllabus Import

Upload PDF syllabus and extract:

- Course
- Instructor
- Schedule
- Assignments
- Exams
- Due dates

Require user confirmation before saving imported information.

### Study Planning

Given:

- Upcoming assignments
- Estimated duration
- Available schedule
- Due dates

Generate suggested study blocks.

### Daily Briefing

Example:

```text
You have two classes today.

Your Networking Lab is due at 11:59 PM and your Economics
quiz is tomorrow at 10:15 AM.

You have a two-hour open block between 2:00 and 4:00 PM.
```

AI output must remain secondary to reliable structured data.

---

# 106. Product Tone

CampusFlow should feel:

- Calm
- Intelligent
- Precise
- Modern
- Academic
- Fast

It should not feel:

- Corporate
- Childish
- Gamified
- Overly motivational
- Busy

Avoid unnecessary:

- Streaks
- Confetti
- Achievement badges
- Productivity scores

unless future user research validates them.

---

# 107. Final Product Goal

The final experience should allow a student to open CampusFlow and understand their academic life within seconds.

The product should make this information immediately obvious:

```text
What is happening today?
What is due next?
What classes do I have?
What assignments are unfinished?
What does the rest of my week look like?
```

If a feature makes those questions easier to answer, it is probably useful.

If a feature makes the system more complicated without significantly improving those answers, it should probably be excluded.

---

# 108. Initial Codex Task

Start by building the MVP foundation.

Order:

1. Initialize React + Vite + TypeScript project.
2. Configure Tailwind CSS.
3. Create design tokens based on this spec.
4. Set up React Router.
5. Create application shell.
6. Create responsive desktop sidebar and mobile navigation.
7. Implement static versions of:
   - Today
   - Assignments
   - Calendar
   - Courses
   - Schedule
8. Create reusable UI primitives.
9. Populate screens with typed mock data.
10. Verify responsive behavior.
11. Add Supabase only after the core UI architecture is clean.
12. Replace mock data incrementally with real database queries.

Do not attempt to build every feature in a single giant implementation pass.

Build vertically, keep the app runnable after each stage, and verify behavior before continuing.

---

# 109. Recommended First Milestone

The first milestone should produce a polished, navigable frontend prototype using mock data.

It should include:

- App shell
- Swiss International visual system
- Responsive navigation
- Today page
- Assignment list
- Week calendar shell
- Course list
- Course detail
- Quick-add dialogs

The prototype should already feel like the final product even before the backend is connected.

Once that foundation is visually and structurally strong, add authentication and persistence.

---

# 110. Final Engineering Standard

Treat this as a production-quality application rather than a throwaway demo.

Prioritize:

```text
Clean architecture
Strong TypeScript
Simple UX
Consistent design
Accessibility
Security
Responsive behavior
Maintainability
Performance
```

Do not sacrifice code quality for unnecessary feature volume.

The best version of CampusFlow is not the version with the most features.

It is the version a college student can reliably use every day without thinking about how the app works.
