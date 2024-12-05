import React, { useState, useEffect } from "react";
import axios from "axios";

const GoodsSearch = () => {
  const [goods, setGoods] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query) {
      axios.get(`/api/goods/?search=${query}`).then((response) => {
        setGoods(response.data);
      });
    }
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search goods..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {goods.map((good) => (
          <div key={good.id}>
            <h3>{good.name}</h3>
            <p>{good.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoodsSearch;
