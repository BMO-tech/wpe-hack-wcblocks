import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'wcb-hero',
  styleUrl: 'wcb-hero.css',
  shadow: true,
})
export class WcbHero {
  @Prop() heading: string;
  @Prop() ctaText: string;
  @Prop() backgroundUrl: string;

  render() {
    return (
      <Host>
        <div style={{ backgroundImage:"url('" + this.backgroundUrl + "')" }}>
          <h1>{this.heading}</h1>
          <p>Hello World</p>
          <p>{this.ctaText}</p>
        </div>
      </Host>
    );
  }
}
