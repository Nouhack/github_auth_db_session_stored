## About github_auth_db_session_stored  Project
This project is a Session Based Authentication  implementation for [Next.js](https://nextjs.org/) app using [nextAuth](https://next-auth.js.org/) solution for Github provider and uses Prisma ORM to deal with the sqlite database , the session and users accounts are stored in a database and makes it easy to end user's session and it's more secure , to learn more about JWT VS Session Based Authentication [click here ](https://medium.com/@sherryhsu/session-vs-token-based-authentication-11a6c5ac45e4)

## ScreenShots
login page:
![](public/screenshots/login.png)



github authentication page:
![](public/screenshots/githublogin.png)

Authenticated User page:
![](public/screenshots/authenticated.png)

Session token sent back from the server to the browser at the request header and stored in the cookie:
![](public/screenshots/cockie.png)

the session is saved on the database and you can terminate it (delete it) and once the user sign out the session get deleted and no one can reUse it:
![](public/screenshots/savedsession.png)
## Getting Started

First, run 

```bash
npm install # to install all dependencies including nextAuth
```


then, rename 

```bash
.env.local.example
# to
.env.local
```
then create a github app from your account to get GITHUB_ID and GITHUB_SECRET and replace the variables with yours

then, run the development server:

```bash
npm run dev
# or
yarn dev
```

you can also visualize databases tables with built in prisma tool called prisma studio : 

```bash
npx prisma studio
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
and [http://localhost:5555](http://localhost:5555) to see prisma studio results

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

Authentication can be modified on `/pages/api/auth/[...nextauth].js` file to add more providers besideGITHUB provider ,  TWITTER provider .... or customise your own setting by adding [options](https://next-auth.js.org/configuration/options)

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Learn More next-auth

To learn more about next-auth.js, take a look at the following resources:

- [Next-Auth Documentation](https://next-auth.js.org/getting-started/introduction) - learn about next-auth.js features
- [Learn Next-Auth.js](https://next-auth.js.org/tutorials) - Next-Auth.js tutorial.

You can check out [the Next-Auth.js GitHub repository](https://github.com/nextauthjs/next-auth) - your feedback and contributions are welcome!


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
