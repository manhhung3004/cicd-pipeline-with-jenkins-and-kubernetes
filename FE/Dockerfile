# syntax=docker/dockerfile:1.4
FROM node:20.11.0-alpine
# Tạo thư mục /home/app trong container
RUN mkdir -p /home/appfe

# Thiết lập thư mục làm việc mặc định trong container
WORKDIR /home/appfe

# Cài đặt Python và các phụ thuộc cần thiết
RUN apk add --no-cache python3 make g++

# Cài đặt các phụ thuộc và thực thi các lệnh npm
RUN npm install && \
    npm audit fix && \
    chmod +x /home/appfe/node_modules/.bin/nodemonCOPY . /code

# Đưa các file dependences vao` container
COPY package.json /home/appfe//package.json
COPY package-lock.json /home/appfe//package-lock.json

# Di chuyển tất cả vào lại app
COPY . /home/appfe//

#build Fe prepare for nginx 
RUN npm run build


# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
# ENV NODE_ENV production

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

