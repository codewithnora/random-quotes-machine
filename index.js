'use strict';

class MyApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          quote: '',
          author:'',
          randomIndex:Math.floor(Math.random() *5)
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeOfColor = this.changeOfColor.bind(this);
    }
    
      handleSubmit() {
          this.setState({
            quote: '',
            author:'',
            randomIndex: Math.floor(Math.random() *5)
          });
          this.changeOfColor();
      }
      
      //change of colors
      changeOfColor(){
          const colors = ['#08a4bd', '#fcb07e', '#ef5d60', '#6a8d73', '#efb0a1']; //array of styles
          const color = colors[Math.floor(Math.random() * colors.length)]; //random color
          document.body.style.color = color;
          document.body.style.backgroundColor = color; //body
         
          //changing background-color
          let elementsToChangeBgColor = document.getElementsByClassName("changing-bg-color");
          Array.from(elementsToChangeBgColor).forEach((item) => {
            item.style.backgroundColor = color; 
            });
          //changing color of text
          let elementsToChangeTxtColor = document.getElementsByClassName("changing-txt-color");
          Array.from(elementsToChangeTxtColor).forEach((item) => {
            item.style.color = color;
            });
      }
          
    render(){
      
      //array of quotes
      const quotes = [
        [
          'Lorem ipsum dolor sit amet\, consectetur adipiscing elit\. Sed nonrisus\. Suspendisse lectus tortor\, dignissim sit amet\, adipiscing nec\,ultricies sed\, dolor\.',
          'Lorem Ipsum'
        ],
        [
          'Lorem ipsum dolor sit amet\, consectetur adipiscing elit\. Sed nonrisus\.',
          'Ipsum Lorem'
        ],
        [
          'Lorem ipsum dolor sit amet\, consectetur adipiscing elit\. Sed nonrisus\. Suspendisse lectus tortor\, dignissim sit amet\, adipiscing nec\,ultricies sed\, dolor\.',
          'Lorem Ipsum'
        ],
        [
          'Lorem ipsum dolor sit amet\, consectetur adipiscing elit\.',
          'Ipsum Lorem'
        ],
        [
          'Lorem ipsum dolor sit amet\, consectetur adipiscing elit\. Sed nonrisus\. Suspendisse lectus tortor\, dignissim sit amet\, adipiscing nec\,ultricies sed\, dolor\. Suspendisse lectus tortor\, dignissim sit amet\, adipiscing nec\,ultricies sed\, dolor\.',
          'Lorem Ipsum'
        ]
      ];
      
      const randomQuote = quotes[this.state.randomIndex];
        return (
            <div id="quote-box" className="mx-auto d-flex flex-column col-sm-10 col-md-6 col-lg-4 white-bg">
              <blockquote className="blockquote text-center blue-txt">
                <p id="text" className="mb-0 changing-txt-color">{randomQuote[0]}</p>
                <footer id="author" className="blockquote-footer blue-txt changing-txt-color">{randomQuote[1]}</footer>
              </blockquote>
              <div id="clicking-elements" className="d-flex flex-row justify-content-around align-items-center">
                 <ul className="list-inline align-items-center">
                    <li className="list-inline-item"><a id="tweet-quote" className="white-txt blue-bg changing-bg-color social-img" href="https://www.twitter.com/intent/tweet" target="_blank"><i className="fab fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a className="white-txt blue-bg changing-bg-color social-img" href="https://www.tumblr.com" target="_blank" ><i className="fab fa-tumblr"></i></a></li>
                  </ul>
                <button id="new-quote" className="btn align-items-center white-txt blue-bg changing-bg-color" onClick={this.handleSubmit}>New Quote</button>
              </div>
            </div>
        );
    }   
}

// ========================================

ReactDOM.render(<MyApp />,document.getElementById('root'));