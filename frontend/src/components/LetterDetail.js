import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const LetterDetail = () => {
  const { id } = useParams();
  const [letter, setLetter] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/letters/${id}`)
      .then((res) => res.json())
      .then((data) => setLetter(data));
  }, [id]);

  if (!letter) return <p className="text-center mt-10">Loading letter...</p>;

  return (
    <div className="bg-parchment min-h-screen p-6 sm:p-10 max-w-3xl mx-auto shadow-2xl rounded-xl border border-brownLight relative font-serif">
      <Link
        to="/"
        className="text-brownDark underline mb-6 inline-block hover:text-brownLight transition"
      >
        ← Back to all letters
      </Link>

      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-brownDark mb-2">{letter.title}</h1>
        <p className="italic text-brownLight">
          By {letter.author} on {letter.date}
        </p>
      </div>

      <hr className="border-brownLight mb-6" />

      <div className="whitespace-pre-line text-textBrown leading-relaxed text-lg px-2 md:px-8 font-handwritten">
        {letter.content}
      </div>

      <div className="absolute bottom-4 right-6 text-brownLight text-sm italic">
        — Lost Letters API 💌
      </div>
    </div>
  );
};

export default LetterDetail;
