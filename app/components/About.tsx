"use client";
import React from "react";
import { motion } from "framer-motion";
import { TextReveal } from "./aceternity/TextReview";

type Props = {};

const WHAT_I_BUILD = [
  "Trading systems for B3 and other markets: high-frequency and algorithmic trading, order execution, and risk controls such as exposure and daily-loss limits, drawdown kill switches, and order and position reconciliation",
  "Backtesting and research tooling: backtest, shadow, paper and live modes running on the same code, and quantitative strategy research with Sharpe and P&L measured net of fees",
  "AI automations: AI agents with MCP and tool calling (Claude Agent SDK), Slack assistants with guardrails, and LLM pipelines with multi-model routing and provider fallback",
  "Programmatic automations: trading bots, data-driven workflows, scheduled jobs and integrations between APIs, databases and internal tools",
  "Web apps and dashboards: internal operations panels, company websites and full-stack products in React, Next.js, Node.js and Tailwind CSS",
  "Back-ends and APIs: REST and GraphQL services in Python, TypeScript, FastAPI and Express, with ledgers, reconciliation, idempotency and automated test suites",
  "Cloud and infrastructure: serverless services on AWS (Lambda, DynamoDB, S3) and GCP, plus Docker and Kubernetes",
];

const textClass =
  "text-xs sm:text-base lg:text-lg mx-auto sm:mx-0 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl";

export default function About({}: Props) {
  return (
    <motion.div
      className="h-fit z-50 flex flex-col text-center
       px-4 sm:px-10 w-[90%]
    mx-auto items-center gap-6 md:gap-20 py-[55px] sm:py-44"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="flex items-center justify-center h-fit rounded-2xl w-full">
        <TextReveal
          text="You know the business"
          revealText="I know the chemistry "
        />
      </h3>
      <div className="flex flex-col gap-6  md:flex-row ">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          src="/images/about1.jpg"
          alt="About Picture"
          className=" md:mb-0 flex-shrink-0 object-cover w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]
            rounded-full md:w-[300px] md:h-[400px] md:rounded-2xl self-center "
        ></motion.img>
        <div className="flex flex-col justify-evenly ">
          <div className=" space-y-5 px-0 lg:px-10">
            <h4 className="text-3xl text-left font-semibold">
              Here is a{" "}
              <span className=" underline-offset-4 underline decoration-red-500/50">
                Little
              </span>{" "}
              Background
            </h4>
            <p className={`${textClass} text-justify`}>
              I'm Tomas Vivaldi, a full-stack software engineer with 5+ years
              of experience in Python, TypeScript and AWS, focused on trading
              systems for financial markets: high-frequency trading (HFT) on
              B3, Brazil's stock exchange, algorithmic trading and prediction
              markets, plus AI engineering and automation. I worked as a
              back-end engineer on Japan's first blockchain-based first-person
              shooter at Tokyo Creation and as a Python integration engineer on
              autonomous-vehicle routing at Bosch Japan. Today I work as an
              independent consultant for international clients, using
              AI-assisted development (Claude Code, Codex, Cursor) every day.
            </p>
            <h5 className="text-xl text-left font-semibold">What I build</h5>
            <ul
              className={`${textClass} list-disc list-outside pl-5 space-y-2 text-left`}
            >
              {WHAT_I_BUILD.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={`${textClass} text-justify`}>
              B.Eng. in Mechanical Engineering, Yokohama National University.
              Native Portuguese and English, fluent Japanese, intermediate
              German.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
