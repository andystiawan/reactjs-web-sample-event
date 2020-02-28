import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

const noPadding = {
  padding: '2%',
  margin: '0px'
}



const highlightContainerText = {
  color: '#008C9C',
  fontSize: '27px',
  textAlign: 'center',
  border: 'solid #008C9C 0.5px',
  marginLeft: '40%',
  marginRight:'40%'

}

class HighlightHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataApi: [
        {
          id:'1',
          image: require('./../../assets/img/Gbr1.png'),
        },
        {
          id:'2',
          image: require('./../../assets/img/Gbr2.png'),
        },
        {
          id:'3',
          image: require('./../../assets/img/Gbr3.png'),
        },
        {
          id:'4',
          image: require('./../../assets/img/Gbr4.png'),
        },
        {
          id:'5',
          image: require('./../../assets/img/Gbr1.png'),
        },
        {
          id:'6',
          image: require('./../../assets/img/Gbr2.png'),
        },
        {
          id:'7',
          image: require('./../../assets/img/Gbr3.png'),
        },
        {
          id:'8',
          image: require('./../../assets/img/Gbr4.png'),
        },

      ]
    }

  }

  render() {
    return(
      <div align="center">

          <p style={highlightContainerText}> Highlight </p>

        <div>
          <Row style={noPadding}>
          {this.state.dataApi.map((item, key) =>
          <Col style={{paddingTop:'1px'}}  xs={12} md={4} xl={3} key={item.id}>
            <div  className='eventContent' align='center'>
                <a href="/highlight"> <img alt=' ' style={{width: '100%', aspectRatio: '1'}} src={[item.image]} /></a>
            </div>
          </Col>
            )}

          </Row>
        </div>
      </div>
    );
  }
}

export default HighlightHome;
