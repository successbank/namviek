FROM node:18-alpine

# Install dependencies
RUN apk add --no-cache libc6-compat openssl

WORKDIR /app

# Copy application code
COPY . .

# Install dependencies
RUN yarn install

# Expose port
EXPOSE 4200

# Set environment to use WASM build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_SWC_BUILD_WASM=true

# Start development server
CMD ["yarn", "frontend"]