import styled from 'styled-components';
import { calculateOrder } from '../helpers/Movements';

const Brick = styled.div`
  flex: 0 0 auto;
  height: 18px;
  width: 18px;
  border-style: solid;
  border-color: ${(props) => (props.brick.isSpectre ? 'none' : 'rgba(255, 255, 255, 0.5)')};
  border-width: 1px;
  order: ${(props) => calculateOrder(props.brick.x, props.brick.y)};
  background-color: ${(props) => (props.isShadow ? 'rgba(255, 255, 255, 0.3)' : props.brick.color)};
  filter: ${(props) => (props.isShadow ? 'grayscale(100%)' : 'none')};
`;

export default Brick;
