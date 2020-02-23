import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const ItemCard = ({
  code,
  title,
  description,
  assocProducts,
  priceGold,
  priceRetail,
  primaryImageUrl
}) => (
  <Card>
    <Image src={primaryImageUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="rub" />
        {priceGold}
      </a>
    </Card.Content>
  </Card>
);
export default ItemCard;
