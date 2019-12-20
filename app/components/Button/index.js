/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Button = styled.button`
  display: ${props => props.display || "flex"};
  flex-direction: ${props => props.flexDirection || "row"};
  justify-content: ${props => props.justifyContent || "space-between"};
  align-content: ${props => props.alignContent || "center"}; 
  align-items: ${props => props.alignItems || "center"};
  width: ${props => props.width || "100%"};
  height: ${props => props.height || null};
  background-color: ${props => props.backgroundColor || "transparent"};
  border-style: ${props => props.borderStyle || "solid"};
  border-width: ${props => props.borderWidth || "0px"};
  border-radius: ${props => props.borderRadius || "0"};
  border-color: ${props => props.borderColor || "transparent"};
  padding: ${props => props.padding || "0 0 0 0"};
  margin: ${props => props.margin || "0 0 0 0"};
    &:hover{
      //
    }
      
  `;



Button.propTypes = {};

