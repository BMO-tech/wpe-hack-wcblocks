import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'wcb-hero',
  styleUrl: 'wcb-hero.css',
  shadow: true,
})
export class WcbHero {
  @Prop() heading: string;
  @Prop() ctaText: string;

  render() {
    return (
      <Host>
        <h1>{this.heading}</h1>
        <p>Hello World</p>
        <p>{this.ctaText}</p>
      </Host>
    );
  }
}
