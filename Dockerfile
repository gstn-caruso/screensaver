FROM node:13.10.1-slim AS builder
WORKDIR /app
COPY . .
RUN npm install react-scripts -g
RUN npm install
RUN react-scripts build

FROM node:13.10.1-slim
RUN npm install serve -g
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "8080", "-s", "."]
