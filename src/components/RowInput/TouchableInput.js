import React from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, StyleSheet } from "react-native";
import { Base, Text, ArrowRightIcon } from "../index";

/**
 * An input row that is typically used when you want to allow
 * the user to select a value from another ListView. In essence,
 * this is very similar to a standard TouchableRow. In the future,
 * we may consider combining the two.
 *
 */

const TouchableInput = ({
  label,
  icon,
  showMore,
  backgroundColor,
  labelColor,
  value,
  condensed,
  onPress,
  disabled,
  ...other
}) => {
  const height = condensed ? 40 : 50;

  return (
    <Base
      Component={TouchableHighlight}
      disabled={disabled}
      backgroundColor={backgroundColor}
      underlayColor="darken"
      baseStyle={[styles.container, { height }]}
      onPress={onPress}
      {...other}
    >
      <View style={styles.innerContainer}>
        {icon}
        {typeof label === "string" ? (
          <Text small={condensed} color={labelColor}>
            {label}
          </Text>
        ) : (
          label
        )}

        <Base flex={1} row justify="flex-end">
          {value &&
            (typeof value === "string" ? (
              <Text textAlign="right" light>
                {value}
              </Text>
            ) : (
              value
            ))}
        </Base>

        {showMore && (
          <Base ml={1}>
            <ArrowRightIcon />
          </Base>
        )}
      </View>
    </Base>
  );
};

TouchableInput.displayName = "TouchableInput";

TouchableInput.propTypes = {
  labelColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  icon: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  showMore: PropTypes.bool,
  condensed: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

TouchableInput.defaultProps = {
  labelColor: "default",
  backgroundColor: "white",
  showMore: false,
  disabled: false
};

export default TouchableInput;

const styles = StyleSheet.create({
  innerContainer: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1
  },
  container: {
    height: 60,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "center"
  }
});
