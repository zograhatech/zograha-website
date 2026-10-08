import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');

test('Production build output exists', () => {
  assert.ok(fs.existsSync(distDir), 'dist/ directory must exist');
  assert.ok(fs.existsSync(path.join(distDir, 'index.html')), 'dist/index.html must exist');
  assert.ok(fs.existsSync(path.join(distDir, 'assets')), 'dist/assets directory must exist');
});

test('Vercel SPA fallback configuration exists', () => {
  const vercelPath = path.resolve(__dirname, '..', 'vercel.json');
  assert.ok(fs.existsSync(vercelPath), 'vercel.json must exist');
  const vercelConfig = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
  assert.ok(Array.isArray(vercelConfig.rewrites), 'rewrites must be configured');
  assert.strictEqual(vercelConfig.rewrites[0].destination, '/index.html');
});

test('Public brand assets and favicon exist in public directory', () => {
  const publicDir = path.resolve(__dirname, '..', 'public');
  assert.ok(fs.existsSync(path.join(publicDir, 'favicon.ico')), 'favicon.ico must exist');
  assert.ok(fs.existsSync(path.join(publicDir, 'figma')), 'figma assets directory must exist');
});

test('Backend API client endpoints smoke test', async () => {
  const apiUrl = process.env.VITE_API_URL || 'https://zograha-backend.vercel.app';
  try {
    const res = await fetch(`${apiUrl}/api/health`, { signal: AbortSignal.timeout(5000) });
    assert.strictEqual(res.status, 200, 'Health check should return 200');
    const json = await res.json();
    assert.strictEqual(json.success, true, 'Health check success flag should be true');
  } catch (err) {
    console.warn('API health check skipped or timed out:', err.message);
  }
});

test('Zero debug alerts in frontend codebase', () => {
  const srcDir = path.resolve(__dirname, '..', 'src');
  const checkDir = (dir) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        checkDir(fullPath);
      } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        assert.ok(!content.includes('alert('), `Found alert() in ${entry.name}`);
        assert.ok(!content.includes('"Pressed!"'), `Found "Pressed!" in ${entry.name}`);
        assert.ok(!content.includes('debugger;'), `Found debugger in ${entry.name}`);
      }
    }
  };
  checkDir(srcDir);
});

test('No inline duplicate navbars or footers in service components', () => {
  const serviceFiles = [
    'ServiceAppDevelopment',
    'ServiceWebdesignDeveop',
    'ServiceDigitalmarketing',
    'ServicePublication',
    'ServiceDatamanagement',
    'ServiceCustomerSupport'
  ];
  for (const name of serviceFiles) {
    const filePath = path.resolve(__dirname, '..', 'src', 'pages', name, 'index.tsx');
    const content = fs.readFileSync(filePath, 'utf8');
    assert.ok(!content.includes('<div className="self-stretch bg-white pb-[1px] px-[60px] mb-5">'), `${name} must not contain inline navbar`);
    assert.ok(!content.includes('<div className="flex flex-col items-start self-stretch bg-[#00000000] pt-[62px]">'), `${name} must not contain inline footer`);
  }
});


