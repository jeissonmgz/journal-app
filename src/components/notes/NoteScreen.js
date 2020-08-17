import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="note__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Someawesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="what's up"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg"
            alt="Imagen"
          />
        </div>
      </div>
    </div>
  );
};
