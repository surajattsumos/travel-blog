# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# How to run
## Frontend
```bash
npm install
npm run dev
```
## Backend
```bash
cd blog-backend
npm install
npm run dev
```

## Database
```bash
cd blog-backend
npm run db:create
```

# How to setup database
1. Install MongoDB `brew install mongodb-community`
2. Start MongoDB `brew services start mongodb-community`
3. Create database `npm run db:create`
4. Insert data `npm run db:seed`

If you want to check the data, you can use `mongosh`
```bash
mongosh
use blogdb
db.blogs.find()
```