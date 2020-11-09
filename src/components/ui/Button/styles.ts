import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';

export interface StyledProps {
  primary?: boolean;
  block?: boolean;
}

export const Button = motion.custom(styled.button<StyledProps>`
  outline: none !important;
  ${tw`py-2 px-8 rounded shadow text-white`};

  ${({ primary }) => (primary ? tw`bg-blue-500` : tw`text-blue-600`)};

  ${({ block }) => block && tw`w-full`};
`);
