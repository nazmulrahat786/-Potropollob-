import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";
import PropTypes from "prop-types";

const AnimatedNumber = ({ number }) => {
  const [props, api] = useSpring(() => ({
    from: { val: 0 },
    config: { tension: 80, friction: 20 },
  }));

  useEffect(() => {
    api.start({ val: number });
  }, [number, api]);

  return (
    <animated.span>
      {/* eslint-disable-next-line react/prop-types */}
            {props.val.to((val) => Math.floor(val))}
    </animated.span>
  );
};

AnimatedNumber.propTypes = {
  number: PropTypes.number.isRequired,
};

export default AnimatedNumber;
