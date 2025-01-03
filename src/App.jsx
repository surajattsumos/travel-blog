import "./App.css";
import Header from "./components/Headerfile";
import Entry from "./components/Entry";
import { blogdata } from "./assets/blogdata";

export default function App() {
  const blogelements = blogdata.map((item) => {
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
