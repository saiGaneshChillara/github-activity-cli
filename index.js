#!/usr/bin/env node
const https = require("https");

const username = process.argv[2];

if (!username) {
  console.log("Usage: github-activity <username>");
  process.exit(1);
}

const options = {
  hostname: "api.github.com",
  path: `/users/${username}/events`,
  method: "GET",
  headers: {
    "User-Agent": "node.js",
    "Accept": "application/vnd.github+json"
  }
};

https.get(options, (res) => {
  let data = "";

  if (res.statusCode === 404) {
    console.log("User not found");
    return;
  }

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    try {
      const events = JSON.parse(data);

      if (!events.length) {
        console.log("No recent activities found");
        return;
      }
      displayEvents(events);
    } catch (error) {
      console.log("Error parsing response");
    }
  });
}).on("error", (err) => {
  console.log("Error fetching data: ", err.message);
});

function displayEvents(events) {
  events.slice(0, 10).forEach(event => {
    const repo = event.repo?.name;

    switch (event.type) {
      case "PushEvent":
        console.log(`- Pushed ${event.payload.commits.length} commits to ${repo}`);
        break;
      case "IssuesEvent":
        console.log(`- ${event.payload.action} an issue in ${repo}`);
        break;
      case "WatchEvent":
        console.log(`- Watched ${repo}`);
        break;
      case "ForkEvent":
        console.log(`- Forked ${repo}`);
        break;
      case "PullRequestEvent":
        console.log(`- ${event.payload.action} a pull request in ${repo}`);
        break;
      default:
        console.log(`- ${event.type} in ${repo}`);
    }
  });
}