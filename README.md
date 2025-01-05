# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# How to setup
## case using docker
1. setup environment
   - frontend
    .env
    ```
    VITE_API_URL=http://blog-backend:5173/api/posts
    ```
   - backend
    .env
    ```
    MONGODB_URI=mongodb://mongodb:27017/blogdb
    PORT=5001
    ```
2. Build docker images
```bash
docker compose build
```
3. Run docker containers
```bash
docker compose up
```

## case not using docker
1. run frontend
```bash
cd blog-frontend
npm install
npm run dev
```
2. run backend
```bash
cd blog-backend
npm install
npm run dev
```
3. setup database
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