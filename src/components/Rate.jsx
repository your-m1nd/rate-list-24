import React from "react";
import '../components/Rate.css';

class Rate extends React.Component {
    static defaultProps = {
        name: 'Тариф'
    }

    constructor(props) {
        super(props);
        this.state = {
            pressed: false,
            pressedStyle: '',
        };
    };

    handleChange = () => {
        this.setState(
            {pressed: !this.state.pressed,
            pressedStyle: 'orange',
            }
        );

    }

    render() {
        const {name, url, speed, traffic} = this.props;
        const style = {backgroundColor: this.state.pressedStyle};
        return (
        <section className={"rate"} onClick={this.handleChange} style={style}>
        <h2 className="rate-name">{name}</h2>
        <img className="rate-price" src={url} alt={name}></img>
        <p className="rate-speed">{speed}</p>
        <p className="rate-traffic">{traffic}</p>
        <p className="rate-choose">{this.state.pressed ? "Тариф выбран" : "Тариф не выбран"}</p>
        </section>
        );
    }
}

export default Rate;