# DPG Pipeline (WIP)

DPG Pipeline is a web-based platform built with **SvelteKit** and **NodeJS** using the [Hono](https://hono.dev) framework, designed to support the development, funding, and sustainability of Digital Public Goods (DPGs). The platform enables users to contribute both financial and non-financial resources to DPG projects and helps projects meet the Digital Public Goods Standard.

> The codebase is a work-in-progress (WIP) and is still under development.

## Prerequisites

- Node.js (version 20.12.X or higher)
- [Vercel CLI](https://vercel.com/cli) (for local development)
- Supabase account for database and authentication

## Local Development

1. Clone the repository:

   ```sh
   git clone https://github.com/christex-foundation/pipeline
   cd pipeline
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:

   - Option 1: Pull from Vercel

     ```sh
     npx vercel env pull
     ```

   - Option 2: Create a `.env` file based on `.env.example`

4. Set up Supabase:

   - Follow the [Supabase setup guide](https://supabase.com/docs/guides/getting-started) to create your project.
   - Populate the necessary API keys and database details in your `.env` file.

5. Start the development server:

   ```sh
   npm run dev
   ```
