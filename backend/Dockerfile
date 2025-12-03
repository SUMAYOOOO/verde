FROM node:20-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build || true
EXPOSE 3001
CMD ["npm", "run", "start:dev"]
