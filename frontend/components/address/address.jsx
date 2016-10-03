import React from 'react';

// Components

class Address extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '62 Farragut Ave. Piedmont, CA'
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(event) {
    this.setState({address: event.target.value});
  }

  handleSubmit() {
    this.props.requestAddress(this.state.address);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text'
                 placeholder='Enter Address...'
                 value={this.state.address}
                 onChange={this.update} />
        </form>
      </div>
    );
  }
}

export default Address;
