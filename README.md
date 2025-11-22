# Price Tracker

A full-stack application for tracking prices across multiple data sources. The system periodically fetches prices, stores historical data, and presents trends in a modern Angular-based dashboard. The backend is built with .NET 10 and Aspire for orchestration, resilience, and observability.

## Table of Contents

1. Overview
2. Features
3. Technology Stack
4. Architecture
5. Project Structure
6. Getting Started
7. Development Scripts
8. API Overview
9. Frontend Overview
10. Future Enhancements
11. License

---

## 1. Overview

The Price Tracker is a distributed application designed to monitor prices of citems such as GPUs, CPUs, SSDs and other products. It aggregates data from multiple online stores, keeps historical price records, calculates trends, and exposes the information through a modern Angular frontend. The system supports real-time updates via Server-Sent Events (SSE) and can be configured to track any number of components and sources.

---

## 2. Features

- Price monitoring from multiple online sources
- Periodic background fetching using an Aspire Worker service
- Historical price storage with trend calculations
- Real-time UI updates via Server-Sent Events
- Component comparison with chart visualizations
- Management UI for tracked components and data sources
- Clean Architecture with separation of concerns
- Observability and logging through Aspire
- Optional SSR with Angular Universal
- Fully containerized environment

---

## 3. Technology Stack

### Frontend
- Angular 18
- Angular Router with lazy-loaded feature modules
- Angular Material or TailwindCSS
- RxJS
- Charting library
- TypeScript 5+
- Optional: Angular SSR

### Backend
- .NET 10 Web API
- Aspire distributed application host
- EF Core 10
- PostgreSQL database
- HtmlAgilityPack or AngleSharp for scraping
- Background worker for scheduled fetch operations
- SSE endpoint for real-time updates
- Polly for resilience

---

## 4. Architecture

The system follows Clean Architecture principles:

- Domain: Core models and domain logic
- Application: Use cases, services, interfaces
- Infrastructure: Database, scraping adapters, external integrations
- API: HTTP endpoints, SSE streaming
- Worker: Scheduled background tasks for price fetching

Aspire coordinates orchestration, hosting, containers, and observability.

---

## 5. Project Structure

See the "Project Structure" section below for full details.

---

## 6. Getting Started

### Prerequisites
- .NET 10 SDK
- Node.js 20+
- Angular CLI 18+
- Docker (required for running Aspire environment)
- PostgreSQL (automatically handled by Aspire if using containers)

### Clone the repository
```bash
git clone https://github.com/your-user/price-tracker.git
cd price-tracker
