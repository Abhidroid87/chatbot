# Next.js Chatbot Application

## Project Description
ChatBot is an advanced AI-powered search and conversation platform that combines:

### Core Capabilities
- Real-time web search using SearxNG
- Multiple AI models integration (OpenAI, Ollama, Groq, Anthropic)
- RAG (Retrieval-Augmented Generation) architecture
- Privacy-focused design with local LLM support

### Intelligent Features
- Smart query understanding and processing
- Source verification and ranking
- Multiple specialized focus modes
- Real-time information retrieval
- Adaptive response generation

### Technical Excellence
- Modern Next.js/TypeScript stack
- Docker-based deployment
- Extensible API architecture
- Theme customization
- Responsive design

## Key Features
- Interactive chat interface
- Theme customization (Light/Dark mode)
- Persistent theme preferences
- Responsive design

## Technical Stack

### Frontend
- Next.js (React Framework)
- TypeScript
- React for UI components
- LocalStorage for client-side storage

### Backend & API
- SearxNG (Metasearch engine)
- Multiple LLM Providers:
  - OpenAI
  - Ollama (Local LLMs)
  - Groq
  - Anthropic

### AI/ML Components
- RAG (Retrieval-Augmented Generation)
- Similarity Search Algorithms
- Embedding Systems
- Natural Language Processing

### Infrastructure
- Docker containerization
- Docker Compose for orchestration
- Node.js runtime
- RESTful APIs

### Integration Services
- Wolfram Alpha API
- YouTube Data API
- Reddit API
- Discord integration

### Development Tools
- npm package manager
- Git version control
- Environment variables (config.toml)

## Project Structure
- `src/pages/_document.tsx`: Custom document setup and theme initialization
- (Other files to be added as project grows)

## Getting Started
1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Open `http://localhost:3000`

## Theme System
The application includes a built-in theme system that:
- Persists user theme preference
- Prevents flash of unstyled content
- Supports light and dark modes

# 🚀 Production Ready- ChatBot <!-- omit in toc -->


[![Discord](https://dcbadge.vercel.app/api/server/paUARVEz?style=flat&compact=true)](https://discord.gg/paUARVEz)

![preview](.assets?)

## Table of Contents <!-- omit in toc -->

- [Overview](#overview)
- [Preview](#preview)
- [Features](#features)
- [Installation](#installation)
  - [Getting Started with Docker (Recommended)](#getting-started-with-docker-recommended)
  - [Non-Docker Installation](#non-docker-installation)
  - [Ollama Connection Errors](#ollama-connection-errors)
- [Using as a Search Engine](#using-as-a-search-engine)
- [Using ChatBot's API](#using-chatbot-api)
- [Expose ChatBot to a network](#expose-ChatBOt-to-network)
- [Upcoming Features](#upcoming-features)
- [What Makes This Chatbot Unique](#what-makes-this-chatbot-unique)


## Overview

ChatBOt is an open-source AI-powered searching tool or an AI-powered search engine that goes deep into the internet to find answers. Inspired by Perplexity AI, it's an open-source option that not just searches the web but understands your questions. It uses advanced machine learning algorithms like similarity searching and embeddings to refine results and provides clear answers with sources cited.

Using SearxNG to stay current and fully open source, ChatBot ensures you always get the most up-to-date information without compromising your privacy.

Want to know more about its architecture and how it works? You can read it [here](https://github.com/tree/master/docs/architecture/README.md).

## Preview
![preview](.assets/Sampel.png?)
### [Models Architecture "Data Retrieval Approach"]
![video-preview](.assets/d-preview.gif)

## Features

- **Local LLMs**: You can make use local LLMs such as Llama3 and Mixtral using Ollama.
- **Two Main Modes:**
  - **Copilot Mode:** (In development) Boosts search by generating different queries to find more relevant internet sources. Like normal search instead of just using the context by SearxNG, it visits the top matches and tries to find relevant sources to the user's query directly from the page.
  - **Normal Mode:** Processes your query and performs a web search.
- **Focus Modes:** Special modes to better answer specific types of questions. ChatBot currently has 6 focus modes:
  - **All Mode:** Searches the entire web to find the best results.
  - **Writing Assistant Mode:** Helpful for writing tasks that do not require searching the web.
  - **Academic Search Mode:** Finds articles and papers, ideal for academic research.
  - **YouTube Search Mode:** Finds YouTube videos based on the search query.
  - **Wolfram Alpha Search Mode:** Answers queries that need calculations or data analysis using Wolfram Alpha.
  - **Reddit Search Mode:** Searches Reddit for discussions and opinions related to the query.
- **Current Information:** Some search tools might give you outdated info because they use data from crawling bots and convert them into embeddings and store them in a index. Unlike them, ChatBot uses SearxNG, a metasearch engine to get the results and rerank and get the most relevant source out of it, ensuring you always get the latest information without the overhead of daily data updates.
- **API**: Integrate ChatBOt into your existing applications and make use of its capibilities.

It has many more features like image and video search. Some of the planned features are mentioned in [upcoming features](#upcoming-features).

## Installation

There are mainly 2 ways of installing ChatBOt - With Docker, Without Docker. Using Docker is highly recommended.

### Getting Started with Docker (Recommended)

1. Ensure Docker is installed and running on your system.
2. Clone the ChatBot repository:

   ```bash
   git clone https://github.com/Abhidroid87/chatbot.git
   ```

3. After cloning, navigate to the directory containing the project files.

4. Rename the `sample.config.toml` file to `config.toml`. For Docker setups, you need only fill in the following fields:

   - `OPENAI`: Your OpenAI API key. **You only need to fill this if you wish to use OpenAI's models**.
   - `OLLAMA`: Your Ollama API URL. You should enter it as `http://host.docker.internal:PORT_NUMBER`. If you installed Ollama on port 11434, use `http://host.docker.internal:11434`. For other ports, adjust accordingly. **You need to fill this if you wish to use Ollama's models instead of OpenAI's**.
   - `GROQ`: Your Groq API key. **You only need to fill this if you wish to use Groq's hosted models**.
   - `ANTHROPIC`: Your Anthropic API key. **You only need to fill this if you wish to use Anthropic models**.

     **Note**: You can change these after starting ChatBOt from the settings dialog.

   - `SIMILARITY_MEASURE`: The similarity measure to use (This is filled by default; you can leave it as is if you are unsure about it.)

5. Ensure you are in the directory containing the `docker-compose.yaml` file and execute:

   ```bash
   docker compose up -d
   ```

6. Wait a few minutes for the setup to complete. You can access ChatBot at http://localhost:3000 in your web browser.

**Note**: After the containers are built, you can start ChatBot directly from Docker without having to open a terminal.

### Non-Docker Installation

1. Install SearXNG and allow `JSON` format in the SearXNG settings.
2. Clone the repository and rename the `sample.config.toml` file to `config.toml` in the root directory. Ensure you complete all required fields in this file.
3. After populating the configuration run `npm i`.
4. Install the dependencies and then execute `npm run build`.
5. Finally, start the app by running `npm rum start`

**Note**: Using Docker is recommended as it simplifies the setup process, especially for managing environment variables and dependencies.

See the [installation documentation](https://github.com) for more information like updating, etc.

### Ollama Connection Errors

If you're encountering an Ollama connection error, it is likely due to the backend being unable to connect to Ollama's API. To fix this issue you can:

1. **Check your Ollama API URL:** Ensure that the API URL is correctly set in the settings menu.
2. **Update API URL Based on OS:**

   - **Windows:** Use `http://host.docker.internal:11434`
   - **Mac:** Use `http://host.docker.internal:11434`
   - **Linux:** Use `http://<private_ip_of_host>:11434`

   Adjust the port number if you're using a different one.

3. **Linux Users - Expose Ollama to Network:**

   - Inside `/etc/systemd/system/ollama.service`, you need to add `Environment="OLLAMA_HOST=0.0.0.0"`. Then restart Ollama by `systemctl restart ollama`. For more information see [Ollama docs](https://github.com/ollama/ollama/blob/main/docs/faq.md#setting-environment-variables-on-linux)

   - Ensure that the port (default is 11434) is not blocked by your firewall.

## Using as a Search Engine

If you wish to use ChatBot as an alternative to traditional search engines like Google or Bing, or if you want to add a shortcut for quick access from your browser's search bar, follow these steps:

1. Open your browser's settings.
2. Navigate to the 'Search Engines' section.
3. Add a new site search with the following URL: `http://localhost:3000/?q=%s`. Replace `localhost` with your IP address or domain name, and `3000` with the port number if ChatBot is not hosted locally.
4. Click the add button. Now, you can use ChatBot directly from your browser's search bar.

## Using ChatBot's API

ChatBot also provides an API for developers looking to integrate its powerful search engine into their own applications. You can run searches, use multiple models and get answers to your queries.


## Expose to network

ChatBot runs on Next.js and handles all API requests. It works right away on the same network and stays accessible even with port forwarding.

## Upcoming Features

- [x] Add settings page
- [x] Adding support for local LLMs
- [x] History Saving features
- [ ] Upgraded the Rag System
- [ ] Introducing various Focus Modes
- [ ] Adding API support
- [ ] Adding Discover
- [ ] Ghibli Model API for Image
- [ ] AI Prompt(CLI)

## What Makes This Chatbot Unique

1. Advanced RAG Implementation
- Real-time web search using SearxNG instead of static embeddings
- Multiple retrieval modes (Copilot & Normal Mode)
- Adaptive focus modes for specialized queries (Academic, YouTube, Reddit, etc.)

2. Model Flexibility
- Support for multiple LLM providers (OpenAI, Ollama, Groq, Anthropic)
- Local LLM support through Ollama integration
- Easy model switching without redeployment

3. Privacy-Focused Architecture
- No data storage requirements
- Local LLM options for complete privacy
- Open-source search engine integration

4. Specialized Focus Modes
- Academic research optimization
- YouTube content search
- Wolfram Alpha integration for calculations
- Reddit discussions integration
- Writing assistance mode

5. Developer-Friendly Features
- Full API access
- Docker support
- Extensible architecture
- Easy network exposure

6. Real-Time Information
- No outdated embedded data
- Dynamic web searching
- Source verification and ranking

