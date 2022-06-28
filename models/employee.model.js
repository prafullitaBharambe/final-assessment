const bcrypt = require('bcrypt')

module.exports = mongoose => {
    var EmployeeSchema = mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        mobile:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
    }, 
        {timestamps: true}
    )

    EmployeeSchema.method("toJSON", function(){
        const {_id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    EmployeeSchema.pre('save', function (next){
    
        const saltRounds = 10
        // Encrypt the password
        this.password = bcrypt.hashSync(this.password, saltRounds)
        
        next()
    })
    
    const EmployeeModel = mongoose.model("employee",EmployeeSchema)

    return EmployeeModel

}