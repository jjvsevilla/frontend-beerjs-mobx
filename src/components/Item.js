import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// import CSSTransitionGroup from 'react-addons-css-transition-group';
// import './Item.css';

const Card = styled.figure`
  display: inline-block;
  width: 100%;
  margin: 0 0 2rem 0;
  padding: 0;
  border: 1px solid #d3d3d3;
  background: #fff;
  box-shadow: 0 0 0 5px rgba(0,0,0,0.03);
`;

const ImageWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
  }
`;

const CardCaption = styled.figcaption`
  margin: 0 2rem 2rem;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardButton = styled.button`
  border: 2px solid #f2f2f2;
  background: none;
  flex-basis: 48%;
  display: inline-block;
  line-height: 2;
  text-decoration: none;
  padding: 5px;
  text-align: center;
  color: #125688;
  transition: all 0.2s;
  box-sizing: border-box;

  &.likes {
    cursor: pointer;
  }
`;

const CardLink = CardButton.withComponent(Link);


class Item extends Component {
  onLikeBeer = () => {
    this.props.chela.increase();
  }

  render () {
    const { chela, comments } = this.props;
    return (
      <Card>
        <ImageWrapper>
          <Link to={`/view/${chela.id}`}>
            <img src={chela.image} alt={chela.name} />
          </Link>
        </ImageWrapper>
        <CardCaption>
          <p>{chela.name}</p>
          <CardActions>
            <CardButton onClick={this.onLikeBeer}>
              <span role="img" aria-label="beer">🍺 {chela.likes}</span>
            </CardButton>
            <CardLink to={`/view/${chela.id}`}>
              <span role="img" aria-label="comments">💬 {comments.total}</span>
            </CardLink>
          </CardActions>
        </CardCaption>
      </Card>
    )
  }
}

export default observer(Item);