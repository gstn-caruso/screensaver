FROM node:13.10.1-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install react-scripts -g && npm install
COPY . .
ARG REACT_APP_WAPI_KEY
RUN react-scripts build

FROM nginx:alpine
WORKDIR /app
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
