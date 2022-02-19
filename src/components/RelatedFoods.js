import { Col, Row } from "react-bootstrap"

export default function RelatedFood (props) {

    return <Row className='relatedFoods'>
    {/* <div > */}
        <Col md={3}>
                <img src={props.relatedFoods[0].pictures[0]} alt={props.relatedFoods[0].name} className='relatedPic'/>
                <br></br>
                <div class='relatedCaption'>
                <h6 style={{float: 'left'}}>{props.relatedFoods[0].name}</h6>
                <h6 style={{float: 'right'}}>₱{props.relatedFoods[0].price}</h6>
                </div>
            </Col>
            <Col md={3}>
                <img src={props.relatedFoods[1].pictures[0]} alt={props.relatedFoods[1].name} className='relatedPic'/>
                <br></br>
                <div class='relatedCaption'>
                <h6 style={{float: 'left'}}>{props.relatedFoods[1].name}</h6>
                <h6 style={{float: 'right'}}>₱{props.relatedFoods[1].price}</h6>
                </div>
            </Col>
            <Col md={3}>
                <img src={props.relatedFoods[2].pictures[0]} alt={props.relatedFoods[2].name} className='relatedPic'/>
                <br></br>
                <div class='relatedCaption'>
                <h6 style={{float: 'left'}}>{props.relatedFoods[2].name}</h6>
                <h6 style={{float: 'right'}}>₱{props.relatedFoods[2].price}</h6>
                </div>
            </Col>
            <Col md={3}>
                <img src={props.relatedFoods[3].pictures[0]} alt={props.relatedFoods[3].name} className='relatedPic'/>
                <br></br>
                <div class='relatedCaption'>
                <h6 style={{float: 'left'}}>{props.relatedFoods[3].name}</h6>
                <h6 style={{float: 'right'}}>₱{props.relatedFoods[3].price}</h6>
                </div>
            </Col>
            {/* </div> */}
        </Row>
}