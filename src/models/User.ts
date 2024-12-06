import mongoose, { Schema } from "mongoose";


export interface User extends Document {
    email: string;
    password: string;
    fullName: string;
}

const UserSchema: Schema<User> = new Schema({
    email: {
        type: String,
        required: [true, 'email is required'],
        lowercase: true,
        trim: true,
        unique: true
    },
    fullName: {
        type: String,
        required: [true, 'fullname is required'],
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    }
}, { timestamps: true })

// UserSchema.method('save', async function (next) {
//     if (!this.isModified('password')) return next()

//     this.password = await bcrypt.hash(this.password, 10)
//     next()
// })


// UserSchema.methods.isPasswordCorrect = async function (password: string) {
//     return await bcrypt.compare(password, this.password)
// }

// UserSchema.methods.generateAccessToken = function () {
//     return jwt.sign(
//         {
//             _id: this._id,
//             email: this.email,
//             fullName: this.fullName,
//         },

//         process.env.ACCESS_TOKEN_SECRET!,

//         { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }

//     )
// }


const User = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>('User', UserSchema))
export default User;
