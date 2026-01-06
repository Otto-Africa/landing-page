#!/usr/bin/env node

/**
 * Otto Landing Page Test Suite
 * Tests all routes and documentation pages
 */

const http = require('http');
const { spawn } = require('child_process');

console.log('🚀 Testing Otto Landing Page & Documentation Platform\n');

// Test URLs
const testUrls = [
  { path: '/', description: 'Landing Page' },
  { path: '/docs', description: 'Documentation Index' },
  { path: '/docs/getting-started', description: 'Getting Started Guide' },
  { path: '/docs/authentication', description: 'Authentication Guide' },
  { path: '/docs/gift-cards', description: 'Gift Cards API Guide' },
  { path: '/why-choose-otto-business', description: 'Business Page' },
  { path: '/why-choose-otto-personal', description: 'Personal Page' },
  { path: '/qr-payments', description: 'QR Payments Page' },
  { path: '/gift-cards', description: 'Gift Cards About Page' },
  { path: '/blog', description: 'Blog Page' },
  { path: '/nonexistent', description: '404 Page (should redirect)' }
];

let serverProcess = null;
let testsPassed = 0;
let testsFailed = 0;

// Start the React server
function startServer() {
  console.log('📦 Starting React development server...\n');

  return new Promise((resolve, reject) => {
    serverProcess = spawn('npm', ['start'], {
      cwd: __dirname,
      stdio: ['inherit', 'pipe', 'pipe'],
      detached: true
    });

    let output = '';
    let errorOutput = '';

    serverProcess.stdout.on('data', (data) => {
      output += data.toString();
      if (output.includes('Compiled successfully') ||
          output.includes('Local:')) {
        console.log('✅ Server started successfully!\n');
        resolve();
      }
    });

    serverProcess.stderr.on('data', (data) => {
      errorOutput += data.toString();
      console.log('Server stderr:', data.toString());
    });

    serverProcess.on('close', (code) => {
      if (code !== 0) {
        console.log('❌ Server failed to start');
        console.log('Error:', errorOutput);
        reject(new Error('Server start failed'));
      }
    });

    // Timeout after 30 seconds
    setTimeout(() => {
      reject(new Error('Server start timeout'));
    }, 30000);
  });
}

// Test a single URL
function testUrl(url, description) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: url,
      method: 'GET',
      timeout: 5000
    };

    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const status = res.statusCode;
        const success = status === 200 || (url === '/nonexistent' && status === 200); // 404 page redirects to landing

        if (success) {
          console.log(`✅ ${description}: HTTP ${status}`);
          testsPassed++;
        } else {
          console.log(`❌ ${description}: HTTP ${status}`);
          testsFailed++;
        }
        resolve();
      });
    });

    req.on('error', (err) => {
      console.log(`❌ ${description}: Connection failed - ${err.message}`);
      testsFailed++;
      resolve();
    });

    req.on('timeout', () => {
      console.log(`❌ ${description}: Timeout`);
      req.destroy();
      testsFailed++;
      resolve();
    });

    req.end();
  });
}

// Run all tests
async function runTests() {
  try {
    await startServer();

    console.log('🧪 Running route tests...\n');

    for (const test of testUrls) {
      await testUrl(test.path, test.description);
      // Small delay between requests
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log(`\n📊 Test Results:`);
    console.log(`   ✅ Passed: ${testsPassed}`);
    console.log(`   ❌ Failed: ${testsFailed}`);
    console.log(`   📊 Success Rate: ${((testsPassed / (testsPassed + testsFailed)) * 100).toFixed(1)}%\n`);

    if (testsFailed === 0) {
      console.log('🎉 All tests passed! Landing page is working perfectly.\n');
      console.log('📚 Available URLs:');
      console.log('   🌐 Landing Page: http://localhost:3000');
      console.log('   📖 Documentation: http://localhost:3000/docs');
      console.log('   🚀 Getting Started: http://localhost:3000/docs/getting-started');
      console.log('   🔐 Authentication: http://localhost:3000/docs/authentication');
      console.log('   🎁 Gift Cards Guide: http://localhost:3000/docs/gift-cards');
    } else {
      console.log('⚠️  Some tests failed. Check the routes and components.');
    }

  } catch (error) {
    console.log('❌ Test suite failed:', error.message);
    testsFailed++;
  } finally {
    // Clean up
    if (serverProcess) {
      console.log('\n🧹 Stopping server...');
      process.kill(-serverProcess.pid);
    }

    process.exit(testsFailed > 0 ? 1 : 0);
  }
}

// Handle Ctrl+C
process.on('SIGINT', () => {
  console.log('\n🛑 Test interrupted by user');
  if (serverProcess) {
    process.kill(-serverProcess.pid);
  }
  process.exit(1);
});

// Run the tests
runTests();
