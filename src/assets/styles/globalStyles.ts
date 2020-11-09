import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

export default createGlobalStyle`
  body {
    ${tw`m-0 text-gray-200 bg-gray-900`};
  }

  a {
    ${tw`text-gray-300 hover:text-gray-400`};
  }

  p + p {
    ${tw`mt-3`};
  }
`;
