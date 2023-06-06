interface ListItemProps {
  title: string;
  value: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({ title, value }) => {
  return (
    <div className="flex flex-row items-center gap-4 px-0 py-1 tablet:px-4">
      <dt className="w-24 text-sm font-medium text-neutral-900">{title}</dt>
      <dd className="text-sm text-neutral-700">{value}</dd>
    </div>
  );
};
