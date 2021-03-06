import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { ItemPropTypes } from '../lib/propTypes';

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${({ theme }) => theme.bs};

  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

const SingleItem = props => {
  const {
    item: { id, price, title, description, largeImage },
  } = props;
  return (
    <SingleItemStyles>
      <Head>
        <title>Stuff! - {title}</title>
      </Head>
      <img src={largeImage} alt={`Product showing ${title}`} />
      <div className="details">
        <h2>
          {title} - {price} - {id}
        </h2>
        <h3>{description}</h3>
      </div>
    </SingleItemStyles>
  );
};

SingleItem.propTypes = {
  item: ItemPropTypes.isRequired,
};

export default SingleItem;
