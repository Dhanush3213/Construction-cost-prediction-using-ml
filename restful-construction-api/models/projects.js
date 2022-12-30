const mongoose = require("mongoose")
const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        owener_deatils: {
            name: {
                type: String,
                required: true
            },
            phone_number: {
                type: Number,
                required: true
            },
            location: {
                type: String,
                required: true
            }
        },
        price: {
            type: Number,
            required: [true, "price must  be provided"]
        },
        featured: {
            type: Boolean,
            default: false
        },
        rating: {
            type: Number,
            default: 4.9,
            required: [true, "rating must  be provided"]
        },
        constructedAt: {
            type: Date,
            default: Date.now()
        },
        company: {
            type: String,
            // enum: {
            // values: ["", "samsung", "dell", "mi"],
            // message: `{value} is not supproted`
            // },
        },
    }
)


module.exports = mongoose.model("Project", projectSchema)