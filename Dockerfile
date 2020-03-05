FROM mhart/alpine-node:12.16.1 AS builder
WORKDIR /app
COPY . .
RUN npm install react-scripts -g
RUN npm install
RUN react-scripts build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "8080", "-s", "."]
