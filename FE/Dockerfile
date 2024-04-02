
FROM node:20.11.0-alpine  as build
# Tạo thư mục /home/app trong container
RUN mkdir -p /home/appfe

# Thiết lập thư mục làm việc mặc định trong container
WORKDIR /home/appfe

# Sao chép tất cả các tệp từ thư mục local (host) vào thư mục /home/app trong container
COPY . /home/appfe

# Cài đặt các phụ thuộc và thực thi các lệnh npm
RUN npm install && \
    npm audit fix 

# Đưa các file dependences vao` container
COPY package.json /home/appfe//package.json
COPY package-lock.json /home/appfe//package-lock.json

#build Fe prepare for nginx 
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.24.0-alpine-slim
# ENV NODE_ENV production

# Copy built assets from builder
COPY --from=build /home/appfe/dist /usr/share/nginx/html

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

