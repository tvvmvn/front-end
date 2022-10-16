import React from "react";
import NotFound from "./NotFound";

export default class ErrorBoundary extends React.Component {
  state = { 
    hasError: false, 
    error: null 
  };

  componentDidMount() {
    console.log("err mounted");
  }

  componentDidUpdate() {
    console.log("err updated");
  }
  
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    }
  }

  render() {
    console.log("err rendered");

    if (this.state.hasError) {
      return <h1 className="text-2xl">Something's broken</h1>
    }

    return this.props.children;
  }
}

