import React, { PropTypes, Component } from 'react';
import World from './World';
import Card from './Card';
import Button from './Button';
import ButtonDemo from './ButtonDemo';

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
        <section className="stripe">
          <Card plain className="text--center">
            <a href="https://leanpub.com/reactspeedcoding"
              className="image__link">
              <img width="200" src="img/reactspeed-cover-leanpub.jpg" />
            </a>
          </Card>
          <Card plain className="col--half text--center">
            <h1>Develop Awesome Apps</h1>
            <p className="subtext">
              Join 100s of readers learning
              latest React ES6 concepts.
            </p>
          </Card>
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