FROM qpotos/basenode

ADD package.json /tmp/package.json

RUN npm install -g nodemon; \
		cd /tmp; \
		npm install; \
		mkdir -p /src; \
		cp -a /tmp/node_modules /src/

WORKDIR /src
ADD . /src

EXPOSE 8080

CMD ["nodemon", "/src/index.js"]
