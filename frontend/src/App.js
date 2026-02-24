import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import LetterCard from "./components/LetterCard";
import LetterDetail from "./components/LetterDetail"; // NEW
import { useEffect, useState } from "react";

function App() {
  const [letters, setLetters] = useState([]);

  const fetchLetters = async (query = "") => {
    const res = await fetch(`http://127.0.0.1:8000/letters/${query}`);
    const data = await res.json();
    setLetters(data.letters);
  };

  const handleSearch = ({ author, keyword }) => {
    let queryParams = [];
    if (author) queryParams.push(`author=${encodeURIComponent(author)}`);
    if (keyword) queryParams.push(`keyword=${encodeURIComponent(keyword)}`);
    const query = queryParams.length ? `?${queryParams.join("&")}` : "";
    fetchLetters(query);
  };

  useEffect(() => {
    fetchLetters();
  }, []);

  return (
    <Router>
      <Header />
      <main className="py-8 bg-parchment min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <div className="px-4">
                <SearchBar onSearch={handleSearch} />
                {letters.map((letter, index) => (
                  <LetterCard key={index} letter={letter} />
                ))}
              </div>
            }
          />
          <Route path="/letter/:id" element={<LetterDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
