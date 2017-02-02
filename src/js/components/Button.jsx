import React from 'react';
import '../../scss/components/Button.scss';


export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.data = this.props.data;
    this.state.type = this.props.type;
    this.state.style = this.props.style;
    this.state.loading = this.props.loading || false;
    this.state.fail = this.props.fail || false;
    this.state.disabled = this.props.disabled || false;
    this.state.resetState = this.resetState;
    this.state.setFail = this.setFail;
  }

  componentDidMount() {
    this.props.lift(this);
  }

  setLoading() {
    this.setState({loading: true, fail: false, disabled: true});
  }

  setFail() {
    this.setState({loading: false, fail: true, disabled: false});
  }

  resetState() {
    this.setState({loading: false, fail: false, disabled: false});
  }

  componentWillUpdate(nextProp, nextState) {
    if(this.props.disabledActions && nextState.loading) this.props.disabledActions(this);
    if(this.props.enableActions && nextState.loading === false && this.state.disabled === true) this.props.enableActions(this);
  }

  render() {
    let style = this.state.style+" "+(this.state.fail ? "btn-fail":"")+" "+(this.state.loading ? "btn-loader":"");
    return (
      <div>
        <button className={"btn "+style} disabled={this.state.disabled} type={this.state.type} onClick={this.props.onClick.bind(this)}>
          <div className={"container-loader "+(this.state.fail ? "show": "hide")}>
             <i className="material-icons fail">&#xE14C;</i>
             <span className="fail-label">Ocurrio un error</span>
             <small>Haz click para interntar de nuevo.</small>
          </div>

          <div className={"container-loader "+(this.state.loading ? "show": "hide")}>
            <img src="/img/loader.gif" alt="loading"/>
          </div>
          <div className={(this.state.loading || this.state.fail) ? "hide" : "show"}>
            <span>{this.state.data}</span>
            <i className={"material-icons "+(this.state.style === "btn-confirm" ? "show": "hide") }>&#xE86C;</i>
            <i className={"material-icons "+(this.state.style === "btn-cancel" ? "show": "hide") }>&#xE888;</i>
            <i className={"material-icons "+(this.state.style === "btn-loadmore" ? "show": "hide") }>&#xE8FA;</i>
          </div>
        </button>
      </div>
    )
  }

};
