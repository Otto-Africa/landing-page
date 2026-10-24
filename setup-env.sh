#!/bin/bash

# Setup script for Landing Page environment files (local, test, staging, production)
# Prefer a single .env and switch APP_ENV (see .env.example). These files are for
# npm run start:local / start:test / start:staging / start:production.

echo "Setting up Landing Page environment files..."

URL_BLOCK='
LOCAL_BASE_URL=http://localhost:3000
TEST_BASE_URL=https://api-test.ottoafrica.com
STAGING_BASE_URL=https://staging-api.ottoafrica.com
PROD_BASE_URL=https://api.ottoafrica.com

LOCAL_MERCHANT_PORTAL_URL=http://localhost:3001
TEST_MERCHANT_PORTAL_URL=https://business-test.ottoafrica.com
STAGING_MERCHANT_PORTAL_URL=https://business-staging.ottoafrica.com
PROD_MERCHANT_PORTAL_URL=https://business.ottoafrica.com
'

# .env.local
cat > .env.local << EOF
# Otto Landing Page - Local
APP_ENV=local
PORT=3003
${URL_BLOCK}
EOF
echo "  - .env.local"

# .env.test
cat > .env.test << EOF
# Otto Landing Page - Test
APP_ENV=test
PORT=3003
${URL_BLOCK}
EOF
echo "  - .env.test"

# .env.staging
cat > .env.staging << EOF
# Otto Landing Page - Staging
APP_ENV=staging
PORT=3003
${URL_BLOCK}
EOF
echo "  - .env.staging"

# .env.production
cat > .env.production << EOF
# Otto Landing Page - Production
APP_ENV=prod
PORT=3003
${URL_BLOCK}
EOF
echo "  - .env.production"

echo "✅ Environment files created. Use: npm run start:local, start:test, start:staging, start:production"
echo "   Or copy .env.example to .env and switch APP_ENV."
