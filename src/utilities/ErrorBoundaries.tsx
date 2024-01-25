/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO ErrorBoundaries proviene de React 16 y se hace con Clases

import React from "react";

interface Props {
  children: React.ReactNode;
  fallbackComponent: React.ReactNode;
  resetCondition?: any,
  error?: boolean
}

interface State {
  hasError: boolean,
  resetCondition?: any
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    // * Cuando extendemos de otra clase por medio de herencia, automaticamente hay qe llamar al constructor de la clase padre
    super(props);
    this.state = {
      hasError: false,
      resetCondition: props.resetCondition
    };
  }

  static getDerivedStateFromError(error: Error) {
    console.log("Error", error);
    return { hasError: true };  // * Si algun componente dentro del boundaries muere por problema de state, retorna un error
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.resetCondition !== state.resetCondition) { // * Si el resetCondition cambia, se resetea el estado e intenta renderizar de nuevo
      return {
        hasError: false,
        resetCondition: props.resetCondition
      }
    }
    return null;
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo);
    return { hasError: true }
  }

  render() {
    if (this.state.hasError || this.props.error) {
      return this.props.fallbackComponent;
    }
    return this.props.children;
  }
}