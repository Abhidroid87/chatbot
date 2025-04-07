# RAG Chatbot Architecture

## System Architecture

### Core Components
1. **Query Processing Layer**
   - Input validation and preprocessing
   - Context analysis
   - Query expansion
   - Mode detection

2. **RAGAgent**
   - Vector Store: Dense retrieval (OpenAI embeddings)
   - BM25 Retriever: Sparse retrieval
   - HyDE: Hypothetical Document Embeddings
   - Result Cache Manager

3. **Search Layer**
   - SearxNG integration
   - Multi-source aggregation
   - Result filtering
   - Source ranking

4. **LLM Integration**
   - Model routing
   - Response generation
   - Content validation
   - Format handling

### Data Flow
1. Query Processing
   - Input sanitization
   - Context extraction
   - Mode selection
   - Query optimization

2. Retrieval Process
   - Parallel document retrieval
   - Hybrid search execution
   - Document ranking
   - Cache management

3. Response Generation
   - Context assembly
   - Model selection
   - Response validation
   - Format adaptation

### Security Architecture
1. **API Security**
   - Rate limiting
   - Request validation
   - Token management
   - Access control

2. **Data Privacy**
   - No permanent storage
   - Local LLM options
   - Request anonymization
   - Secure configurations

### Deployment Architecture
1. **Container Structure**
   - Frontend container
   - API container
   - Search container
   - Cache container

2. **Scaling Strategy**
   - Horizontal scaling
   - Load balancing
   - Cache distribution
   - Resource optimization

### Monitoring
1. **Performance Metrics**
   - Response times
   - Cache hit rates
   - Model performance
   - Resource usage

2. **System Health**
   - Service status
   - Error rates
   - Resource availability
   - Network health

### Version Control
- Model versioning
- Configuration management
- API versioning
- Deployment tracking

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


