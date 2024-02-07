# fastify_2vite

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2024/02/03 

 update  : 2024/02/06

***
### Summary

fastify SSR + React SPA sample

* vercel deploy sample

***
### react-build

```
npx esbuild --bundle ./src/client.tsx --format=esm --minify --outfile=./public/static/client.js

# watch-mode
npx esbuild --bundle ./src/client.tsx --format=esm --minify --outfile=./public/static/client.js --watch
```

* dev-start
```
yarn dev
```

* build
```
yarn build
```
***
### Setup

* .env , sample
* external API Server
```
VITE_API_URL=http://localhost
```

***
### tailwindcss

```
npx tailwindcss -i ./src/main.css -o ./public/static/main.css

# wacth-mode
npx tailwindcss -i ./src/main.css -o ./public/static/main.css --watch
```

***
### blog 

https://zenn.dev/knaka0209/scraps/460f4db1607b94

***

