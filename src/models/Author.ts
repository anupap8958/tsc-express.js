import mongoose, { Document, Schema } from 'mongoose';

export interface IAuthor {
    name: string;
    role: string | '' | null;
}

export interface IAuthorModel extends IAuthor, Document { }

const AuthorSchema: Schema = new Schema<IAuthorModel>(
    {
        name: { type: String, required: true },
        role: { type: String, required: false }
    },
    {
        versionKey: false
    },
);

export default mongoose.model<IAuthorModel>('Author', AuthorSchema);