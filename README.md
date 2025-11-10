## Ajackus-Pacaso E2E Test Suite (Cypress)

A Cypress end-to-end test suite for validating key flows on the Pacaso website across environments.

### Project structure
- `cypress/e2e/`: Spec files
- `cypress/page_objects/`: Page Objects used by specs
- `cypress/common_methods/`: Reusable helpers (`assertions.js`, `elements.js`, etc.)
- `cypress/fixtures/`: Test data
- `cypress/reports/`: Mochawesome JSON and HTML reports
- `cypress/screenshots/` and `cypress/videos/`: Test artifacts
- `cypress/support` : Global hook and custom commands(if needed)

### Prerequisites
- Node.js and npm installed

### Install
```bash
npm install
```

### Quick start
- Open Cypress runner:
```bash
npx cypress open
```
- Run against Production (headless Chrome):
```bash
npm run cypress:run:production
```
- Run against Staging (headed):
```bash
npm run cypress:run:staging
```

Both runs set `baseURL` and `siteUrl` via `--env`. You can override them, e.g.:
```bash
cypress run --env baseURL=https://pacaso:rowtogether@www.staging.pacaso.com,siteUrl=https://www.staging.pacaso.com --headed --browser chrome
```

### Reports
After a headless run, generate a consolidated Mochawesome HTML report:
```bash
npm run report:merge
npm run report:generate
```
The HTML report will be in `cypress/reports/HTML/` (open `report.html`).

### Writing and maintaining tests
- Follow the Page Object pattern & Singleton pattern in `cypress/page_objects/`.
- Reuse common helpers in `cypress/common_methods/`.
- Reference method documentation and migration notes here:
  - `cypress/Documentation/README.md`

### Test data and artifacts
- Place test data in `cypress/fixtures/` (e.g., `destinations.json`, `listings.json`).
- Screenshots and videos for failed runs are saved under `cypress/screenshots/` and `cypress/videos/`.

### Environment variables
The suite expects `baseURL` and `siteUrl`. Provide them via the CLI `--env` flag as shown above. You can also export environment variables prefixed with `CYPRESS_` if preferred.

### Troubleshooting
- Ensure Chrome is installed for `--browser chrome` runs.
- If tests are flaky locally, try `--headed` and increase viewport or timeouts as needed.
- Clear Cypress cache if needed: `npx cypress cache clear`.

### Please use below git commands (for future engineer)
- For cloning into your system, create a project folder and go into the folder
`mkdir my-projects`
`cd my-projects`
- Clone the repository
`git clone <Your Repo URL>`
- Check current branch and modified files
`git status`
- List all branches
`git branch`
- Create and switch to new branch
`git checkout -b new-branch-name`
- Stage all changes
`git add .`
- Stage only selected files
`git add <filename>`
- Commit Staged changes
`git commit -m "Your commit message"`
- Push branch to github
`git push origin branch-name`
- Pull latest changes from main branch
`git pull origin main`
