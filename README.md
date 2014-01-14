## Massively Multiplayer Online Pokemon Card Game on NodeJS/WebSockets

![Character Selection](https://f.cloud.github.com/assets/25766/1915943/cf2ec006-7d6f-11e3-8065-c0021f5ed496.png)

![Node-Pokemon Prototype Board](https://f.cloud.github.com/assets/25766/1915938/b5b133f2-7d6f-11e3-8f37-3926a1bb3860.png)


Web applications have evolved by utilizing push technologies. If you're building anything where users need to interact with other users to create a competitive environment, this queue system is just for you. The importance of queue'ing systems is to help users find other players to play with. Here's some basic code to get you set up, the rest is up to your imagination.

[Video Demonstration](http://youtu.be/Kcsjb1Isweo?hd=1)

[My Blog Post](http://jbueza.blogspot.com/2010/09/nodejs-hack-session-mmo-pokemon-with.html)

Hopefully, this proof of concept will inspire other developers who want to shape the open Web into a more engaging experience (easy to build real-time web applications) on top of a broad subset of consumer technologies (iPad, iPhone, Droids, Nokias, Samsung Galaxy, Chrome, Safari, Firefox, IE, etc).

### Technologies Used

#### Backend

* [NodeJS](http://www.nodejs.org)
* WebSockets (iPad, iPhone, Chrome, Safari) via Socket.IO
* No database -- this is only a front-end implementation of card game, originally using CouchDB for prototyping purposes but being phased out

#### Frontend

* SASS with SCSS, [OOCSS](http://wiki.github.com/stubbornella/oocss/)
* [HTML5 Boilerplate](http://github.com/paulirish/html5-boilerplate)
* CSS3 for drop shadows, transparencies, rounded corners, and animations (card flipping)!
* [Blast Mojo Framework](http://www.blastmojo.com) -- Javascript MVC (Current, looking to transition to React by Facebook)


### NodeJS Packages
                    
* npm install
* node app.js

### MIT License

Copyright (c) 2010 Jaime Bueza

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
