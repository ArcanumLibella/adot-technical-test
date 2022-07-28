import { Text } from "../../atoms/Text";

export type CardDetailProps = {
  label: "Habitants" | "Hôtels" | "Revenu moy" | "km2";
  data: string;
};

export const CardDetail = ({ label, data }: CardDetailProps) => {
  return (
    <span className="flex flex-col items-center justify-center">
      <Text type="bodyRegularTextBold">{data}</Text>
      <Text type="bodyRegularText" className="normal-case mt-2">
        {label}
      </Text>
    </span>
  );
};
