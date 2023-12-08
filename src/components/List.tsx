import { ListItem } from "./ListItem";

interface ListProps {
  items: any;
  onClick: any;
}

export const List = ({ items, onClick }: ListProps) => {
  const { id } = items;
  return (
    <ul>
      {items.map((item: any) => (
        <>
          <ListItem item={item} onClick={onClick} key={id} />
        </>
      ))}
    </ul>
  );
};
