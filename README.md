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

## Overview

ChatBot is an open-source AI-powered search engine that combines RAG architecture with real-time web search capabilities. Using SearxNG and multiple LLM providers, it delivers current information while maintaining privacy.

## Core Features

### Search Capabilities
- Real-time web search via SearxNG
- Multiple AI models (OpenAI, Ollama, Groq, Anthropic)
- RAG architecture with similarity search
- Privacy-focused design

### Intelligence
- Smart query processing
- Source verification
- Multiple focus modes
- Adaptive responses

### Technical Foundation
- Next.js/TypeScript stack
- Docker deployment
- RESTful APIs
- Theme system
- Responsive design

## Technology Stack

### Core Stack
- Frontend: Next.js, TypeScript, React
- Search: SearxNG
- LLM Integration: OpenAI, Ollama, Groq, Anthropic
- Infrastructure: Docker, Node.js

### AI Components
- RAG Implementation
- Similarity Search
- Embedding Systems
- NLP Processing

### External Services
- Wolfram Alpha
- YouTube API
- Reddit API
- Discord Integration

## Installation Requirements

### Docker Setup (Recommended)
- Docker Engine
- 4GB+ RAM
- 10GB+ Storage
- Internet connection

### Manual Setup
- Node.js 16+
- npm/yarn
- SearxNG instance
- API keys for chosen services

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

## Project Structure
```
src/
├── pages/
│   ├── _document.tsx     # Theme initialization
│   ├── api/             # API routes
│   └── components/      # UI components
├── lib/
│   ├── rag/            # RAG implementation
│   └── models/         # LLM integrations
└── config/            # Configuration files
```

## Upcoming Features
- [ ] Enhanced RAG System
- [ ] Additional Focus Modes
- [ ] API Expansion
- [ ] Discover Feature
- [ ] Ghibli Model Integration
- [ ] AI Prompt CLI

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

