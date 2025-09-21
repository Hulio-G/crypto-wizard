# CRYPTO-WIZARD-RULES.md
## Persistent MCP Instructions for Crypto Wizard Project

### 🎯 PROJECT OVERVIEW
This is a comprehensive crypto marketplace MVP connecting promoters, influencers, and recruiters. All changes must align with the core mission of creating a unified platform for crypto community engagement and monetization.

### 🏗️ ARCHITECTURE RULES

#### Tech Stack Compliance
- **MANDATORY**: Next.js 14+ with App Router (no Pages Router)
- **MANDATORY**: TypeScript for all new files
- **MANDATORY**: Tailwind CSS for styling (no custom CSS files)
- **MANDATORY**: Shadcn UI components when available
- **MANDATORY**: Supabase for backend services
- **FORBIDDEN**: Class components (use functional components only)
- **FORBIDDEN**: Inline styles (use Tailwind classes)

#### File Structure Rules
```
src/
├── app/                    # Next.js App Router pages ONLY
├── components/            # Reusable UI components
│   ├── auth/              # Authentication components
│   ├── dashboard/         # Dashboard-specific components
│   ├── escrow/            # Payment/escrow components
│   └── ui/                # Base UI components (Shadcn)
├── lib/                   # Utility functions and configurations
├── types/                 # TypeScript type definitions
└── hooks/                 # Custom React hooks
```

### 💰 BUSINESS LOGIC RULES

#### Revenue Model (IMMUTABLE)
- **80%** → Influencer earnings
- **10%** → Recruiter lifetime royalties  
- **20%** → Platform commission
- **NEVER** modify these percentages without explicit approval

#### User Role System
- **Universal Account**: One user can have multiple roles
- **Roles**: Influencer, Promoter, Recruiter
- **MANDATORY**: All role switching must be seamless within dashboard
- **MANDATORY**: Role-based permission checks on all actions

#### Payment System Requirements
- **MANDATORY**: Support USDT, ETH, BTC payments
- **MANDATORY**: Escrow system for all bounty payments
- **MANDATORY**: Automatic revenue splitting
- **FORBIDDEN**: Direct payments without escrow

### 🎨 UI/UX RULES

#### Design System
- **Color Scheme**: Professional crypto-themed (blues, purples, dark themes)
- **MANDATORY**: Mobile-first responsive design
- **MANDATORY**: Accessibility compliance (WCAG 2.1 AA)
- **FORBIDDEN**: Flashy animations that distract from functionality

#### Component Standards
- **MANDATORY**: Use Shadcn UI components as base
- **MANDATORY**: Consistent spacing using Tailwind spacing scale
- **MANDATORY**: Loading states for all async operations
- **MANDATORY**: Error boundaries for all major sections

### 🔐 SECURITY RULES

#### Authentication & Authorization
- **MANDATORY**: Supabase Auth for all authentication
- **MANDATORY**: Row Level Security (RLS) on all database tables
- **MANDATORY**: Input validation on all forms
- **MANDATORY**: Rate limiting on API endpoints
- **FORBIDDEN**: Storing sensitive data in localStorage

#### Data Protection
- **MANDATORY**: Encrypt all payment-related data
- **MANDATORY**: Audit logs for all financial transactions
- **FORBIDDEN**: Exposing internal IDs in URLs
- **FORBIDDEN**: Client-side validation only (always validate server-side)

### 📱 FEATURE IMPLEMENTATION RULES

#### Push Tab (Bounties)
- **MANDATORY**: Escrow integration for all bounties
- **MANDATORY**: Application system with approval workflow
- **MANDATORY**: Progress tracking and milestone payments
- **MANDATORY**: Dispute resolution system

#### Pull Tab (Social Feed)
- **MANDATORY**: Real-time updates using Supabase subscriptions
- **MANDATORY**: Content moderation system
- **MANDATORY**: Engagement metrics tracking
- **FORBIDDEN**: Unfiltered external content

#### Dashboard Requirements
- **MANDATORY**: Role-specific sections and navigation
- **MANDATORY**: Earnings analytics and reporting
- **MANDATORY**: Transaction history with export functionality
- **MANDATORY**: Profile management with KYC integration

### 🔧 DEVELOPMENT RULES

#### Code Quality
- **MANDATORY**: ESLint configuration compliance
- **MANDATORY**: TypeScript strict mode enabled
- **MANDATORY**: Meaningful component and function names
- **MANDATORY**: JSDoc comments for complex functions
- **FORBIDDEN**: `any` type usage (use proper typing)
- **FORBIDDEN**: Console.log in production code

#### Performance Rules
- **MANDATORY**: Next.js Image component for all images
- **MANDATORY**: Dynamic imports for heavy components
- **MANDATORY**: Database query optimization
- **MANDATORY**: Caching strategies for frequently accessed data
- **FORBIDDEN**: Unnecessary re-renders (use React.memo, useMemo, useCallback)

#### Testing Requirements
- **MANDATORY**: Unit tests for utility functions
- **MANDATORY**: Integration tests for payment flows
- **MANDATORY**: E2E tests for critical user journeys
- **FORBIDDEN**: Deploying without passing tests

### 🚀 DEPLOYMENT RULES

#### Environment Management
- **MANDATORY**: Separate configs for dev/staging/production
- **MANDATORY**: Environment variable validation
- **MANDATORY**: Secure API key management
- **FORBIDDEN**: Hardcoded configuration values

#### Release Process
- **MANDATORY**: Feature flags for major new features
- **MANDATORY**: Database migration scripts
- **MANDATORY**: Rollback procedures documented
- **MANDATORY**: Performance monitoring post-deployment

### 📊 DATA & ANALYTICS RULES

#### Database Design
- **MANDATORY**: Normalized database schema
- **MANDATORY**: Proper indexing for query performance
- **MANDATORY**: Soft deletes for user data
- **MANDATORY**: Audit trails for financial operations
- **FORBIDDEN**: Direct database access from frontend

#### Analytics & Monitoring
- **MANDATORY**: User behavior tracking (privacy-compliant)
- **MANDATORY**: Performance metrics monitoring
- **MANDATORY**: Error tracking and alerting
- **MANDATORY**: Revenue and conversion tracking

### 🤝 INTEGRATION RULES

#### External APIs
- **MANDATORY**: Rate limiting and retry logic
- **MANDATORY**: Fallback mechanisms for API failures
- **MANDATORY**: API key rotation procedures
- **FORBIDDEN**: Synchronous calls to slow external APIs

#### Social Media Integration
- **MANDATORY**: Twitter/X API for content aggregation
- **MANDATORY**: Reddit API for community content
- **MANDATORY**: Content filtering and moderation
- **FORBIDDEN**: Unverified social media content

### 🔄 MAINTENANCE RULES

#### Code Maintenance
- **MANDATORY**: Regular dependency updates
- **MANDATORY**: Security vulnerability scanning
- **MANDATORY**: Code review for all changes
- **MANDATORY**: Documentation updates with feature changes

#### Data Maintenance
- **MANDATORY**: Regular database backups
- **MANDATORY**: Data retention policies
- **MANDATORY**: GDPR compliance procedures
- **MANDATORY**: Performance optimization reviews

---

## 🚨 CRITICAL REMINDERS

1. **NEVER** compromise the revenue split model (80/10/20)
2. **ALWAYS** use escrow for payments - no exceptions
3. **ALWAYS** validate user permissions before actions
4. **NEVER** expose sensitive data in client-side code
5. **ALWAYS** maintain mobile-first responsive design
6. **NEVER** break the universal user account system
7. **ALWAYS** follow TypeScript strict typing
8. **NEVER** deploy without proper testing

## 📝 CHANGE LOG
- Initial rules established: 2025-09-18
- Version: 1.0.0
- Status: ACTIVE

---

**These rules are PERSISTENT and apply to ALL future changes to the Crypto Wizard project.**
