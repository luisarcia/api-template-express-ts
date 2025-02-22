# API Template ExpressJS + Typescript & more
Easy and quick template to create Rest APIs with ExpressJS and TypeScript



### Features
- **RESTful API Design**: Follows best practices for designing RESTful APIs.
- **TypeScript Integration**: Full TypeScript support for type safety and better developer experience.
- **Database Integration**: Prisma ORM for database management and migrations.
- **Authentication**: JWT-based authentication with secure password hashing using BcryptJS.
- **Security**: Enhanced security using Helmet and CORS configuration.
- **Session Management**: Easy session management with CookieSession.
- **Logging**: Integrated logging with Morgan for request/response tracking.
- **Environment Variables**: Manage configuration via .env with the Dotenv package.



### Installation

```bash
git clone <repo-url>
cd <project-directory>
npm install
```



### Usage

Run the development server:

```bash
npm run dev
```

```bash
npm run start

```



### Folder Structure

```bash
/src
  /controllers  # Handle API logic
  /middlewares  # Custom middleware for authentication, error handling, etc.
  /models       # Prisma models and database interactions
  /routes       # Define all your API routes
  /services     # Business logic and other helpers
  /utils        # Utility functions and helpers
  /config       # Configuration files like CORS, Helmet settings, etc.
  /middlewares  # Express middlewares (e.g., for JWT verification)

```




### **Pre-installed modules**

- Prisma
- BcryptJS
- CookieSession
- CORS
- Helmet
- Dotenv
- JsonWebToken
- Morgan

### License

MIT