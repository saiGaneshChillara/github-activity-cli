# GitHub Activity CLI

A simple command-line interface (CLI) tool that fetches and displays the recent public activity of any GitHub user using the GitHub API.

---

## 🚀 Features

- Fetches recent public GitHub activity
- Displays formatted activity in the terminal
- Handles invalid usernames
- Handles API failures gracefully
- Built using Node.js (no external libraries)

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/saiGaneshChillara/github-activity-cli.git
cd github-activity-cli
```

---

## ▶️ Usage

Run the following command:

```bash
node index.js <github-username>
```

### Example

```bash
node index.js kamranahmedse
```

---

## 📌 Example Output

```
- Pushed 3 commits to kamranahmedse/developer-roadmap
- Opened an issue in kamranahmedse/developer-roadmap
- Starred kamranahmedse/developer-roadmap
```

---

## 🔗 GitHub API Endpoint Used

```
https://api.github.com/users/<username>/events
```

---

## 🛠 Technologies Used

- Node.js
- Built-in HTTPS module
- GitHub REST API

---

## 📄 Project URL

https://github.com/saiGaneshChillara/github-activity-cli

---

## 📜 License

MIT