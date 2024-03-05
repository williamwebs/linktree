import { Schema, model, models } from "mongoose";

const PageSchema = new Schema(
  {
    uri: {
      type: String,
      required: true,
      min: 1,
      unique: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Page = models?.Page || model("Page", PageSchema);
