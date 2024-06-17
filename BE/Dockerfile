# Sử dụng một image node:20.11.0-alpine làm base
FROM node:20.11.0-alpine

# Tạo thư mục /home/app trong container
RUN mkdir -p /home/app

# Thiết lập thư mục làm việc mặc định trong container
WORKDIR /home/app

# Cài đặt Python và các phụ thuộc cần thiết
RUN apk update && \
    apk add --no-cache python3 make g++

# Sao chép tất cả các tệp từ thư mục local (host) vào thư mục /home/app trong container
COPY . /home/app

# Cài đặt các phụ thuộc và thực thi các lệnh npm
RUN npm install && \
    npm audit fix && \
    chmod +x /home/app/node_modules/.bin/nodemon

# Expose port 3000 để có thể truy cập từ bên ngoài
EXPOSE 3000

# Lệnh thực thi khi container được chạy
CMD [ "npm", "start" ]
