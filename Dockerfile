FROM node:13.10.1-slim AS builder
WORKDIR /app
RUN npm install react-scripts -g && npm install
COPY . .
RUN react-scripts build

FROM node:13.10.1-slim
WORKDIR /app
RUN npm install serve -g
COPY --from=builder /app/build .
CMD ["serve", "-p", "8080", "-s", "."]
