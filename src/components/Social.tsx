import React, { MouseEventHandler } from "react";

interface SocialProperties {
  Name: string;
  Link: string;
}

const SocialClick: MouseEventHandler<HTMLDivElement> = function (event) {
  const Link = event.currentTarget.getAttribute("social-link")!;
  window.open(Link);
};

export default class Social extends React.Component<SocialProperties> {
  public render() {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <div
          social-link={this.props.Link}
          className={
            "social-" + this.props.Name.toLowerCase().replace(/[ ]/g, "-")
          }
          onClick={SocialClick}
        >
          <div className="icon"></div>
          <span className="footer">{this.props.Name}</span>
        </div>
      </React.Suspense>
    );
  }
}
