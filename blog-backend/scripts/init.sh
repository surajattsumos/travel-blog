#!/bin/sh

set -e
echo "Starting init.sh..."

# mongoDBの起動を待つ
echo "Waiting for MongoDB to start..."
sleep 10

# 依存関係のインストール
echo "Installing dependencies..."
npm install

# データベースの作成
echo "Creating database..."
npm run db:create

# シードデータの投入
echo "Seeding database..."
npm run db:seed

# 開発サーバーの起動
echo "Starting development server..."
npm run dev