import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/SlideIndex";
//import Main from "./pages/Mainindex";

class Routes extends React.Component {
    render() {
        return (
           
            <Switch>
                <Route exact path="/" component={HomePage} />
                {/* <Route exact path="/main" component={Main} /> */}

                <Route
                    render={function () {
                        return <h1>Not Found</h1>;
                    }}
                />
            </Switch>

        )
    }
}

export default Routes;