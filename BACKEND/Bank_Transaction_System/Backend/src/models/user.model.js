const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Enter Name to Continue"]
    },
    email:{
        type:String,
        required:[true,"Enter Email to Continue"],
        trim:true,
        lowercase:true,
        match:[ /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid Email address"],
        unique:[true,"User Already Exist"]
    },
    password:{
        type:String,
        required:[true,"Enter Password to continue"],
        minlength:[6,"Password should contain more than 6 letters"],
        match:[
                 /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                "Password must contain uppercase, lowercase, number, and special character"
        ]
    },
    systemUser: {
        type: Boolean,
        default: false,
        immutable: true,
        select: false
    }
},{
    timestamps: true
})

userSchema.pre("save", async function(){
    if (!this.isModified("password")) {
        return
    }

    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    return
})

userSchema.methods.comparePassword = async function (password) {

    return await bcrypt.compare(password, this.password)

}

const userModel = mongoose.model("user",userSchema);
module.exports = userModel