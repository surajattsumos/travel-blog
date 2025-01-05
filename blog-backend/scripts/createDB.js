const { MongoClient } = require('mongodb');

async function createDatabase() {
  const uri = "mongodb://mongodb:27017/blogdb";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("blogdb");

    // コレクションの作成
    await db.createCollection("blogs");
    await db.createCollection("users");

    // インデックスの作成
    await db.collection("blogs").createIndex({ title: 1 });
    await db.collection("users").createIndex({ email: 1 }, { unique: true });

    console.log("データベースとコレクションの作成が完了しました");

  } catch (error) {
    console.error("エラーが発生しました:", error);
  } finally {
    await client.close();
  }
}

createDatabase();