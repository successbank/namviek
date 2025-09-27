FROM node:18-alpine

# Install dependencies for build
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies (skip optional dependencies)
RUN yarn install --frozen-lockfile --ignore-optional

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Start development server
CMD ["yarn", "dev"]