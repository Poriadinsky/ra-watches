import moment from "moment";
import { useEffect, useState } from "react";

export type TListItem = {
  id: string;
  title: string;
  timeZone: string;
};

interface ListItemProps {
  item: TListItem;
  onClick: any;
}

export const ListItem = ({ item, onClick }: ListItemProps) => {
  const { id, title, timeZone } = item;
  const deg = 6;

  const [time, setTime] = useState(
    moment().utcOffset(Number.parseInt(timeZone)).format("LTS")
  );

  let arrOfTime = time.split(":");

  let hh = Number(arrOfTime[0]) * 30;
  let mm = Number(arrOfTime[1]) * deg;
  let ss = Number(arrOfTime[2]) * deg;

  useEffect(() => {
    const timerID = setTimeout(() => {
      setTime(moment().utcOffset(Number.parseInt(timeZone)).format("LTS"));
    }, 1000);
    return () => {
      clearTimeout(timerID);
    };
  });

  return (
    <div className="clock" key={id}>
      <div className="clock-title">{title}</div>
      <div className="hour">
        <div
          className="hr"
          id="hr"
          style={{
            transform: `rotateZ(${hh + mm / 12}deg)`,
          }}
        ></div>
      </div>
      <div className="min">
        <div
          className="mn"
          id="mn"
          style={{
            transform: `rotateZ(${mm}deg)`,
          }}
        ></div>
      </div>
      <div className="sec">
        <div
          className="sc"
          id="sc"
          style={{
            transform: `rotateZ(${ss}deg)`,
          }}
        ></div>
      </div>
      <button onClick={() => onClick(item.id)} className="clock-delete">
        &#x2715;
      </button>
    </div>
  );
};
