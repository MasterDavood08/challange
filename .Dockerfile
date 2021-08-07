FROM 14-alpine3.12
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY packege*.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "npm" , "start" ]
