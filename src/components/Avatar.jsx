import { Box, Image, Tooltip } from "@chakra-ui/react";
import { botttsNeutral } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const Avatar = ({
  name,
  selected,
  onClick,
  shouldHover = true,
  shouldTap = true,
  borderRadius = 15,
  showTooltip = true,
}) => {
  console.log(borderRadius);
  const avatar = createAvatar(botttsNeutral, {
    seed: name,
  }).toDataUri();

  return (
    <MotionBox
      animate={{
        scale: selected ? 1.15 : 1,
        boxShadow: selected ? "0px 0px 13px  rgba(255, 255, 255, 0.8)" : "none",
      }}
      whileTap={shouldTap ? { scale: 0.9 } : {}}
      whileHover={shouldHover ? { scale: 1.05 } : {}}
      transition={{ duration: 0.2 }}
      onClick={() => {
        console.log("Avatar clicked");
        onClick && onClick();
      }}
      width="100%"
      height="100%"
      padding={0}
      m={0}
      borderRadius={borderRadius}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Tooltip
        label={name}
        hasArrow
        arrowSize={15}
        closeDelay={100}
        isDisabled={!showTooltip}
      >
        <Image
          src={avatar}
          alt="Avatar"
          width="100%"
          height="100%"
          borderRadius={borderRadius}
          display="block"
        />
      </Tooltip>
    </MotionBox>
  );
};
