const React = require('react');
const ReactDOM = require('react-dom');
const { connect } = require('react-redux');
const InjectChildComponent = require('./Inject.js');

@connect(store => {
  let { list, close, open, type } = store.PopUps;
  //console.log('store ', store);
  return { list, close, open }
})
class PopUp extends React.Component {
  constructor(props) {
    super(props);
  }

  loadingTemplate() {
    return (
      <span>
        <img src={'/assets/images/spin.gif'} />
      </span>
    )
  }

  onOpen(e) {
    console.log(e, 'open')
    this.props.dispatch({type: 'OPEN'});    
    this.refs.popupMask.setState({show: true});
    console.log("ENTRA OPEN")
  }

  onClose(e) {
    this.props.dispatch({type: 'CLOSE'});
    this.refs.popupMask.setState({show: false});
    console.log("Cierra")
  }

  onCloseAll(e) {
    console.log("Close all")
    //this.props.dispatch('CLOSE_ALL');
  }

  componentDidMount() {
    const onBrowser = typeof window !== 'undefined';
    if (onBrowser && this.refs.popup) {
    let eventClose = new Event('close');
      let eventCloseAll = new Event('closeAll');
      let eventOpen = new Event('open');
      const elem = ReactDOM.findDOMNode(this.refs.popup);
      elem.addEventListener('open', this.onOpen.bind(this));
      elem.addEventListener('close', this.onClose.bind(this));
      elem.addEventListener('closeAll', this.onCloseAll.bind(this));    
      if(this.props.close) return elem.dispatchEvent(eventClose);        
      if(this.props.open) return elem.dispatchEvent(eventOpen);
    }
  }

  componentWillReceiveProps(nextProps) {
    //console.log('nextProps ', nextProps);    
    let { close, open, dispatch } = this.props;
   // if(nextProps.hasOwnProperty('close') && nextProps.close) dispatch({type: 'CLOSE'});
    //if(nextProps.hasOwnProperty('open') && nextProps.open) dispatch({type: 'OPEN'});
  }

  render() {
    let { type, close, open, Mask } = this.props;
    let template = this.loadingTemplate();
    return (
      <Mask
        ref='popupMask'
        data={
          <div className={`popup-wrapper ${type}`} ref='popup'> {template} </div>
        }
      />
    )
  }
}

module.exports = InjectChildComponent(PopUp, ['./Mask.js']);