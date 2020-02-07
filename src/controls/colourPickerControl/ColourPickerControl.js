import React from "react";
import styled from "styled-components";
import { GithubPicker } from "react-color";
import ExternalLink from "../../components/externalLink";

const ColourPickerControl = ({
  colour,
  label,
  link,
  onChange,
  disabled,
  palette
}) => {
  const hasLink = link && link.length > 0;
  return (
    <div>
      <SliderLabel disabled={disabled}>
        <span>{`${label} R:${colour.r}, G:${colour.g}, B:${colour.b} `}</span>
        {hasLink && (
          <StyledExternalLink to={link} showExternalLinkIcon={true}>
            Ref
          </StyledExternalLink>
        )}
      </SliderLabel>
      <GithubPicker
        triangle={"hide"}
        colors={palette}
        color={colour}
        // onSwatchHover={(colour, event) => onChange(colour.rgb)}
        onChange={(colour, event) => onChange(colour.rgb)}
      />
    </div>
  );
};

export default ColourPickerControl;

const SliderLabel = styled.div`
  width: 100%;
  font-size: 12px;
  min-height: 22px;
  color: rgba(255, 255, 255, 0.5);
  display: inline-flex;
  justify-content: space-between;
`;

const StyledExternalLink = styled(ExternalLink)`
  color: white;
  text-decoration: none;
  font-size: 12px;
`;
