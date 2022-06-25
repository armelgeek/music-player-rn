import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Screen = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  align-items: center;

  background-color: ${colors['Beau Blue']};

  padding: 24px;
`;

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;