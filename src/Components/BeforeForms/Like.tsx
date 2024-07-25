import { useState } from "react";
import { FcLike, FcDislike } from "react-icons/fc";

interface Props {
  liked?: boolean;
  onClick: () => void;
}

const Like = ({ onClick, liked }: Props) => {
  const [status, setStatus] = useState(liked);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <FcLike size={30} onClick={toggle} />;
  return <FcDislike size={30} onClick={toggle} />;
};

export default Like;
