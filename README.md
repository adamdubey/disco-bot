# disco-bot

A general purpose lab Discord Bot

---

## Quick Start

_1. Configure `.env` with `DISCORD_BOT_TOKEN=`:_

```sh
DISCORD_BOT_TOKEN=<YOUR_DISCORD_BOT_TOKEN_GOES_HERE>
```

_2. Developing/Testing via Localhost:_

```sh
# Install dependencies
npm i

# Start
npm run start

# In Discord App, verify Bot is online/enabled
```

_3. Developing/Testing Locally via Docker:_

```sh
# Build
$ docker build -t disco-bot .

# Run
$ docker run disco-bot

# In Discord App, verify Bot is online/enabled
```

---

## Technologies & Frameworks

- [Discord](https://discord.com/)
- [Discord.js](https://discord.js.org/)
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/)
