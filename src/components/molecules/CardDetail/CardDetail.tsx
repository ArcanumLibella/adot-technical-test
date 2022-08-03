import { Text } from "../../atoms/Text";

export type CardDetailProps = {
  label: "Habitants" | "Hôtels" | "Revenu moy" | "km2";
  data: string;
};

const handleSuffixe = (
  label: CardDetailProps["label"],
  data: CardDetailProps["data"],
) => {
  const suffixe = "";
  switch (label) {
    case "Revenu moy":
      return `${data} €`;
      break;
    case "km2":
      return `${data} km2`;
      break;
    default:
      return `${data}`;
      break;
  }
  return suffixe;
};

export const CardDetail = ({ label, data }: CardDetailProps) => {
  return (
    <span className="flex flex-col items-center justify-center">
      <Text type="bodyRegularTextBold">{handleSuffixe(label, data)}</Text>
      <Text type="bodyRegularText" className="normal-case mt-2">
        {label}
      </Text>
    </span>
  );
};
