import { Schema } from "mongoose";
import { basicStringType } from "../db/Constants.js";

export const PostSchema = new Schema({

    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    title: { type: String, maxLength: 100, required: true },
    body: { type: String, required: true },
    isLocked: { type: Boolean, default: false, required: true },
    subRood: { type: String, required: true }
    // TODO Look into flares

}, { timestamps: true, toJSON: { virtuals: true } })

PostSchema.virtual('creator', {
    ref: 'Account',
    localField: 'creatorId',
    foreignField: '_id',
    justOne: true
})