import React from "react";

// Styles
import "../public/socials.scss";
import "../public/home.scss";

// Components
import SocialCard from "../components/Social";

interface HomeState {
  headerText: string;
}

export default class Home extends React.Component<{}, HomeState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      headerText: "",
    };
  }

  public render() {
    return (
      <>
        <div
          className="header"
          dangerouslySetInnerHTML={{ __html: this.state.headerText }}
        ></div>
        <div className="header sub">Socials</div>
        <ol id="socials">
          <SocialCard Name="tiktok" Link="" />
          <SocialCard Name="discord" Link="" />
          <SocialCard Name="roblox" Link="" />
        </ol>
      </>
    );
  }

  public componentDidMount() {
    const WebsiteHeaders = [
      "My Site",
      "Cool Site",
      "This site is in the thick of it",
      "Everybody knows",
      "So sgiam😝",
      "O'Gabriel, now dawns thy reckoning. And thy gore shall &GLISTEN!&",
      "Before the temples of Man.",
      "Creature, of steel. My graditude upon thee for my freedom.",
      "But the crimes, thy kind have commited against humanity.",
      "Are &NOT& forgotten. And thy punishment.",
      "&IS DEATH&",
      "Machine, I will cut you down, break you apart.",
      "Splay the &GORE& OF YOUR PROFANE FORM &ACROSS THE STARS&!",
      "I WILL &GRIND& YOU DOWN TIL THE VERY &SPARKS CRY FOR MERCY&!",
      "MY HANDS SHALL &RELISH ENDING YOU&, HERE AND &NOW&!",
    ];
    const RandomHeader =
      WebsiteHeaders[Math.floor(Math.random() * WebsiteHeaders.length)];

    let Bolded = false;
    for (let i = 0; i < RandomHeader.length; i++) {
      setTimeout(() => {
        const Char = RandomHeader[i];
        if (Char == "&") {
          if (Bolded) {
            Bolded = false;
          } else {
            Bolded = true;
          }
          return;
        }

        const NextChar = RandomHeader[i + 1];
        this.setState({
          headerText:
            this.state.headerText +
            ((i == 0 && Char == "&" && Bolded) || (NextChar == "&" && !Bolded)
              ? '<span style="font-size: 25px;">' + Char
              : (i == 0 && Char == "&" && Bolded) || (NextChar == "&" && Bolded)
              ? Char + "</span>"
              : Char),
        });
      }, 100 * (1 - Math.min(RandomHeader.length, 100) / 100) * i);
    }
  }
}
