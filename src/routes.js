import React from "react";
import { Switch, Route } from "react-router-dom";
import displayhoc from "./Components/HOC/displayhoc";
import Presentational from "./Components/Presentational/Presentational";
import DisplayRender from "./Components/RenderProps/DisplayRender";
import RenderProps from "./Components/RenderProps/RenderProps";

export default (
  <Switch>
    <Route exact path="/" component={Presentational} />
    <Route path="/hoc" component={displayhoc} />
    <Route
      path="/render-props"
      render={() => {
        return (
          <RenderProps
            url="/api/products"
            getDemProducts={data => {
              return <DisplayRender data={data} />;
            }}
          />
        );
      }}
    />
  </Switch>
);
