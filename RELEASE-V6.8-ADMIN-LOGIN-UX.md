# V6.8 — Admin environment + login UX

Changes:
- Production Admin now detects the hostname and shows `LIVE SITE`.
- Staging (`staging-overrun`) still shows `STAGING`.
- Fixed the broken logout UI refresh.
- Logout now immediately returns to the login card and displays `✓ You are logged out.`
- Added Show/Hide password control.
- Added `Keep me signed in for 30 days`.
- Normal unchecked sessions remain 12 hours.
- Remembered sessions use the existing signed HttpOnly/Secure/SameSite=Strict cookie for 30 days.
- The site does not store the Admin password in localStorage.
- Only the remembered username is stored locally for convenience.
- Added Enter-key login support.

No KV content, Gallery content, branding content, or production data is changed by this release.
