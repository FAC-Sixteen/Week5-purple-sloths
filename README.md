[![Build Status](https://travis-ci.org/FAC-Sixteen/Week5-purple-sloths.svg?branch=master)](https://travis-ci.org/FAC-Sixteen/Week5-purple-sloths)



This repo contains our team project for Week 5 of Founders and Coders. 

NewsRus is a website that enables users to quickly search the guardian website and return a filtered list of Guardian news articles.

A cool feature - hit search and see what  article pops up 

This project is hosted live on : [HEROKU](https://calm-fjord-11755.herokuapp.com/) 

---

### The Team

James @jameslevine

Freddie @fweddie

Dylan @dalmano

Kate @dubhcait

---

### The Project


We used https://open-platform.theguardian.com/ API. It was an easy API to use, one signing up you were given access to a API key.

We started by creating a map of our ideas.


![](https://i.imgur.com/KK1P3Ou.jpg)


Then we mapped out the flow of data in our app to make sure everyone in the team understood how the front and back-end were linked.

![](https://i.imgur.com/SAOAWXO.jpg)



And we also mapped out our file architecture before we typed a line of code!

![](https://media.giphy.com/media/SuEFqeWxlLcvm/giphy.gif)

![](https://i.imgur.com/B0bAiCM.jpg)



---

### Cool Apis we found

Eventful API http://api.eventful.com/
TFL https://api.tfl.gov.uk/
Tickmaster API https://developer.ticketmaster.com/products-and-docs/apis/getting-started/
Openweather https://openweathermap.org/api
OP Geolocation https://ipgeolocation.io/
Pinterest https://developers.pinterest.com/docs/getting-started/introduction/

---

### How to set up our project

1. git clone `https://github.com/FAC-Sixteen/Week5-purple-sloths.git` 
2. cd in
3. `npm i`
4. `npm start` to run the project on port 4000
5. `npm run devStart` to run a live server using nodemon on port 4000
6. `npm test` for tests

![set up](https://media.giphy.com/media/l2JdWEuuIygXKPZFS/giphy.gif)

You can also run the project live on Heroku [here](https://calm-fjord-11755.herokuapp.com/) 

---

### What did we struggle with?

![](https://media.giphy.com/media/Ni4cpi0uUkd6U/giphy.gif)

- Using the request npm module in the back-end.
- Calling our environment variables in the back-end. We had to use npm package `dotenv`.
- Using fetch to make an Api from the front end.

---

### Cool things we learnt?

Kate - How to use request and fetch.
Freddie - How data flows from front-end to back-end and back again.
Dylan - Connecting the front-end to back-end and also the npm path module.
James - Learning how to test (with supertest and tape).

---

### Time-Splitting

**Day 1** :+1: 

Worked as a four and hot-seated swapping the laptops and committing frequently.
We set up a basic front-end, listed the project on Heroku and set up the file structure and basic back-end.

**Day 2** :+1::+1: 

Built rest of back end and then connected frontend to backend.
We also populated the front-end with the returned Guardian data from the API requests.

**Day 3** :+1::+1::+1:
Based on issues, we:


---

### What did we learn?

* The hot seat did seem to help our productivity
* naming is abstraction, naming your functions is understanding them.
* What/ when to modularise. Breaking things up (too much) can spread you too thin.

![what did we learn](https://media.giphy.com/media/pfAKetMYidBjq/giphy.gif)

---

### Stretch goals

* word cloud Api to display all the words from each article in a word cloud.
* twitter api displaying the news feed of the requested search

---

### Preview
![](https://i.imgur.com/3mZbOQQ.png)

---

![the end](https://media.giphy.com/media/3o7qDEq2bMbcbPRQ2c/giphy.gif)
