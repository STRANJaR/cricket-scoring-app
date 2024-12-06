import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log('User connected', socket.id)
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});



// import express from 'express'
// import { createServer } from 'http'
// import next from 'next'
// import { Server } from 'socket.io'

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });

// const handle = app.getRequestHandler()

// app.prepare().then(()=> {
//     const expressServer = express()
//     const httpServer = createServer(expressServer);
//     const io = new Server(httpServer, {
//         cors: {
//             origin: '*',
//             methods: ['GET', 'POST']
//         }
//     })


//     // handle client connection..
//     io.on('connection', (socket)=> {
//         console.log(`A user is connected: `, socket.id);

//         // handler for score update 
//         socket.on('scoreUpdate', (data)=> {
//             console.log('Score update received: ', data);

//             // broadcast the updated score to all clients 
//             io.emit('scoreUpdate', data);
//         });
//     });


//     expressServer.all('*', (req, res)=> {
//         return handle(req, res);
//     })

//     const PORT = process.env.PORT || 3000;
//     httpServer.listen(PORT, (err)=> {
//         if(err) throw err;

//         console.log(`Server Ready on: ${PORT}`)
//     })

// });

