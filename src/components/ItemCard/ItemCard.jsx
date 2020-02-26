import React from "react";
import { Icon, Image, Card } from "semantic-ui-react";
import s from "./ItemCard.module.scss";
const ItemCard = ({
  code,
  title,
  assocProducts,
  priceGold,
  priceRetail,
  priceRetailAlt,
  primaryImageUrl
}) => (
  <Card>
    <Card.Meta>
      <span className="date">Код: {Math.abs(code)}</span>
    </Card.Meta>
    <Image src={primaryImageUrl} />
    <Card.Content>
      <Card.Header>
        <a className={s.link} href="/">
          {title}
        </a>
      </Card.Header>

      <Card.Description>
        <strong>Могут понадобиться: </strong>
        {assocProducts}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className={s.price}>
        По карте клуба:&nbsp;
        <b className={s.clubcard}>
          {priceGold}
          <Icon name="rub" />
        </b>
      </div>

      <div className={s.common}>
        {priceRetail}
        <Icon name="rub" />
      </div>
      <div className={s.points}>
        <b>Можно купить за : {priceRetailAlt.toFixed(2)} балла</b>
      </div>
    </Card.Content>
  </Card>
);
export default ItemCard;
