import React from "react";

/*function ContactCard(props) {
    return (
        <div className="contacts">
            <div className="contact-card">
                <img src={props.imgUrl} alt="alternate"/>
                <h3>{props.card.name}</h3>
                <p>{props.card.phone}</p>
                <p>{props.card.email}</p>
            </div>
        </div>
    )
}*/

class ContactCard extends React.Component {
    render() {
        return(
            <div className="contacts">
            <div className="contact-card">
                <img src={this.props.imgUrl} alt="alternate"/>
                <h3>{this.props.card.name}</h3>
                <p>{this.props.card.phone}</p>
                <p>{this.props.card.email}</p>
            </div>
        </div>
        )
    }
}

export default ContactCard;