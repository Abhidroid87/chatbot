# RAG Chatbot Architecture

## Overview
This chatbot uses Retrieval-Augmented Generation (RAG) architecture, combining vector search and language models for accurate responses.

### Core Components
1. **RAGAgent**: Central orchestrator for query processing
   - Vector Store: Dense retrieval using OpenAI embeddings
   - BM25 Retriever: Sparse retrieval for keyword-based search
   - HyDE: Hypothetical Document Embeddings for better retrieval
   - Cache: Performance optimization layer

### Retrieval Process
1. Parallel document retrieval from multiple sources
2. Hybrid search combining dense and sparse retrievals
3. Document compression and reranking
4. Response generation and validation

### Version Control
The system maintains version history for:
- Model updates
- Configuration changes
- Response patterns
