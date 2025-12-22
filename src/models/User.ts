import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
    emailOrPhone: string;
    createdAt: Date;
}

const UserSchema: Schema = new Schema<IUser>(
    {
        emailOrPhone: {
            type: String,
            required: true,
            trim: true,
            index: { unique: true },
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

// Prevent overwriting the model if it's already compiled
const User: Model<IUser> =
    mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
