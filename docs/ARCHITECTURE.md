# ChatBot Architecture

## System Architecture

```
┌─────────────────┐     ┌──────────────┐     ┌───────────────┐
│  Next.js Front  │────▶│   API Layer  │────▶│  RAG Engine   │
└─────────────────┘     └──────────────┘     └───────────────┘
                                                     │
                                                     ▼
┌─────────────────┐     ┌──────────────┐     ┌───────────────┐
│  Model Manager  │◀────│ Search Layer │◀────│ Query Router  │
└─────────────────┘     └──────────────┘     └───────────────┘
```

## Core Components

### 1. RAG Implementation
- Real-time retrieval using SearxNG
- Dynamic similarity scoring
- Context window optimization
- Source verification system

### 2. Model Integration
- Provider-agnostic architecture
- Automatic failover system
- Response quality monitoring
- Context length management

### 3. Query Processing
- Intent classification
- Focus mode routing
- Source prioritization
- Response formatting

### 4. API Design
- RESTful endpoints
- WebSocket support
- Rate limiting
- Error handling

### 5. Performance
- Response caching
- Query optimization
- Load balancing
- Resource management

## Data Flow

1. Query Reception
2. Intent Analysis
3. Search Execution
4. Context Building
5. Model Processing
6. Response Formatting
7. Client Delivery

## Security Considerations

- API key management
- Rate limiting
- Input sanitization
- No data persistence
- Network isolation

## Deployment Architecture

### Docker Setup
```
┌─────────────────┐
│  Next.js App    │
├─────────────────┤
│  Node Runtime   │
├─────────────────┤
│  Base Alpine    │
└─────────────────┘
```

### Network Configuration
- Internal service mesh
- Reverse proxy support
- SSL termination
- Port mapping

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


