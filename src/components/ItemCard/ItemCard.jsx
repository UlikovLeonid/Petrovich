import React from "react";
import { Icon, Image, Card } from "semantic-ui-react";
import s from "./ItemCard.module.sass";
const ItemCard = ({
  code,
  title,
  assocProducts,
  priceGold,
  priceRetail,
  priceGoldAlt,
  primaryImageUrl,
  isActive
}) => (
  <Card>
    <div className={s.top}>
      <div className={s.code}>
        Артикул:<a href="/"> {Math.abs(code)}</a>
      </div>

      <a href="/" className={isActive ? "active" : "none"}>
        {isActive ? "В наличии" : "Нет в наличии"}
      </a>
    </div>

    <Image src={primaryImageUrl} />
    <Card.Content>
      <Card.Header>
        <a className={s.link} href="/">
          {title}
        </a>
      </Card.Header>

      <Card.Description className={s.assoc}>
        <strong> Могут понадобиться: </strong>
        {assocProducts.split(";").map(elem => (
          <a href="/">{elem}</a>
        ))}
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
        <b>Можно купить за: {priceGoldAlt.toFixed(2)} балла</b>
      </div>
    </Card.Content>
  </Card>
);
export default ItemCard;
