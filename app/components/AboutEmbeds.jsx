import React from 'react';
import Card from './Card';
import Youtube from './Youtube';

const AboutEmbeds = () => (
  <section className="stripe">
    <Card plain
      className="col--one-third text--center back--white">
        <Youtube videoid="MGuKhcnrqGA" />
    </Card>
    <Card plain className="col--half text--center">
      <h1>Embed React Components</h1>
      <p className="subtext">
        This custom component demonstrates media
        embed within custom React component.
      </p>
    </Card>
  </section>
);

export default AboutEmbeds;