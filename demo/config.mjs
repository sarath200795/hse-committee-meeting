export const config = {
  "title": "HSE Committee Meeting",
  "tagline": "Run safety committee meetings — minutes, attendees, CAPA actions and a statutory compliance calendar.",
  "org": "Northwind Industrial",
  "port": 5173,
  "walkthrough": [
    {
      "route": "/app",
      "title": "Meetings dashboard",
      "sub": "Meeting summary tiles, stats and analytics by type and status."
    },
    {
      "route": "/app/meetings",
      "title": "Meetings list",
      "sub": "Browse and search all logged meetings; open one for full minutes and actions."
    },
    {
      "route": "/app/sites",
      "title": "Facility sites",
      "sub": "Meetings are scoped to sites for statutory compliance tracking."
    },
    {
      "route": "/app/users",
      "title": "Team & approvals",
      "sub": "Approve sign-up requests and manage member roles."
    }
  ],
  "closing": {
    "route": "/app",
    "title": "HSE Committee — consultation, on the record.",
    "sub": "Start by registering your organization."
  }
}
