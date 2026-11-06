export const ExperienceCardData = [
  {
    img: "/images/freelance.png",
    title: "Full Stack & AI Software Engineer",
    subtitle: "Independent Consultant · Remote",
    startDate: "Jul 2023",
    endDate: "Present",
    techstack: [
      { src: "/icons/python.svg", url: "https://www.python.org/" },
      {
        src: "/icons/typescript-icon.svg",
        url: "https://www.typescriptlang.org/",
      },
      { src: "/icons/nextjs-icon.svg", url: "https://nextjs.org/" },
      { src: "/icons/react.svg", url: "https://reactjs.org/" },
      { src: "/icons/postgresql.svg", url: "https://www.postgresql.org/" },
      { src: "/icons/docker-icon.svg", url: "https://www.docker.com/" },
      { src: "/icons/github-icon.svg", url: "https://github.com/" },
    ],
    summaries: [
      "High-frequency trading (HFT) on B3 and in crypto markets",
      "Live-trading risk controls, order execution and reconciliation",
      "Backtest, shadow, paper and live trading platforms",
      "AI agents with MCP and tool calling (Claude Agent SDK)",
      "LLM automation pipelines and internal dashboards",
    ],
    jobDescription1:
      "Independent consultant for international clients in algorithmic trading, high-frequency trading and AI engineering. I worked on high-frequency trading (HFT) on B3 (Brasil, Bolsa, Balcão) and in crypto markets, and implemented live-trading controls: exposure and daily-loss limits, a kill switch on drawdown and order failures, order and position reconciliation, idempotency, retries and gradual shadow-to-live rollout. I ran quantitative research on strategy performance to set entry criteria and position sizing, and for individual investors built an autonomous research pipeline in which an AI agent iterates on the strategy while a fixed evaluator measures Sharpe and P&L net of fees, with a dev/holdout split and the same code across simulation, paper and live (NautilusTrader, GCP). I also co-developed a Python algorithmic trading platform for prediction markets (Polymarket) with backtest, shadow, paper and live modes, and a weather-forecast-driven bot for temperature markets validated in paper trading and live.",
    jobDescription2:
      "On the AI and automation side, I built a Slack AI agent with Claude Agent SDK and an MCP server (tool calling, skills and guardrails with a default-deny tool policy), an internal operations dashboard in React and Express with an automated test suite, and an LLM automation pipeline in FastAPI with real-time progress over SSE, a prompt-based correction chain and multi-model routing with fallback across providers. Tech: Python, TypeScript, Next.js, React, Node.js, Express, FastAPI, PostgreSQL, SQLite, GraphQL, AWS, GCP, NautilusTrader, Claude Agent SDK, MCP, OpenAI.",
  },
  {
    img: "/images/sec7team.jpeg",
    title: "Systems Engineer",
    subtitle: "Tokyo Creation 株式会社",
    startDate: "Apr 2022",
    endDate: "Jun 2025",
    techstack: [
      { src: "/icons/python.svg", url: "https://www.python.org/" },
      {
        src: "/icons/typescript-icon.svg",
        url: "https://www.typescriptlang.org/",
      },
      {
        src: "/icons/javascript.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      { src: "/icons/nextjs-icon.svg", url: "https://nextjs.org/" },
      { src: "/icons/react.svg", url: "https://reactjs.org/" },
      { src: "/icons/tailwindcss-icon.svg", url: "https://tailwindcss.com/" },
      { src: "/icons/postgresql.svg", url: "https://www.postgresql.org/" },
      {
        src: "/icons/aws-dynamodb.svg",
        url: "https://aws.amazon.com/dynamodb/",
      },
      { src: "/icons/github-icon.svg", url: "https://github.com/" },
    ],
    summaries: [
      "Back-end team for Japan's first blockchain-based FPS",
      "Balance ledger and transaction reconciliation",
      "Back-end services in Python and TypeScript on AWS Lambda",
      "Investor company website in Next.js, React and Tailwind",
    ],
    jobDescription1:
      "I was a back-end engineer on Japan's first blockchain-based first-person shooter (FPS). I worked on the balance ledger and transaction reconciliation behind the game's economy, plus tokenomics and reward systems, and built back-end services in Python and TypeScript on PostgreSQL and AWS DynamoDB with AWS Lambda.",
    jobDescription2:
      "I also helped build the game's DeFi logic, integrated wallets and transaction-signing flows, and built the website for the startup's investor company in Next.js, React and Tailwind CSS.",
  },
  {
    img: "/images/bosch.jpg",
    title: "Python Integration Engineer",
    subtitle: "Bosch Japan",
    startDate: "Nov 2020",
    endDate: "Oct 2021",
    techstack: [
      { src: "/icons/python.svg", url: "https://www.python.org/" },
      { src: "/icons/postgresql.svg", url: "https://www.postgresql.org/" },
      {
        src: "/icons/aws-dynamodb.svg",
        url: "https://aws.amazon.com/dynamodb/",
      },
      { src: "/icons/linux-tux.svg", url: "https://www.kernel.org/" },
      { src: "/icons/docker-icon.svg", url: "https://www.docker.com/" },
      { src: "/icons/kubernetes.svg", url: "https://kubernetes.io/" },
      { src: "/icons/github-icon.svg", url: "https://github.com/" },
    ],
    summaries: [
      "Helped build <a class='border-b-2 border-red-500 border-spacing-4' href='https://www.bosch-mobility-solutions.com/en/solutions/parking/automated-valet-parking/' target='_blank'>Bosch's self-driving car software</a>",
      "Routing algorithms for navigation and safety",
      "Real-time database integrations",
      "Kubernetes integrations",
      "Python GUI for route visualization",
    ],
    jobDescription1:
      "I developed and optimized routing algorithms for Bosch's autonomous-vehicle software, focused on navigation and safety, and designed a Python GUI to visualize the programmed routes.",
    jobDescription2:
      "I also managed database integrations for real-time data processing and storage, and implemented Kubernetes integrations for communication between the software and the vehicle hardware, supporting system reliability.",
  },
];
