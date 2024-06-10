import React from "react";
import "./App.css";
import "./Chatbot.css"; // Import the Chatbot.css file

// import Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Component
import Header from "./component/Header";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

// import Pages
import Home from "./Pages/Home";
import ReactHooks from "./Pages/ReactHooks";
import UiUx from "./Pages/UiUx";
import FormExample from "./Pages/FormExample";

// import Chatbot components and config from the chatbot folder
import { Chatbot } from "react-chatbot-kit";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/react-hooks" component={ReactHooks} />
            <Route exact path="/ui-ux" component={UiUx} />
            <Route exact path="/form-example" component={FormExample} />
          </Switch>
        </ScrollToTop>
        <Footer />
        <div className="chatbot-wrapper">
  <Chatbot
    avatarStyle={{ width: '50px', height: '50px', borderRadius: '50%' }} // Adjust size and border-radius as needed
    avatarSrc="https://www.bing.com/images/search?view=detailV2&ccid=mamzviGS&id=402C927946F1E4610853A876ACB3EC79EDD16D7B&thid=OIP.mamzviGSCYcq42adHIJgIAHaHa&mediaurl=https%3a%2f%2fstatic.vecteezy.com%2fsystem%2fresources%2fpreviews%2f010%2f054%2f157%2foriginal%2fchat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-illustration-ai-technology-futuristic-helper-communication-conversation-concept-in-flat-style-vector.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.99a9b3be219209872ae3669d1c826020%3frik%3de23R7Xnss6x2qA%26pid%3dImgRaw%26r%3d0&exph=1920&expw=1920&q=chatbot+avatar&simid=608042356290189952&FORM=IRPRST&ck=D1344B551A23716780A6C2ED89650503&selectedIndex=0&itb=0&ajaxhist=0&ajaxserp=0" // Replace with the URL of your avatar image
    className="react-chatbot-kit-chat-container"
    headerClassName="react-chatbot-kit-chat-header"
    messageClassName="react-chatbot-kit-user-chat-message-container"
    userAvatarClassName="react-chatbot-kit-user-avatar-container"
    userMessageClassName="react-chatbot-kit-user-chat-message"
    inputContainerClassName="react-chatbot-kit-chat-input-container"
    inputFieldClassName="react-chatbot-kit-chat-input"
    config={config}
    actionProvider={ActionProvider}
    messageParser={MessageParser}
  />
</div>



      </Router>
    </React.StrictMode>
  );
}

export default App;
