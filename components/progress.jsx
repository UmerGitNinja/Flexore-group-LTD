import { Progress } from "@nextui-org/react";

export default function ProgressBar({ label, value }) {
  return (
    <Progress
      size="sm"
      radius="sm"
      color="success"
      classNames={{
        base: "max-w-md mb-2",
    
        indicator: "bg-gradient-to-r from-[#6FEE8D] to-[#17c964]",
        label: "tracking-wider font-medium text-white text-lg",
        value: "text-green-500",
      }}
      label={label}
      value={value}
      showValueLabel={true}
    />
  );
}
