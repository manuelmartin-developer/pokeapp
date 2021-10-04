import React from "react";
import { useQueryParam, StringParam } from 'use-query-params';

const Details = () => {

  // const [id] = useQueryParam('id', NumberParam);
  const [name] = useQueryParam('name', StringParam);
  const [image] = useQueryParam('image', StringParam);
  const [type] = useQueryParam('typeone', StringParam);

  return (
  <section className="details">
    <article className="details-title">
    <p className="details-title-title">{name}</p>
    <p className="details-title-type">{type}</p>
    </article>
    <article className="details-image">
      <img src={image} alt={name} />
    </article>
  </section>
  );
};

export default Details;
