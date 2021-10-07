import { Schema } from "mongoose";

export const MessageSchema = new Schema({
    autor: { type: String, required: true},
    email: { type: String, required: true},
    text: { type: String },
    createdAt:{
        type: Date,
        default: Date.now
    }
});