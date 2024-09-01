import Image from "next/image";

interface SvgProps {
  path: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
}

export const Svg: React.FC<SvgProps> = ({
  path,
  alt = "icon",
  width = 20,
  height = 20,
  className,
}) => {
  return (
    <Image
      src={path}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};
