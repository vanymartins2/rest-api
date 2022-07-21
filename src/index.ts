import express from 'express'
import basicAuthenticationMiddleware from './middlewares/basic-authentication.middleware'
import errorHandler from './middlewares/error-handler.middleware'
import jwtAuthenticationMiddleware from './middlewares/jwt-authentication.middleware'
import authorizationRoute from './routes/authorization.route'
import statusRoute from './routes/status.route'
import usersRoute from './routes/users.route'

const app = express()

//App Settings
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//App Routes
app.use(statusRoute)
app.use(authorizationRoute)

app.use(jwtAuthenticationMiddleware)
app.use(usersRoute)

// Setting for error handling
app.use(errorHandler)

//Initialize server
app.listen(3000, () => {
  console.log('Aplication running on port 3000')
})
