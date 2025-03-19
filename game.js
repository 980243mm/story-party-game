const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('有玩家進來了！');

  socket.on('startGame', () => {
    console.log('遊戲開始');
    io.emit('gameStarted', '遊戲已經開始，請輪流講故事！');
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`伺服器正在運行，端口：${port}`);
});
