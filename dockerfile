FROM node:boron

MAINTAINER John Spiteri &lt;john@johnspiteri.io&gt;

RUN mkdir -p /api
RUN mkdir -p /client
RUN mkdir -p /model
RUN mkdir -p /node_modules

WORKDIR /

COPY api /api
COPY client /client
COPY model /model
COPY node_modules /node_modules
COPY package.json /package.json
COPY package-lock.json /package-lock.json
COPY server.js /server.js

# Set the running environment as production
ENV NODE_ENV production

# Expose on specified network port
EXPOSE 8080

# Executing defaults
CMD ["npm", "start"]
