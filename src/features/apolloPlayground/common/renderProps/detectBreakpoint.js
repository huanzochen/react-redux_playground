import { Component } from "react";
import PropTypes from "prop-types";
import { debounce, toSafeInteger, last, isArray, toPairs } from "lodash";
import {
  bindAllValue,
  getWindowObject,
  getViewport,
} from "../../utils/common/base";

function getBreakpoint(width, breakpoints) {
  if (breakpoints.length === 0) {
    return null;
  }

  return (
    breakpoints
      .sort((b1, b2) => b1.value - b2.value)
      .find((breakpoint) => width <= breakpoint.value) || last(breakpoints)
  );
}

function normalizeBreakpoints(breakpoints) {
  if (!isArray(breakpoints)) {
    return toPairs(breakpoints).map(([symbol, value]) => ({ symbol, value }));
  }

  return breakpoints;
}

class DetectBreakPoint extends Component {
  handleWindowResize = debounce(() => {
    this.updateBreakpoint();
  }, this.props.debounceTime);

  static propTypes = {
    children: PropTypes.func.isRequired,
    breakpoints: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.shape({
          symbol: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired,
        })
      ),
      PropTypes.objectOf(PropTypes.number),
    ]),
    debounceTime: PropTypes.number,
  };

  static defaultProps = {
    breakpoints: [
      { symbol: "xs", value: 320 },
      { symbol: "sm", value: 639 },
      { symbol: "md", value: 991 },
      { symbol: "lg", value: 1199 },
      { symbol: "xl", value: toSafeInteger(Number.MAX_VALUE) },
    ],
    debounceTime: 200,
  };

  constructor(props) {
    super(props);

    bindAllValue(this, [
      "getRenderProps",
      "getNormalizedBreakpoints",
      "getDefaultBreakpoint",
      "getCurrentBreakpoint",
      "updateBreakpoint",
      "handleWindowResize",
    ]);

    this.state = {
      breakpoint: this.getDefaultBreakpoint(),
    };
  }

  componentDidMount() {
    getWindowObject().addEventListener("resize", this.handleWindowResize);

    // set initial breakpoint
    // eslint-disable-next-line react/no-did-mount-set-state
    this.updateBreakpoint();
  }

  componentWillUnmount() {
    getWindowObject().removeEventListener("resize", this.handleWindowResize);
  }

  getRenderProps() {
    return {
      ...this.state,
    };
  }

  getNormalizedBreakpoints() {
    return normalizeBreakpoints(this.props.breakpoints);
  }

  getDefaultBreakpoint() {
    return (
      last(this.getNormalizedBreakpoints()) || { symbol: undefined, value: 0 }
    );
  }

  getCurrentBreakpoint() {
    const { width } = getViewport();
    return (
      getBreakpoint(width, this.getNormalizedBreakpoints()) ||
      this.getDefaultBreakpoint()
    );
  }

  updateBreakpoint() {
    this.setState({
      breakpoint: this.getCurrentBreakpoint(),
    });
  }

  render() {
    return this.props.children(this.getRenderProps());
  }
}

export default DetectBreakPoint;
