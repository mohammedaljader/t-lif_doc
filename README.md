# T-LIF DOC

React documentation and demonstration website for the **Teacher–LLMs Integrated Feedback (T-LIF) system**. Content follows the two supplied July/September 2026 presentations and the TU/e DRIVE project page. See `SOURCES.md` for traceability and `VALIDATION.md` for checks.

Includes product explanations for teachers and students, research background, system architecture, both feedback flows, the October 2026 priorities, a two-year development plan, actual team contacts, teacher/student demo links and separate hardcoded introductory tutorials.

## Docker: production

Install Docker with Compose. Unzip the archive and run these commands inside the `t-lif-doc` folder:

```sh
docker compose up --build -d
```

Open **http://localhost:8080**. Stop with `docker compose down`.

## Docker: development

```sh
docker compose -f compose.dev.yaml up --build
```

Open **http://localhost:5173**. Source files are mounted for live updates. Stop with Ctrl+C and `docker compose -f compose.dev.yaml down`.

After changing dependencies, run `docker compose -f compose.dev.yaml down -v` to reset the dependency volume, then rebuild.

Initial builds require internet to retrieve Node/Nginx images and npm packages. The Dockerfile has development, build and production stages. Production serves compiled static assets through Nginx.

## Without Docker

Use Node.js 22.12+ (Node 24 also supported):

```sh
npm ci
npm run dev
```

Build with `npm run build`. Preview with `npm run preview`.

## Editing the website

- `src/content.js`: research, roadmap, priorities, team, teacher/student portal URLs and hardcoded tutorials.
- `src/main.jsx`: page sections, product features and interactive behavior.
- `src/styles.css`: responsive layout and blue documentation theme. Uses system fonts with no external font requests.
- `public/images/`: the system architecture diagram. The development plan is presented as text, without the source image.
- `index.html` and `public/favicon.svg`: metadata and T-LIF DOC favicon.

The T mark is a website mark created for this deliverable, not an official TU/e logo. “T-LIF DOC” names the documentation site; the project itself remains “T-LIF.” Public project contacts use initials instead of invented portraits.

## Interactive demo links

The demo section opens the role-specific applications in a new tab:

- Teachers: https://teacher.t-lif.com/
- Students: https://student.t-lif.com/

The previous local Feedback Studio simulation has been removed. This documentation app does not provide login, AI generation, data processing or feedback delivery itself. Those experiences belong to the linked applications.

## Quick tutorials

Teacher and student guides are hardcoded in `content.tutorials`. Each has three short steps and a final link to its role-specific application. They are introductory placeholders to replace or expand when full tutorials are ready. No API or content-management system is required.

Visible research and development content does not display slide/deck references. The development plan has no source image. `SOURCES.md` retains editorial traceability for maintainers only; it is not rendered on the website.
