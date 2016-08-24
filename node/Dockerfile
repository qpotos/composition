FROM qpotos/basenode

RUN npm install -g nodemon

ADD package.json /tmp/package.json
RUN mkdir -p /src

WORKDIR /src
ADD . /src
RUN npm install --save express
RUN npm install --save redis

EXPOSE 8080

CMD ["nodemon", "/src/index.js"]
