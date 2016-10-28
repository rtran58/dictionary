import React, { PropTypes, Component } from 'react';
import World from './World';
import Card from './Card';
import Button from './Button';
import ButtonDemo from './ButtonDemo';
import Input from './Input';
import InputField from './InputField';
import InputLabel from './InputLabel';

export default class Home extends Component {
  render() {
    return(
      <section>
        <section className="landing">
          <nav className="nav">
            <a className="nav__brand" 
              href="/">
                ReactSpeed
            </a>
            <a className="nav__link"
              href="https://leanpub.com/reactspeedcoding">
                Book
            </a>
            <a className="nav__link"
              href="https://github.com/manavsehgal/react-speed-book">
                Code
            </a>
            <a className="nav__link"
              href="https://manavsehgal.github.io/react-speed-demos">
                Demos
            </a>
            <a className="nav__link" 
              href="https://reactspeed.com">
                Website
            </a>
          </nav>
        </section>
        <section className="stripe back--default">
          <Card plain className="col--half text--center">
            <h1>Custom React Component</h1>
            <p className="subtext">
              This custom component demonstrates props, state,
              and ES6 classes.
            </p>
          </Card>
          <Card className="col--one-third text--center back--white">
            <World />
          </Card>
        </section>
        <section className="stripe">
          <Card className="col--one-third text--center">
            <p>Click does not do much...</p>
            <Button label="Default" color="default" />
            <Button label="Primary" color="primary" />
            <Button label="Secondary" color="secondary" />
            <Button label="Warning" color="warning" />
            <Button label="Success" color="success" />
            <Button label="Danger" color="danger" />
          </Card>
          <Card className="text--center">
            <ButtonDemo
              colors={['Secondary', 'Success', 'Danger', 'Warning']}
              sizes={['large', 'medium', 'medium', 'small']}
              icons={['coffee', 'cloud', 'flash', 'plugin']}
              iconsOnly
            />
          </Card>
        </section>
        <section className="stripe back--default">
          <Card plain className="col--one-third text--center">
            <h1>Beautiful Responsive Forms</h1>
            <p className="subtext">
              Create beautiful forms using several variations
              of input controls and buttons.
            </p>
          </Card>
          <Card className="col--quarter back--white">
            <Input>
              <InputLabel label="Name" icon="user" />
              <InputField placeholder="Placeholder for name" />
            </Input>
            <Input>
              <InputLabel label="Street" />
              <InputField placeholder="Enter street address" />
            </Input>
            <Input>
              <InputField placeholder="Just a field" />
            </Input>
          </Card>
          <Card className="back--white">
            <Input>
              <InputField />
              <Button color="success" icon="search" />
            </Input>
            <Input>
              <Button color="primary" icon="cloud" label="Connect" />
              <InputField placeholder="Enter server address" />
            </Input>
            <Input>
              <InputLabel icon="envelope" />
              <InputField placeholder="Send a note" />
              <Button color="warning" label="Send" />
            </Input>
          </Card>
        </section>
        <section className="stripe--slim back--gray">
          <Card plain className="col--full text--center white">
            <p>
              Copyright (c) 2016, Manav Sehgal.
              All rights reserved.
            </p>
          </Card>
        </section>
      </section>  
    );
  }
}