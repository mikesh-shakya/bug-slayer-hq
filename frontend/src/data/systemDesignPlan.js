const systemDesignPlan = [
  {
    day: 1,
    title: "Foundations of System Design",
    topics: [
      {
        title: "What is System Design?",
        youtube: "https://www.youtube.com/watch?v=dummy1",
        article: "https://example.com/article1",
      },
      {
        title: "HLD vs LLD",
        youtube: "https://www.youtube.com/watch?v=dummy2",
        article: "https://example.com/article2",
      },
      {
        title: "Client-Server Model",
        youtube: "https://www.youtube.com/watch?v=dummy3",
        article: "https://example.com/article3",
      },
      {
        title: "Monolith vs Microservices",
        youtube: "https://www.youtube.com/watch?v=dummy4",
        article: "https://example.com/article4",
      },
      {
        title: "Approach to System Design Questions",
        youtube: "https://www.youtube.com/watch?v=dummy5",
        article: "https://example.com/article5",
      },
    ],
  },
  {
    day: 2,
    title: "Scalability & Performance",
    topics: [
      { title: "Vertical vs Horizontal Scaling", youtube: "", article: "" },
      { title: "Latency vs Throughput", youtube: "", article: "" },
      { title: "Load & Capacity Planning", youtube: "", article: "" },
      { title: "SLAs, SLOs, SLIs", youtube: "", article: "" },
      { title: "Bottlenecks & Performance Metrics", youtube: "", article: "" },
    ],
  },
  {
    day: 3,
    title: "Load Balancers",
    topics: [
      { title: "Role of Load Balancers", youtube: "", article: "" },
      { title: "L4 vs L7", youtube: "", article: "" },
      {
        title: "Algorithms: Round Robin, Least Connection",
        youtube: "",
        article: "",
      },
      { title: "Health Checks", youtube: "", article: "" },
      { title: "Tools: NGINX, HAProxy, AWS ELB", youtube: "", article: "" },
    ],
  },
  {
    day: 4,
    title: "Caching",
    topics: [
      { title: "Why & where to cache", youtube: "", article: "" },
      { title: "Caching Strategies (LRU, LFU, TTL)", youtube: "", article: "" },
      { title: "Redis, Memcached", youtube: "", article: "" },
      { title: "CDN Caching", youtube: "", article: "" },
      { title: "Cache Invalidation", youtube: "", article: "" },
    ],
  },
  {
    day: 5,
    title: "Databases & Storage",
    topics: [
      { title: "SQL vs NoSQL", youtube: "", article: "" },
      { title: "CAP Theorem", youtube: "", article: "" },
      { title: "Normalization vs Denormalization", youtube: "", article: "" },
      { title: "Indexing & Query Optimization", youtube: "", article: "" },
      {
        title: "Database for Analytics vs Transactions",
        youtube: "",
        article: "",
      },
    ],
  },
  {
    day: 6,
    title: "Data Replication & Sharding",
    topics: [
      { title: "Master-Slave, Master-Master", youtube: "", article: "" },
      { title: "Horizontal Partitioning", youtube: "", article: "" },
      { title: "Consistent Hashing", youtube: "", article: "" },
      { title: "Geo-Sharding", youtube: "", article: "" },
      { title: "Trade-offs: Latency vs Consistency", youtube: "", article: "" },
    ],
  },
  {
    day: 7,
    title: "Message Queues & Async Processing",
    topics: [
      { title: "Queues: Kafka, RabbitMQ, SQS", youtube: "", article: "" },
      { title: "Producer-Consumer Pattern", youtube: "", article: "" },
      { title: "Pub/Sub vs Event Streams", youtube: "", article: "" },
      { title: "Dead Letter Queues", youtube: "", article: "" },
      { title: "Backpressure Handling", youtube: "", article: "" },
    ],
  },
  {
    day: 8,
    title: "REST APIs & Auth",
    topics: [
      { title: "REST Design Principles", youtube: "", article: "" },
      { title: "Authentication: JWT, OAuth2", youtube: "", article: "" },
      { title: "Rate Limiting", youtube: "", article: "" },
      { title: "Throttling & Retry Logic", youtube: "", article: "" },
      { title: "GraphQL vs REST", youtube: "", article: "" },
    ],
  },
  {
    day: 9,
    title: "File & Object Storage",
    topics: [
      { title: "Object Storage: S3, GCS", youtube: "", article: "" },
      { title: "Large File Handling & Chunking", youtube: "", article: "" },
      { title: "CDN Integration", youtube: "", article: "" },
      { title: "Compression & Streaming", youtube: "", article: "" },
      { title: "Storage Tiers & Lifecycle", youtube: "", article: "" },
    ],
  },
  {
    day: 10,
    title: "Architectural Patterns",
    topics: [
      { title: "Microservices", youtube: "", article: "" },
      { title: "Event-driven Architecture", youtube: "", article: "" },
      { title: "API Gateway Pattern", youtube: "", article: "" },
      { title: "Service Discovery", youtube: "", article: "" },
      { title: "Circuit Breakers & Retry Patterns", youtube: "", article: "" },
    ],
  },
  {
    day: 11,
    title: "Design - URL Shortener",
    topics: [
      { title: "Unique Key Generation", youtube: "", article: "" },
      { title: "Redirection Logic", youtube: "", article: "" },
      { title: "Database Schema", youtube: "", article: "" },
      { title: "Analytics", youtube: "", article: "" },
      { title: "Rate Limiting & Caching", youtube: "", article: "" },
    ],
  },
  {
    day: 12,
    title: "Design - Scalable Chat App",
    topics: [
      { title: "WebSocket vs Polling", youtube: "", article: "" },
      { title: "User Sessions & Presence", youtube: "", article: "" },
      { title: "Group Chat Models", youtube: "", article: "" },
      { title: "Message Queues", youtube: "", article: "" },
      { title: "Persistence + Search", youtube: "", article: "" },
    ],
  },
  {
    day: 13,
    title: "Design - Video/Media Platform",
    topics: [
      { title: "Upload → Encode → Store", youtube: "", article: "" },
      { title: "Metadata & Search", youtube: "", article: "" },
      { title: "CDN Delivery", youtube: "", article: "" },
      { title: "Comment, Likes, Watch History", youtube: "", article: "" },
      { title: "Notifications", youtube: "", article: "" },
    ],
  },
  {
    day: 14,
    title: "Practice Day — Solve Real Problems",
    topics: [
      { title: "Design TinyURL", youtube: "", article: "" },
      { title: "Design Twitter", youtube: "", article: "" },
      { title: "Design WhatsApp", youtube: "", article: "" },
      { title: "Design Dropbox", youtube: "", article: "" },
      { title: "Design a Rate Limiter", youtube: "", article: "" },
      { title: "Design Netflix Home Feed", youtube: "", article: "" },
    ],
  },
  {
    day: 15,
    title: "Ultimate Resource Drop",
    topics: [
      {
        title: "YouTube Channels: Gaurav Sen, ByteByteGo, Exponent",
        youtube: "",
        article: "",
      },
      { title: "Courses & Series", youtube: "", article: "" },
      { title: "Cheatsheets & Playbooks", youtube: "", article: "" },
      { title: "Books: DDIA, Grokking", youtube: "", article: "" },
      { title: "GitHub Repos: System Design Primer", youtube: "", article: "" },
      {
        title: "Playgrounds: Excalidraw, dbdiagram.io",
        youtube: "",
        article: "",
      },
    ],
  },
];

export default systemDesignPlan;
