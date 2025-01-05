import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Headerfile";
import Entry from "./components/Entry";
import { blogApi } from "../services/api";
export function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try{
        const data = await blogApi.getAllPosts();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blog data', error);
      }
    };
    fetchBlogData();
  }, []);

  const blogelements = blogs.map((item) => {
    return (
      <Entry
        key={item.title}
        img={item.img}
        location={item.location}
        map={item.mapUrl}
        dates={item.dates}
        description={item.description}
      />
    );
  });

  return (
    <div className="app-container">
      <Header />
      {blogelements}
    </div>
  );
}
