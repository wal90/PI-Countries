import React from "react";
import s from "./loading.module.css"

class Loading extends React.Component {
  
    render() {
      return (
        <div className={s.loader}>
            <span></span>
        </div>
      )
    }
  }
  
  export default Loading;