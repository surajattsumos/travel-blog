const { MongoClient } = require('mongodb');
const blogdata = require('../src/data/blogdata');

async function seedDatabase() {
  const uri = "mongodb://mongodb:27017/blogdb";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("データベースに接続しました");

    const database = client.db("blogdb");
    const collection = database.collection("blogs");

    // 既存のデータをクリア（必要な場合）
    await collection.deleteMany({});

    // blogdataの内容を挿入
    const result = await collection.insertMany(blogdata);
    console.log(`${result.insertedCount} 件のブログデータを挿入しました`);

  } catch (error) {
    console.error("エラーが発生しました:", error);
  } finally {
    await client.close();
  }
}

seedDatabase();