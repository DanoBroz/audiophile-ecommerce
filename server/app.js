const path = require('path')
const express = require('express')
const morgan = require('morgan')
const rateLimit = require('express-rate-limit')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const cors = require('cors')
const hpp = require('hpp')
const xss = require('xss-clean')

const app = express()

app.enable('trust proxy')

// global Middlewares
// security http headers

// implement cors
app.use(cors())

app.options('*', cors())

// serving static files
app.use(express.static(path.join(__dirname, 'public')))

// development loggin
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// limit request from same api
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!',
})

app.use('/api', limiter)

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }))
app.use(
    express.urlencoded({
        extended: true,
        limit: '10kb',
    })
)
app.use(cookieParser())

// data sanitization against XSS
app.use(xss())

// prevent parametr polution
app.use(
    hpp({
        whitelist: [
            'duration',
            'ratingsQuantity',
            'ratingsAverage',
            'maxGroupSize',
            'difficulty',
            'price',
        ],
    })
)

app.use(compression())

// test middleware
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    // console.log(req.cookies)
    // console.log(req.headers)
    next()
})

// Routes
// app.use('/', viewRouter)
// app.use('/api/v1/tours/', tourRouter)
// app.use('/api/v1/users/', userRouter)
// app.use('/api/v1/reviews/', reviewRouter)
// app.use('/api/v1/bookings/', bookingRouter)

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

module.exports = app
