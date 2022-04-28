import styled from "styled-components";
import { compose, color, space, variant } from "styled-system";

export default styled.div(compose(color, space, variant({ scale: "typography" })));
