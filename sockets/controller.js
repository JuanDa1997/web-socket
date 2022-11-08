const socketController = (socket) => {
  socket.on("disconnect", () => {
    console.log("Cliente desconectado", socket.id);
  });

  //se envía la menor cantidad de datos posibles - primitivos
  socket.on("enviar-mensaje", (payload, callback) => {
    const id = 123456;
    callback(id);

    socket.broadcast.emit("enviar-mensaje", payload);
  });
};

module.exports = { socketController };
