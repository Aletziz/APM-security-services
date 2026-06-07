# Deploy the built site to the `gh-pages` branch (GitHub Pages, branch source).
# Usage:  npm run deploy        (from the project root)
#
# Why this exists: GitHub Actions is currently blocked on this account by a
# billing lock, so we publish the pre-built `dist/` to a `gh-pages` branch,
# which GitHub Pages serves with its own (free) internal builder.

$ErrorActionPreference = 'Stop'
$repo = 'https://github.com/Aletziz/APM-security-services.git'
$root = $PSScriptRoot

Write-Host '==> Building production site...' -ForegroundColor Cyan
& npm run build
if ($LASTEXITCODE -ne 0) { throw 'Build failed.' }

$dist = Join-Path $root 'dist'
if (-not (Test-Path (Join-Path $dist 'index.html'))) { throw 'dist/index.html missing.' }

Write-Host '==> Publishing dist/ to gh-pages...' -ForegroundColor Cyan
Push-Location $dist
try {
  if (Test-Path '.git') { Remove-Item '.git' -Recurse -Force }
  & git init -q -b gh-pages
  & git config commit.gpgsign false
  & git add -A
  & git -c user.name='Alexis' -c user.email='galexito856@gmail.com' commit -q -m 'Deploy APM landing to GitHub Pages'
  & git remote add origin $repo
  & git push -f origin gh-pages
  if ($LASTEXITCODE -ne 0) { throw 'Push failed.' }
} finally {
  Pop-Location
}

Write-Host ''
Write-Host '==> Done. Live at: https://aletziz.github.io/APM-security-services/' -ForegroundColor Green
Write-Host '    (GitHub Pages may take ~1 minute to refresh.)' -ForegroundColor DarkGray
