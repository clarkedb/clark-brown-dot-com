import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Container } from '../../components/ui/Container/styles';

export const Header = styled.header`
  ${tw`bg-blue-900 shadow-md -mb-px`};
`;

export const Wrapper = styled(Container)`
  ${tw`items-center`};
`;
