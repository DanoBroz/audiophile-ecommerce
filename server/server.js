const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: './.env.development.local' })

const app = require('./app')

const DB = process.env.DATABASE_URL.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
)

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database connection was successful!'))

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`App listening on port ${port}...`)
})
