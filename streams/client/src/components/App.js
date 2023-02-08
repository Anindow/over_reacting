import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import Header from "./Header";

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/Streams/new" exact component={StreamCreate} />
          <Route path="/Streams/edit" exact component={StreamEdit} />
          <Route path="/Streams/delete" exact component={StreamDelete} />
          <Route path="/Streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
