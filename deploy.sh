#!/bin/bash

# Quick Deploy Script for Voira
# This script helps you quickly deploy updates to GitHub Pages

echo "🚀 Voira - Quick Deploy Script"
echo "================================"
echo ""

# Check if git is initialized
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Git repository not initialized!"
    echo "Run: git init"
    exit 1
fi

# Check if remote is set
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ No git remote configured!"
    echo "Run: git remote add origin https://github.com/ZancaM/voira-ai-intelligent-call-insights.git"
    exit 1
fi

# Show current status
echo "📊 Current Status:"
git status --short
echo ""

# Ask for commit message
echo "📝 Enter commit message (or press Enter for default):"
read -r commit_message

if [ -z "$commit_message" ]; then
    commit_message="Update: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Add all changes
echo ""
echo "➕ Adding all changes..."
git add .

# Commit
echo "💾 Committing changes..."
git commit -m "$commit_message"

# Push to GitHub
echo "☁️  Pushing to GitHub..."
git push

echo ""
echo "✅ Done! Your changes have been pushed to GitHub."
echo "🌐 GitHub Actions will automatically deploy your site in 2-3 minutes."
echo "📊 Check deployment status: https://github.com/$(git remote get-url origin | sed 's/.*github.com[:/]\(.*\)\.git/\1/')/actions"
echo ""

