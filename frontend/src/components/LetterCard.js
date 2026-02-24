import React from "react";
import { Link } from "react-router-dom";

const LetterCard = ({ letter }) => {
  const preview = letter.content.split('\n')[0];// Only first line

  return (
    <div className="bg-parchment p-6 rounded-xl border border-brownLight shadow-md max-w-2xl mx-auto mb-6">
      <h2 className="text-xl font-bold text-brownDark mb-1">{letter.title}</h2>
      <p className="text-sm italic text-brownLight mb-2">
        By {letter.author} on {letter.date}
      </p>
      <p className="text-textBrown mb-3">{preview}...</p> 
      {/* for the backend preview */}

      <Link
        to={`/letter/${letter.id}`}
        className="text-brownDark font-semibold underline hover:text-brownDarker"
      >
        Read Full Letter →
      </Link>
    </div>
  );
};
// the main methods of the letter is to display the random which will be potrayed in the main method
export default LetterCard;