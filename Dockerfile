# base image
FROM node:12.13.1

# set working directory
ADD ./ /


RUN npm install


# start app
CMD ["npm", "start"]
