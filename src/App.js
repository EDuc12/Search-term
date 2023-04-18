import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

export default function App() {
  const [images, setImages] = useState([]);
  const handleSummit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSummit} />
      <ImageList images={images} />
    </div>
  );
}
