import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import Clock from "./Clock";

export default function WatchList({ list, onRemove }) {
  if (list.length == 0) return null;

  const onRemoveItem = (id) => {
    onRemove(id);
  };

  console.log(list);
  return list.map((o) => (
    <div className="watch_list" key={uuid()}>
      <Clock
        id={o.id}
        title={o.title}
        utc={o.timezone}
        handleRemove={onRemoveItem}
      />
    </div>
  ));
}

WatchList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  onRemove: PropTypes.func.isRequired,
};
