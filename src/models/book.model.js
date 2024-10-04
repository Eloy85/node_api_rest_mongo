import mongoose from 'mongoose'

const bookSchema = mongoose.Schema(
    {
        title: String,
        author: String,
        genre: String,
        publication_date: String
    }
)
export default bookSchema