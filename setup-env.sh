#!/bin/bash

# Setup script for Landing Page environment files (local, test, staging, production)

echo "Setting up Landing Page environment files..."

# .env.local
cat > .env.local << 'EOF'
# Otto Landing Page - Local
REACT_APP_ENV=local
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_MERCHANT_PORTAL_URL=http://localhost:3001
EOF
echo "  - .env.local"

# .env.test
cat > .env.test << 'EOF'
# Otto Landing Page - Test
REACT_APP_ENV=test
REACT_APP_API_URL=https://test-api.ottoafrica.com/api
REACT_APP_MERCHANT_PORTAL_URL=https://business-test.ottoafrica.com
EOF
echo "  - .env.test"

# .env.staging
cat > .env.staging << 'EOF'
# Otto Landing Page - Staging
REACT_APP_ENV=staging
REACT_APP_API_URL=https://staging-api.ottoafrica.com/api
REACT_APP_MERCHANT_PORTAL_URL=https://business-staging.ottoafrica.com
EOF
echo "  - .env.staging"

# .env.production
cat > .env.production << 'EOF'
# Otto Landing Page - Production
REACT_APP_ENV=production
REACT_APP_API_URL=https://api.ottoafrica.com/api
REACT_APP_MERCHANT_PORTAL_URL=https://business.ottoafrica.com
EOF
echo "  - .env.production"

echo "✅ Environment files created. Use: npm run start:local, start:test, start:staging, start:production"
