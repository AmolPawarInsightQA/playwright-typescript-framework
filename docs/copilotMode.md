# GitHub Copilot Modes and Commands for QA

> Quick interview notes for using GitHub Copilot in VS Code with QA automation projects such as Playwright with TypeScript.

## Easy Sequence to Remember

**Inline Chat → Ask → Plan → Agent**

- **Inline Chat** = Make a quick change in the current file or selected code.
- **Ask** = Explain or suggest.
- **Plan** = Analyze first and prepare implementation steps.
- **Agent** = Implement, execute, test, and fix.

---

## 1. Inline Chat

Inline Chat works directly inside the code editor. Select code or place the cursor near the code and open Inline Chat.

**Shortcut:** `Ctrl + I` (Windows/Linux)

### QA Usage

- Fix a Playwright locator.
- Add an assertion to the current test.
- Explain selected automation code.
- Convert a hard wait into a Playwright auto-waiting approach.
- Generate a small test method in the current file.

### Example Prompts

```text
Fix this locator using getByRole().
```

```text
Add an assertion to verify that the Login button is visible.
```

```text
Explain this Playwright test step by step.
```

---

## 2. Ask Mode

Ask mode is used to understand code, ask technical questions, and receive suggestions. It is best when you need guidance rather than autonomous project changes.

### QA Usage

- Explain a Playwright fixture, hook, locator, or assertion.
- Understand an error or failed test.
- Compare testing approaches.
- Ask for QA interview explanations.
- Generate a sample without changing the entire project.

### Example Prompts

```text
Explain how testFixtures.ts works in this framework.
```

```text
Why is this Playwright locator failing?
```

```text
What is the difference between beforeEach and beforeAll?
```

**Remember:** Ask = **Tell me / Explain it**

---

## 3. Plan Mode

Plan mode analyzes the requirement and codebase, then creates an implementation plan. Review the plan before allowing implementation.

### QA Usage

- Plan a new Page Object Model flow.
- Plan API automation integration.
- Plan parallel execution or CI/CD changes.
- Identify files that must be created or updated.
- Define test scenarios, risks, and validation steps.

### Example Prompt

```text
/plan Add a page navigation test using the existing Playwright Page Object Model. Include positive and negative scenarios, files to update, and test execution steps.
```

**Remember:** Plan = **Tell me how we will do it**

---

## 4. Agent Mode

Agent mode performs an end-to-end task. It can inspect the codebase, create or modify multiple files, run terminal commands, execute tests, inspect failures, and fix errors. It can also use configured tools such as Playwright MCP.

### Typical QA Agent Sequence

1. Understand the QA requirement.
2. Explore the existing automation framework.
3. Identify the required files and dependencies.
4. Create or modify tests, page objects, fixtures, and test data.
5. Run the test command.
6. Analyze errors or failed assertions.
7. Fix the problem and rerun the test.
8. Summarize the files changed and validation result.

### Example Prompt

```text
Create pageNavigation.spec.ts under the tests folder. Create the required page object under pages, register it in the fixture, add an npm command, run the test in headed mode, and fix any errors.
```

**Remember:** Agent = **Do it and validate it**

---

# Useful QA Commands and Keywords

## Slash Commands: `/`

Slash commands are shortcuts for common Copilot actions. Type `/` in the Copilot Chat input to see the commands available in your current VS Code version and installed extensions.

| Command | QA Use | Example |
|---|---|---|
| `/plan` | Create an implementation or testing plan | `/plan Add a login test using POM` |
| `/explain` | Explain selected test code, when available | `/explain this fixture` |
| `/fix` | Suggest or apply a fix, when available | `/fix this failing locator` |
| `/tests` | Generate tests, when available | `/tests generate negative login scenarios` |
| `/new` | Start a new project or implementation, when available | `/new Playwright TypeScript project` |

> **Note:** Slash-command availability can vary by VS Code version, Copilot version, selected mode, and installed extensions. Type `/` to confirm what is available locally.

---

## Context Keyword: `#`

Use `#` to provide specific project context such as a file, folder, codebase item, symbol, terminal output, or test failure.

### QA Examples

```text
Explain the login flow using #login.spec.ts and #LoginPage.ts.
```

```text
Fix the failure shown in #terminalLastCommand using the existing framework pattern.
```

```text
Create another test similar to #appointment.spec.ts.
```

**Remember:** `#` = **Provide context**

---

## Terminal Keyword: `!`

Start a message with `!` to run a terminal command directly from a supported VS Code Copilot session.

### QA Examples

```text
!npx playwright test
```

```text
!npx playwright test tests/login.spec.ts --headed
```

```text
!npm run test:regression
```

**Remember:** `!` = **Run terminal command**

---

## Tool or Participant Keyword: `@`

Use `@` when a supported chat participant, extension, or tool exposes a participant that you want to address. Availability depends on the installed extensions and Copilot configuration.

### QA Example

```text
@workspace Explain the test execution flow of this automation framework.
```

> In newer Copilot experiences, project context is commonly supplied through `#` mentions and Agent tools. Type `@` to see the participants available in your VS Code installation.

---

# Best Mode for Common QA Activities

| QA Activity | Recommended Mode |
|---|---|
| Explain a locator, fixture, hook, or assertion | Ask or Inline Chat |
| Fix a small issue in the current test | Inline Chat |
| Understand a Playwright error | Ask |
| Design a new automation flow | Plan |
| Identify files and test scenarios before coding | Plan |
| Create a test, page object, fixture, and test data | Agent |
| Run tests and fix failures | Agent |
| Use Playwright MCP for browser interaction | Agent |
| Make a quick change in selected code | Inline Chat |

---

# Short Interview Answer

> In VS Code, I use Inline Chat, Ask, Plan, and Agent based on the QA task. Inline Chat is useful for quick changes in the current test file. Ask mode helps me understand automation code and errors. Plan mode analyzes the requirement and prepares implementation and validation steps before code changes. Agent mode can work autonomously by creating or updating multiple framework files, running Playwright tests, analyzing failures, fixing issues, and using tools such as Playwright MCP. I use `/` for available commands such as `/plan`, `/fix`, or `/explain`, `#` to add project context, and `!` to run terminal commands.

## One-Line Revision

```text
Inline = Quick change | Ask = Explain | Plan = Prepare | Agent = Execute
/ = Command | # = Context | ! = Terminal | @ = Available participant/tool
```
