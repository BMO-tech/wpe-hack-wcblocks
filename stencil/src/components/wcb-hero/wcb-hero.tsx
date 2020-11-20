import { Component, Host, Listen, State, h, Prop } from '@stencil/core';

@Component({
  tag: 'wcb-hero',
  styleUrl: 'wcb-hero.css',
  shadow: true,
})
export class WcbHero {
  @Prop() heading: string;
  @Prop() ctaText: string;
  @Prop() middleText: string;
  @Prop() backgroundUrl1: string;
  @Prop() backgroundUrl2: string;
  @State() currentImg: string;
  @State() open: boolean;

  @Listen('click', { capture: true })
  handleClick() {
    this.open = !this.open;
  }

  img: string[];

  changeBanner(){
    if ( this.currentImg === this.img[0] ){
      this.currentImg = this.img[1];
      return;
    }
    if ( this.currentImg === this.img[1] ){
      this.currentImg = this.img[0];
      return;
    }
    return;
  }

  render() {
    this.img = [ this.backgroundUrl1, this.backgroundUrl2 ];

    if ( this.currentImg === undefined ){
      this.currentImg = this.img[0];
    }

    this.changeBanner();

    return (
      <Host>
        <div class="hero-container" style={{ backgroundImage:"url('" + this.currentImg + "')" }}>
          <div class="hero-row"><h1>{this.heading}</h1></div>
          <div class="hero-row"><h3>{this.middleText}</h3></div>
          <div class="hero-row"><p>{this.ctaText}</p></div>
          <button>
            {this.open ? "change" : "change"}
          </button>;
        </div>
      </Host>
    );
  }
}
