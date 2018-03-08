const React = require('react');
const path = require('path');

module.exports = function InjectChildComponent(WrappedComponent, components = [], superProps) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    importHot() {
      return components.map(component => {
        //if (cache === false) 
        delete require.cache[require.resolve(`${component}`)];
        return require(`${component}`);
      })
    }

    mapToProps(list) {
      let result = {};
      let copy = components.slice();
      for (let i = 0; i < copy.length; i++) {
        let key = path.basename(copy[i]).replace(/.js|.jsx/g, '');
        result[key] = list[i];
      }
      return result;
    }

    render() {
      const props = this.mapToProps(this.importHot());     
      return <WrappedComponent { ...props } {...superProps} { ...this.props } />
    }
  }
}