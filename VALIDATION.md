# Delivery validation

Performed for the portal-links and tutorial revision:

- `npm run build`: passed using Node 24.19.0 and Vite 7.1.12.
- Production JavaScript rendered in JSDOM: passed checks for the exact teacher and student portal URLs, new-tab attributes, removal of the local simulation, both hardcoded three-step tutorials, tutorial reset when changing audience, and final tutorial links to the matching portal.
- Checked that visible page content and all research dialogs contain no deck, slide, info-session or source-footnote references.
- Checked that the development plan contains no source images or expandable source diagram.
- Existing workflow tabs still switch between the five-step submission and trajectory flows.
- No React console errors occurred in the checks.
- ZIP CRC integrity and required project files were verified during packaging.

## Verification limits

Docker is not installed in the delivery environment, so container execution remains unverified. Actual browser layout remains unverified because a browser cannot run here. JSDOM checks DOM behavior without performing visual layout.

The supplied teacher/student URLs were checked for exact link targets and attributes. The external applications were not modified, signed into or tested. This app provides documentation, introductory tutorial text and links to those applications.
