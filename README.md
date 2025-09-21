# Crypto Wizard - The Ultimate Crypto Marketplace

A comprehensive crypto marketplace MVP that connects promoters, influencers, and recruiters in one powerful platform. Built with Next.js, Tailwind CSS, and Supabase.

## 🚀 Features

### Core Marketplace
- **Push Tab (Bounties)**: Promoters post bounties, influencers browse and apply
- **Pull Tab (Narrative Feed)**: Aggregated social media content from Twitter, Reddit, Facebook
- **Escrow System**: Secure payments with automatic revenue splitting
- **Universal User System**: One account for Influencer/Promoter/Recruiter roles

### Revenue Model
- **80%** → Influencer earnings
- **10%** → Recruiter lifetime royalties
- **20%** → Platform commission

### Additional Features
- **WizardHat Tech Store**: Physical and digital crypto products
- **Job Board**: Remote crypto/tech job listings
- **Directories**: Discord, Telegram, Influencer, Crypto Websites
- **AI Tools**: Prompt marketplaces, trading tools, analytics

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI components
- **Backend**: Supabase (Authentication, Database, API)
- **Payments**: Crypto (USDT, ETH, BTC) + Stripe/PayPal
- **Search**: Postgres full-text search

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Supabase account
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd crypto-wizard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   # Crypto Payment Configuration
   NEXT_PUBLIC_ETHEREUM_RPC_URL=https://mainnet.infura.io/v3/your_infura_key
   
   # Stripe Configuration (for fiat payments)
   STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
   
   # Social Media API Keys
   TWITTER_BEARER_TOKEN=your_twitter_bearer_token
   REDDIT_CLIENT_ID=your_reddit_client_id
   FACEBOOK_ACCESS_TOKEN=your_facebook_access_token
   ```

4. **Database Setup**
   - Create a new Supabase project
   - Run the database migrations (see Database Schema section)
   - Enable Row Level Security (RLS) policies

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
crypto-wizard/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── dashboard/          # User dashboards
│   │   ├── store/             # Tech store
│   │   ├── jobs/              # Job board
│   │   ├── directories/       # Community directories
│   │   ├── ai-tools/          # AI tools marketplace
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable UI components
│   │   ├── auth/              # Authentication components
│   │   ├── dashboard/         # Dashboard components
│   │   ├── escrow/            # Escrow system
│   │   └── payments/          # Payment components
│   ├── lib/                   # Utility functions
│   │   ├── supabase.ts        # Supabase client
│   │   └── utils.ts           # Helper functions
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
├── .env.example              # Environment variables template
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind CSS configuration
└── README.md                 # Project documentation
```

## 🔐 Authentication & User Roles

### User Types
- **Influencer**: Apply to bounties, create content, earn money
- **Promoter**: Post bounties, hire influencers, manage campaigns
- **Recruiter**: Refer users, earn lifetime royalties

### Features by Role
- Universal dashboard with role-specific sections
- Seamless role switching within one account
- Comprehensive earnings tracking

## 💰 Payment System

### Supported Currencies
- **Crypto**: USDT, ETH, BTC
- **Fiat**: USD (via Stripe/PayPal)

### Escrow Process
1. Promoter deposits funds to escrow
2. Influencer completes bounty work
3. Automatic revenue split upon completion:
   - 80% to Influencer
   - 10% to Recruiter (if applicable)
   - 20% to Platform

## 🎯 Key Pages

- **Home**: Hero section with Push/Pull tabs
- **Dashboard**: Role-based user interface
- **Store**: WizardHat Tech Store for crypto products
- **Jobs**: Remote crypto/tech job board
- **Directories**: Curated crypto communities and resources
- **AI Tools**: AI-powered crypto tools and marketplaces

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Style
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint for code quality
- Component-based architecture

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- Compatible with any Next.js hosting platform
- Ensure environment variables are properly configured
- Build command: `npm run build`
- Start command: `npm run start`

## 📊 Database Schema

The application uses Supabase with the following main tables:
- `users` - User profiles and authentication
- `bounties` - Bounty listings and details
- `bounty_applications` - Influencer applications
- `escrow_transactions` - Payment and escrow records
- `feed_items` - Social media content aggregation
- `products` - Store inventory
- `jobs` - Job board listings
- `directory_listings` - Community directories

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Join our Discord community
- Email: support@crypto-wizard.com

## 🔮 Roadmap

- [ ] Mobile app development
- [ ] Advanced AI trading features
- [ ] Multi-chain support
- [ ] DAO governance implementation
- [ ] Advanced analytics dashboard
- [ ] API for third-party integrations

---

**Built with ❤️ for the crypto community**
