FROM node:20.18.0-alpine

ARG NEXT_PUBLIC_WS_URL=ws://127.0.0.1:3001
ARG NEXT_PUBLIC_API_URL=http://127.0.0.1:3001/api
ENV NEXT_PUBLIC_WS_URL=${NEXT_PUBLIC_WS_URL}
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

WORKDIR /home/chatbot

COPY ui /home/chatbot/

RUN yarn install --frozen-lockfile
RUN yarn build

CMD ["yarn", "start"]