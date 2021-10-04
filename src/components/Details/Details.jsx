import React from "react";
import { useQueryParam, NumberParam, StringParam } from 'use-query-params';

const Details = () => {

  const [id, setId] = useQueryParam('id', NumberParam);
  const [name, setName] = useQueryParam('name', StringParam);
  const [image, setUrl] = useQueryParam('image', StringParam);
  const [type, setType] = useQueryParam('typeone', StringParam);

  return <div>{id} <br />{name} <br />{image} <br />{type}</div>;
};

export default Details;
