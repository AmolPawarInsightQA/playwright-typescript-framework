# Playwright MCP Server Setup in VS Code

## What is MCP (Model Context Protocol)?

**MCP (Model Context Protocol)** is an open-source protocol that standardizes how applications provide tools and context to Large Language Models (LLMs).

In simple words, MCP acts as a **bridge between an AI assistant and external tools**. For Playwright automation, the Playwright MCP server allows GitHub Copilot to open a browser, inspect web-page elements, click buttons, enter text, and help create or update automation scripts.

## Examples of LLMs

- GPT
- Claude
- Gemini

## Prerequisites

Before configuring Playwright MCP, make sure you have:

- Visual Studio Code
- Node.js 20 or newer
- GitHub Copilot and GitHub Copilot Chat enabled in VS Code
- A Playwright automation project opened in VS Code

You can verify Node.js and npm from the VS Code terminal:

```bash
node --version
npm --version
```

## How to Integrate the Playwright MCP Server

### Step 1: Find the official Playwright MCP server

Search for **Playwright MCP** and verify the official Microsoft GitHub repository:

- https://github.com/microsoft/playwright-mcp
- https://playwright.dev/mcp/clients/vscode

Use configuration only from trusted and official sources because a local MCP server can execute commands and use tools on your system.

### Step 2: Create the MCP configuration file

In your Playwright framework root folder:

1. Create a folder named `.vscode` if it does not already exist.
2. Inside `.vscode`, create a file named `mcp.json`.
3. Add the following configuration:

```json
{
  "servers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

The final structure should look like this:

```text
playwright-project/
├── .vscode/
│   └── mcp.json
├── tests/
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

## Short Explanation of the JSON

| JSON property | Explanation |
|---|---|
| `servers` | Contains the MCP servers available to VS Code for this project. |
| `playwright` | A user-defined name used to identify the Playwright MCP server. |
| `command` | Specifies the command that VS Code runs to start the server. Here, `npx` runs an npm package without requiring a separate global installation. |
| `args` | Contains the arguments passed to the command. |
| `@playwright/mcp@latest` | The official Playwright MCP npm package. `@latest` requests its latest published version. |

The effective command is:

```bash
npx @playwright/mcp@latest
```

## Step 3: Start and Use the MCP Server

1. Open the Playwright project in VS Code.
2. Open **GitHub Copilot Chat**.
3. Select **Agent** mode.
4. If VS Code asks you to trust or start the Playwright MCP server, review the command and approve it.
5. Enter a prompt for the required browser or automation task.
6. Review the generated or updated code before accepting the changes.

## Example Prompts for QA Automation

```text
Open https://demo.playwright.dev/todomvc, add two todo items, and create a Playwright TypeScript test for the flow.
```

```text
Inspect the login page and create a Page Object Model class with stable Playwright locators.
```

```text
Run the failing login test, identify the issue, and update only the required locator or assertion.
```

```text
Add validation to confirm that the dashboard heading is visible after successful login.
```

## How Playwright MCP Helps

Playwright MCP can allow the Copilot agent to:

- Open and navigate web pages
- Inspect the page through structured accessibility information
- Identify elements and stable locators
- Click buttons and links
- Enter text and fill forms
- Select dropdown values
- Work with browser tabs and dialogs
- Capture screenshots
- Generate, update, and debug Playwright automation scripts

## Alternative: Install Through the VS Code CLI

Instead of manually creating `.vscode/mcp.json`, you can add the server through the VS Code CLI:

```bash
code --add-mcp '{"name":"playwright","command":"npx","args":["@playwright/mcp@latest"]}'
```

> On Windows Command Prompt or PowerShell, quoting behavior may differ. The manual `.vscode/mcp.json` method is usually easier to understand and share with a project team.

## Troubleshooting

### Server does not start

Check that Node.js and npm are available:

```bash
node --version
npm --version
```

If either command is not recognized, install Node.js or correct the system `PATH`.

### Copilot does not show or use Playwright tools

- Confirm the file path is exactly `.vscode/mcp.json`.
- Confirm the JSON syntax is valid.
- Reload or restart VS Code after changing the configuration.
- Open Copilot Chat and select **Agent** mode.
- Check whether your organization permits MCP servers in VS Code.
- Review the MCP server status and VS Code Output panel for errors.

### `npx` cannot download the package

This may happen on an office system due to a proxy, firewall, npm registry restriction, or endpoint-security policy. Check your company-approved npm registry and contact the IT team if external npm packages are blocked.

## Important Notes

- Prefer the official Microsoft Playwright MCP package: `@playwright/mcp@latest`.
- Review MCP tool calls before approval, especially for sensitive or production environments.
- Do not share passwords, access tokens, customer data, or production secrets in Copilot prompts.
- Keep secrets in environment variables or an approved secret-management system.
- Always review AI-generated automation code, assertions, and test data before committing it.

## Summary

Playwright MCP connects GitHub Copilot Agent mode with a real browser through Playwright. After adding the server configuration in `.vscode/mcp.json`, Copilot can use Playwright MCP tools to inspect a web application and assist with creating, updating, running, or debugging Playwright TypeScript tests.
