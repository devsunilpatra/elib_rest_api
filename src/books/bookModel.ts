import mongoose from "mongoose";

import { Books } from "./bookTypes";

const bookSchemma = new mongoose.Schema<Books>(
  {
    title: {
      type: String,
      require: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    coverImage: {
      type: String,
      require: true,
    },
    file: {
      type: String,
      require: true,
    },

    genre: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model<Books>("Book", bookSchemma);
