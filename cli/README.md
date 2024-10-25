# Create DevNow App

`create-devnow-app` is a CLI tool to initialize **Next.js projects** with built-in support for features like **TypeScript**, **Tailwind CSS**, **ESLint**, and **Shadcn/ui**. It helps developers quickly set up their projects with all the essential tools.

---

## Installation & Usage

### 1. Run with `npx` or `pnpm`

You can use `npx` to run the tool directly without installing it globally:

```bash
npx create-devnow-app@latest <project-name>

# or
pnpm dlx create-devnow-app@latest <project-name>
```

### 2. Install Locally

Alternatively, you can install the tool with `pnpm`, `npm`, or `yarn`:

```bash
pnpm add create-devnow-app
```

Then run it:

```bash
pnpm create-devnow-app <project-name>
```

---

## CLI Options

You can configure your project using the following command-line options or run the tool interactively to choose settings during initialization.

### Available Options

| Option               | Alias | Description                                      |
| -------------------- | ----- | ------------------------------------------------ |
| `--ts, --typescript` |       | Initialize the project with TypeScript (default) |
| `--tailwind`         |       | Include Tailwind CSS configuration (default)     |
| `--eslint`           |       | Add ESLint configuration                         |
| `--shadcnUI`         |       | Enable Shadcn/ui component library               |

---

## Usage Examples

### 1. Quick Initialization with TypeScript

```bash
npx create-devnow-app@latest my-app --typescript --eslint
```

### 2. Interactive Setup

If no options are passed, the CLI will enter **interactive mode**, allowing you to configure the project step-by-step.

```bash
npx create-devnow-app@latest my-app
```

Example interactive flow:

```bash
Enter project name: my-app
Select project template: (JavaScript / TypeScript)
Would you like to use Tailwind CSS? (Yes / No)
Would you like to use ESLint? (Yes / No)
Would you like to use Shadcn/ui? (Yes / No)
```

---

## Post-Initialization Steps

Once the project is successfully created, the following actions are performed:

1. The tool creates and navigates into the project directory.
2. If selected, **Shadcn/ui** will be installed automatically.
3. The CLI will print further instructions to help you start the project.

### Start the Project:

```bash
cd <project-name>
pnpm dev
```

---

## Error Handling

In case the initialization fails, the tool will display detailed error messages to help you troubleshoot.  
Some common causes of failure:

- Invalid or missing project name
- Network issues preventing dependencies from installing

---

## Contributing

If you encounter issues or have suggestions, feel free to open an [issue](https://github.com/LaughingZhu/DevNow/issues) or submit a pull request!

---

## License

This project is open-sourced under the [MIT License](https://opensource.org/licenses/MIT).

---

This README provides all the necessary instructions to help users quickly start a Next.js project using your CLI tool. Make sure to replace any placeholder links with actual repository URLs if needed.
