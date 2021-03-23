private initialize(): void {
   this.app = express();
   this.httpServer = createServer(this.app);
   this.io = socketIO(this.httpServer);
 
   this.configureApp();
   this.handleSocketConnection();
 }
