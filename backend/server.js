import express from 'express';

const app  = express();

const PORT = process.env.PORT || 8000;

// app.get("/", (req, res)=> {
//     res.send("Server is ready");
// });

app.get("/api/jokes", (req, res)=> {
    const jokes = [
        {
          id: 1,
          title: "Why don't skeletons fight?",
          content: "Because they don’t have the guts!"
        },
        {
          id: 2,
          title: "Why did the scarecrow win an award?",
          content: "Because he was outstanding in his field!"
        },
        {
          id: 3,
          title: "What do you call fake spaghetti?",
          content: "An impasta!"
        },
        {
          id: 4,
          title: "Why can’t you hear a pterodactyl in the bathroom?",
          content: "Because the 'P' is silent!"
        },
        {
          id: 5,
          title: "What’s orange and sounds like a parrot?",
          content: "A carrot!"
        }
      ];
      
      res.send(jokes);
});

app.listen(PORT, ()=> console.log(`Server started at PORT ${PORT}`));