import React from "react";

//array quotes and authors
const quotes = [
    {
        author: "George Bernard Shaw",
        quote: "The power of accurate observation is often called cynicism by those who have not got it."
    },
    {
        author: "Russ Cox",
        quote: "It’s possible that I understand better what’s going on, or it’s equally possible that I just think I do."
    },
    {
        author: "Friedrich Nietzsche",
        quote: "A thinker sees his own actions as experiments and questions as attempts to find out something. Success and failure are for him answers above all."
    },
    {
        author: "Jean Giraudoux",
        quote: "Only the mediocre are always at their best."
    },    
];


/*array background colors*/
const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857"
  ];



class QuoteBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            indexQuote: 0,
            color1: "#0275d8",
            color2: "#FFFFFF"
        }
        this.handleClick = this.handleClick.bind(this);

    }
    //method for changing quote randomly
    handleClick() {
        this.setState(
            {
                indexQuote:  Math.floor(Math.random() * quotes.length),
                color1:colors[Math.floor(Math.random() * colors.length)],
                color2: this.state.color2
            }
        );
    }

    
        
    render() {
        return (
            <div 
            id="quote-box"
            style= {{backgroundColor: this.state.color2}}>
                <h2 id="text"
                    style={{color: this.state.color1}}>
                        {quotes[this.state.indexQuote].quote}
                </h2>
                <p id="author"
                   style={{color: this.state.color1}}>
                    {quotes[this.state.indexQuote].author}
                </p>
                <div className="flexContainer">
                    <button style={{backgroundColor: this.state.color1}}>
                        <a 
                        id="tweet-quote"
                        href="twitter.com/intent/tweet"
                        target="_top"
                        style={{color: this.state.color2}}>
                            tweet me
                        </a>
                        
                    </button>    
                    <button 
                        id="new-quote"
                        onClick={this.handleClick}
                        style={{backgroundColor: this.state.color1, color: this.state.color2}}>
                        New Quote!
                    </button>
                </div>
            </div>
        )
    }
}

export default QuoteBox;
