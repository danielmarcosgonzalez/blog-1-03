import mongoose from "npm:mongoose";
import {Post} from "../types.ts";

if (mongoose.connection.readyState === 0) {
    await mongoose.connect(Deno.env.get("MONGO_URL")!);
  }

  const schema = new mongoose.Schema<Post>({
    title: String,
    author: String,
    text: String,
  });

  export default mongoose.model<Post>("Post",schema);