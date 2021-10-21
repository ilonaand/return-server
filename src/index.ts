import express from "express";
import environment from "./config/environment";
import router from "./router";

const app = express();
app.use(express.json()); 
app.use('/v1', router)

async function startApp() {
  try {
    app.listen(environment.PORT, () => console.log('SERVER STARTED ON PORT ' + environment.PORT))
  } catch (e) {
      console.log(e)
  }
}

startApp()



