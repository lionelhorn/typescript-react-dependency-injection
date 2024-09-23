import {Component, ErrorInfo} from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false , error: null, errorInfo: null};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({ hasError: true, errorInfo, error });
  }

  render() {
    if (this.state.hasError) {
      return <div className={"hasErrors"}>
        Errored: {this.state.error?.message}
        <pre>{this.state.error?.stack}</pre>
      </div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;