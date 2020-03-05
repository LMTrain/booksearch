import React from 'react'
import { Card, CardHeader, CardBody, CardText, CardTitle} from 'reactstrap';
import NoteModal from './NoteModal';

export default class NoteModalCard extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            isOpen: false
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { bookNote} = this.props;
        const { isOpen } = this.state;
        return (          
            <span onClick={this.handleToggle}>
                <NoteModal toggle={this.handleToggle} bookNote={bookNote} isOpen={isOpen}/>
                <Card className="portfolio-card">
                    <CardHeader className="portfolio-card-header">SCHOOL</CardHeader>
                    <CardBody>
                        <p className="portfolio-card-text"> DATE </p>
                        <CardTitle className="portfolio-card-title">CARD</CardTitle>
                        <CardText className="portfolio-card-text">SCHOOL</CardText>
                        
                    </CardBody>                    
                </Card>
            </span>
        
        )
    }
}