FROM node:16-bullseye-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG REACT_APP_API_URL=http://localhost:3000
ARG REACT_APP_API_TIMEOUT_MS=20000
ARG REACT_APP_HELP_URL=http://localhost:3001

ENV REACT_APP_API_URL=$REACT_APP_API_URL
ENV REACT_APP_API_TIMEOUT_MS=$REACT_APP_API_TIMEOUT_MS
ENV REACT_APP_HELP_URL=$REACT_APP_HELP_URL

RUN npx react-scripts build

FROM nginx:1.29-alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]