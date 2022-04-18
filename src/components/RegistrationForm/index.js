import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    showfirstnameErrormsg: false,
    showlastnameErrormsg: false,
    isSubmittedForm: false,
  }

  onChangeUserName = event => {
    this.setState({firstname: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastname: event.target.value})
  }

  renderFirstNameField = eventHandler => {
    const {firstname} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          FIRSTNAME
        </label>
        <input
          onBlur={eventHandler}
          type="text"
          value={firstname}
          id="firstname"
          className="input-text"
          placeholder="First name"
          onChange={this.onChangeUserName}
        />
      </>
    )
  }

  renderLastNameField = eventHandler => {
    const {lastname} = this.state
    return (
      <>
        <label className="input-label" htmlFor="lastname">
          LASTNAME
        </label>
        <input
          onBlur={eventHandler}
          type="text"
          value={lastname}
          id="lastname"
          className="input-text"
          placeholder="Last name"
          onChange={this.onChangeLastName}
        />
      </>
    )
  }

  render() {
    return (
      <>
        <div className="app-register">
          <h1 className="heading"> Registration</h1>
          <form className="regiterform-container" onSubmit={this.onSubmitForm}>
            <div className="registration-firstname-container">
              {this.renderFirstNameField()}
            </div>
            <div className="registration-lastname-container">
              {this.renderLastNameField()}
            </div>
            <button type="button" className="button">
              Submit
            </button>
          </form>
        </div>
      </>
    )
  }
}
export default RegistrationForm
