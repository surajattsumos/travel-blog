FROM node:18

WORKDIR /app

COPY package.json .
COPY scripts ./scripts

RUN chmod +x ./scripts/init.sh
RUN npm install

COPY . .

CMD ["./scripts/init.sh"]