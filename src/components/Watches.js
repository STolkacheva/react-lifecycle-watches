import React from "react";
import InputForm from "./InputForm.js";
import WatchList from "./WatchList.js";
import { useState } from "react";
import uuid from "react-uuid";

const FirstInit = {
  id: "",
  title: "",
  timezone: "",
};

export default function Watches() {
  const [watch, setWatch] = useState(FirstInit);
  const [watchList, setWatchList] = useState([]);

  const addWatch = (watch) => {
    setWatchList((prev) => [
      ...prev,
      {
        id: uuid(),
        title: watch.title,
        timezone: watch.timezone,
      },
    ]);

    setWatch(FirstInit);
  };

  const changeWatch = (target) => {
    setWatch((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const deleteWatch = (watchId) => {
    setWatchList(watchList.filter((item) => item.id !== watchId));
  };

  return (
    <React.Fragment>
      <InputForm watch={watch} onAdd={addWatch} onChange={changeWatch} />
      <WatchList list={watchList} onRemove={deleteWatch} />
    </React.Fragment>
  );
}
